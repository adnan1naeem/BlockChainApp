import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Color from '../../common/Color';
import Header from '../../components/Header';
import TextInputField from '../../components/TextInputField';
import ButtonComponent from '../../components/ButtonComponent';
import CheckBox from '@react-native-community/checkbox';


const CreateAccount: React.FC = ({ navigation }) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                title={"Create Account"} />

            <View style={{ width: '25%', marginBottom: 20, height: 2, backgroundColor: Color.primary }}></View>

            <ScrollView>
                <View style={{ flex: 1, margin: 20 }}>
                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="First name"
                        underline={true}
                        value={firstName}
                        onChangeText={setfirstName}
                        autoFocus
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="Last name"
                        underline={true}
                        value={lastName}
                        onChangeText={setlastName}
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="Email"
                        underline={true}
                        value={email}
                        onChangeText={setEmail}
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="Password"
                        underline={true}
                        value={password}
                        onChangeText={setPassword}
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />


                    <View style={styles.termsAndCondition}>
                        {/* <CheckBox
                        disabled={false}
                        value={isSelected}
                        boxType ={'square'}
                        style={{ height: 20, width: 20 }}
                        backgroundColor={'red'}
                        onValueChange={(newValue) => setSelected(newValue)}
                    /> */}
                        <Text>I Accept the term and conditions</Text>
                    </View>

                    <View style={styles.loginView}>
                        <Text>Already have account ? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                            <Text style={styles.boldText}>Log In</Text>
                        </TouchableOpacity>
                    </View>

                    <ButtonComponent
                        onPress={() => {
                            // if (validation()) {
                                navigation.navigate('BusinessDetail')
                            // }
                        }}
                        text={'Join'}
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
    termsAndCondition: {
        flexDirection: 'row',
        marginBottom: 20
    },
    boldText: {
        fontWeight: 'bold'
    },
    checkbox: {
        alignSelf: "center",
    },
});

export default CreateAccount;
