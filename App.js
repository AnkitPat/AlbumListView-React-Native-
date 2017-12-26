import React from 'react';
import { AppRegistry,StyleSheet, Text, View } from 'react-native';
import Header from "./src/module/Header";
import Style from "./src/stylesheet/Style";
import AlbumList from "./src/module/AlbumList";
import Album from "./src/module/Album";

export default class App extends React.Component {
  render() {
    return (
      <View style={Style.rootContainer}>
          <Header
          headerText={'Albums'}
          />

          <AlbumList/>
       </View>
    );
  }
}