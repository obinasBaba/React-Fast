import * as ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import SampleComponent from "./components/sampleComponent.jsx";
import  "./index.css";


ReactDOM.render(
    <SampleComponent  text='hard __ work'/>,
    document.getElementById('content')
);

if (module.hot){
    module.hot.accept( () => {
        console.log('hot')
    })
}