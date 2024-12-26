import React from "react";
import ReactDOM from "react-dom/client";

const heading1=React.createElement("h1",{id:"heading"},"Hi from React");
        const root1=ReactDOM.createRoot(document.getElementById("root1"));
        root1.render(heading1);
