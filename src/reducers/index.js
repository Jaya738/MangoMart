import config from "./config.js";
import bills from "./bills.js";
import user from "./user";
import { combineReducers as combine } from "redux";

export const combineReducers = () =>
  combine({
    config,
    bills,
    user,
  });
