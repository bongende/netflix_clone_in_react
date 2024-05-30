import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import cardData from "../../assets/cards/Cards_data.js";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzkyMzZkODQwNjhiMjE5MDVmZjUxNmUzYjE1MzVkMSIsInN1YiI6IjY2NTdmNjU0NzRmYjViYzcyNzZjMWJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3JncaY4eP6LnEGehPIHHpNjNqhGwtn7Pv0w9cTYLjQ4",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY; // if not needed it may be used as anonimous arrow function
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category || "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results)) // console.log(response.results)) //
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, i) => {
          return (
            <div className="card" key={i}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
                alt={`${card.original_title}'s banner`}
              />
              <p className="card-name">{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
