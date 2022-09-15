import { m } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx"

const HomePage = () => {
  const [post, setPost] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  const onSearchHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearchQuery(lowerCase);
  };

  const filtering = () => {
    return post?.filter((el) => {
      if (searchQuery === "" && category === "") {
        return el;
      }
      if (searchQuery === "" && category === "all") {
        return el;
      }
      if (searchQuery !== "") {
        return el.title.toLowerCase().includes(searchQuery);
      }
      if (category !== undefined) {
        return el.ProductType === category;
      }
    });
  };

  const handleProductType = (e) => {
    setCategory(e.target.value);
    filtering();
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
      title,
      slug,
      reviews,
      pricePerDay,
      ProductType,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, []);
  console.log("showed data", post);
  return (
    <>
      <Header />
      <main>
     
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            
            </div>
            <div className="flex justify-center align-center gap-x-4  pt-10">
              <input
                onChange={onSearchHandler}
                value={searchQuery}
                type="search"
                id="default-search"
                className="block p-4 pl-10  flex   text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"></h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                {/* Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth. */}
              </p>
            </div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Product Type
            </label>
            <select
              onChange={handleProductType}
              id="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="all">
                All
              </option>
              <option value="irrigator">irrigator</option>
              <option value="tilter">tilter</option>
              <option value="plougher">plougher</option>
              <option value="harvester">harvester</option>
            </select>
            <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              {filtering().map((item, index) => (
                <article 
                style={{ marginTop:"10px"}}
                 className="flex justify-center ">
                  <div
                  
                    className="h-full w-full  max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <img
                      className="p-8 rounded-t-lg min-h-330"
                      src={item.mainImage.asset.url}
                      alt={item.mainImage.alt}
                    />

                    <div className="px-5 pb-5">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>

                      <div className="flex items-center mt-2.5 mb-5">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                          {item.reviews && item.reviews[0].rating || "No-rating"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>
                          <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            &#x20b9;{item.pricePerDay}
                          </span>
                          <span className="font-bold">per day</span>
                        </span>
                        <Link
                          to={"/product/" + item.slug.current}
                          key={item.slug.current}
                        >
                          <a
                            href="#"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            See Description
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};
export default HomePage;
