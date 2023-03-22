import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        
        <View style={styles.container}>
            <Image
                source={require('../assets/azka.png')}
                style={styles.image}
            />
            <Text style={styles.name}>Azka Hafidz Asianto</Text>
            <Text style={styles.bio}>Azka Hafidz Asianto was born and raised in Jakarta, Indonesia. He is currently a student at the Institute Teknologi Sumatera, majoring in Computer Science. Azka has always been interested in technology and computers, and he knew from a young age that he wanted to pursue a career in this field.
            {'\n'}{'\n'}Excited about the future and is looking forward to pursuing a career in the tech industry. He is confident that his education and experience will help him achieve his goals and make a positive impact on the world.</Text>
            <Text style={styles.copyright}>Azka Hafidz Asianto{'\n'}120140201{'\n'}UTS Pengembangan Aplikasi Mobile RB</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor:'#F1DBBF',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color:'#AA5656',
    },
    bio: {
        textAlign: 'justify',
        padding: 16,
        fontSize: 18,
        color:'#698269',
    },
    copyright:{
        color: '#B99B6B',
        textAlign: 'center',
        padding: 16,
        fontSize: 11,
    },
});

export default ProfileScreen;