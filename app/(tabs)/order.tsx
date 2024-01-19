import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const order = () => {
    const [hasOrder, setHasOrder] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.segmentTop}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name='food-steak' color={Colors.primary} size={300} />
                </View>
            </View>

            <View style={styles.segmentBottom}>


            </View>

        </View>
    )
}

export default order

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    iconContainer: {
        position: 'absolute',
        top: 100,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',


    },
    segmentTop: {
        flex: 8,
        backgroundColor: Colors.lightLilac
    },
    segmentBottom: {
        flex: 2,

    },
})