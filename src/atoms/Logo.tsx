//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Logo = () => {
    return (
        <View style={styles.logo}>
            <Text style={styles.title}>Tweet Downloader</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    title:{
        color:'white',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0)',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        textAlignVertical:'center',
        textAlign:'center',
        fontSize:20,
    },
    logo:{
        backgroundColor:'rgba(0,0,0,0)',
        width:'50%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Logo;
