import Table from "react-bootstrap/esm/Table";
import DashBoardTableCardProducts from "./DashBoardTableCardProducts/DashBoardTableCardProducts";

const DashBoardTableProducts = ({ products }) => {
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
      <tbody>
        {products?.map((product) => (
          <DashBoardTableCardProducts key={product._id} product={product} />
        ))}
      </tbody>
    </Table>
  );
};

export default DashBoardTableProducts;