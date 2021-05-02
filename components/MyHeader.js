import React, { Component } from "react";
import { Header, Icon } from "react-native-elements";
import { View, Text } from "react-native";

export default class MyHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name="menu"
            type="feather"
            color="#fff"
            // onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
        centerComponent={{
          text: this.props.title,
          style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
        }}
        rightComponent={<Icon color="#fff" type="feather" name="bell" />}
        backgroundColor="#171F33"
      />
    );
  }
}
