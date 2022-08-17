import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/admin/adminAction";
import NavBar from "./navbar/NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

const AdminDashboard = () => {
  const adminDetails = useSelector((state) => state.adminReducer.adminDetails);
  const booksData = useSelector((state) => state.adminReducer.loadBooksData);
  const dispatch = useDispatch();

  useEffect(() => {
    booksApiCall();
  }, []);

  const booksApiCall = async () => {
    await axios
      .get("http://localhost:3002/books")
      .then((res) => {
        console.log(res);
        dispatch(getBooks(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBook=(bookId)=>{
    axios.delete(`http://localhost:3002/books/${bookId}`)
    .then((res)=>{
      booksApiCall();
    })
    .catch(()=>{
      console.log("Error")
    })
  }

  return (
    <div>
      <NavBar />
      Welcome {adminDetails.adminEmail}
      {/* {booksData.map((books) => (
        <p>{books.bookName}</p>
      ))} */}
      <Grid container spacing={2}>
        {booksData.map((allBooks) => (
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 290 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={require("../../images/bookcover.gif")}
                  alt={allBooks.bookName}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {allBooks.bookName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {allBooks.bookAuthor}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={allBooks.viewLink}
                  target="_blank"
                >
                  View
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={(e) => deleteBook(allBooks.id)}
                  target="_blank"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AdminDashboard;
