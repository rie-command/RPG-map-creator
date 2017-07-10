/**
 * Created by sinires on 03.07.17.
 */
import React, {PropTypes, Component} from "react";

import {Stage, Sprite, TilingSprite, Text} from 'react-pixi';
import {Point, DisplayObject, utils} from 'pixi.js';

import * as Textures  from '../textures/Hex'

export default class Hex extends Component {
    constructor(props){
        super(props);
    }

    get x(){
        const {x, y, padding} = this.props;

        if(y % 2)
            return x * (this.width + padding);
        return x * (this.width + padding) - this.width/2
    }

    get y(){
        const {y, padding} = this.props;
        if(y === 0)
            return y * (this.height + padding);
        return y * (this.height + padding) - (this.height/4)*y;
    }

    get width(){
        const {width, zoom} = this.props;
        return width/zoom;
    }

    get height(){
        const {height, zoom, y} = this.props;
        return height/zoom;
    }

    render() {
        const {texture} = this.props;
        return (
           <Sprite texture={Textures[texture]} x={this.x} y={this.y} width={this.width} height={this.height} />
        )
    }
}

Hex.PropTypes = {
    x: 0,
    y: 0,
    width: PropTypes.number,
    height: PropTypes.number,
    texture: PropTypes.string,
    zoom: PropTypes.number,
    padding: PropTypes.number
};

Hex.defaultProps = {
    zoom: 3,
    width: 243,
    x: 0,
    y: 0,
    height: 280,
    padding: -2,
    texture: 'base'
};