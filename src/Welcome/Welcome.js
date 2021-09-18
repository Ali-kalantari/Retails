import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const divstyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "blue",
    paddingTop: "90px",
    fontFamily: "arial",
  };
  const h2style = {
    letterSpacing: "0px",
    marginBottom: "30px",
  };
  const h3style = {
    letterSpacing: "0px",
    color: "gray",
  };
  const linkstyle = {
    borderRadius: "50px",
    fontFamily: "Georgia",
    color: "#ffffff",
    fontSize: "26px",
    background: "#3498db",
    padding: "11px 25px 10px 20px",
    textDecoration: "none",
    marginRight: "20px",
  };
  const containerstyle = {
    display: "flex",
    marginTop: "50px",
    justifyContent: "center",
  };
  return (
    <div
      style={{
        height: "650px",
        background:
          " linear-gradient(0deg, rgba(34,193,195,1) 25%, rgba(208,227,21,1) 96%)",
      }}
    >
      <div style={divstyle}>
        <h2 style={h2style}>به وب سایت من خوش اومدین</h2>
        <h3 style={h3style}>بخش مورد نظر رو انتخاب کنید</h3>
      </div>

      <div style={containerstyle}>
        <Link style={linkstyle} to="/tour">
          تور ها
        </Link>
        <Link style={linkstyle} to="/review">
          معرفی تیم
        </Link>
        <Link style={linkstyle} to="/acc">
          سوالات متداول
        </Link>
        <Link style={linkstyle} to="/tabs">
          تیم توسعه
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
