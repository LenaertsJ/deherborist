import { createContext } from "react";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADJUST_QUANTITY,
  EMPTY_CART,
} from "./actionConstants";
import createPersistedReducer from "use-persisted-reducer";

const initialState = [];

//REDUCER
const usePersistedReducer = createPersistedReducer("basket");

const reducer = (state, action) => {
  const { product, quantity } = action.payload;
  switch (action.type) {
    case ADD_ITEM:
      const existingCartItem = state.find(
        (cartItem) => cartItem.product.id === product.id
      );

      if (existingCartItem) {
        return state.map((cartItem) =>
          cartItem.product.id === product.id
            ? {
                ...cartItem,
                quantity: Math.min(
                  cartItem.quantity + quantity,
                  cartItem.product.stock
                ),
                totalPrice: parseFloat(
                  (
                    (cartItem.quantity + quantity) *
                    cartItem.product.price
                  ).toFixed(2)
                ),
              }
            : cartItem
        );
      }

      const totalPrice = parseFloat((quantity * product.price).toFixed(2));

      return [
        ...state,
        {
          product,
          quantity,
          totalPrice,
        },
      ];

    case ADJUST_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.product.id === action.payload.product) {
          return {
            ...cartItem,
            quantity: Math.min(action.payload.quantity, action.payload.stock),
            totalPrice: parseFloat(
              (action.payload.quantity * cartItem.product.price).toFixed(2)
            ),
          };
        } else {
          return cartItem;
        }
      });

    case REMOVE_ITEM:
      return state.filter((cartItem) => cartItem.product.id !== action.payload);

    case EMPTY_CART:
      return initialState;

    default:
      return state;
  }
};

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = usePersistedReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
