import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { MainContextProvider } from "./context";
import "./index.css";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainContextProvider>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </MainContextProvider>
  </React.StrictMode>
);
