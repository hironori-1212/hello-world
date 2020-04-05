import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.appbar}>
                    <View>
                        <Text style={styles.appbarText}>Memo</Text>
                    </View>
                </View>

                <View style={styles.memoList}>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2020/04/04</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2020/04/04</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2020/04/04</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2020/04/04</Text>
                    </View>

                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2020/04/04</Text>
                    </View>

                    <View style={styles.memoAddButton}>
                        <Text style={styles.memoAddButtonTitle}>+</Text>
                    </View>
                </View>
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

    memoList: {
        width: '100%',
        backgroundColor: '#DDD',
        flex: 1,
        paddingTop: 78,
    },

    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff'
    },

    memoTitle: {
        fontSize: 18,
        marginBottom: 4,
    },

    memoDate: {
        fontSize: 12,
        color: '#707070',
    },

    memoAddButton: {
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

    memoAddButtonTitle: {
        fontSize: 30,
        color: '#FFFFFF',
        lineHeight: 30,
    }
});