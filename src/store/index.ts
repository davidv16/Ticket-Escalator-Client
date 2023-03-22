import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./reducers/contactReducer";
import customerReducer from "./reducers/customerReducer";
import employeeReducer from "./reducers/employeeReducer";
import productReducer from "./reducers/productReducer";
import repairReducer from "./reducers/repairReducer";
import sparepartReducer from "./reducers/sparepartReducer";
import ticketReducer from "./reducers/ticketReducer";

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    customers: customerReducer,
    products: productReducer,
    employees: employeeReducer,
    repairs: repairReducer,
    spareparts: sparepartReducer,
    contacts: contactReducer
  },
});

export default store;