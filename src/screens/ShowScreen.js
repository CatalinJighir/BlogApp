import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons'

export default function ShowScreen({ route, navigation }) {

    const { id } = route.params;
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={styles.editPost}
                    onPress={() => navigation.navigate('Edit', { id })}
                >
                    <Text style={styles.title}>Edit blog</Text>
                    <EvilIcons name="pencil" size={30} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    editPost: {
        flexDirection: 'row',
        backgroundColor: 'aqua',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 5,
    },
    title: {
        fontSize: 18,
    },
});
