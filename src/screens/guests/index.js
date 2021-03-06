import React, {useState} from 'react'; // useState (or _state hook_) is used for saving state of variables
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = (props) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Adults</Text>
            <Text style={styles.subtitle}>Ages 13 or above</Text>
          </View>
          <View style={styles.buttoncontainer}>
            <Pressable
              Validate
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>

            <Text style={styles.textstyle}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Children</Text>
            <Text style={styles.subtitle}>Ages 2 to 12</Text>
          </View>
          <View style={styles.buttoncontainer}>
            <Pressable
              Validate
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>

            <Text style={styles.textstyle}>{children}</Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Infants</Text>
            <Text style={styles.subtitle}>Under 2</Text>
          </View>
          <View style={styles.buttoncontainer}>
            <Pressable
              Validate
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>

            <Text style={styles.textstyle}>{infants}</Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <Pressable
          onPress={() => navigation.navigate('Search Destination')}
          style={{
            marginBottom: 20,
            backgroundColor: '#f15454',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            marginHorizontal: '5%',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
