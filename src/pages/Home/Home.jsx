import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import Play_icon from "../../assets/play_icon.png";
import Infos_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="hero title" className="caption-img" />
          <p className="caption-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            blanditiis distinctio libero, quis quisquam, error reprehenderit ea
            minus culpa consequuntur?
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={Play_icon} alt="play icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={Infos_icon} alt="info icon" />
              More Infos
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"BlockBluster Movies"} category={"popular"} />
        <TitleCards title={"Only on Netflix"} category={"now_playing"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"top_rated"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
