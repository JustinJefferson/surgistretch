import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Link } from 'expo-router';

import { getThumbnail } from '@/services/assetService';
import CardComponent from '@/components/CardComponent';
import {
  paletteTealDarkContrast,
  paletteTealDark,
  paletteBlack,
  paletteTealLight
} from '@/constants/Colors';

export function Section({ title, subheading, icon, cards, category }) {
  return (
    <View style={styles.section}>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={icon} size={42} style={{color: paletteTealDarkContrast }} />
        </View>
        <View>
          <Text style={styles.header}>{title}</Text>
          <Text style={styles.subheader}>{subheading}</Text>
        </View>
      </View>
      {/* Card Component For Loops */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", maxWidth: 400 }}>
        {cards.map((card, index) =>
          <View style={{ width: "50%", alignItems: "center" }} key={index}>
            <CardComponent key={index} data={{...card, category}}>
              <Image
                style={styles.image}
                resizeMode='stretch'
                source={getThumbnail(card.title)}
              />
            </CardComponent>
            <View style={{ flex: 1, width: 158 }}>
              <Link href={{ pathname: "/video", params: {...card, category} }} asChild>
                <Pressable>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    width: '100%',
    justifyContent: 'center'
  },
  icon: {
    justifyContent: 'center',
    paddingRight: 5
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: paletteBlack
  },
  subheader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: paletteTealDark
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: paletteBlack
  },
  image: {
    width: '100%',
    height: '100%'
  }
});