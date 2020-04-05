import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class CircleButton extends React.Component{
    render(){
        return(
            <View style={styles.circleButton}>
                    <Text style={styles.circleButtonTitle}>
                        {this.props.children}
                    </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        backgroundColor: '#463973',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

    circleButtonTitle: {
        fontSize: 30,
        color: '#FFFFFF',
        lineHeight: 30,
    }
});

export default CircleButton;