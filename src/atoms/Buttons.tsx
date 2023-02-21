//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const donationsIcon = require('../galery/donations.png');
const authorIcon = require('../galery/author.png');

// create a component
const Buttons = ({ navigation }:any) => {
    return (
        <View style={styles.optionsMenu}>
            <View onTouchStart={() => navigation.navigate('Author')} style={styles.buttons}>
                <ImageBackground source={authorIcon} resizeMode="contain" style={styles.image}>
                </ImageBackground>
            </View>
            <View onTouchStart={() => navigation.navigate('Donations')} style={styles.buttons}>
                <ImageBackground source={donationsIcon} resizeMode="contain" style={styles.image}>
                </ImageBackground>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    optionsMenu:{
        backgroundColor:'rgba(0,0,0,0)',
        width:'50%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        flexDirection:'row',
    },
    buttons:{
        borderRadius:1000,
        backgroundColor:'white',
        width:'30%',
        height:'60%',
        marginLeft:'10%'
    },
    image: {
        flex: 1,
        width:'100%',
        justifyContent: 'center',
    },
});

//make this component available to the app
export default Buttons;
