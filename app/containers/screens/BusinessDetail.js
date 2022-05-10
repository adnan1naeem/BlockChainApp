import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Color from '../../common/Color';
import Header from '../../components/Header';
import TextInputField from '../../components/TextInputField';
import ButtonComponent from '../../components/ButtonComponent';
import PhoneInput from "react-native-phone-number-input";

const BusinessDetail: React.FC = ({ navigation }) => {
    const [legalName, setLegalName] = useState('');
    const [lastName, setlastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [userName, setUserName] = useState('');
    const [inviteCode, setInviteCode] = useState('');
    const phoneInput = useRef < PhoneInput > (null);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");


    const [emailError, setEmailError] = useState(false);
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
                title={"Business Detail"} />

            <View style={{ width: '50%', marginBottom: 20, height: 2, backgroundColor: Color.primary }}></View>

            <ScrollView>
                <View style={{ flex: 1, margin: 20 }}>
                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="Legal business name"
                        underline={true}
                        value={legalName}
                        onChangeText={setLegalName}
                        autoFocus
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="default"
                        autoCapitalize="none"
                    />

                    <Text style={styles.legalNameText}>Can be your own name</Text>

                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="Last name"
                        underline={true}
                        value={lastName}
                        onChangeText={setlastName}
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="default"
                        autoCapitalize="none"
                    />

                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="Address"
                        underline={true}
                        value={address}
                        onChangeText={setAddress}
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="default"
                        autoCapitalize="none"
                    />

                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="City"
                        underline={true}
                        value={city}
                        onChangeText={setCity}
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="default"
                        autoCapitalize="none"
                    />

                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="State"
                        underline={true}
                        value={state}
                        onChangeText={setState}
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="default"
                        autoCapitalize="none"
                    />

                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="Zip code"
                        underline={true}
                        value={zipCode}
                        onChangeText={setZipCode}
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="default"
                        autoCapitalize="none"
                    />

                    <Text style={styles.businssPhone}>Business phone</Text>

                    <PhoneInput
                        defaultValue={value}
                        defaultCode="PK"
                        layout="first"
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        textContainerStyle={{ borderRadius: 20 }}
                        containerStyle={{padding:1, borderRadius: 10, borderColor: 'grey', borderWidth: 0.5, marginBottom: 20, width: '100%' }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                    />

                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="UserName"
                        underline={true}
                        value={userName}
                        onChangeText={setUserName}
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="default"
                        autoCapitalize="none"
                    />

                    <Text style={styles.legalNameText}>Used for transections</Text>


                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="Ambassador invite code"
                        underline={true}
                        value={inviteCode}
                        onChangeText={setInviteCode}
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="default"
                        autoCapitalize="none"
                    />

                    <Text style={styles.legalNameText}>Optional</Text>


                    <ButtonComponent
                        onPress={() => {
                            // if (validation()) {
                                navigation.navigate('StoreFront')
                            // }
                        }}
                        text={'Create storefront ->'}
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
    businssPhone:{
        margin:5,
        fontSize:12
    },
});

export default BusinessDetail;
