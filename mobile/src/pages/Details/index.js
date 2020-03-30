import React from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import logo from '../../assets/logo.png';

import styles from './styles';

function Details() {
  const navigation = useNavigation();

  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no "Cadelinha atropelada" no valor de R$120,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['gabrie.gsantana7@gmail.com'],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incidentCard}>
        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
        <Text style={styles.incidentValue}>
          A cadelinha Jolie foi atropelado na rua Souza e precisa de cuidados médicos.
          A cadelinha Jolie foi atropelado na rua Souza e precisa de cuidados médicos
        </Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={[styles.incidentValue, {marginBottom: 0}]}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactBoxTitle}>Salve o dia!</Text>
        <Text style={styles.contactBoxTitle}>Seja o herói desse caso</Text>

        <Text style={[styles.incidentValue, {marginTop: 20}]}>Contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Details;