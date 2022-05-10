import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Color from '../../common/Color';
import Header from '../../components/Header';
import TextInputField from '../../components/TextInputField';
import DescriptionTextInput from '../../components/DescriptionTextInput';
import ButtonComponent from '../../components/ButtonComponent';
import { Rating, AirbnbRating } from 'react-native-ratings';

const StoreFront: React.FC = ({ navigation }) => {
    const [businessTagLine, setBusinessTagLine] = useState('');
    const [description, setDescription] = useState('');
    const [externalLink, setExternalLink] = useState('');
    const [rating, setRating] = useState(0);

    const [tagLineError, settagLineError] = useState(false);
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
                title={"Store Front"} />
            <View style={{ width: '75%', marginBottom: 20, height: 2, backgroundColor: Color.primary }}></View>
            <ScrollView>
                <View style={{ flex: 1, margin: 10 }}>
                    <Text>Logo</Text>
                    <View style={styles.container}>
                        <Image
                            resizeMode={'contain'}
                            style={{
                                marginTop: 20,
                                height: 80,
                                width: 80
                            }}
                            source={require('../../assets/images/frameLogo.png')} />
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
                    </View>
                    <Text style={{ marginTop: 20 }}>Banner</Text>
                    <Image
                        resizeMode={'contain'}
                        style={{
                            aspectRatio: 3,
                            height: undefined,
                            width: '100%'
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
                        error={tagLineError}
                        style={styles.input}
                        label="Business tagline"
                        underline={true}
                        value={businessTagLine}
                        onChangeText={setBusinessTagLine}
                        returnKeyType="next"
                        keyboardType="default"
                        autoCapitalize="none"
                    />
                    <Text style={styles.textBelowInputField}>one line that describe your business</Text>
                    <DescriptionTextInput
                        error={descriptionError}
                        style={styles.input}
                        label="Description"
                        underline={true}
                        value={description}
                        onChangeText={setDescription}
                        returnKeyType="next"
                        keyboardType="default"
                        autoCapitalize="none"
                    />
                    <Text style={styles.textBelowInputField}>describe your business in a few sentences</Text>

                    <TextInputField
                        error={externalLinkError}
                        editable={false}
                        style={styles.input}
                        label="External Links"
                        underline={true}
                        value={externalLink === '' ? "https://instagram.com/cc" : externalLink}
                        onChangeText={setExternalLink}
                        returnKeyType="next"
                        keyboardType="default"
                        autoCapitalize="none"
                    />
                    <Text style={{marginBottom:-20}}>Store rating</Text>
                    <View style={styles.container}>
                        <AirbnbRating
                            count={5}
                            reviews={false}
                            defaultRating={4}
                            size={20}
                        />
                        <View style={styles.importView}>
                            <Image
                                resizeMode={'contain'}
                                style={{
                                    height: 15,
                                    width: 15
                                }}
                                source={require('../../assets/images/importIcon.png')} />
                            <Text style={styles.importTitle}>Import</Text>
                        </View>
                    </View>
                    <ButtonComponent
                        onPress={() => {
                            // if (validation()) {
                                navigation.navigate('CreateListing')
                            // }
                        }}
                        text={'Add listing ->'}
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
        alignSelf: 'flex-end',
        justifyContent: 'center',
        borderColor: Color.blueColor,
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

export default StoreFront;
