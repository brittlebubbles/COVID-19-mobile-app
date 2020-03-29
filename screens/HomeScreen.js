import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Item,
  Icon,
  Input,
  Title
} from "native-base";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Ionicons } from "@expo/vector-icons";
import _ from "lodash";

export default class CountryScreen extends Component {
  _renderItem = ({ item, index }) => {
    return (
      <Content padder>
        <View
          style={[
            styles.itemContainer,
            styles.image,
            { background: item.image }
          ]}
        >
          <Content padder>
            <Image
              style={styles.image}
              source={item.image}
              marginTop={1}
              marginBottom={-15}
              borderRadius={20}
              style={{ height: 300, width: 350, flex: 1 }}
            />
          </Content>
        </View>
      </Content>
    );
  };

  render() {
    const dataSource = [
      { name: "TURQUOISE", image: require("../assets/a1.jpg") },
      { name: "EMERALD", image: require("../assets/a2.jpg") },
      { name: "EMERALD", image: require("../assets/a3.jpg") },
      { name: "EMERALD", image: require("../assets/a4.jpg") }
    ];

    return (
      <View>
        <Header>
          <Body>
            <Title>Be Safe</Title>
          </Body>
        </Header>
        <FlatList
          data={dataSource}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 50,
    flex: 1,
    paddingTop: 100
  },
  itemContainer: {
    // borderRadius: 5,
    padding: 1,
    height: 100
  },

  // itemName: {
  //   fontSize: 13,
  //   color: "#000",
  //   fontWeight: "600"
  // },

  image: {
    flex: 1,
    height: "100%",
    // width: 500,
    // resizeMode: "cover"
    // borderRadius: 5,
    // padding: -90
    // marginVertical: 8,
    // height: 200,
    marginTop: -10,
    marginBottom: -5
    // position: "relative"
  }
});
