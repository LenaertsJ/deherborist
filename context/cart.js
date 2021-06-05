import { createContext, useReducer } from "react";
import { ADD_ITEM, REMOVE_ITEM, ADJUST_QUANTITY } from "./actionConstants";

const initialState = [
  {
    product: {
      id: 2,
      name: "flower ring",
      category: "bloemenkunst",
      price: 12.33,
      stock: 4,
    },
    quantity: 4,
  },
];

//REDUCER
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
                quantity: Math.min(cartItem.quantity + quantity, product.stock),
              }
            : cartItem
        );
      }
      return [...state, { product, quantity }];

    case ADJUST_QUANTITY:
      return state.map((cartItem) => {
        cartItem.product.id === product.id
          ? {
              ...cartItem,
              quantity: Math.min(quantity, product.stock),
            }
          : cartItem;
      });

    case REMOVE_ITEM:
      return state.filter((cartItem) => cartItem.product.id !== action.payload);

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
