import { createContext, useReducer } from "react";
import { ADD_ITEM, REMOVE_ITEM, ADJUST_QUANTITY } from "./actionConstants";

const initialState = [];

const adjustQuantity = (state, itemToAdjust) => {};

//REDUCER
const reducer = (state, action) => {
  const {
    item: { id, stock },
  } = action.payload;
  const quantity = action.payload.quantity;
  switch (action.type) {
    case ADD_ITEM:
      const existingCartItem = state.find((cartItem) => cartItem.id === id);

      if (existingCartItem) {
        return state.map((cartItem) =>
          cartItem.id === id
            ? {
                ...cartItem,
                quantity: Math.min(cartItem.quantity + quantity, stock),
              }
            : cartItem
        );
      }
      return [...state, { id, quantity }];

    case ADJUST_QUANTITY:
      return state.map((cartItem) => {
        cartItem.id === id
          ? {
              ...cartItem,
              quantity: Math.min(quantity, stock),
            }
          : cartItem;
      });

    case REMOVE_ITEM:
      return state.filter((cartItem) => cartItem.id !== action.payload);

    default:
      return state;
  }
};

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
