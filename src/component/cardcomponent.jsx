import React from "react";
import { Card } from "antd";

/**
 * A card with global styles to show an icon, a value and a title
 * @param {Object} params - An object containing icon, value, title
 * @param {Object} params.icon - icon
 * @param {String} params.value - value
 * @param {String} params.title - title
 * @returns
 */
const CardComponent = ({ icon, value, title }) => {
  return (
    <Card
      style={{
        width: "100%",
        background: "#21222d",
        padding: "20px",
        borderRadius: "10px",
        marginTop : "30px",
      }}
    >
      <div className="icon">{icon ? icon : ""}</div>
      <div
        className="value"
        style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
      >
        {value ? value : ""}
      </div>
      <div
        className="name"
        style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
      >
        {title ? title : ""}
      </div>

      
    </Card>

    

    

    
  );
};

export default CardComponent;



