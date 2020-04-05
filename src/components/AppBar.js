import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class AppBar extends React.Component{
    render(){
        return(
            <View style={styles.appbar}>
                <View>
                    <Text style={styles.appbarText}>MEMOT</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    appbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 78,
        paddingTop: 30,
        backgroundColor: '#D96666',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },

    appbarText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default AppBar;