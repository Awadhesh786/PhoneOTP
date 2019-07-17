import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../css/AuthenticatedStyle';

export default function({user, onLogoutPress }) {
  const { phoneNumber, email } = user

  return (
        <View style={styles.container}>
          <Image
              source={require('../image/user.png')}
              style={styles.userImage} />
        <Text style={styles.label}>Your Phone Number</Text>
        <Text style={styles.text}>{phoneNumber ? `+${phoneNumber.countryCode} ${phoneNumber.number}` : 'N/A'}</Text>

        <Text style={styles.label}> Your Email</Text>
        <Text style={styles.text}>{email || 'NA'}</Text>

        <TouchableOpacity style={styles.button} onPress={onLogoutPress}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        </View>
  );
}