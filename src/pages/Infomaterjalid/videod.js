import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./infomaterjalid.css";

function Videod() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM">
            <h1>Videod</h1>
            <div className="videoContainer">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/qUlH5Zh05ac"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="videoText">
                <br />
                <br />
                Eesti teadlaste ja immunoloogide kohtumine ajakirjanikega
                27.09.2021
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Videod;
