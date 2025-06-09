import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import BlogCards from '../components/BlogCards.js'; 

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
        console.log(data.items); 
        setPosts(data.items.map((item) => ({
          id: item._id,
          title: item.fieldData?.name || 'No title',  
          image: item.fieldData?.["thumbnail-image"] ? { uri: item.fieldData["thumbnail-image"].url } : null, 
          date: item.fieldData?.['publish-date'] || 'No date', 
          summary: item.fieldData?.['post-summary'] || 'No summary available',  
          content: item.fieldData?.['post-body'] || 'No content available',  
        })))
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Blog 📚</Text>
      {posts.map((post) => (
        <TouchableOpacity key={post.id} style={styles.postContainer} onPress={() => navigation.navigate('BlogDetails', { post })}>
          {post.image ? (
            <Image source={post.image} style={styles.image} />
          ) : (
            <Text>No Image Available</Text>
          )}
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text style={styles.postDate}>{post.date}</Text>
          <Text style={styles.postContent}>
            {post.summary}
          </Text>
        </TouchableOpacity>
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
},
  postContainer: { 
    marginBottom: 30 
},
  postTitle: { 
    fontSize: 20, 
    fontWeight: 'bold' 
},
  postDate: { 
    fontSize: 14, 
    color: 'gray' 
},
  postContent: { 
    fontSize: 16, 
    marginTop: 10,
},
  image: { 
    width: '100%', 
    height: 200, 
    marginBottom: 10 
}
});

export default Blogs;
