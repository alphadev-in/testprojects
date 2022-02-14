import {Dimensions,StatusBar} from 'react-native'


export const DEVICE_HEIGHT = Dimensions.get('screen').height;
export const STATUS_BAR = StatusBar.statusBarHeight || 24; 
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('screen').width;