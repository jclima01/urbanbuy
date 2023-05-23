import { useEffect, useState } from "react";
import { deleteProduct } from "../../../redux/actions"
import { useDispatch, useSelector} from 'react-redux'


const DashBoardTableCardProducts = ({productName, categories, imageUrl,stocks, price , rating ,id}) => {

  const [idReference, setIdReference] = useState('');
  const dispatch = useDispatch()
  const categorie = useSelector((state) => state.categories);
  console.log('categorie', categorie)


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
                    <img src={imageUrl} alt=""  style={{width:100, height:100, objectFit:'contain'}}/>
                  </div>
                </td>
                <td>{productName}</td>
                <td>
                {
                  categorie?.map(item=> (item.categoryName)).join('-')
                }
                </td>
              
                <td>{stocks}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>
                  <button>Edit </button>
                  <button onClick={()=> setIdReference(id) }>delete </button>
                </td>
              </tr>
            </tbody>
  )
}

export default DashBoardTableCardProducts