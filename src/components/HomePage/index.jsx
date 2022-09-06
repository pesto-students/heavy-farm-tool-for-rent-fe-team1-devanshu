// import { useState } from "react";
// import { useUserAuth } from "../../context/UserAuthContext";
// import { useNavigate } from "react-router";
// import {
//   AspectRatio,
//   Box,
//   Button,
//   HStack,
//   Image,
//   Link,
//   Skeleton,
//   Stack,
//   StackProps,
//   Text,
//   useBreakpointValue,
//   Input,Checkbox ,
//   useColorModeValue,
// } from '@chakra-ui/react'
// const data =
// [

//     {"id":2,
//     "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
//     "name":"Blue Polo",
//     "description":"Polo",
//     "price":350,
//     "stocked":true,

//     "location":"Blue"},
//     {"id":3,
//     "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
//     "name":"Pink Polo",
//     "description":"Polo",
//     "price":350,
//     "stocked":true,

//     "location":"Pink"},
//     {"id":4,
//     "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
//     "name":"Black Hoodie",
//     "description":"Hoodie",
//     "price":500,
//     "stocked":true,

//     "color":"Black",
//     "location":"Men"
//     },
//     {"id":5,"imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
//     "name":"Green Polo",
//     "description":"Polo",
//     "price":250,
//     "stocked":true,

//     "color":"Green",
//     "location":"Men"
//    },
//     {"id":6,
//     "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
//     "name":"Green Polo",
//     "description":"Polo",
//     "price":350,
//     "stocked":false,

//     "color":"Green",
//     "location":"Women"
//     },
//     {"id":7,
//     "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
//     "name":"Blue Hoodie",
//     "description":"Hoodie",
//     "price":500,
//     "stocked":false,

//     "color":"Blue",
//     "location":"Women"
//     },
//     {"id":8,
//     "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
//     "name":"Black Hoodie",
//     "description":"Hoodie",
//     "price":500,
//     "stocked":false,

//     "color":"Black",
//     "location":"Women"
//     },
//     {"id":9,
//     "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
//     "name":"Blue Round",
//     "description":"Basic",
//     "price":300,
//     "stocked":false,

//     "color":"Blue",
//     "location":"Men"
//    },
//     {"id":10,
//     "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
//     "name":"Red Round",
//     "description":"Basic",
//     "price":300,
//     "stocked":false,

//     "color":"Red",
//     "location":"Women"}

//     ]

//     function FilterableProductTable({ products }) {
//       const [filterText, setFilterText] = useState('');
//       const [inStockOnly, setInStockOnly] = useState(false);

//       return (
//         <div>
//           <SearchBar
//             filterText={filterText}
//             inStockOnly={inStockOnly}
//             onFilterTextChange={setFilterText}
//             onInStockOnlyChange={setInStockOnly} />
//           <ProductTable
//             products={products}
//             filterText={filterText}
//             inStockOnly={inStockOnly} />
//         </div>
//       );
//     }

//     function ProductCategoryRow({ category }) {
//       return (
//         <tr>
//           <th colSpan="2">
//             {category}
//           </th>
//         </tr>
//       );
//     }

//     function ProductRow({ product }) {
//       const name = product.stocked ? product.name :
//         <span style={{ color: 'red' }}>
//           {product.name}
//         </span>;

//       return (
//         <Stack spacing={useBreakpointValue({ base: '4', md: '5' })} >
//         <Box position="relative">
//           <AspectRatio ratio={4 / 3}>
//             <Image
//               src={product.imageURL}
//               alt={name}
//               draggable="false"
//               fallback={<Skeleton />}
//               borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
//             />
//           </AspectRatio>
//           {/* <FavouriteButton
//             position="absolute"
//             top="4"
//             right="4"
//             aria-label={`Add ${name} to your favourites`}
//           /> */}
//         </Box>
//         <Stack>
//           <Stack spacing="1">
//             <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
//               {name}
//             </Text>
//             {/* <PriceTag price={price} salePrice={salePrice} currency="USD" /> */}
//           </Stack>
//           {/* <HStack>
//             <Rating defaultValue={rating} size="sm" />
//             <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
//               12 Reviews
//             </Text>
//           </HStack> */}
//         </Stack>
//         <Stack align="center">
//           <Button colorScheme="blue" width="full">
//             Add to cart
//           </Button>
//           <Link
//             textDecoration="underline"
//             fontWeight="medium"
//             color={useColorModeValue('gray.600', 'gray.400')}
//           >
//             Quick shop
//           </Link>
//         </Stack>
//       </Stack>
//         // <tr>
//         //   <td>{name}</td>
//         //   <td>{product.price}</td>
//         //   <td><img width={100} height={100} src={product.imageURL} alt={product.imageURL}/></td>
//         // </tr>
//       );
//     }

//     function ProductTable({ products, filterText, inStockOnly }) {
//       const rows = [];
//       let lastCategory = null;

//       products.forEach((product) => {
//         if (
//           product.name.toLowerCase().indexOf(
//             filterText.toLowerCase()
//           ) === -1
//         ) {
//           return;
//         }
//         if (inStockOnly && !product.stocked) {
//           return;
//         }
//         if (product.category !== lastCategory) {
//           rows.push(
//             <ProductCategoryRow
//               category={product.category}
//               key={product.id} />
//           );
//         }
//         rows.push(
//           <ProductRow
//             product={product}
//             key={product.id} />
//         );
//         lastCategory = product.category;
//       });

//       return (
//         <section>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>{rows}</tbody>
//         </section>
//       );
//     }

//     function SearchBar({
//       filterText,
//       inStockOnly,
//       onFilterTextChange,
//       onInStockOnlyChange
//     }) {
//       return (
//         <form>
//            <label>
//             <Checkbox
//               type="checkbox"
//               checked={inStockOnly}
//               onChange={(e) => onInStockOnlyChange(e.target.checked)} />
//             {' '}
//             Only show equipement in stock
//           </label>
//           <Input
//            htmlSize={50} width='auto'
//             type="text"
//             value={filterText} placeholder="Search..."
//             onChange={(e) => onFilterTextChange(e.target.value)} />

//         </form>
//       );
//     }

// const HomePage = () => {
//   const { logOut, user } = useUserAuth();
//   const navigate = useNavigate();
//   const handleLogout = async () => {
//     try {
//       await logOut();
//       navigate("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   return <FilterableProductTable products={data} />;

// };
// export default HomePage;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
const HomePage = () => {
  const [post, setPost] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  const onSearchHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearchQuery(lowerCase);
  };

  const filterData = post.filter((el) => {
    if (searchQuery === "" && !category) {
      return el;
    } else if (searchQuery) {
      return el.title.toLowerCase().includes(searchQuery);
    }
  });

  const handleProductType = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
      title,
      slug,
      reviews,
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
    <main>
      {/* <section> */}
      <form>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
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
            </svg>
          </div>
          <input
            onChange={onSearchHandler}
            value={searchQuery}
            type="search"
            id="default-search"
            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Product Type
          </label>
          <select
            onChange={handleProductType}
            id="type"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="irrigator">irrigator</option>
            <option value="tilter">tilter</option>
            <option value="plougher">plougher</option>
            <option value="harvester">harvester</option>
          </select>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {filterData &&
              filterData.map((item, index) => (
                <article>
                  <Link
                    to={"/product/" + item.slug.current}
                    key={item.slug.current}
                  >
                    <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <img
                          class="p-8 rounded-t-lg"
                          src={item.mainImage.asset.url}
                          alt={item.mainImage.alt}
                        />
                      </a>

                      <div class="px-5 pb-5">
                        <a href="#">
                          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                          </h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                          <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            {item.reviews && item.reviews[0].rating}
                          </span>
                        </div>
                        <div class="flex justify-between items-center">
                          <span class="text-3xl font-bold text-gray-900 dark:text-white">
                            $599
                          </span>
                          <a
                            href="#"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
  );
};
export default HomePage;
