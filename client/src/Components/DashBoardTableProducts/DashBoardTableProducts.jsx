import Table from "react-bootstrap/esm/Table";
import DashBoardTableCardProducts from "./DashBoardTableCardProducts/DashBoardTableCardProducts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../redux/actions";

const DashBoardTableProducts = ({
  setIsActive,
  searchInput,
  productsPerPage,
  setActualPage,
  sort,
}) => {
  //USER SESSION
  const clientAdminStorage =
    JSON.parse(localStorage.getItem("clientAdmin")) ?? false;
  const clientAdminId = clientAdminStorage._id;

  //Use Selector Products and Dispatch Actions
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  //Get all Products
  useEffect(() => {
    dispatch(getAllProducts(clientAdminId));
  }, [dispatch]);

  //InputToLowerCase for Fitler
  const searchInputLowerCase = searchInput.toLowerCase();

  // Pagination
  const lastUserIndex = setActualPage * productsPerPage;
  const firstUserIndex = lastUserIndex - productsPerPage;
  const productsSlice = products.slice(firstUserIndex, lastUserIndex);
  // Pagination

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
      {productsSlice
        ?.filter((item) =>
          item.productName.toLowerCase().includes(searchInputLowerCase)
        )
        .sort((a, b) => {
          if (sort) {
            if (sort === "az") {
              return a.productName.localeCompare(b.productName);
            } else if (sort === "za") {
              return b.productName.localeCompare(a.productName);
            } else if (sort === "rasc") {
              return b.rating - a.rating;
            } else if (sort === "rdes") {
              return a.rating - b.rating;
            } else if (sort === "sasc") {
              return b.stocks - a.stocks;
            } else if (sort === "sdes") {
              return a.stocks - b.stocks;
            } else if (sort === "pasc") {
              return b.price - a.price;
            } else if (sort === "pdes") {
              return a.price - b.price;
            }
          }
        })
        .map((product) => (
          <DashBoardTableCardProducts
            key={product._id}
            productName={product.productName}
            description={product.description}
            categories={product.categories}
            imageUrl={product.imageUrl}
            stocks={product.stocks}
            price={product.price}
            rating={product.rating}
            id={product._id}
            setIsActive={setIsActive}
          />
        ))}
    </Table>
  );
};

export default DashBoardTableProducts;
