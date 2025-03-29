import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import { Section } from "@/components/Section";
import { exerciseData } from "@/constants/Data";

const logo = require('../../assets/images/HHCLogoEditUrogyn.png');
const devLogo = require('../../assets/images/PawPawLogoClear.png')

export default function About() {
  return (
    <ScrollView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.contentContainer}>
          <View style={styles.imageView}>
            <Image style={styles.image} source={logo} />
          </View>
          <Text style={styles.headerText}>About Hartford Healthcare</Text>
          <Text style={styles.aboutText}>
            At our Hartford Hospital Urogynecology Program, we are passionate about training proficient vaginal surgeons; ergonomics is a critical part of surgeon success and longevity. We enlisted our physical therapy colleagues to observe vaginal surgery and recommend exercises to help relieve the physical strain of surgery. These videos are examples of the recommended exercises to perform in the OR, between cases, and at home to promote surgeon health and physical well-being. We developed this application to share this resource with other vaginal surgeons.
          </Text>
          <View style={styles.imageView}>
            <Image style={styles.image} source={devLogo} />
          </View>
          <Text style={styles.headerText}>About Hartford Healthcare</Text>
          <Text style={styles.aboutText}>
            At our Hartford Hospital Urogynecology Program, we are passionate about training proficient vaginal surgeons; ergonomics is a critical part of surgeon success and longevity. We enlisted our physical therapy colleagues to observe vaginal surgery and recommend exercises to help relieve the physical strain of surgery. These videos are examples of the recommended exercises to perform in the OR, between cases, and at home to promote surgeon health and physical well-being. We developed this application to share this resource with other vaginal surgeons.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10
    },
    aboutText: {
        fontSize: 16,
        lineHeight: 20,
        padding: 10
    },
    contentContainer: {
        padding: 10,
        paddingHorizontal: 25,
        paddingTop: 20
    },
    imageView: {
        width: 400,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    image: {
        width: '100%',
        resizeMode: 'contain'
   }
})
