import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class MemoList extends React.Component{
    render(){
        return(
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

                    
                </View>
        );
    }
}


const styles = StyleSheet.create({
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

});

export default MemoList;