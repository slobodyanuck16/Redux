import React, { Component } from "react";
import { ThemeContext } from "./themes-context";

class ThemedButton extends Component {
    render() {
        console.log(this.context);

        return (
            <button
                {...this.props}
                style={{
                    backgroundColor: this.context.background,
                    color: this.context.fontColor,
                }}
                className="btn"
            ></button>
        );
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
