import React from 'react';


export class SmartCom extends React.Component {

    constructor () {
        super();

        this.state = {
            colors: ['orange', 'red', 'yellow', 'green', 'magenta'],
        };
        this.addColor = this.addColor.bind(this)
    }


    addColor() {
        console.log("adding new ollor");
        this.setState(
            {
                colors: [...this.state.colors, 'black']
            }
        )
    }

    render () {
        return(
            <div>
                <ColorButton clickHandler={this.addColor}/>
                <ColorList colors={this.state.colors}/>
                {/* <button onClick={this.addColor}>Add Color</button> */}
            </div>
        );
    }
}

const ColorButton = ({clickHandler}) => {
    return (
        <button onClick={clickHandler}>ADD COLOR</button>
    );
}

const ColorList = ({colors}) => {
    return (
        <ul>
            {colors.map((v,i) => <li key={i} style={{color: v}}>{v}</li>)}
        </ul>
    );
}