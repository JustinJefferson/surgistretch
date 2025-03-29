import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import { Section } from "@/components/Section";
import { exerciseData } from "@/constants/Data";
import { paletteBlack, paletteTealLightContrast, paletteTealDarkContrast } from "@/constants/Colors";

const logo = require('../../assets/images/SurgiStretchLogoSmall.png');
const hhcLogo = require('../../assets/images/HHCLogoEditUrogyn.png');

export default function Index() {
    return (
        <View style={{
            justifyContent: "center", alignItems: "center" , backgroundColor: paletteTealLightContrast, flex: 1,
            paddingTop: 75,
            paddingBottom: 20,
            flexDirection: 'column'}}>
            <View style={{justifyContent: 'center', alignContent: 'center'}}>
                <Text style={styles.text}>Welcome to</Text>
                <Text style={styles.header}>SurgiStretch</Text>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={logo} />
                </View>
                <Text style={styles.text}>Brought to you by</Text>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={hhcLogo} />
                </View>
                <Text style={styles.disclaimerText}>The videos provided are for personal use only and not intended to deal with physical injury. Seek medical attention if experiencing pain while perform stretches.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        resizeMode: 'contain',
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        color: paletteTealDarkContrast,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text: {
        color: paletteBlack,
        fontSize: 20,
        textAlign: 'center'
    },
    disclaimerText: {
        color: paletteBlack,
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: 20,

    }
})

