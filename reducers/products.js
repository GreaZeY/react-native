import { GET_PRODUCTS } from "../constants/action-types";

const initialState = {
    products: [],
};

const productReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
};



export default productReducer 