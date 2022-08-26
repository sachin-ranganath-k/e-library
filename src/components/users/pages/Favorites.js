import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import NavBar from "../navbar/NavBar";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  // console.log(sessionStorage.getItem("userInfo"));

  const getFavorites = () => {
    axios
      .get("http://localhost:3001/users/1")
      .then((res) => {
        setFavorites(res.data.fav);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <NavBar />
      {favorites.map((f) => (
        <h1>{f}</h1>
      ))}
    </div>
  );
};

export default Favorites;
