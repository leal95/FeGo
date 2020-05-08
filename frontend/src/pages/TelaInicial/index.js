import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function Cadastro() {
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    function navigateToLogin() {
        navigation.navigate('Login');
    };

    return(
        <>
        </>
    )
}