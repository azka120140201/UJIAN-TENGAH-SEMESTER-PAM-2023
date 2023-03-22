import { Button, View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ProfileScreen from './profile';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Apricot Facts</Text>
            <Image
                source={require('../assets/apricot.jpg')}
                style={styles.image}
            />
            <Text style={styles.paragraph}>Apricots are a member of the rose family and are closely related to peaches, almonds, plums, and cherries. They are low in fat but rich in vitamin A and beta-carotene, which act as antioxidants to protect your cells from damage. Apricots are also a good source of flavonoids, an antioxidant that helps to protect against inflammation and inflammatory illnesses, along with reducing your risk for obesity, diabetes, and heart disease.{'\n'}{'\n'}Apricots have been around for over 4000 years. California produces about 95% of apricots in the U.S. and apricot trees will generally produce fruit for 20-25 years</Text>
            <View style={styles.buttonContainer}>
                <Button title='Go To Profile'
                    onPress={() => navigation.navigate('Profile')}>
                </Button>
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#F1DBBF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color:'#AA5656',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 16,
    },
    paragraph: {
        textAlign: 'justify',
        fontSize: 18,
        padding: 16,
        color:'#698269',
    },
    buttonContainer: {
        width: '100%',
        padding: 16,
    },
});

export default HomeScreen;