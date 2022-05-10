import {View,Image, Text, TouchableOpacity} from "react-native";
import React from 'react'

const Header: React.FC = ({ navigationValue ,title }) => {

        return (
            <View>
            <View style={{
                flexDirection: 'row',
                elevation: 5,
                paddingVertical: 10,
                backgroundColor: '#fff'
            }}>
                <TouchableOpacity onPress={navigationValue}>
                <Image
                    resizeMode={'contain'}
                    style={{
                    height: 15,
                    margin:5,
                    alignItems:'center',
                    tintColor:'black',
                    width: 15,
                    alignSelf: 'center',
                }}
            source={require('../assets/images/leftIcon.png')}
          />
          </TouchableOpacity>
                <Text 
                numberOfLines={1} 
                style={{
                    width:'90%',
                    alignSelf: 'center',
                    textAlign:'center',
                    fontSize: 18
                }}>{title}</Text>
            </View>

            </View>
        )
    }

    export default Header;

