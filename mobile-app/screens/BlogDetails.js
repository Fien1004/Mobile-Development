import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


// Component voor het weergeven van de details van een blogpost
const BlogDetails = ({ route }) => {
  const { post } = route.params;

  // Functie om HTML-tags uit de inhoud te verwijderen
  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Titel van de blogpost */}
      <Text style={styles.title}>{post.title}</Text>

      {/* Toon afbeelding als die beschikbaar is, anders een fallback tekst */}
      {post.image ? (
        <Image source={post.image} style={styles.image} />
      ) : (
        <Text>No Image Available</Text>
      )}

      {/* Datum van de blogpost */}
      <Text style={styles.date}>{post.date}</Text>
      
      {/* Inhoud van de blogpost, HTML-tags worden verwijderd */}
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
