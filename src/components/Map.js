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
               <Stage width={1000} height={500}>
                   <Hex x={0} y={-1}/>
                   <Hex x={1} y={-1}/>
                   <Hex x={2} y={-1}/>
                   <Hex x={3} y={-1}/>
                   <Hex x={4} y={-1}/>
                   <Hex x={5} y={-1}/>
                   <Hex x={6} y={-1}/>

                   <Hex x={0} y={0}/>
                   <Hex x={1} y={0}/>
                   <Hex x={2} y={0}/>
                   <Hex x={3} y={0}/>
                   <Hex x={4} y={0}/>
                   <Hex x={5} y={0}/>
                   <Hex x={6} y={0}/>

                   <Hex x={0} y={1}/>
                   <Hex x={1} y={1}/>
                   <Hex x={2} y={1}/>
                   <Hex x={3} y={1}/>
                   <Hex x={4} y={1}/>
                   <Hex x={5} y={1}/>
                   <Hex x={6} y={1}/>

                   <Hex x={0} y={2}/>
                   <Hex x={1} y={2}/>
                   <Hex x={2} y={2}/>
                   <Hex x={3} y={2}/>
                   <Hex x={4} y={2}/>
                   <Hex x={5} y={2}/>
                   <Hex x={6} y={2}/>

                   <Hex x={0} y={3}/>
                   <Hex x={1} y={3}/>
                   <Hex x={2} y={3}/>
                   <Hex x={3} y={3}/>
                   <Hex x={4} y={3}/>
                   <Hex x={5} y={3}/>
                   <Hex x={6} y={3}/>

                   <Hex x={0} y={4}/>
                   <Hex x={1} y={4}/>
                   <Hex x={2} y={4}/>
                   <Hex x={3} y={4}/>
                   <Hex x={4} y={4}/>
                   <Hex x={5} y={4}/>
                   <Hex x={6} y={4}/>

               </Stage>;
           </div>
        )
    }
}