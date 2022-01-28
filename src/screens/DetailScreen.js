import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, Image,} from 'react-native';
import yelp from '../api/yelp';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';


const DetailScreen = ({ route}) => {
    const id = route.params;
    const [result, setResult] = useState(null);

    const getResult = async ({id}) => {
        const response = await yelp.get(`/${id}` );
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}> {result.name}</Text>

            <FlatList 
            horizontal
            showsHorizontalScrollIndicator = {false}
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image 
                    style={styles.image}
                    source={{ uri : item }} />
            }}
            />
            
            <View style = {styles.views}>
            <Text style = {styles.note}> Note : {result.rating}/5  </Text>
                <Ionicons name="star" size={21} color="orange" />
                <Ionicons name="star" size={21} color="orange" />
                <Ionicons name="star" size={21} color="orange" />
                <Ionicons name="star" size={21} color="orange" />
                <Ionicons name="star" size={21} color="orange" />
                
            </View>

            <View style = {styles.views}>
            <Ionicons name="eye-outline" size={24} color="black" />
                <Text style = {styles.note}> {result.review_count} Reviews </Text>
            </View>

            <View style = {styles.views}>
            <Entypo name="address" size={24} color="black" />
                <Text style = {styles.phone}> Address : {result.location['address1']} </Text>
            </View>

            <View style = {styles.views}>
            <Ionicons name="md-location-outline" size={24} color="black" />
                <Text style = {styles.phone}> Location : {result.location['city']} - {result.location['country']} </Text>
            </View>

            <View style = {styles.views}>
            <MaterialIcons name="phone-in-talk" size={24} color="black" />
                <Text style = {styles.phone}> Phone number : {result.phone}</Text>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    views : {
        flexDirection : 'row',
        marginLeft : 15,
    },
   
    phone : {
        fontSize : 16,
        marginVertical : 2,
    },
    
    note : {
        fontSize : 16
    },
    image:{
        height : 250,
        width :300,
        borderRadius : 4,
        marginBottom : 20,
        marginRight : 5,
    },
    name : {
        fontWeight : 'bold',
        fontSize : 22,
        marginVertical : 15,
        marginLeft : 15,
    }
})

export default DetailScreen
