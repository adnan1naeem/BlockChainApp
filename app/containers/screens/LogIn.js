import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Color from '../../common/Color';
import Header from '../../components/Header';
import TextInputField from '../../components/TextInputField';
import ButtonComponent from '../../components/ButtonComponent';

const Login: React.FC = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);

    function validation() {
        let check = false

        const regText = /^[a-zA-Z ]*$/
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (email === '') {
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
                title={""} />

            <ScrollView>
                <View style={{ flex: 1, margin: 20 }}>

                    <Image
                        resizeMode={'contain'}
                        style={{
                            aspectRatio: 1.2,
                            height: undefined,
                            width: '70%',
                            marginVertical: 50,
                            borderRadius: 5,
                            alignSelf: 'center',
                        }}
                        source={require('../../assets/images/loginIcon.png')}
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


                    <TouchableOpacity onPress={() => { navigation.navigate('ResetPassword') }}>
                        <Text style={styles.forgetPassword}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <View style={styles.loginView}>
                        <Text>Don't have account ? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('CreateAccount') }}>
                            <Text style={styles.boldText}>Apply</Text>
                        </TouchableOpacity>
                    </View>

                    <ButtonComponent
                        onPress={() => {
                            if (validation()) {
                                alert('will login in future')
                            }
                        }}
                        text={'Join'}
                        backgroundColorValue={Color.primary} s
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
        marginTop: 60,
        marginBottom:20
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
    forgetPassword: {
        fontSize: 12,
        color: 'black',
        alignSelf: 'flex-end'
    },
});

export default Login;
