import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.text}>
        HomeScreen
      </Text>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate('Stack')}
      >
        <Text style={styles.textTouch}>
          Go to Stack Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: '20%',
  },
  touch: {
    backgroundColor: 'purple',
    padding: 10,
    marginTop: '20%',
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  textTouch: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
});

export default HomeScreen;