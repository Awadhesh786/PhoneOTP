import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Alert, StatusBar } from 'react-native';
import AccountKit from 'react-native-facebook-account-kit';
import colors from '../component/Colors';

import NotAuthenticated from '../component/NotAuthenticated';
import Authenticated from '../component/Authenticated';

import IndiaHome from '../screen/IndiaHome';

export default function() {

  navigationOptions = {
    headerMode: 'none'
  }
  
  const [loading, setLoading] = useState(true)
  const [authToken, setAuthToken] = useState(null)
  const [loggedAccount, setLoggedAccount] = useState(null)

  async function configureAccountKit() {
    AccountKit.configure({
      defaultCountry: 'IN',
      initialEmail: '',
      initialPhoneCountryPrefix: '+91',
    })
  }

  async function getCurrentUser() {
    try {
      setLoading(true)
      const token = await AccountKit.getCurrentAccessToken()

      if (token) {
        const account = await AccountKit.getCurrentAccount()
        setAuthToken(token)
        setLoggedAccount(account)
      }
    } catch (err) {
      Alert.alert(`Failed to get current access token: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  async function handleLoginWithPhonePressed() {
    try {
      const token = await AccountKit.loginWithPhone()

      if (!token) {
        Alert.alert('User cancelled the login with phone action!')
        return
      }

      setAuthToken(token)
      getCurrentUser()
    } catch (err) {
      Alert.alert(`Failed to login with phone ${err.message}`)
    }
  }

  async function handleLoginWithEmailPressed() {
    try {
      const token = await AccountKit.loginWithEmail()

      if (!token) {
        Alert.alert('User cancelled the login with email action!')
        return
      }

      setAuthToken(token)
      getCurrentUser()
    } catch (err) {
      Alert.alert(`Failed to login with email ${err.message}`)
    }
  }

  async function handleLogoutPress() {
    try {
      await AccountKit.logout()
      setAuthToken(null)
      setLoggedAccount(null)
    } catch (err) {
      Alert.alert(`Failed to logout ${err.message}`)
    }
  }

  useEffect(() => {
    configureAccountKit()
    getCurrentUser()
  }, [])

  return (
    
    <View style={styles.container}>
      <StatusBar 
        barStyle = "dark-content" 
        //hidden = {false} 
        backgroundColor = {colors.statubar}
        //translucent = {true}
        />
      {loading && <ActivityIndicator size="large" />}

      {!loading && !loggedAccount && (
        <NotAuthenticated
          onLoginWithPhonePress={handleLoginWithPhonePressed}
          onLoginWithEmailPress={handleLoginWithEmailPressed}
        />
      )}

      {!loading && loggedAccount && (
        <Authenticated token={authToken} user={loggedAccount} onLogoutPress={handleLogoutPress} />,
        <IndiaHome />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.statubar
  },
})