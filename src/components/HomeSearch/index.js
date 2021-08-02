import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const HomeSearch = () => {
    return (
        <View>
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16}/>
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
                </View>
            </View>
        </View>
    )
}

export default HomeSearch
