import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import styles from './welcome.style';
import { useRouter } from 'expo-router';
import { SIZES, icons } from '@/constants';

const Welcome = () => {
  const jobTypes = [
    'Full-time',
    'Part-time',
    'Contractor',
    'Working Student',
    'Internship',
  ];
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Andy</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value=""
            onChange={(e) => console.log(e.target)}
            placeholder="What are you looking for!"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => console.log('search')}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setActiveJobType(item);
                  // router.push(`/search/${item}`);
                }}
                style={styles.tab(activeJobType, item)}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Welcome;
