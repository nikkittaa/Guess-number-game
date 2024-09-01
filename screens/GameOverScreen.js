import { View , Image, Text, StyleSheet, ScrollView} from "react-native";
import Title from '../components/Title';
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    return(
        <ScrollView>
        <View style = {styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style = {styles.imageContainer}>
            <Image style = {styles.image} source = {require('../assets/images/success.png')} />
            </View>
            <Text style = {styles.summaryText}>Your phone needed <Text style = {styles.highlight}>{roundsNumber}</Text> rounds to guess the number 
                <Text style = {styles.highlight}> {userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
});