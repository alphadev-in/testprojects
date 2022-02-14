import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class FCMService {
  register = (onRegister, onNotification, onOpenNotification) => {
    this.checkPermission(onRegister);
    this.createNotificationListeners(
      onRegister,
      onNotification,
      onOpenNotification,
    );
  };

  registerAppWithFCM = async () => {
    if (Platform.OS === 'ios') {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
  };

  checkPermission = async (onRegister) => {
    messaging()
      .hasPermission()
      .then((enabled) => {
        if (enabled) {
          this.getToken(onRegister);
        } else {
          this.requestPermission(onRegister);
        }
      })
      .catch((error) => {
        console.log('FCM error:' + error);
      });
  };
  getToken = async (onRegister) => {
    const token = await messaging().getToken();
    const PUSHTOKEN = 'PUSHTOKEN';
    if (token) {
      onRegister(token);
      console.log('Token register:' + token);

      await AsyncStorage.setItem('@' + PUSHTOKEN, JSON.stringify(token));
    } else {
      console.log('Token not register');
    }
  };
  requestPermission = (onRegister) => {
    messaging
      .requestPermission({
        sound: true,
        announcement: true,
        badge: true,
        provisional: true,
        alert: true,
      })
      .then(() => {
        this.getToken(onRegister);
      })
      .catch((error) => {
        console.log('Permission Rejected:' + error);
      });
    messaging()
      .subscribeToTopic('promo')
      .then(() => console.log('Subscribed to topic promo!'));
    messaging()
      .subscribeToTopic('watchlist')
      .then(() => console.log('Subscribed to topic watchlist!'));
  };
  deleteToken = () => {
    console.log('Delete Token');
    messaging()
      .deleteToken()
      .catch((error) => {
        console.log('Delete Token:' + error);
      });
  };

  createNotificationListeners = (
    onRegister,
    onNotification,
    onOpenNotification,
  ) => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage,
        );
        const notification = remoteMessage.notification;
        onOpenNotification(remoteMessage);
      }
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage,
          );
          const notification = remoteMessage.notification;
          onOpenNotification(remoteMessage);
        }
      });

    this.messageListener = messaging().onMessage(async (remoteMessage) => {
      if (remoteMessage) {
        let notification = null;
        if (Platform.OS === 'ios') {
          notification = remoteMessage.data.notification;
        } else {
          notification = remoteMessage.notification;
        }
        console.log('Notificaiton FirebaseService : ');
        console.log(remoteMessage);
        onNotification(remoteMessage);
      }
    });

    messaging().onTokenRefresh((fcmToken) => {
      console.log('Token Refresh');
      onRegister(fcmToken);
    });
  };
  unRegister = () => {
    this.messageListener();
  };
}
export const fcmService = new FCMService();
