import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import sanityClient from "../../client";
import { useParams } from "react-router-dom";
import imageURLBuilder from "@sanity/image-url";
import Map from "../Map";
import Header from "../Header";
import Footer from "../Footer";
const builder = imageURLBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source).auto("format").fit("max").url();
}
const SingleProduct = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [calValue, setCalValue] = useState();
  const { slug } = useParams();

  const startDateHandler = (date) => {
    setStartDate(date);
  };
  useEffect(() => {
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setCalValue(diffDays);
  }, [startDate, endDate]);

  const endDateHandler = (date) => {
    setEndDate(date);
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        location,
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
      .then((data) => {
        // console.log("slug data", data);
        setProductDetail(data[0]);
      });
    // .catch((error) => console.log("error", error));
  }, [slug]);

  return (
    productDetail && (
      <>
        <Header />
        <section className="bg-white dark:bg-gray-900">
          <div className=" flex justify-center  ">
            <div style={{ width: "20%" }}></div>
            <div style={{ width: "30%" }} className="flex flex-col">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {productDetail?.title}
              </h1>
              <div className="flex ">
                <img
                  className=" rounded-lg"
                  src={urlFor(
                    productDetail &&
                      productDetail?.images &&
                      productDetail?.images[0]?.asset._ref
                  )}
                  alt="office content 1"
                />

                <div className="pl-4">
                  <img
                    className="mt-4 w-full lg:mt-10 rounded-lg"
                    src={urlFor(
                      productDetail &&
                        productDetail?.images &&
                        productDetail?.images[2]?.asset._ref
                    )}
                    alt="office content 2"
                  />
                  <img
                    className="mt-4 w-full lg:mt-10 rounded-lg"
                    src={urlFor(
                      productDetail &&
                        productDetail?.images &&
                        productDetail?.images[1]?.asset._ref
                    )}
                    alt="office content 2"
                  />
                </div>
              </div>
              <div>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                  {productDetail?.description}
                </p>
              </div>
              <Map location={productDetail?.location} />
            </div>
            <div
              style={{ width: "30%", marginLeft: "50px", marginTop: "50px" }}
            >
              <div style={{ gap: "10px" }} className="flex  ">
                {/* <p class="text-sm text-gray-900 dark:text-white">Start</p> */}
                <DatePicker
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(date) => startDateHandler(date)}
                />
                {/* <p class="text-sm text-gray-900 dark:text-white">End</p> */}

                <DatePicker
                  className=" block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  selected={endDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  onChange={(date) => endDateHandler(date)}
                />
              </div>

              <div className="p-6 mt-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Calculations
                </h5>

                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Number of days: {calValue}
                </p>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  <p>Price per Day of Equipment: {productDetail.pricePerDay}</p>
                </p>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  <p>Total Price: {calValue * productDetail.pricePerDay} </p>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  );
};
export default SingleProduct;
