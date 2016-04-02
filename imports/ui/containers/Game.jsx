import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

import GameView from "../components/GameView.jsx";
import Auth from "../mixins/Auth.jsx";

export default createContainer(({ params }) => {
  
  
  return {

  };
}, Auth(GameView));
