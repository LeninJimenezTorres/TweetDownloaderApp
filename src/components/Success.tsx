//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const Success = ({data}:any) => {
    return (
        <View style={styles.container}>
            {
                data.thumbnail?
                <Image
                    style={styles.image}
                    source={{uri: data.thumbnail}}
                />
                :
                <Text>NAda aun</Text>
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    image: {
        flex: 1,
        width:'100%',
        justifyContent: 'center',
    },
});

//make this component available to the app
export default Success;
