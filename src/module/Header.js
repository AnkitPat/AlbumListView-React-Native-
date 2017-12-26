import Style from "../stylesheet/Style";
import React,{Component} from 'react';

import {View,Text} from 'react-native'
import PropTypes from 'prop-types'

export default class Header extends Component {
    render() {
        return(

            <View style={Style.headerRootContainer}>
                <Text style={Style.headerText}>{this.props.headerText}</Text>
            </View>
        );
    }

}

Header.propTypes = {
    headerText: PropTypes.string.isRequired
};