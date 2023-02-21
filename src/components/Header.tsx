//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../atoms/Logo';
import Buttons from '../atoms/Buttons';
// create a component
const Header = () => {
    return (
        <View style={styles.menu}>
            <Logo/>
            <Buttons/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    menu:{
        flex: 0.5,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        flexDirection:'row',
    },
});

//make this component available to the app
export default Header;
