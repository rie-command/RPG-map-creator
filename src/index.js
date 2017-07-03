import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import configureStore from "./store/configureStore";
import Container from "./containers/Body";

import "./libs/bootstrap/css/bootstrap-theme.css"
import "./libs/bootstrap/css/bootstrap.css"
import "./libs/bootstrap/fonts/glyphicons-halflings-regular.eot"
import "./libs/bootstrap/fonts/glyphicons-halflings-regular.svg"
import "./libs/bootstrap/fonts/glyphicons-halflings-regular.ttf"
import "./libs/bootstrap/fonts/glyphicons-halflings-regular.woff"
import "./libs/bootstrap/fonts/glyphicons-halflings-regular.woff2"
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css"

import "./style/style.less"

//создаем хранилище
const store = configureStore();

//Это вход в прилоденние, те тут вся ооснова основ
render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
);