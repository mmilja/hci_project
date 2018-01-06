import React, { Component } from 'react';
import './Canvas.css';

import CanvasSquare from './CanvasSquare.js';
import ToolboxElementDraggable from './ToolboxElementDraggable';

export default class Canvas extends Component {

  renderSquare(i){
    const x = i;
    const position = 'square' + x;
    const description = this.props.containerDescriptions[x];

    return (
    <div key={i} style={{border: 'solid', width: '100%', height: '100%', gridTemplateAreas: position}}>      
      <CanvasSquare position={[x]}>
        {this.renderPiece(x, description)}
      </CanvasSquare>
    </div>);
  }

  renderPiece(x, description) {
    const position = this.props.takenSquares;

    if (position[x] === 1)
    {
    return (<ToolboxElementDraggable type={description} />);
    }
    else
    {
      return null;
    }
  }

  render() {
    const squares = [];
    for (let i = 0; i < 9; i++) {
      squares.push(this.renderSquare(i));
    }

    return (<div className="Canvas">{squares}</div>);
  }
}