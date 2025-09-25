import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';

const CustomDrawer = (props: any) => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      {/* Header del Drawer */}
      <View style={styles.drawerHeader}>
        <Image
          source={require('../../assets/icon.png')} // Usando icon.png temporalmente, reemplazar con logoWSA.png
          style={styles.logo}
        />
        <Text style={styles.appName}>WSA Marine</Text>
        <Text style={styles.userName}>{user?.nombre} {user?.apellido}</Text>
        <Text style={styles.userRole}>{user?.tipo_usuario}</Text>
      </View>

      {/* Menú Items */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer del Drawer */}
      <View style={styles.drawerFooter}>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Ionicons name="log-out" size={20} color="#fff" />
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#0f172a',
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  appName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userName: {
    color: '#94a3b8',
    fontSize: 14,
    marginBottom: 2,
  },
  userRole: {
    color: '#64748b',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  drawerFooter: {
    borderTopWidth: 1,
    borderTopColor: '#334155',
    padding: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc2626',
    padding: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CustomDrawer;