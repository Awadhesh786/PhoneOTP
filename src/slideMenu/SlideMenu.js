import React, { Component } from 'react';
import { View ,Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, Share} from "react-native";
import styles from '../css/SlideStyle';
export default class slideMenu extends Component{
    
onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'India Jobs (a helping hand to job seekers) is now available on play store.'+ 
        '\n Download it to get job walk-ins information in India.' + 
        '\n Link - http://bit.ly/indiajobsfresher'
    });

  } catch (error) {
    alert(error.message);
  }
};

  render(){
      return (
          <View>
            <ScrollView>
            <TouchableOpacity         
              onPress={()=> this.props.navigation.navigate("Profile")}         
              style={styles.card}>
                <Image
                  source={require('../image/user.png')}
                  style={styles.userImg} />
            </TouchableOpacity>         
            
            <TouchableOpacity
              onPress={()=> this.props.navigation.navigate("IndiaHome")}
              style={styles.subCard}>
               <Text style={styles.txt}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=> this.props.navigation.navigate("AdminPanel")}
              style={styles.subCard}>
               <Text style={styles.txt}>Admin Panel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={ ()=> Linking.openURL('https://sacredbits.com/jobs/') }
              style={styles.subCard}>
               <Text style={styles.txt}>Visit Site</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=> this.props.navigation.navigate("Story")}
              style={styles.subCard}>
               <Text style={styles.txt}>Our Story</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=> this.onShare()}
              style={styles.subCard}>
               <Text style={styles.txt}>Invite</Text>
            </TouchableOpacity>
            </ScrollView>
          </View>
       );
  }
}