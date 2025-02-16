import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function CardComponent(props) {
    return(
        <View style={styles.card}>
          <Link href={{ pathname: "/video", params: props.data }} asChild>
            <Pressable>
              <View style={StyleSheet.cardComponent}>
                { props.children }
              </View>
            </Pressable>
          </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 162,
        height: 104,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        boarderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
        },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20
        },
    test: {
        position: "absolute",
        width: 250,
        height: 30,
        bottom:0,
        padding: 5,
        backgroundColor: "rgba(0,0,0, 0.3)",
        borderBottomLeftRadius : 10,
        borderBottomRightRadius: 10
        }
    })