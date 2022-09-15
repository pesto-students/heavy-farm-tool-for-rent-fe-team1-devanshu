import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import { useParams } from "react-router-dom";
import imageURLBuilder from "@sanity/image-url";
import { m } from "framer-motion";

const builder = imageURLBuilder(sanityClient);
function urlFor(source) {
  return builder
    .image(source)
    .auto('format')
    .fit('max')
    .url()
}
const SingleProduct = () => {
  const [productDetail, setProductDetail] = useState(null);
  const { slug } = useParams();
  // productType,
  // images,
  // pricePerDay,
  // engine
  // fuelCapacity
  // reviews
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        reviews,
        ProductType,
        pricePerDay,
        fuelCapacity,
        engine,
        description,
        images,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": author->name,
        "authorImage": author->image 
    }`
      )
      .then((data) =>{
        console.log("slug data",data)
        setProductDetail(data[0])})
      .catch((error) => console.log("error",error));
  }, [slug]);
  console.log("detailed",productDetail)
  return (
    
      <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 flex items-center justify-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          
            {productDetail && productDetail.title}
          </h2>
        
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={
              urlFor(productDetail &&
                productDetail?.images &&
                productDetail?.images[0]?.asset._ref)
            }
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={urlFor(productDetail &&
              productDetail?.images &&
              productDetail?.images[2]?.asset._ref)}
            alt="office content 2"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={urlFor(productDetail &&
              productDetail?.images &&
              productDetail?.images[1]?.asset._ref)}
            alt="office content 2"
          />
        </div>
        <p className="mb-4">{productDetail && productDetail.description}</p>
        <p>PRODUCT TYPE----{productDetail && productDetail.ProductType} </p>   
        <p>engine ---- {productDetail &&productDetail.engine}</p>  
        <p>fuelCapacity ----- {productDetail && productDetail.fuelCapacity}</p>

      </div>
      </section>
     




  );
};
export default SingleProduct;
