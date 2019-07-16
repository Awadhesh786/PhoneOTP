import React, { Fragment } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function({user, onLogoutPress }) {
  const { phoneNumber, email } = user

  return (
    <Fragment>
        <View>
        <Text style={styles.label}>Your Phone Number</Text>
        <Text style={styles.text}>{phoneNumber ? `+${phoneNumber.countryCode} ${phoneNumber.number}` : 'N/A'}</Text>

        <Text style={styles.label}> your Email</Text>
        <Text style={styles.text}>{email || 'NA'}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onLogoutPress}>
        <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  
  button: {
    height: 50,
    width: 300,
    backgroundColor: '#3581D8',
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#EFEFEF',
    fontWeight: 'bold',
  },

  label: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
