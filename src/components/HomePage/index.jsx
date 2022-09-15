import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import Header from "../Header/index.jsx";

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
      if (searchQuery !== "") {
        return el.title.toLowerCase().includes(searchQuery);
      } if (category !== undefined) {
        return el.ProductType === category
      }


    });
  }

  const handleProductType = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    filtering()
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

  return (
    <>
      <Header />
      <main>
        {/* <section> */}
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              {/* <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg> */}
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
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">

              </h2>
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

              <option value="irrigator">irrigator</option>
              <option value="tilter">tilter</option>
              <option value="plougher">plougher</option>
              <option value="harvester">harvester</option>
            </select>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              {
                filtering().map((item, index) => (
                  <article>
                    <Link
                      to={"/product/" + item.slug.current}
                      key={item.slug.current}
                    >
                      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                          <img
                            className="p-8 rounded-t-lg min-h-330"
                            src={item.mainImage.asset.url}
                            alt={item.mainImage.alt}
                          />
                        </a>

                        <div className="px-5 pb-5">
                          <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                              {item.title}
                            </h5>
                          </a>
                          <div className="flex items-center mt-2.5 mb-5">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                              {item.reviews && item.reviews[0].rating}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>
                              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                &#x20b9;{item.pricePerDay}

                              </span>
                              <span className="font-bold">per day</span>
                            </span>
                            <a
                              href="#"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              See Description
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <span>
            <img src={item.mainImage.asset.url} alt={item.mainImage.alt}/>
            <span>
            <h3>{item.title}</h3>
            </span>
          </span> */}
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </main>

    </>
  );
};
export default HomePage;
