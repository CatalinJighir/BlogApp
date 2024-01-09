import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

export default function IndexScreen({ navigation }) {

    const { state, deleteBlogPost } = useContext(Context);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={styles.addPost} onPress={() => navigation.navigate('Create')}>
                    <Text style={styles.title}>Add blog</Text>
                    <Feather name="plus" size={30} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                style={{ marginTop: 10 }}
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Show', {
                                id: item.id
                            })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name='trash' style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
        color: 'red'
    },
    addPost: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'aqua',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 5,
    }
});
