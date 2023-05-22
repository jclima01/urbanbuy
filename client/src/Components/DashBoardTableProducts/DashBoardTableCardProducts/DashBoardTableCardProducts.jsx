import { useEffect, useState } from "react";
import { deleteProduct } from "../../../redux/actions"
import { useDispatch, useSelector} from 'react-redux'


const DashBoardTableCardProducts = ({product}) => {

  const [idReference, setIdReference] = useState('');
  const dispatch = useDispatch()
  const Products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(deleteProduct(idReference))
  }, [idReference]);
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
                      overflow:'hidden'
                      , display:'flex',
                      alignItems:'center',
                      justifyContent:'center'
                    }}
                  >
                    <img src={product?.imageUrl} alt=""  style={{width:100, height:100, objectFit:'contain'}}/>
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
                  <button onClick={()=> setIdReference(product._id) }>delete </button>
                </td>
              </tr>
            </tbody>
  )
}

export default DashBoardTableCardProducts