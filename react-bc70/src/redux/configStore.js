import { combineReducers, createStore } from "redux";
import { carDetailReducer } from "./CarDetailReducer";
import { ProductDetailReducer } from "./ProductDetailReducer";
import { gioHangReducer } from "./GioHangReducer";
const rootReducer = combineReducers({
  // Nơi chứa các state của ứng dụng
  carDetailReducer,
  ProductDetailReducer,
  gioHangReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
