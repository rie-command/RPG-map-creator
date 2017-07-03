/**
 * Created by sinires on 18.07.16.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux"

import Map from "../components/Map"

function mapStateToProps (state) {
    return {
        // phone: state.phone
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // phoneActions: bindActionCreators(phoneActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)