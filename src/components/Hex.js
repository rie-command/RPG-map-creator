/**
 * Created by sinires on 03.07.17.
 */
import React, {PropTypes, Component} from "react";

import {Stage, Sprite, TilingSprite, Text} from 'react-pixi';
import {Point, DisplayObject, utils} from 'pixi.js';

import * as Textures  from '../textures/Hex'

export default class Hex extends Component {
    get x12(){
    return 12;
        // const {x} = this.props;
        // return x * this.width;
    }

    get y12(){

        return 12;
        const {y} = this.props;
        return y * this.height;
    }

    get width12(){

        return 12;
        const {width, zoom} = this.props;
        return width/zoom;
    }

    get height12(){

        return 12;
        const {height, zoom} = this.props;
        return height/zoom;
    }

    render() {
        const {width, height, zoom, texture} = this.props;
        console.info(Textures)
        console.info(Textures[texture])
        console.info(width)
        console.info(height);
        return (
           <Sprite texture={Textures[texture]} width={width/zoom} height={height/zoom} />
        )
    }
}

Hex.PropTypes = {
    x: 0,
    y: 0,
    width: PropTypes.number,
    height: PropTypes.number,
    texture: PropTypes.string,
    zoom: PropTypes.number
};

Hex.defaultProps = {
    zoom: 2,
    width: 280,
    x: 0,
    y: 0,
    height: 243,
    texture: 'base'
};