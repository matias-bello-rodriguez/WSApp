import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { DrawerParamList } from './types';
import CustomDrawer from '../components/CustomDrawer';

// Import screens
import HomeScreen from '../screens/Home/HomeScreen';
import EmbarcacionesScreen from '../screens/Embarcaciones/EmbarcacionesScreen';
import ReportesScreen from '../screens/Reportes/ReportesScreen';
import UsuariosScreen from '../screens/Usuarios/UsuariosScreen';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0f172a',
        },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#0f172a',
        drawerInactiveTintColor: '#64748b',
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Embarcaciones" 
        component={EmbarcacionesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="boat" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Reportes" 
        component={ReportesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="document-text" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Usuarios" 
        component={UsuariosScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="people" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;