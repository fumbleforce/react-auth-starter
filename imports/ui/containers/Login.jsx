import { Meteor } from "meteor/meteor";
import { FlowRouter } from "meteor/kadira:flow-router";
import { createContainer } from "meteor/react-meteor-data";

import LoginWrapper from "../components/LoginWrapper.jsx";

export default createContainer(({ params }) => {
  const loggedIn = !!Meteor.user();
  
  if (loggedIn) {
    FlowRouter.go("/");
  }
  
  return {};
}, LoginWrapper);
