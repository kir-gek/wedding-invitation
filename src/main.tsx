import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ProductStore from "./store/ProductStore.ts";

interface IContext {
  product_component: ProductStore;
}

export const Context = createContext<IContext | null>(null);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Context.Provider value={{ product_component: new ProductStore() }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </StrictMode>
);
