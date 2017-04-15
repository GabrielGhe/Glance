/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Dimensions from 'Dimensions';
import React, { Component } from 'react';
import {
  Animated,
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';


import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

// https://www.youtube.com/watch?v=xDlfrcM6YBk

export default class Glance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isBottom: false
        };
    }

    _onScroll = (e) => {
        var { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
        var slideAmount = 50;
        var screenSize = Math.max(contentSize.height, layoutMeasurement.height);
        var isBottom = layoutMeasurement.height + contentOffset.y >= screenSize + slideAmount;
        this.setState({
            isBottom
        });
    }

    _onScrollLetGo = (e) => {
        if (this.state.isBottom) {
            console.log('Should save');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />

                <ScrollView style={styles.container}
                  onScroll={this._onScroll}
                  onScrollEndDrag={this._onScrollLetGo}
                  scrollEventThrottle={400}
                >
                    <View style={{
                      flex: 1,
                      flexDirection: 'column'
                    }}>

                        <View style={{padding: 20}}>
                            <AutoGrowingTextInput
                              style={{ height: 40, fontSize: 20}}
                              placeholder="Type Question"
                              onChangeText={(text) => this.setState({text})}
                            />
                        </View>

                        <View style={{
                          margin: 20,
                          height: 1,
                          backgroundColor: 'powderblue'
                        }}></View>

                        <View style={{padding: 20}}>
                            <AutoGrowingTextInput
                              style={{height: 40, fontSize: 20}}
                              placeholder="Type Answer"
                              onChangeText={(text) => this.setState({text})}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
      height: 50,
      backgroundColor: 'powderblue'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Glance', () => Glance);
