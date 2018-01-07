import React, { Component } from 'react';
import './CanvasSquare.css';

import PropTypes from 'prop-types';
import { ItemTypes } from '../Constants';
import { DropTarget } from 'react-dnd';
import { canMoveContainer, moveContainer } from './Logic.js';

import Square from './Square.js'; 

const target = {
    canDrop(props){
      return canMoveContainer(props.position);
    },
    drop(props, monitor) {
      let { type } = monitor.getItem();
      moveContainer(props.position, type );
    }
  };
  
  function collect(connect, monitor) {

    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    };
  }
  

class CanvasSquare extends Component {
  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    if(this.props.children != null){
      const data = this.props.children.props;
      this.props.showModal(data.type, data);
    }
    else{
      return;
    }
  }

  

  render() {
      const {  position, connectDropTarget, isOver, children } = this.props;

      return connectDropTarget(
          <div className="CanvasSquare" onClick={this.onClick}>
          <Square>
              {children}
          </Square>
          </div> 
        );
};
}

CanvasSquare.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    children: PropTypes.node
  }
  
export default DropTarget(ItemTypes.CONTAINER, target, collect)(CanvasSquare);