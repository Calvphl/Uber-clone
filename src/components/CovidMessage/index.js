import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only necessary</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore alias quibusdam expedita consectetur amet eveniet doloremque nostrum soluta, assumenda odio sed cum rem saepe ab porro provident similique exercitationem.</Text>
            <Text style={styles.learnMore}>Learn More</Text>
        </View>
    )
}


export default CovidMessage