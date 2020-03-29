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
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import _ from "lodash";

export default class CountryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: []
    };
  }

  componentDidMount() {
    const uri = "https://corona.lmao.ninja/countries";
    fetch(uri)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      });
  }

  _renderItem = ({ item, index }) => {
    return (
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text style={{ fontSize: 30 }}>{item.country} </Text>
              <Text style={{ fontSize: 15 }}>
                Cases: {item.cases} | Today: {item.todayCases}
              </Text>
              <Text style={{ fontSize: 15 }}>
                Deaths: {item.deaths} | Deaths Today: {item.todayDeaths}
              </Text>
              <Text style={{ fontSize: 15 }}>
                Recovered: {item.recovered} | Critical: {item.critical}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  };

  handleSearch = e => {
    const text = e.toLowerCase();
    const data = _.filter(this.state.dataSource);
    this.setState({
      data,
      query: text
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else {
      return (
        <View>
          <Header>
            <Body>
              <Title>Coronavirus by Country</Title>
            </Body>
          </Header>
          <Item style={{ marginLeft: 5, marginRight: 5 }}>
            <Ionicons
              style={{ marginLeft: 10, marginRight: 5 }}
              name="ios-search"
              size={24}
            />
            <Input placeholder="Search" onChangeText={this.handleSearch} />
          </Item>
          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
  }
}
