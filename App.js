import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RNAccountKit from 'react-native-facebook-account-kit';

class App extends React.Component {
  render(){

    RNAccountKit.configure({
      responseType: 'code', // 'token' by default,
      // titleType: 'login',
      // initialAuthState: '',
      initialEmail: 'some.initial@email.com',
      initialPhoneCountryPrefix: '+91', // autodetected if none is provided
      // initialPhoneNumber: '123-456-7890',
      // facebookNotificationsEnabled: true|false, // true by default
       readPhoneStateEnabled: true, // true by default,
      // countryWhitelist: ['AR'], // [] by default
      // countryBlacklist: ['US'], // [] by default
      defaultCountry: 'IN',
      // theme: {
      //   // for iOS only, see the Theme section
      // },
      // viewControllerMode: 'show'|'present', // for iOS only, 'present' by default
       getACallEnabled: true,
       setEnableInitialSmsButton: true, // true by default
    })
    
    // Shows the Facebook Account Kit view for login via SMS
    RNAccountKit.loginWithPhone()
      .then((token) => {
        if (!token) {
          console.log('Login cancelled')
        } else {
          console.log(`Logged with phone. Token: ${token}`)
        }
      })
    

    return(
      <View style={{justifyContent:"center", alignSelf:"center", flex:1}}>
        <Text style={{color:"red"}}>Hello ji </Text>
      </View>
    );
  }
};


export default App;
