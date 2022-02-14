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
  SafeAreaView,
} from 'react-native';

const CatChecker = (data) => {
  try {
    let categories = data;
    let categoryType = '';
    if (categories === 386624) categoryType = 'Accessori';
    else if (categories === 386826) categoryType = 'Animali';
    else if (categories === 386621) categoryType = 'Arredamento & Design';
    else if (categories === 386625) categoryType = 'Auto & Moto';
    else if (categories === 386827) categoryType = 'Benessere';
    else if (categories === 386620) categoryType = 'Casa & Bricolage';
    else if (categories === 388191) categoryType = 'Cinema & Serie TV';
    else if (categories === 39060) categoryType = 'Cronaca';
    else if (categories === 386828) categoryType = 'Cultura';
    else if (categories === 386829) categoryType = 'Curiosità';
    else if (categories === 75) categoryType = 'Economia';
    else if (categories === 90) categoryType = 'Esteri';
    else if (categories === 386619) categoryType = 'Fashion';
    else if (categories === 388165) categoryType = 'Finanza d’impresa';
    else if (categories === 388162) categoryType = 'Finanza e investimenti';
    else if (categories === 388152) categoryType = 'Flash news';
    else if (categories === 388145) categoryType = 'Focus Startup';
    else if (categories === 219641) categoryType = 'Guide';
    else if (categories === 386831) categoryType = 'Infanzia';
    else if (categories === 386830) categoryType = 'Istruzioni pratiche';
    else if (categories === 388154) categoryType = 'Lavoro';
    else if (categories === 386622) categoryType = 'Libri';
    else if (categories === 99) categoryType = 'Lifestyle';
    else if (categories === 388166) categoryType = 'Mercati';
    else if (categories === 386832) categoryType = 'Motori';
    else if (categories === 386623) categoryType = 'Musica';
    else if (categories === 386616) categoryType = 'Offerte & Consigli';
    else if (categories === 76) categoryType = 'Offerte Coupon';
    else if (categories === 91) categoryType = 'Politica';
    else if (categories === 388164) categoryType = 'Previdenza';
    else if (categories === 388163) categoryType = 'Risparmio';
    else if (categories === 388153) categoryType = 'Salute';
    else if (categories === 9) categoryType = 'Salute & Benessere';
    else if (categories === 386617) categoryType = 'Salute';
    else if (categories === 7) categoryType = 'Scienza & Tecnologia';
    else if (categories === 386626) categoryType = 'Scuola e ufficio';
    else if (categories === 388155) categoryType = 'Sostenibilità';
    else if (categories === 71) categoryType = 'Sport';
    else if (categories === 386833) categoryType = 'Stili di vita';
    else if (categories === 386834) categoryType = 'Tech';
    else if (categories === 386618) categoryType = 'Tecnologia';
    else if (categories === 386836) categoryType = 'Viaggi';
    else if (categories === 230016) categoryType = 'Video';
    else if (categories === 388156) categoryType = 'Flash Video';
    else if (categories === 305374) categoryType = 'Video imperdibili';
    else categoryType = 'Notizie';
    return categoryType;
  } catch (error) {
    console.log(error);
  }
};

export default CatChecker;
