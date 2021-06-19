import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADJUST_QUANTITY,
  EMPTY_CART,
} from "./actionConstants";

export const addItem = (product, quantity) => ({
  type: ADD_ITEM,
  payload: {
    product: {
      id: product.id,
      name: product.name,
      category: product.category.name,
      price: product.prices[0].brutoPrice,
      stock: product.stock,
    },
    quantity,
  },
});

export const removeItemFromCart = (product) => ({
  type: REMOVE_ITEM,
  payload: product.id,
});

export const adjustQuantity = (product, quantity) => ({
  type: ADJUST_QUANTITY,
  payload: {
    product: product.id,
    stock: product.stock,
    quantity,
  },
});

export const emptyCart = () => ({
  type: EMPTY_CART,
  payload: "",
});
