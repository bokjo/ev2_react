import React from 'react';

export class Footer extends React.Component {   
    render() {
        return (
            <footer>
                <h1>Bye Bye...</h1>
                {this.props.names.map((value, i) => <span key={i}>{value}</span>)}
            </footer>
        )
    }
}

