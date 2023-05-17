import React from "react";
import avatar1 from "../../Img/avatar1.png";
import avatar2 from "../../Img/avatar2.png";
import avatar3 from "../../Img/avatar3.png";
import avatar4 from "../../Img/avatar4.png";
import avatar5 from "../../Img/avatar5.png";
import avatar6 from "../../Img/avatar6.png";
import style from '../Team/Team.module.css'

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
      <h6
        style={{ marginTop: "10px", color: "whitesmoke", width: "100% auto" }}
      >
        <strong>
          Team: Same Business School, different backgrounds, shared purpose.
        </strong>
        <br />
        <br /> Maiz Ventures was funded out of the desire to identify
        outstanding opportunities for a better world by three friends while
        completing their MBAs at IE and Brown University. Get to know us.
      </h6>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div className={style.cardB} >
          <img
            src={avatar1}
           
            alt="mujer"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Paras Daryani</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB} >
          <img
            src={avatar2}
           
            alt="mujer"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Darío Pérez Principi</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB} >
          <img
            src={avatar3}
           
            alt="mujer"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Gloria Alvarez</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB} >
          <img
            src={avatar4}
          
            alt="mujer"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Gloria Alvarez</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB} >
          <img
            src={avatar5}
           
            alt="mujer"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Gloria Alvarez</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB} >
          <img
            src={avatar6}
           
            alt="mujer"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Gloria Alvarez</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB} >
          <img
            src={avatar6}
           
            alt="mujer"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Gloria Alvarez</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
        <div className={style.cardB} >
          <img
            src={avatar6}
          
            alt="mujer"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Gloria Alvarez</h5>
            <p className="card-text">Partner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
