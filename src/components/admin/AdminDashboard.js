import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/admin/adminAction";
import NavBar from "./navbar/NavBar";

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

  return (
    <div>
      <NavBar />
      Welcome {adminDetails.adminEmail}
      {booksData.map((books) => (
        <p>{books.bookName}</p>
      ))}
    </div>
  );
};

export default AdminDashboard;
