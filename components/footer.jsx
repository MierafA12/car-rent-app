import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';


const footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
        <Icon style={styles.home} name = 'home' onPress={()=> navigation.navigate("Home")}/>
        <Icon style={styles.home} name = 'heart' onPress={()=> navigation.navigate("Favorite")}/>
        <Icon style={styles.home} name = 'person'onPress={()=> navigation.navigate("Account")} />
    </View>
    
  )
}
const styles=StyleSheet.create({
    footer: {
    backgroundColor: '#003049',
    padding: 20,
    width: '100%',
    borderRadius: 10,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
      },
      home:{
        fontSize: 30,
        color: '#ECAE36',	
      }
});

export default footer

