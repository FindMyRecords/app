import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Button from 'material-ui/Button';
import Sidebar from './components/sidebar/Sidebar';
import Results from './components/results/Results';
import ModalWelcome from './components/modals/ModalWelcome';

render(
  <div>
    <Sidebar/>
    <Results/>
    <ModalWelcome/>
  </div>,
  document.getElementById("root")
);