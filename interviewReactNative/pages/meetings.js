/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Text, Button, View} from 'react-native';

const Meetings = ({navigation}) => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/meetings')
      .then(response => response.json())
      .then(json => setMeetings(json))
      .catch(error => console.log(error));
  }, []);

  console.log(meetings);

  return (
    <View>
      <Text>Meetings</Text>
      <Button
        title="Return to Home"
        onPress={() => navigation.navigate('Getting Started')}
      />
    </View>
  );
};

export default Meetings;
