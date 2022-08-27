import { useState } from "react";
import { Input,Checkbox } from "@chakra-ui/react";
const data = 
[
   
    
    {"id":2,
    "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
    "name":"Blue Polo",
    "description":"Polo",
    "price":350,
    "stocked":true,

    "location":"Blue"},
    {"id":3,
    "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
    "name":"Pink Polo",
    "description":"Polo",
    "price":350,
    "stocked":true,

    "location":"Pink"},
    {"id":4,
    "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
    "name":"Black Hoodie",
    "description":"Hoodie",
    "price":500,
    "stocked":true,

    "color":"Black",
    "location":"Men"
    },
    {"id":5,"imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
    "name":"Green Polo",
    "description":"Polo",
    "price":250,
    "stocked":true,

    "color":"Green",
    "location":"Men"
   },
    {"id":6,
    "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
    "name":"Green Polo",
    "description":"Polo",
    "price":350,
    "stocked":false,

    "color":"Green",
    "location":"Women"
    },
    {"id":7,
    "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
    "name":"Blue Hoodie",
    "description":"Hoodie",
    "price":500,
    "stocked":false,

    "color":"Blue",
    "location":"Women"
    },
    {"id":8,
    "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
    "name":"Black Hoodie",
    "description":"Hoodie",
    "price":500,
    "stocked":false,

    "color":"Black",
    "location":"Women"
    },
    {"id":9,
    "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
    "name":"Blue Round",
    "description":"Basic",
    "price":300,
    "stocked":false,

    "color":"Blue",
    "location":"Men"
   },
    {"id":10,
    "imageURL":"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
    "name":"Red Round",
    "description":"Basic",
    "price":300,
    "stocked":false,

    "color":"Red",
    "location":"Women"}
    
    ]

    function FilterableProductTable({ products }) {
      const [filterText, setFilterText] = useState('');
      const [inStockOnly, setInStockOnly] = useState(false);
    
      return (
        <div>
          <SearchBar 
            filterText={filterText} 
            inStockOnly={inStockOnly} 
            onFilterTextChange={setFilterText} 
            onInStockOnlyChange={setInStockOnly} />
          <ProductTable 
            products={products} 
            filterText={filterText}
            inStockOnly={inStockOnly} />
        </div>
      );
    }
    
    function ProductCategoryRow({ category }) {
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
    
    function ProductRow({ product }) {
      const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
          {product.name}
        </span>;
    
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
          <td><img width={100} height={100} src={product.imageURL} alt={product.imageURL}/></td>
        </tr>
      );
    }
    
    function ProductTable({ products, filterText, inStockOnly }) {
      const rows = [];
      let lastCategory = null;
    
      products.forEach((product) => {
        if (
          product.name.toLowerCase().indexOf(
            filterText.toLowerCase()
          ) === -1
        ) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.id} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.id} />
        );
        lastCategory = product.category;
      });
    
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
    
    function SearchBar({
      filterText,
      inStockOnly,
      onFilterTextChange,
      onInStockOnlyChange
    }) {
      return (
        <form>
           <label>
            <Checkbox 
              type="checkbox" 
              checked={inStockOnly} 
              onChange={(e) => onInStockOnlyChange(e.target.checked)} />
            {' '}
            Only show equipement in stock
          </label>
          <Input 
           htmlSize={50} width='auto' 
            type="text" 
            value={filterText} placeholder="Search..." 
            onChange={(e) => onFilterTextChange(e.target.value)} />
         
        </form>
      );
    }
    
   
    
   
const HomePage = () => {
  
  return <FilterableProductTable products={data} />;
 
};
export default HomePage;
