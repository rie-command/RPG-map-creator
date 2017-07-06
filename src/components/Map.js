/**
 * Created by sinires on 03.07.17.
 */

import React, {PropTypes, Component} from "react";

import {Stage, Sprite, TilingSprite, Text} from 'react-pixi';
import {Point, DisplayObject, utils} from 'pixi.js'
import Hex from '../components/Hex'

export default class Map extends Component {
    render() {
        return (
           <div>
               {        utils.sayHello('WebGL')}
               <Stage width={500} height={500}>
                   <Hex />
                   <Text text="Vector text" x={20} y={10} key="2" />
               </Stage>;
           </div>
        )
    }
}