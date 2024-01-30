import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btn: {
    border: '1px solid white',
    paddingHorizontal: '40px',
    marginBottom: '2px',
  },
  container: {
    position: 'absolute',
    zIndex: 2,
    color: 'white',
    fontSize: '20px',
    top: '70%',
    left: '10%',
    // marginTop: '-50px',
    // marginLeft: '-50px',
    display: 'flex',
    flexDirection: 'column',
  },
});

const StartingPage = ({ navigation }) => {
  const btn = {
    border: '1px solid white',
    width: '80vw',
    // paddingHorizontal: '40px',
    marginBottom: '10px',
    color: 'black',
    border: 'none',
  };
  return (
    <View
      style={{
        border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../../assets/images/login-page.jpg')}
        style={{
          width: '100vw',
          height: '100vh',
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '40px',
            marginBottom: '20px',
          }}
        >
          Best <Text className="text-red-600">Workouts</Text> <br /> For You
        </Text>
        <Button
          mode="elevated"
          textColor="black"
          dark={true}
          buttonColor="rgb(177 177 77)"
          onPress={() => navigation.navigate('Login')}
          style={btn}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
};

export default StartingPage;
