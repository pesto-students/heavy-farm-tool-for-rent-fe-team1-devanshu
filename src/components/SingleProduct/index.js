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
  return (productDetail &&
      <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {/* {productDetail.title} */}
            {productDetail && productDetail.title}
          </h2>
          <p className="mb-4">{productDetail && productDetail.description}</p>
          {/* <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p> */}
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
      </div>
      </section>
    //   <section class="bg-white dark:bg-gray-900">
    //     <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    //       <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
    //         <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
    //           {/* Powering innovation at <span class="font-extrabold">200,000+</span>{" "}
    //           companies worldwide */}
    //           {productDetail && productDetail.title}
    //         </h2>
    //         <p class="mb-4 font-light">
    //           {/* Track work across the enterprise through an open, collaborative
    //           platform. Link issues across Jira and ingest data from other
    //           software development tools, so your IT support and operations teams
    //           have richer contextual information to rapidly respond to requests,
    //           incidents, and changes. */}
    //           {productDetail && productDetail.description}
    //         </p>
    //         <p class="mb-4 font-medium">
    //           {/* Deliver great service experiences fast - without the complexity of
    //           traditional ITSM solutions.Accelerate critical development work,
    //           eliminate toil, and deploy changes with ease. */}
    //         </p>
    //         <a
    //           href="#"
    //           class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
    //         >
    //           {/* Learn more */}
    //           <svg
    //             class="ml-1 w-6 h-6"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
    //               clip-rule="evenodd"
    //             ></path>
    //           </svg>
    //         </a>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-2 gap-4 mt-8">
    //       <img
    //         className="w-full rounded-lg"
    //         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
    //         alt="office content 1"
    //       />
    //       <img
    //         className="mt-4 w-full lg:mt-10 rounded-lg"
    //         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
    //         alt="office content 2"
    //       />
    //     </div>
    //   </section>
  );
};
export default SingleProduct;
