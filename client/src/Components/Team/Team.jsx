import React from "react";
import avatar1 from "../../Img/avatar1.png";
import avatar2 from "../../Img/avatar2.png";
import avatar3 from "../../Img/avatar3.png";
import avatar4 from "../../Img/avatar4.png";
import avatar5 from "../../Img/avatar5.png";
import avatar6 from "../../Img/avatar6.png";
import avatar7 from "../../Img/avatar7.png";
import avatar8 from "../../Img/avatar8.png"
import style from "../Team/Team.module.css";

const Team = () => {
  return (
    <div className={style.cardContainerB}>
      <h1
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          padding: "5px",
          backgroundColor: "rgb(214, 137, 16)",
          color: "whitesmoke",
        }}
      >
        Team
      </h1>
      
        
      <div className={style.cardContainerB}>
        <div className={style.cardB}>
          <img src={avatar1} alt="mujer" style={{ width: "100%",borderRadius:'20px' }} />
          <div className="card-body">
            <h5 className="card-title">Ale </h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB}>
          <img src={avatar2} alt="mujer" style={{ width: "100%",borderRadius:'20px' }} />
          <div className="card-body">
            <h5 className="card-title">Henry</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB}>
          <img src={avatar3} alt="mujer" style={{ width: "100%",borderRadius:'20px' }} />
          <div className="card-body">
            <h5 className="card-title">Ricardo</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB}>
          <img src={avatar4} alt="mujer" style={{ width: "100%",borderRadius:'20px' }} />
          <div className="card-body">
            <h5 className="card-title">Jose</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB} >
          <img src={avatar5} alt="mujer" style={{ width: "100%",borderRadius:'20px' }} />
          <div className="card-body">
            <h5 className="card-title">Ema</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB}>
          <img src={avatar6} alt="mujer" style={{ width: "100%",borderRadius:'20px' }} />
          <div className="card-body">
            <h5 className="card-title">Juan</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB}>
          <img src={avatar7} alt="mujer" style={{ width: "100%",borderRadius:'20px' }} />
          <div className="card-body">
            <h5 className="card-title">Eze</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB}>
          <img src={avatar8} alt="mujer" style={{ width: "100%", borderRadius:'20px' }} />
          <div className="card-body">
            <h5 className="card-title">Tamy</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
