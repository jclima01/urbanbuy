import Table from "react-bootstrap/esm/Table";
import DashBoardTableCardProducts from "./DashBoardTableCardProducts/DashBoardTableCardProducts";
import { useSelector } from "react-redux";


const DashBoardTableProducts = ({ searchInput , setIsActive  }) => {
  const Products = useSelector((state) => state.products);



  return (
    <Table
      striped="columns"
      responsive
      borderless="false"
      hover="true"
      variant="lightgray"
    >
      <thead>
        <tr>
          <th style={{ width: 80 }}>Image</th>
          <th style={{ width: 250 }}>Name</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Ratings</th>
          <th>Options</th>
        </tr>
      </thead>
      {Products?.filter((item) => item.productName.toLowerCase().includes(searchInput)).map(
        (product) => (
          <DashBoardTableCardProducts
            key={product._id}
            productName={product.productName}
            categories={product.categories}
            imageUrl={product.imageUrl}
            stocks={product.stocks}
            price={product.price}
            rating={product.rating}
            id={product._id}
            setIsActive={setIsActive}
          />
        )
      )}
    </Table>
  );
};

export default DashBoardTableProducts;
