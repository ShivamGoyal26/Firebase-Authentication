import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const MainHeader = props => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.menu} onPress={props.onSelect}>
                <View ><Icon name='md-menu' size={26} color={'black'} /></View>
            </TouchableOpacity>
            <View> 
                <Text style={styles.headerText}>{props.titleText}</Text>
            </View>
            <TouchableOpacity style={styles.menu} onPress={props.onAdd}>
            <View ><FontAwesome5 name='plus' size={20} color={'black'} /></View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontFamily: 'Lato-Italic',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        letterSpacing: 1,
    },

    menu: {
        padding: 10,
    },
});

export default MainHeader;