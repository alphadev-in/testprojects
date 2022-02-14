import AsyncStorage from '@react-native-async-storage/async-storage';

const Utils = {
  isValidEmail: function (email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  },
  isValidMobile: function (text) {
    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  },
  storeData: async function (key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  },
  storeObj: async function (key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  },
  getData: async function (key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return value;
      } else {
        return null;
      }
    } catch (e) {
      // error reading value
      return null;
    }
  },
  getObj: async function (key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      return null;
    }
  },
};
export default Utils;
