import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Color from '../../common/Color';
import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import TextInputField from '../../components/TextInputField';
import ButtonComponent from '../../components/ButtonComponent';
import PhoneInput from "react-native-phone-number-input";

const CategorySections: React.FC = ({ navigation }) => {
    const [dataArray, setDataArray] = useState(['Advertising & marketing', 'Automotive', 'Personal Services', 'Construction','Computer Services','Travel & Accom'])

    function validation() {
        let check = false

        const regText = /^[a-zA-Z ]*$/
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (firstName === '') {
            alert('Enter first number')
        } else if (lastName === '') {
            alert('Enter last name')
        } else if (regText.test(firstName) !== true) {
            alert('Enter valid first name')
        } else if (regText.test(lastName) !== true) {
            alert('Enter valid last name')
        } else if (email === '') {
            alert('Enter Email Address')
        } else if (reg.test(email.replace(/\s/g, '')) !== true) {
            alert('Enter Valid Email Address')
        } else if (password === '') {
            alert('Enter password')
        } else if (password.length < 8) {
            alert('Password must be of 8 characters')
        } else {
            check = true
        }

        return check
    }

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

            <View style={{margin:10 , alignSelf:'center'}}>
                <FlatList
                    data={dataArray}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <CategoryItem
                                onPress={() => { navigation.navigate('CreateAccount') }}
                                text={dataArray[index]}
                                icon={require('../../assets/images/importIcon.png')}>
                            </CategoryItem>
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

export default CategorySections;
