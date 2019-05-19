import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

// The Tile component represents an individual tile of the chess board. 
// It accepts a color. 
// Exports Tile component.

export class Tile extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <button className="tile"></button>
        );
    }
}