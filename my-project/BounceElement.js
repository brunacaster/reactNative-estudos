import React from 'react';
import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native';

export default class BounceElement extends React.Component {
    state = { 
        bounceAnim: new Animated.Value(0), 
    }
    constructor(props) {
        super(props);
    } 

  componentDidMount() {
    Animated.timing(
      this.state.bounceAnim,
      { 
        toValue: 1, 
        duration: 1000,
        easing: Easing.bounce 
      }
    ).start();
  }

  render() {

    let { fadeAnim } = this.state;

    return (
        <Animated.View
        style={{
            opacity: this.bounceAnim,
            transform: [{
                translateY: this.state.bounceAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                }),
            }],
        }}>
        {this.props.children}
        </Animated.View>
    );
  }
}