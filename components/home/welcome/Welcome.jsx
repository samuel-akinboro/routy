import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'
const jobTypes = ["Full-time", "Part-time", "Contractor"]
import {useRouter} from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-Time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Blackvibes</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal={true}
          ItemSeparatorComponent={<View style={{width: SIZES.small}} />}
        />
      </View>
    </View>
  )
}

export default Welcome