import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    // componentDidMount() {
    //     firebase.initializeApp(
    //         {
    //             apiKey: 'AIzaSyA4-m22Q9EoC7Tj7e_LduIgyQyyTcY1M6A',
    //             authDomain: 'authentication-b4558-973fd.firebaseapp.com',
    //             databaseURL: 'https://authentication-b4558-973fd.firebaseio.com',
    //             projectId: 'authentication-b4558',
    //             storageBucket: 'authentication-b4558.appspot.com',
    //             messagingSenderId: '722589937262'
    //     });
    // }
    
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
