import React, { Component } from 'react';
import { View , Text } from 'react-native';

const Header = ({ title }) => {

    return (
        <View style={styles.header}> 
                <Text style={styles.headerText}> { title } </Text>
        </View>
    );
    
}


const styles = {

    header : {

        alignItems: 'center', 
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#2196F3'

    },

    headerText : {

        fontSize: 30,
        color:'white',
    }
}

export { Header };
