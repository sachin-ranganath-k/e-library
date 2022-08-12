import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getBooks } from "../../../redux/admin/adminAction";
import NavBar from "../navbar/NavBar";
import CoverNotAvailable from "../../../images/bookcover.gif";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

const UserDashboard = () => {
  useEffect(() => {
    fetchBooks();
  }, []);

  const books = useSelector((state) => state.adminReducer.loadBooksData);

  // const location = useLocation();
  const dispatch = useDispatch();
  const fetchBooks = async () => {
    await axios
      .get("http://localhost:3002/books")
      .then((res) => {
        dispatch(getBooks(res.data));
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* Welcome {location.state.emails} */}
      <NavBar />
      <br />
      <br />
    <Grid container spacing={2}>
      {books.map((allBooks) => (
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 290 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={require("../../../images/bookcover.gif")}
              alt="green iguana"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {allBooks.bookName}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>
      ))}
      </Grid>
    </div>
  );
};

export default UserDashboard;
