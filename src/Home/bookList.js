import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/booksActions";
import NavBar from "../Navbar/navbar";
import "./booklist.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const BookList = () => {
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState("");
  const [bookDetails, setBookDetails] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  const handleBookDetails = (book) => {
    setBookDetails(book.details)
    // setOpen(true);
  }
  // const handleClose = () => {
  //   setOpen(false);
  // };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <>
      {/* <NavBar /> */}
      <div>
        {bookDetails}


        {/* <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {bookDetails}
            </DialogContentText>
          </DialogContent>
          <DialogActions>

            <Button onClick={handleClose}>OK</Button>
          </DialogActions>
        </Dialog> */}


      </div >



      <div>
        <div className="head">
          <h1>Book List</h1>
          <input
            type="text"
            placeholder="Search Book here..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="card-container">
          {filteredBooks.map((book, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{book.name}</h3>
              <p className="card-author">Author: {book.authorName}</p>
              <p className="card-price">Price: {book.price}</p>
              <img height="300px" src={book.image} alt={book.name} />
              {/* <Button variant="outlined" onClick={handleBookDetails}>
                View Details
              </Button> */}
              <button className="card-button"
                onClick={() => handleBookDetails(book)}
              >
                View Details</button>
              <button
                className="card-button"
                onClick={() => handleAddToCart(book)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;