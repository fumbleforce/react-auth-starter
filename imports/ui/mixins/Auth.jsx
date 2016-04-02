import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import { FlowRouter } from "meteor/kadira:flow-router"


export default function (component) {
  return createContainer(({ params }) => {
    const loggedIn = !!Meteor.user();
    const loggingIn = Meteor.loggingIn();
    const path = FlowRouter.current().path;
    
    console.log("[Auth] Logged in:", loggedIn, "Authenticating:", loggingIn);
    
    if (loggingIn) {
      return { loggingIn };
    }
    
    if (!loggedIn && path !== "/login") {
      FlowRouter.go("/login");
    }
    
    return {
      loggingIn,
      loggedIn
    };
  }, component);
}
