//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TextInput, Image } from 'react-native';
import Header from '../components/Header';
const tweetBackground = require('../galery/twitter.jpg');
import Success from '../components/Success';

// create a component
const Home = ({ navigation }:any) => {
    const [text, onChangeText] = React.useState('');
    const [status, setStatus] = React.useState("");
    const [url, setUrl] = React.useState("none");
    const [data, setData] = React.useState({});
    const handleSubmit = (e:any) => {
        console.log('HANDLE SUBMIT')
        console.log('URL: '+url);
        process();
      };    
    const handleInput = (e:any) => {
        console.log('HANDLE INPUT')
        setUrl(e);
        console.log(e)
        console.log(url)
    };
    
    const process = () => {
        //setStatus("processing");
        let tweet_id = url.match("[0-9]{10,20}");
        console.log('Tweet ID: ');
        console.log(tweet_id);
        fetch(`https://api.animemoe.us/twitter-video-downloader/v2/?id=${tweet_id}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.success === "true") {
              setData(data.data);
              setStatus("success");
            } else {
              setData({ message: data.message });
              setStatus("failed");
            }
            console.log(data)
          })
          .catch((e) => {
            console.log(e)
            setData({ message: "Check Your Internet Connection" });
            setStatus("failed");
          });
      };
    return (
        <View style={styles.container}>
            <ImageBackground source={tweetBackground} resizeMode="cover" style={styles.image}>
                <View style={styles.header}>
                    <Header/>
                    <View style={styles.search}>
                        <TextInput
                            style={styles.input}
                            placeholder="Tweet URL"
                            onChangeText={handleInput}
                            onEndEditing={handleSubmit}
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    {status === "success" && <Success data={data} />}
                </View>
            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    header:{
        flex: 0.3, alignItems: 'center', justifyContent: 'center', width:'100%', backgroundColor:'black'
    },
    body:{
        flex: 0.7, alignItems: 'center', justifyContent: 'center', width:'100%',backgroundColor:'red', opacity:0.8
    },
    search:{
        flex: 0.5,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    input:{
        backgroundColor:'white',
        width:'80%',
        height:'80%',
        borderRadius: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    image: {
        flex: 1,
        width:'100%',
        justifyContent: 'center',
    },
});

//make this component available to the app
export default Home;
