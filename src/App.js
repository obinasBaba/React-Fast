import React, {Component} from "react";
import sampleComponent from "./components/sampleComponent.jsx";


export default class App extends Component{

    state = {}

    handleClick = () => {
        return {
            one: 'two',
            two: 'one'
        }
    }


    render() {

        let i = {...this.handleClick()}

        return (
            <div>
                <h1>patient</h1>
            </div>
        );
    }

}