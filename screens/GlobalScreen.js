import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Title
} from "native-base";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import _ from "lodash";

export default class GlobalScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: []
    };
  }

  componentDidMount() {
    const uri = "https://corona.lmao.ninja/all";
    fetch(uri)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: [responseJson]
        });
      });
  }

  _renderItem = ({ item, index }) => {
    return (
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text style={{ fontSize: 15 }}>Global</Text>

              <Text style={{ fontSize: 19 }}>Coronavirus Cases</Text>
              <Text style={{ fontSize: 35, paddingBottom: 5 }}>
                {item.cases}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{ fontSize: 15 }}>Global</Text>

              <Text style={{ fontSize: 19 }}>Deaths</Text>
              <Text style={{ fontSize: 35, paddingBottom: 5 }}>
                {item.deaths}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{ fontSize: 15 }}>Global</Text>

              <Text style={{ fontSize: 19 }}>Recovered</Text>
              <Text style={{ fontSize: 35, paddingBottom: 5 }}>
                {item.recovered}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  };

  render() {
    return (
      <View>
        <Header>
          <Body>
            <Title>Global Coronavirus Information</Title>
          </Body>
        </Header>
        <FlatList
          data={_.values(this.state.dataSource)}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
