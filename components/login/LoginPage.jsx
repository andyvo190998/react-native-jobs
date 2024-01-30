// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
// } from 'react-native';

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Perform login logic here
//     // For simplicity, let's just navigate to a HomeScreen for now
//     navigation.navigate('Home');
//   };

//   return (
//     <ImageBackground
//       source={{
//         uri: 'https://images.pexels.com/photos/4482936/pexels-photo-4482936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       }} // Replace with the actual path to your image
//       style={styles.backgroundImage}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Login</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <Text style={{ marginTop: '20px', fontSize: '17px' }}>
//           Don't have an account?{' '}
//           <Text style={{ color: 'blue' }}>Register here</Text>
//         </Text>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // or 'stretch'
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 24,
//     color: 'white', // Set text color to contrast with the background
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     padding: 8,
//     backgroundColor: 'rgba(255,255,255,0.7)', // Add a semi-transparent white background to improve readability
//   },
//   loginButton: {
//     backgroundColor: '#0078d0',
//     padding: 12,
//     borderRadius: 8,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default LoginScreen;

// https://github.com/syednomishah/Login-SignUp-UI-React-Native
import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
// import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#877dfa' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'absolute',
            zIndex: '1',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: 'yellow',
              padding: 10,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              marginLeft: 4,
            }}
          >
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/8401876/pexels-photo-8401876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={{ width: '100%', height: 500 }}
          />
        </View>
      </SafeAreaView>

      <View
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 25,
          paddingTop: 30,
        }}
      >
        <View style={{ marginBottom: 2 }}>
          <Text style={{ color: 'gray', marginLeft: 4, marginBottom: 5 }}>
            Email Address
          </Text>
          <TextInput
            style={{
              padding: 10,
              backgroundColor: '#f3f4f6',
              color: '#374151',
              borderRadius: 20,
              marginBottom: 3,
            }}
            placeholder="email"
            value="john@gmail.com"
          />
        </View>
        <View style={{ marginBottom: 2 }}>
          <Text style={{ color: 'gray', marginLeft: 4, marginBottom: 5 }}>
            Password
          </Text>
          <TextInput
            style={{
              padding: 10,
              backgroundColor: '#f3f4f6',
              color: '#374151',
              borderRadius: 20,
            }}
            secureTextEntry
            placeholder="password"
            value="test12345"
          />
        </View>
        <TouchableOpacity
          style={{ alignItems: 'flex-end', marginVertical: '10px' }}
        >
          <Text style={{ color: 'gray', marginBottom: 5 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: '#eab308',
            borderRadius: 20,
            paddingVertical: 12,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'black',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            color: 'gray',
            fontWeight: '600',
            textAlign: 'center',
            paddingTop: 5,
            marginVertical: 10,
          }}
        >
          Or
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 7,
            display: 'flex',
            gap: '15px',
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#f3f4f6',
              borderRadius: 20,
            }}
          >
            <Image
              source={require('../../assets/icons/google.png')}
              style={{ width: 35, height: 35 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#f3f4f6',
              borderRadius: 20,
            }}
          >
            <Image
              source={require('../../assets/icons/apple.png')}
              style={{ width: 35, height: 35 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#f3f4f6',
              borderRadius: 20,
            }}
          >
            <Image
              source={require('../../assets/icons/facebook.png')}
              style={{ width: 35, height: 35 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 7,
          }}
        >
          <Text style={{ color: 'gray', fontWeight: '600' }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ fontWeight: '600', color: '#eab308' }}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
