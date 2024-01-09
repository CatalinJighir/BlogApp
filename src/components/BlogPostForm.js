import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function BlogPostForm({ onSubmit, initialValues }) {

    const initialTitle = initialValues && initialValues.title ? initialValues.title : '';
    const initialContent = initialValues && initialValues.content ? initialValues.content : '';

    const [title, setTitile] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);

    return (
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                value={title}
                onChangeText={(newTitle) => setTitile(newTitle)}
                style={styles.input}
            />
            <Text style={styles.label}>Enter Input:</Text>
            <TextInput
                value={content}
                onChangeText={(newContent) => setContent(newContent)}
                style={styles.input}
            />
            <Button
                title="Save Blog"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 15,
        borderRadius: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5
    }
});
