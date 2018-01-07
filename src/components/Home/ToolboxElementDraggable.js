import React, { Component } from 'react';
import './ToolboxElement.css';

import PropTypes from 'prop-types';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

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
    constructor(props) {
        super(props);
    }

  renderContainer(){
    if(this.props.description == null){
      return(<div className="ToolboxElement"> 
              <span className="Element"><img className="ElementImage" src={"images/" + this.props.type + ".svg"} alt={this.props.type + " image"}/></span>
            </div>);
    }
    else{
      return (<div className="ToolboxElement"> 
                <span className="Element"><img className="ElementImage" src={"images/" + this.props.type + ".svg"} alt={this.props.type + " image"}/></span>
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
