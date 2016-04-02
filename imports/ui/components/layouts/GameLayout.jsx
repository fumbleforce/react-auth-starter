import React from "react";

class GameLayout extends React.Component {
  constructor () {
    super();
    
  }
  
  render () {
    const {content} = this.props;
    
    return (
      <div>
        {content()}
      </div>
    );
  }
}

export default GameLayout;
