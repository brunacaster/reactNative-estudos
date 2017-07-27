import React from 'react';
import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native';
import FadeInView from './FadeInView.js';
import BounceElement from './BounceElement.js';

export default class Splash extends React.Component {
    render() {
        return (

            <View style={styles.container}>

                <FadeInView style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    }}>
                    <Image style={styles.backgroundImage}
                    source={require('./Background.jpg')}
                    />
                </FadeInView>

                <BounceElement style={styles.container}>
                    <Text style={styles.titlePage}>Hello!</Text>
                </BounceElement>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    titlePage: {
      fontSize: 80,
      color: '#fff',
    }
});