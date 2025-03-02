import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import ProductCards from '../components/ProductCards';

import StitchImage from '../images/stitch.jpeg';
import SabrinaImage from '../images/SabrinaCarpenter.png';
import WickedImage from '../images/91687_WickedPart1_MagicalWiseOnes_2PK_POP_GLAM-WEB.png';
import GroguImage from '../images/80010_POP-HORIZONTAL_SW-Mandalorian_Grogu_Pram_-GLAM-WEB.webp';


const HomeScreen = ({navigation})=>{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Funko</Text>

      <ScrollView>
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => 
            navigation.navigate('ProductDetails', { 
              title: 'Hula Stitch - Lilo & Stitch',
              subtitle: 'POP!', 
              price: 22.95, 
              image: StitchImage })}>

            <ProductCards
              title="Hula Stitch - Lilo & Stitch"
              subtitle="POP!"
              price={22.95}
              image={StitchImage}
            />
        </TouchableOpacity>

        <TouchableOpacity 
          style = {styles.button}
            onPress={() => 
              navigation.navigate('ProductDetails', { 
                title: 'Sabrina Carpenter Night Gown', 
                subtitle: 'POP! Rock', 
                price: 16, 
                image: SabrinaImage })}>

            <ProductCards
              title="Sabrina Carpenter Night Gown"
              subtitle="POP! Rock"
              price={16}
              image={SabrinaImage}
            />
        </TouchableOpacity>

        <TouchableOpacity 
          style = {styles.button}
          onPress={() => 
            navigation.navigate('ProductDetails', { 
              title: 'POP! Wicked 2-Pack', 
              subtitle:'POP!', 
              price: 30, 
              image: WickedImage })}>

            <ProductCards
              title="POP! Wicked 2-Pack"
              subtitle="POP!"
              price={30}
              image={WickedImage}
            />
        </TouchableOpacity>

        <TouchableOpacity 
          style = {styles.button}
          onPress={() => 
            navigation.navigate('ProductDetails', { 
              title: 'GROGU IN PRAM (HOLIDAY) - STAR WARS', 
              subtitle:'POP!', 
              price: 16, 
              image: GroguImage })}>

            <ProductCards
              title="GROGU IN PRAM (HOLIDAY) - STAR WARS"
              subtitle="POP!"
              price={16}
              image={GroguImage}
            />
        </TouchableOpacity>
        </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
},
  
});

export default HomeScreen;