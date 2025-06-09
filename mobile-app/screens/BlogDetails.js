import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const BlogDetails = ({ route }) => {
  const { post } = route.params;

  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      {post.image ? (
        <Image source={post.image} style={styles.image} />
      ) : (
        <Text>No Image Available</Text>
      )}
      <Text style={styles.date}>{post.date}</Text>
      <Text style={styles.content}>{stripHtmlTags(post.content)}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    backgroundColor: '#fff' 
},
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 20 
},
  date: { 
    fontSize: 14, 
    color: 'gray', 
    marginBottom: 5, 
},
  content: { 
    fontSize: 16, 
    marginTop: 10,
    marginBottom: 40,
},
  image: { 
    width: '100%', 
    height: 200, 
    marginBottom: 10 }
});

export default BlogDetails;
