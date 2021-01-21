import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { useContext } from 'react';
// import {AuthContext} from '../Navigators/AuthProvider';
import { Avatar } from 'react-native-paper';
import MainHeader from '../Headers/MainHeader';

const HomeScreen = props => {
    // const {user, logout} = useContext(AuthContext);
    return (
        <View style={styles.screen}>
            <MainHeader titleText="RN Social" onAdd={() => {
                props.navigation.navigate("AddPostScreen");
            }} />
            <View style={styles.home}>
                <ScrollView>
                    <View style={styles.post}>

                        <View style={styles.info}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://i.pinimg.com/originals/02/05/9f/02059f3e1a767b077acd60f44e335748.jpg'
                                }}
                                size={50}
                            />
                            <View style={styles.userInfo}>
                                <Text style={styles.userName}>Caroline Forbes</Text>
                                <Text style={styles.posttime}>4 min ago</Text>
                            </View>
                         
                           
                        </View>

                        <View style={styles.postTitle}>
                                <Text>Hey there! this is my test post on the RN social App, Let's Do this...</Text>
                            </View>
                            <View style={styles.image}>
                            <Image style={styles.image} source={{uri: 'https://cdn.britannica.com/s:800x450,c:crop/40/189440-138-4637CAAC/video-Los-Angeles.jpg'}}/>
                            </View>

                            <View style={styles.likes}>
                            <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
                            <FontAwesome name="heart-o" size={26}/>
                            <Text> Likes</Text>
                            </View>

                            <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
                            <FontAwesome name="commenting-o" size={26}/>
                            <Text> Comments</Text>
                            </View>
                                
                            </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    postTitle: {
        height: '10%',
        marginVertical: 10,
    },
    screen: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    userInfo: {
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    posttime: {
        fontSize: 13
    },
    home: {
        flex: 1,
        marginHorizontal: 10,
    },
    post: {
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        marginVertical: 10,
        height: 400,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'column',
        padding: 10,
    },
    info: {
        flexDirection: 'row',

    },
    image: {
    borderRadius: 10,
        width: '100%',
        height: 230,
    },
    likes:{
        flexDirection: 'row',
        padding: 15,
        // height: '10%'
        justifyContent: 'space-around'

    }
});

export default HomeScreen;