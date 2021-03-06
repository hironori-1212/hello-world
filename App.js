import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './src/components/AppBar';
import MemoListScreen from './src/screens/MemoListScreen';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppBar />
                <MemoListScreen />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2D6D9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
