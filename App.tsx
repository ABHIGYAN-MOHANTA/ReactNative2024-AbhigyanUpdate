import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <ImageBackground
        source={require('./assets/images/back.jpg')}
        style={styles.backgroundImage}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.background}>
            <Text style={styles.title}>Abhigyan Mohanta</Text>
            <Text style={styles.sectionTitle}>V = 10^-9 s</Text>
            <Text style={styles.sectionTitle}>I am Committed!</Text>
            <Text style={styles.highlight}>7 Fu*king Years</Text>
            <Text style={styles.sectionDescription}>
              I am a full stack developer. I have years of experience in
              developing web and mobile applications. I have worked with
              technologies like React, React Native, Node, Express, MongoDB,
              PostgreSQL, etc.
            </Text>
            <Text style={styles.sectionDescription}>
              I am currently working as a developer intern at SuperEffective,
              working with React, Webpack, Postgres, Redis, Elixir and Erlang!
            </Text>
            <Text style={styles.highlight}>1st half of 2024</Text>
            <Text style={styles.sectionDescription}>
              This 2024, I am planning to learn Machine Learning, finish my
              Elixir Courses and Build and Ship a lot of Products. I also want
              to dive deeper into Golang and Rust. I also have to start doing
              leetcode.
            </Text>
            <Text style={styles.highlight}>Prep: 2nd Part</Text>
            <Text style={styles.sectionDescription}>
              Workout and Drink enough water. Read Gita and other books too!
              Take care of your health! Don't forget to meditate! And most
              importantly, don't waste your money!
            </Text>
            <Text style={styles.highlight}>2nd half of 2024</Text>
            <Text style={styles.sectionDescription}>
              Get started with Open Source in Tensorflow! Get started with
              freelancing! Get started with my own startup!
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
  highlight: {
    fontWeight: '700',
    marginTop: 8,
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: 24,
  },
  background: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default App;
