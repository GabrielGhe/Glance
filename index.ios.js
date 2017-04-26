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
  Keyboard,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import Icon from 'react-native-vector-icons/FontAwesome';

// https://www.youtube.com/watch?v=xDlfrcM6YBk

export default class Glance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isBottom: false,
            keyboardHeight: 0
        };
    }

    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._onKeyboardDidShow)
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._onKeyboardDidHide)
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    _onScroll = (e) => {
        var { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
        var slideAmount = 50;
        var screenSize = Math.max(contentSize.height, layoutMeasurement.height);
        var currentPositionBottom = layoutMeasurement.height + contentOffset.y;
        var threshold = screenSize + slideAmount
        var isBottom = (currentPositionBottom - threshold) >= 0;
        this.setState({
            isBottom
        });
    }

    _onKeyboardDidShow = (e) => {
        let newSize = e.endCoordinates.height;
        this.setState({
            keyboardHeight: newSize
        })
    }

    _onKeyboardDidHide = (e) => {
        this.setState({
            keyboardHeight: 0
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
                <View style={styles.header}>
                  <Icon name="star" size={24} style={styles.starIcon} />

                  <Icon name="user" size={24} style={styles.profileIcon} />
                </View>

                <KeyboardAwareScrollView style={styles.container}
                  onScroll={this._onScroll}
                  onScrollEndDrag={this._onScrollLetGo}
                  scrollEventThrottle={400}
                >
                    <View style={styles.card}>

                        <View style={{padding: 20, height: 140}}>
                            <AutoGrowingTextInput
                              style={styles.growingText}
                              placeholder="Front side of the card"
                              onChangeText={(text) => this.setState({text})}
                            />
                        </View>

                        <View style={{
                          margin: 10,
                          height: 1,
                          backgroundColor: '#979797',
                          opacity: 0.19
                        }}></View>

                        <View style={{padding: 20, height: 140}}>
                            <AutoGrowingTextInput
                              style={styles.growingText}
                              placeholder="Back side of the card"
                              onChangeText={(text) => this.setState({text})}
                            />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6'
    },
    header: {
        height: 50,
        paddingTop: 20,
        backgroundColor: '#BD7E4A',
        flexDirection: 'row'
    },
    starIcon: {

    },
    profileIcon: {

    },
    card: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 20
    },
    growingText: {
        height: 40,
        fontSize: 18
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Glance', () => Glance);
