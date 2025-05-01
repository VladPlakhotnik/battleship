import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import { GlobalStyles } from "./styles/GlobalStyles";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GlobalStyles />
    <RouterProvider router={router} />
  </Provider>
);
