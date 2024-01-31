import { Stack, useNavigation, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, icons, images, SIZES } from '../constants';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
  DrawerContent,
  StartingPage,
  LoginScreen,
  RegisterPage,
  Profile,
  TrainingScreen
} from '../components';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const StackNav = () => {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={handlePress} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: '',
          headerShown: true,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >

          <Welcome />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default function Home() {
  const router = useRouter();
  const Drawer = createDrawerNavigator();

  return (
    // <StackNav />
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName='StartingPage'
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false
        }}>
        <Drawer.Screen name="Home" component={StackNav} />
        <Drawer.Screen name="StartingPage" component={StartingPage} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Register" component={RegisterPage} />
        <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
        <Drawer.Screen name="Training" component={TrainingScreen} options={{ headerShown: true }} />
      </Drawer.Navigator>
    </NavigationContainer>

  )
}
