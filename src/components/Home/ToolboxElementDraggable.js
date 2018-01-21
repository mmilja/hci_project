import React, { Component } from 'react';
import './ToolboxElement.css';

import PropTypes from 'prop-types';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';
import { Images } from '../Constants.js'

const draggingSource = {
    beginDrag(props) {
      const item = { type: props.type };
      return item;
    }
  };

function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
}

class ToolboxElementDraggable extends Component {

  renderContainer(){
    const imgPath = Images[this.props.type];
    if(this.props.description == null){
      return(<div className="ToolboxElement"> 
              <span className="Element"><img className="ElementImage" src={imgPath} alt="container" /></span>
            </div>);
    }
    else{
      return (<div className="ToolboxElement"> 
                <span className="Element"><img className="ElementImage" src={imgPath} alt="containerCanvas" /></span>
                <span className="ElementDescription">{this.props.description}</span> 
              </div>);
    }  
  }  

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(this.renderContainer());}
}

ToolboxElementDraggable.propTypes = {
    type: PropTypes.string.isRequired,
    description: PropTypes.string,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

export default DragSource(ItemTypes.CONTAINER,draggingSource,collect)(ToolboxElementDraggable);
