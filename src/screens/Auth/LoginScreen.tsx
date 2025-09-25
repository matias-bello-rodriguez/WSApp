import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../contexts/AuthContext';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const success = await login(username, password);
    setLoading(false);
    // Error handling aquí si necesario
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Fondo Hero con clip-path simulado */}
        <View style={styles.heroBackground}>
          <Image 
            source={{ uri: 'https://your-image-url/antarctic.jpg' }} // Reemplaza con tu imagen
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay} />
        </View>

        {/* Login Card */}
        <View style={styles.loginCard}>
          
          {/* Ícono flotante */}
          <View style={styles.loginIcon}>
            <Image 
              source={{ uri: 'https://your-logo-url/logo-login.png' }} // Reemplaza con tu logo
              style={styles.logoImage}
            />
          </View>

          {/* Headers */}
          <Text style={styles.loginHeader}>Welcome</Text>
          <Text style={styles.loginSubtitle}>Enter your credentials</Text>

          {/* Form */}
          <View style={styles.loginForm}>
            
            {/* Username Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Username</Text>
              <TextInput
                style={styles.textInput}
                value={username}
                onChangeText={setUsername}
                placeholder=""
                placeholderTextColor="#9ca3af"
                autoCapitalize="none"
              />
              <View style={styles.inputUnderline} />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.textInput, { paddingRight: 50 }]}
                  value={password}
                  onChangeText={setPassword}
                  placeholder=""
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity 
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={20} 
                    color="#51565d" 
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.inputUnderline} />
            </View>

            {/* Login Button */}
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={handleLogin}
              disabled={loading}
            >
              <Ionicons name="chevron-forward" size={20} color="white" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

          </View>

          {/* Aux Links */}
          <View style={styles.auxLinks}>
            <TouchableOpacity>
              <Text style={styles.forgotLink}>¿Forgot Your Password?</Text>
            </TouchableOpacity>

            {/* Device Images */}
            <View style={styles.deviceImages}>
              <Image 
                source={{ uri: 'https://your-images-url/laptop.png' }}
                style={[styles.deviceImg, styles.laptopImg]}
              />
              <Image 
                source={{ uri: 'https://your-images-url/mobile.png' }}
                style={[styles.deviceImg, styles.mobileImg]}
              />
            </View>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
  },
  scrollContainer: {
    minHeight: height,
    position: 'relative',
  },
  
  // Hero Background
  heroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height * 0.35,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '120%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  // Login Card
  loginCard: {
    position: 'relative',
    marginTop: height * 0.28,
    marginHorizontal: width * 0.05,
    maxWidth: 360,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    padding: 24,
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },

  // Login Icon
  loginIcon: {
    position: 'absolute',
    top: -40,
    left: '50%',
    marginLeft: -40,
    width: 80,
    height: 80,
    backgroundColor: '#ffffff',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  logoImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },

  // Headers
  loginHeader: {
    marginTop: 16,
    marginBottom: 4,
    fontSize: 24,
    color: '#14345b',
    fontWeight: '600',
    textAlign: 'center',
  },
  loginSubtitle: {
    marginBottom: 24,
    color: '#51565d',
    fontSize: 15,
    textAlign: 'center',
  },

  // Form
  loginForm: {
    width: '100%',
  },

  // Inputs
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  inputLabel: {
    position: 'absolute',
    top: -8,
    left: 0,
    fontSize: 12,
    color: '#77cdcd',
    fontWeight: '500',
    zIndex: 1,
  },
  textInput: {
    height: 50,
    fontSize: 16,
    color: '#51565d',
    paddingVertical: 15,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  inputUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#ddd',
  },

  // Password Container
  passwordContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  // Primary Button
  primaryButton: {
    backgroundColor: '#77cdcd',
    borderRadius: 8,
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },

  // Aux Links
  auxLinks: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotLink: {
    color: '#14345b',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },

  // Device Images
  deviceImages: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 24,
  },
  deviceImg: {
    opacity: 0.9,
  },
  laptopImg: {
    height: 135,
    width: 120,
    resizeMode: 'contain',
  },
  mobileImg: {
    height: 145,
    width: 80,
    resizeMode: 'contain',
  },
});