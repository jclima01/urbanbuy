import Table from "react-bootstrap/esm/Table";
import DashBoardTableCardProducts from "./DashBoardTableCardProducts/DashBoardTableCardProducts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../redux/actions";

const DashBoardTableProducts = ({ searchInput }) => {


  const clientAdminStorage = JSON.parse(localStorage.getItem('clientAdmin')) ?? false;
  const clientAdminId = clientAdminStorage._id;
 const products = useSelector(state=> state.products)
const dispatch = useDispatch()
 useEffect(() => {
  dispatch(getAllProducts(clientAdminId));
}, [dispatch]);
 
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
      {products?.filter((item) => item.productName.toLowerCase().includes(searchInput)).map(
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
