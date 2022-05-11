import React, {useRef, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Color from '../../common/Color';
import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import {CategorySelectionData} from '../../utils/CategorySelectionData';

const CategorySections: React.FC = ({navigation}) => {
  function validation() {
    let check = false;

    const regText = /^[a-zA-Z ]*$/;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (firstName === '') {
      alert('Enter first number');
    } else if (lastName === '') {
      alert('Enter last name');
    } else if (regText.test(firstName) !== true) {
      alert('Enter valid first name');
    } else if (regText.test(lastName) !== true) {
      alert('Enter valid last name');
    } else if (email === '') {
      alert('Enter Email Address');
    } else if (reg.test(email.replace(/\s/g, '')) !== true) {
      alert('Enter Valid Email Address');
    } else if (password === '') {
      alert('Enter password');
    } else if (password.length < 8) {
      alert('Password must be of 8 characters');
    } else {
      check = true;
    }
    return check;
  }

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
          data={CategorySelectionData}
          keyExtractor={(item, index) => item.toString()}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <CategoryItem
                onPress={() => {
                  navigation.navigate('MarketPlace');
                }}
                text={item.title}
                icon={item.icon}></CategoryItem>
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
    margin: 10,
    alignSelf: 'center',
  },
});

export default CategorySections;
