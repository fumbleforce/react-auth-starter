import React from "react";

class Layout extends React.Component {
  constructor () {
    super();
    
  }
  
  render () {
    const {content} = this.props;
    
    return (
      <Segment className="inverted basic teal" style={{ minHeight: "100%", paddingTop: "10em" }}>
        <Container>
          {content()}
        </Container>
      </Segment>
    );
  }
}

export default Layout;
