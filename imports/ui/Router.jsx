import React from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from "react-mounter";

import Layout from "./components/layouts/Layout.jsx";
import GameLayout from "./components/layouts/GameLayout.jsx";

import Game from "./containers/Game.jsx";
import Login from "./containers/Login.jsx";

export default function () {
  
  FlowRouter.route("/", {
    action () {
      mount(GameLayout, {
        content: () => <Game /> });
    }
  });

  FlowRouter.route("/login", {
    action () {
      mount(Layout, {
        content: () => <Login /> });
    }
  });

  
}
