import { FaSearchPlus } from "react-icons/fa";

const DashBoardCardProducts = ({ Products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "250px",
        height: "190px",
        position: "relative",
        borderRadius: 15,
        boxShadow: "4px 3px 20px 4px #4644442b",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "120px",
          position: "absolute",
          top: "-50px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "6px solid #e37729",
        }}
      >
        <img
          src={Products?.imageUrl}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <h1
        style={{
          color: "black",
          fontSize: "20px",
          textAlign: "center",
          
        }}
      >
        {Products?.productName}
      </h1>
      <div
        style={{
          display: "flex",
          width:'100%',
          justifyContent: "space-evenly",
          alignItems:'center',
          gap: 10
        }}
      >
        <h4>$ 300</h4>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width: '30px',
            height: '30px',
            backgroundColor:'orange',
            marginBottom: 20,
            borderRadius: '50%',
            cursor:'pointer'
        }}>
        <FaSearchPlus  />
        </div>
        
      </div>
    </div>
  );
};

export default DashBoardCardProducts;
