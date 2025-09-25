import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import CustomDrawer from '../components/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Pantalla de Login
const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login, loading } = useAuth();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    const success = await login(username, password);
    if (!success) {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>WSA Marine</Text>
      <Text style={styles.loginSubtitle}>Iniciar Sesión</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#64748b" />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="#64748b" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.loginButtonText}>
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Pantalla de Dashboard (ejemplo)
const DashboardScreen = () => {
  const { user } = useAuth();

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Dashboard</Text>
      <Text>Bienvenido, {user?.nombre} {user?.apellido}!</Text>
      <Text>Tipo de usuario: {user?.tipo_usuario}</Text>
    </View>
  );
};

// Navegador Drawer para usuarios autenticados
const AuthenticatedNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => <CustomDrawer {...props} />}
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
        name="Dashboard" 
        component={DashboardScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />
      {/* Puedes agregar más pantallas aquí */}
    </Drawer.Navigator>
  );
};

// Navegador principal de la aplicación
const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return user ? <AuthenticatedNavigator /> : (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f172a',
    marginBottom: 8,
  },
  loginSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#64748b',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#0f172a',
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 20,
  },
});

export default AppNavigator;