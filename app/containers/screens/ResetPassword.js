import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Color from '../../common/Color';
import Header from '../../components/Header';
import TextInputField from '../../components/TextInputField';
import ButtonComponent from '../../components/ButtonComponent';

const ResetPassword: React.FC = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    const [emailError, setEmailError] = useState(false);

    function validation() {
        let check = false

        const regText = /^[a-zA-Z ]*$/
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (email === '') {
            alert('Enter Email Address')
        } else if (reg.test(email.replace(/\s/g, '')) !== true) {
            alert('Enter Valid Email Address')
        } else if (verifyCode === '') {
            alert('Enter password')
        } else if (verifyCode.length < 8) {
            alert('Password must be of 8 characters')
        } else {
            check = true
        }

        return check
    }

    return (
        <View style={styles.container}>
            <Header
                navigationValue={() => { navigation.pop() }}
                title={"Reset Password"} />

            <ScrollView contentContainerStyle={styles.AlignCenter}>
                <View style={styles.mainContainer}>

                    <TextInputField
                        error={emailError}
                        style={styles.input}
                        label="Email address"
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
                        label="Varification code"
                        underline={true}
                        value={verifyCode}
                        onChangeText={setVerifyCode}
                        returnKeyType="next"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <View style={styles.flexDirection}>
                        <TouchableOpacity
                            onPress={() => { }}
                            style={styles.ResendBtn}>
                            <Image
                                resizeMode={'contain'}
                                style={{
                                    height: 15,
                                    width: 15,
                                    alignSelf: 'center'
                                }}
                                source={require('../../assets/images/resendBtn.png')}
                            />
                            <Text style={styles.ResendText}>
                                Resend code</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { }}
                            style={styles.verifyBtn}>
                            <Image
                                resizeMode={'contain'}
                                style={{
                                    height: 15,
                                    width: 15,
                                    alignSelf: 'center'
                                }}
                                source={require('../../assets/images/tickIcon.png')}
                            />
                            <Text style={styles.verifyText}>
                                Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 0
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        margin: 20
    },
    AlignCenter: {
        flex: 1,
        justifyContent: 'center',
    },
    ResendBtn: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 0.3
    },
    ResendText: {
        color: Color.blueColor,
        textAlign: 'center',
        fontSize: 16,
        margin: 7,
        fontWeight: 'bold'
    },
    verifyBtn: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: Color.blueColor,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 0.3
    },
    verifyText: {
        color: Color.whiteColor,
        textAlign: 'center',
        fontSize: 16,
        margin: 7,
        fontWeight: 'bold'
    },
    loginView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 60,
        marginBottom: 20
    },
    flexDirection: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
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

export default ResetPassword;
