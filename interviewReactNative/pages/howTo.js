/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const HowTo = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/* Hacking `together an interview, don't judge ;D */}
          {/* Also trying to avoid ANY css so I don't influence you. */}

          {/* <p>Welcome to the Frontend Day of Code for Leadr!</p>
          <p>First things first, open a new terminal on the bottom right corner</p>
          <img alt="helping :)" src="./helpinout.png" width={600} />
          <p>
            and type <b>yarn client</b> in the new terminal
          </p>
          <img alt="helping :)" src="./curseyousandbox.png" width={600} />

          <p>Then Click Here</p>
          <img alt="helping :)" src="./helpinoutmore.png" width={600} /> */}
          <Section>
            Your task, should you choose to accept it (You should)
          </Section>
          <Section>
            You are writing a simple CRUD application that will be hitting a
            meetings API. If you want to see the implementation details, check
            server.js.
          </Section>
          {/* <img alt="helping :)" src="./directions1.png" width={150} /> */}
          <Section>
            You are free to build this however you want. You can use any react
            state library (or react state by itself), as well as any CSS
            implementation (though we use CSS-in-JS, incase you don't like that,
            better to know now). You can install dependencies via the terminal,
            or just by opening package.json and specifying them there.
          </Section>
          <Section>
            The files below will have some guidelines for each step of the CRUD
            process
          </Section>
          {/* <img alt="helping :)" src="./directions2.png" width={300} /> */}
          <Section>
            Thats it! This is super open ended on purpose. Feel free to ask any
            clarifying questions. You will have 30 minutes to get more details
            and direction if you need it, then an hour on your own, then a final
            30 minutes to go over code and discuss. Also, I could not get hot
            reload working here, so you gotta refresh yourself. Sorry :(
          </Section>
          <Section>
            Also, there is a very basic fetch utility in the utils folder. Feel
            free to use it, or bring in your own!
          </Section>
          <Button
            title="Go to meetings"
            onPress={() => navigation.navigate('Meetings')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HowTo;
