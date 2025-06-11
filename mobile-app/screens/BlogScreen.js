import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BlogCard from '../components/BlogCards.js';

const Blogs = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.webflow.com/v2/collections/67bc2fbfc4a256d60993f2a7/items", {
      headers: {
        Authorization:
          "Bearer 860bc419412a33bc1995b980032083d3f799b13c20b24a3273fdfc3809f1cffe",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("API error: " + response.status);
        return response.json();
      })
      .then((data) => {
        setPosts(data.items.map((item) => ({
          id: item._id,
          title: item.fieldData?.name || 'No title',
          image: item.fieldData?.["thumbnail-image"] ? { uri: item.fieldData["thumbnail-image"].url } : null,
          date: item.fieldData?.['publish-date'] || 'No date',
          summary: item.fieldData?.['post-summary'] || 'No summary available',
          content: item.fieldData?.['post-body'] || 'No content available',
        })));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Blogs</Text>
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          image={post.image}
          date={post.date}
          post={post.summary}
          onPress={() => navigation.navigate('BlogDetails', { post })}
        />

      ))}
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
  }
});

export default Blogs;
