/**
 * Created by sinires on 03.07.17.
 */

import React, {PropTypes, Component} from "react";

import {Stage, Sprite, TilingSprite, Text} from 'react-pixi';
import {Point, DisplayObject, utils} from 'pixi.js'

export default class Map extends Component {
    render() {
        return (
           <div>
               {        utils.sayHello('WebGL')}
               <Stage width={500} height={500}>
                   <Sprite x="0" y="0" rotation="1" />
               </Stage>;
           </div>
        )
    }
}