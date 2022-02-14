import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {global, colors} from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [firstname, onChangefirstname] = useState('');
  const [lastname, onChangelastname] = useState('');
  const [password, onChangepassword] = useState('');
  const [index, setIndex] = useState(0);
  useEffect(() => {});

  const ChangeIndex = () => {
    if (index === 0) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  };
  const SignUp = async () => {
    try {
      if (
        email === '' ||
        firstname === '' ||
        lastname === '' ||
        password === ''
      ) {
        Alert.alert(
          'Notizie',
          'Please fill proper data',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'MEMBERPRESS-API-KEY': 'HDLGWIxqJS',
          },
          body: JSON.stringify({
            email: email,
            username: email,
            first_name: firstname,
            last_name: lastname,
            password: password,
            send_welcome_email: true,
          }),
        };
        fetch('https://www.notizie.it/wp-json/mp/v1/members', requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if (data.username) {
              Alert.alert(
                'Notizie',
                "L'utente si è registrato con successo!",
                [{text: 'OK', onPress: () => setIndex(0)}],
                {cancelable: false},
              );
            } else {
              Alert.alert(
                'Notizie',
                "Impossibile salvare l'utente: questo nome utente esiste già!",
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                {cancelable: false},
              );
            }
          });
      }
    } catch (error) {
      Alert.alert(
        'Notizie',
        "Impossibile salvare l'utente: questo nome utente esiste già!",
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };
  const LogIn = async () => {
    try {
      if (email === '' || password === '') {
        Alert.alert(
          'Notizie',
          'Please fill proper data',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else {
        const data = new FormData();
        data.append('username', email);
        data.append('password', password);
        const requestOptions = {
          method: 'POST',
          body: data,
        };
        fetch(
          'https://www.notizie.it/wp-json/jwt-auth/v1/token',
          requestOptions,
        )
          .then((response) => response.json())
          .then(async (data) => {
            if (data.user_display_name) {
              const USERDATA = 'USERDATA';
              Alert.alert(
                'Notizie',
                'Bentornato ' + data.user_display_name,
                [{text: 'OK', onPress: () => navigation.navigate('Loading')}],
                {cancelable: false},
              );
            } else {
              Alert.alert(
                'Notizie',
                'Controlla il tuo nome utente e password o registrati',
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                {cancelable: false},
              );
            }
            await AsyncStorage.setItem('@' + USERDATA, JSON.stringify(data));
          });
      }
    } catch (error) {
      Alert.alert(
        'Notizie',
        "Impossibile salvare l'utente: questo nome utente esiste già!",
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };
  return (
    <ScrollView style={styles.container}>
      {index === 0 ? (
        <View>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => onChangeEmail(text)}
            placeholder={'Email address'}
            value={email}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => onChangepassword(text)}
            placeholder={'Password'}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={() => LogIn()}>
            <Text style={styles.name2}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.name}>or</Text>
          <TouchableOpacity style={styles.button} onPress={() => ChangeIndex()}>
            <Text style={styles.name2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => onChangeEmail(text)}
            placeholder={'Email address'}
            value={email}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => onChangefirstname(text)}
            placeholder={'First name'}
            value={firstname}
          />
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => onChangelastname(text)}
            placeholder={'Last name'}
            value={lastname}
          />
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => onChangepassword(text)}
            placeholder={'Password'}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={() => SignUp()}>
            <Text style={styles.name2}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.name}>or</Text>
          <TouchableOpacity style={styles.button} onPress={() => ChangeIndex()}>
            <Text style={styles.name2}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  button: {
    marginTop: 13,
    paddingBottom: 13,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  inputText: {
    padding: 13,
    marginTop: 13,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: global.font_family_title,
  },
  name2: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: global.font_family_title,
  },
});

export default Login;
