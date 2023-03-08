import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaiB-BvBqLXoGzFg_Y1FqmM19LzY7YNEw",
  authDomain: "tienda-sp---react.firebaseapp.com",
  projectId: "tienda-sp---react",
  storageBucket: "tienda-sp---react.appspot.com",
  messagingSenderId: "214243089714",
  appId: "1:214243089714:web:bcbc1b5f63a8a522000b2b",
  measurementId: "G-78L585DL5G",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
