import React from "react";
import { useEffect } from "react";
import axios from "axios";
import NavBar from "../navbar/NavBar";

const Favorites = () => {
  useEffect(() => {
    getFavorites();
  }, []);

  console.log(sessionStorage.getItem("userInfo"));

  const getFavorites = () => {
    axios
      .get("http://localhost:3001/users/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />
      Favorites
    </div>
  );
};

export default Favorites;
