import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import EarnScreen from './screens/EarnScreen';
import InventoryScreen from './screens/InventoryScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Earn" component={EarnScreen} />
        <Stack.Screen name="Inventory" component={InventoryScreen} />
        <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// HomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Gameverse!</Text>
      <Button title="Earn Money" onPress={() => navigation.navigate('Earn')} />
      <Button title="Inventory" onPress={() => navigation.navigate('Inventory')} />
      <Button title="Marketplace" onPress={() => navigation.navigate('Marketplace')} />
      <Button title="Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />
    </View>
  );
};

export default HomeScreen;

// EarnScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

const EarnScreen = () => {
  return (
    <View>
      <Text>Earn Money Screen!</Text>
    </View>
  );
};

export default EarnScreen;

// InventoryScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

const InventoryScreen = () => {
  return (
    <View>
      <Text>Inventory Screen!</Text>
    </View>
  );
};

export default InventoryScreen;

// MarketplaceScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

const MarketplaceScreen = () => {
  return (
    <View>
      <Text>Marketplace Screen!</Text>
    </View>
  );
};

export default MarketplaceScreen;

// LeaderboardScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

const LeaderboardScreen = () => {
  return (
    <View>
      <Text>Leaderboard Screen!</Text>
    </View>
  );
};

export default LeaderboardScreen;