import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';



export default function Menu() {
  return (
    <ImageBackground
      source={require('../../assets/images/Food1.png')} // Replace with your image path
      resizeMode="cover" // or "contain", depending on what you need
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>{`Welcome to`}</Text>
          <Text style={styles.title}>{`Dream Eats`}</Text>


        </View>


        <View style={styles.btnContainer}>

          <Link href={'./'} asChild>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons name={'food-takeout-box-outline'} size={25} color={Colors.iconLight} />
              <Text style={styles.btnText}>Pick Up</Text>
              <LinearGradient
                colors={['transparent', 'rgba(255,255,255,0.125)']}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.innerShadow}
              />
            </TouchableOpacity>
          </Link>



          <Link href={'./'} asChild>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons name={'car-outline'} size={25} color={Colors.iconLight} />
              <Text style={styles.btnText}>Delivery</Text>
              <LinearGradient
                colors={['transparent', 'rgba(255,255,255,0.125)']}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.innerShadow}
              />
            </TouchableOpacity>
          </Link>

          <View style={{
            paddingHorizontal: 100,
          }}>
            <Link href={'./'} asChild>
              <TouchableOpacity style={styles.buttonSmall}>
                <Text style={styles.btnSText}>Order Catering</Text>
                <LinearGradient
                  colors={['transparent', 'rgba(255,255,255,0.125)']}
                  start={{ x: 0.5, y: 0.5 }}
                  end={{ x: 0.5, y: 1 }}
                  style={styles.innerShadow}
                />
              </TouchableOpacity>
            </Link>
          </View>

        </View>
      </View>
      <StatusBar style="light"/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  welcomeContainer: {
    position: 'absolute',
    top: 100,
    left: 30,

  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: Fonts.title,
    color: Colors.primary
  },
  welcome: {
    fontSize: 28,
    fontWeight: '500',
    letterSpacing: 1,
    fontFamily: Fonts.title,
    color: Colors.primary

  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingBottom: 20,
    gap: 15,
  },
  btnText: {
    color: Colors.paleAqua,
    fontFamily: Fonts.button,
    fontSize: 20,


  },
  button: {
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    // Add these properties for Android elevation
    elevation: 4,

    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 9001,
  },
  innerShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 9001,
  },
  buttonSmall: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 8,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 9001,
  },
  btnSText: {
    color: Colors.paleAqua,
    fontFamily: Fonts.button,
    fontSize: 16,
  },





});
