import React, {useRef, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Color from '../../../common/Color';
import Header from '../../../components/Header';
import BusinessMarketPlace from '../../../components/BusinessMarketPlace';

const MarketPlaceListing: React.FC = ({navigation}) => {
  const [dataArray, setDataArray] = useState([
    'Advertising & marketing',
    'Automotive',
    'Personal Services',
    'Construction',
    'Computer Services',
    'Travel & Accom',
  ]);

  return (
    <View style={styles.main}>
      <Header
        navigationValue={() => {
          navigation.pop();
        }}
        title={'What are you interested in?'}
      />
      <View style={styles.border}></View>
      <View style={styles.list}>
        <FlatList
          data={dataArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <BusinessMarketPlace
                onPress={() => {
                  navigation.navigate('CreateAccount');
                }}
                title={dataArray[index]}
                description={'Cosmic Cocao'}
                logo={require('../../../assets/images/yoga.png')}
                icon={require('../../../assets/images/frameLogo.png')}
                descriptionIcon={require('../../../assets/images/frameLogo.png')}></BusinessMarketPlace>
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  border: {
    width: '100%',
    marginBottom: 20,
    height: 1,
    backgroundColor: Color.grey,
  },
  list: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
});

export default MarketPlaceListing;
