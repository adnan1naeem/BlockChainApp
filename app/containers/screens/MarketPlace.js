import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Color from '../../common/Color';
import Header from '../../components/Header';
import BusinessMarketPlace from '../../components/BusinessMarketPlace';

const MarketPlace: React.FC = ({ navigation }) => {
    const [dataArray, setDataArray] = useState(['Advertising & marketing', 'Automotive', 'Personal Services', 'Construction','Computer Services','Travel & Accom'])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}>
            <Header
                navigationValue={() => { navigation.pop() }}
                title={"What are you interested in?"} />

            <View style={{ width: '100%', marginBottom: 20, height: 1, backgroundColor: Color.grey }}></View>

            <View style={{flex:1, width:'100%' , alignSelf:'center'}}>
                <FlatList
                    data={dataArray}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <BusinessMarketPlace
                                onPress={() => { navigation.navigate('CreateAccount') }}
                                title={dataArray[index]}
                                description={'Cosmic Cocao'}
                                logo={require('../../assets/images/yoga.png')}
                                icon={require('../../assets/images/frameLogo.png')}
                                descriptionIcon={require('../../assets/images/frameLogo.png')}>
                            </BusinessMarketPlace>
                        )
                    }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        padding: 0
    },
    loginView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    legalNameText: {
        fontSize: 12,
        marginTop: -15,
        color: 'grey',
        alignSelf: 'flex-end'
    },
    boldText: {
        fontWeight: 'bold'
    },
    checkbox: {
        alignSelf: "center",
    },
    businssPhone: {
        margin: 5,
        fontSize: 12
    },
});

export default MarketPlace;
