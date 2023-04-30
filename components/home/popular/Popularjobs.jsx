import React, { useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator 
            size='large' 
            color={COLORS.primary} 
          />
        ) : error ? (
          <Text>Something went wrong</Text>
        ): (
          <FlatList
            data={[1,2,3,4]}
            horizontal
            renderItem={({item}) => (
              <PopularJobCard 
                item={item}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            ItemSeparatorComponent={<View style={{width: SIZES.medium}} />}
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs