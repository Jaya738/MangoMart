const publicRoutes = {
  home: "/",
  login: "/login",
  register: "/register",
};

const gaurdedRoutes = {
  cart: "/cart",
  products: "/products",
  checkout: "/checkout",
  orders: "/orders",
  orderSummary: "/order-summary",
  billHistory: "/bill-history",
};

export default {
  ...publicRoutes,
  ...gaurdedRoutes,
};
