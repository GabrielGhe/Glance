/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class Glance extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 50, backgroundColor: 'powderblue'}} />

                <View style={{
                  flex: 1,
                  flexDirection: 'column'
                }}>

                    <View style={{padding: 10}}>
                        <TextInput
                          style={{height: 40}}
                          placeholder="Type your question"
                          onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <View style={{
                      margin: 20,
                      height: 1,
                      backgroundColor: 'powderblue'
                    }}></View>

                    <View style={{padding: 10}}>
                        <TextInput
                          style={{height: 40}}
                          placeholder="Type your answer"
                          onChangeText={(text) => this.setState({text})}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Glance', () => Glance);
