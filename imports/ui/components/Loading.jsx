import React from "react";

export default ({ text }) => (
  <Dimmer className="active teal">
    <div className="ui large text loader">
      {text ? text : "Loading"}
    </div>
  </Dimmer>
);
