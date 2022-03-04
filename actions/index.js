import * as types from "../constants/action-types";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";

const apiBaseURL = process.env.REACT_APP_API_URL || 'https://secure-thicket-31464.herokuapp.com';

//recieve Categories
export const receiveCategories = (categories) => ({
  type: types.GET_CATEGORIES,
  categories,
});

//recieve Products
export const receiveProducts = (products) => ({
  type: types.GET_PRODUCTS,
  products,
});


// get all categories //
export const getAllCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiBaseURL}/api/categories`);
    
    dispatch(receiveCategories(data));
    return data;
  } catch (error) {
        // toast.dark(error.toString().replace("Error:", ""),{theme:'dark'});

    console.log(error);
  }
};


// get all Products //
export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiBaseURL}/api/products`);
    data.shift()
    dispatch(receiveProducts(data));
    return data;
  } catch (error) {
        // toast.dark(error.toString().replace("Error:", ""),{theme:'dark'});

    console.log(error);
  }
};