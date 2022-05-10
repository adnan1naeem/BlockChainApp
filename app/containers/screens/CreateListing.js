import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Color from '../../common/Color';
import Header from '../../components/Header';
import TextInputField from '../../components/TextInputField';
import DescriptionTextInput from '../../components/DescriptionTextInput';
import ButtonComponent from '../../components/ButtonComponent';
import { Rating, AirbnbRating } from 'react-native-ratings';

const CreateListing: React.FC = ({ navigation }) => {
    const [listTitle, setListTitle] = useState('');
    const [price, setPrice] = useState('$');
    const [description, setDescription] = useState('');
    const [externalLink, setExternalLink] = useState('');
    const [rating, setRating] = useState(0);

    const [listTitleError, setListTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [externalLinkError, setExternalLinkError] = useState(false);

    const [isSelected, setSelected] = useState(false);

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
                title={"Create Listing"} />
            <View style={{ width: '100%', marginBottom: 20, height: 2, backgroundColor: Color.primary }}></View>
            <ScrollView>
                <View style={{ flex: 1, margin: 10 }}>

                    <TextInputField
                        error={listTitleError}
                        style={styles.input}
                        label="Listing title"
                        underline={true}
                        value={listTitle === '' ? "60% Dark Chocolate" : listTitle}
                        onChangeText={setListTitle}
                        returnKeyType="next"
                        keyboardType="default"
                        autoCapitalize="none"
                    />
                    <DescriptionTextInput
                        error={descriptionError}
                        style={styles.input}
                        label="Description"
                        underline={true}
                        value={description === '' ? "The best chocolate you will ever taste!" : description}
                        onChangeText={setDescription}
                        returnKeyType="next"
                        keyboardType="default"
                        autoCapitalize="none"
                    />
                    <Text style={{ marginTop: 20 }}>Image</Text>
                    <Image
                        resizeMode={'stretch'}
                        style={{
                            aspectRatio: 1.1,
                            height: undefined,
                            marginVertical: 10,
                            width: '60%'
                        }}
                        source={require('../../assets/images/uploadImageIcon.png')} />
                    <View style={styles.SearchStock}>
                        <Image
                            resizeMode={'contain'}
                            style={{
                                height: 15,
                                width: 15
                            }}
                            source={require('../../assets/images/searchIcon.png')} />
                        <Text style={styles.stockTitle}>Browse stock images</Text>
                    </View>
                    <TextInputField
                        error={listTitleError}
                        style={styles.input}
                        label="Price"
                        underline={true}
                        value={price}
                        onChangeText={setPrice}
                        returnKeyType="next"
                        keyboardType="default"
                        autoCapitalize="none"
                    />
                    <Text style={styles.textBelowInputField}>price must match off-network amount exactly</Text>

                    <ButtonComponent
                        onPress={() => {
                            // if (validation()) {
                                navigation.navigate('BusinessDetail')
                            // }
                        }}
                        text={'Finish'}
                        backgroundColorValue={Color.primary}
                        textColorValue={'white'}
                        buttonWidth={'100%'}
                    />
                </View>
            </ScrollView>

        </View>
    );
};
const styles = StyleSheet.create({
    input: {
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SearchStock: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        borderColor: Color.blueColor,
        marginBottom: 20,
        height: 30,
        borderWidth: 0.3,
        borderRadius: 15
    },

    importView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderColor: Color.blueColor,
        backgroundColor: Color.blueColor,
        height: 30,
        borderWidth: 0.3,
        borderRadius: 15
    },
    stockTitle: {
        textAlign: 'center',
        color: Color.blueColor,
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    importTitle: {
        textAlign: 'center',
        color: Color.whiteColor,
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    loginView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    textBelowInputField: {
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

export default CreateListing;
