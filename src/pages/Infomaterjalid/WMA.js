import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./infomaterjalid.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import WMAkoodeks from "../../static/WMAarstideeetikakoodeks.pdf";

function Who() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM pdfArticle">
            <h1>Maailma Arstide Liidu eetikakoodeks</h1>

            <img
              src="../../pdfarticles/WMAarstideeetikakoodeks-1.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/WMAarstideeetikakoodeks-2.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <a href={WMAkoodeks} target="_blank">
              Ava PDF
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Who;
