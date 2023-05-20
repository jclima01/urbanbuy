

const DashBoardTableCardProducts = ({product}) => {
  return (
    <tbody>
              <tr>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "red",
                      padding: 10,
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                    }}
                  >
                    <img src={product?.imageUrl} alt="" />
                  </div>
                </td>
                <td>{product?.productName}</td>
                <td>{product?.categories}</td>
                <td>{product?.stocks}</td>
                <td>{product?.price}</td>
                <td>{product?.rating}</td>
                <td>
                  <button>view </button>
                  <button>Edit </button>
                  <button>delete </button>
                </td>
              </tr>
            </tbody>
  )
}

export default DashBoardTableCardProducts