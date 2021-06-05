import { ADD_ITEM, REMOVE_ITEM, ADJUST_QUANTITY } from "./actionConstants";

export const addItem = (item, quantity) => ({
  type: ADD_ITEM,
  payload: { item, quantity },
});

export const removeItemFromCart = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const adjustQuantity = (item, quantity) => ({
  type: ADJUST_QUANTITY,
  payload: { item, quantity },
});
