import React from 'react';

export class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.names.map((value, index) => <ListItem name={value} key={index} />)}
            </ul>
        )
    }
}


const ListItem = ({name}) => {
    return (
        <li>{name}</li>
    )
}