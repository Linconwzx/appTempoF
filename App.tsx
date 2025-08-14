import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Itanhaem from './views/Itanhaem';
import JoaoAmaro from './views/JoaoAmaro.';
import SaoPaulo from './views/SaoPaulo';
import Galinhos from './views/Galinhos';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Itanhaem:Itanhaem,
    JoaoAmaro:JoaoAmaro,
    SaoPaulo:SaoPaulo,
    Galinhos:Galinhos
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}