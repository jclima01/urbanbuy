import avatar from "../../assets/avatar.jpg";

const DashBoardCardsUser = ({ Users }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "90px",
        display: "flex",
        justifyContent:'space-between',
        padding: 10,
        boxShadow: "4px 3px 20px 4px #46444425",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          overflow: "hidden",
          borderRadius: "50%",
        }}
      >
        <img
          src={avatar}
          alt=""
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div style={{
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        flexDirection:'column',
        width:'83%',
        height:'100%',
        textAlign: 'justify'
      }}>
        <h5>{Users.fullName}</h5>
        <h6>{Users.email}</h6>
        <h6 style={{ fontSize: 12 , textAlign:'end'}}>Today 17:45 PM</h6>
      </div>
    </div>
  );
};

export default DashBoardCardsUser;
