import {Text, View, StyleSheet, Alert, FlatList} from 'react-native';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import InstructionText from '../components/InstructionText';
import Card from '../components/Card';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/colors';

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber, onGameOver, manageRounds}){
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [ currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction){
        if((direction == 'lower' && currentGuess < userNumber) || (direction == 'higher' && currentGuess > userNumber)){
            Alert.alert("Don't lie!", "Why would you lie, I thought we were playing fair :(", [{text: "Oops!", style :"cancel"}]);
            return;
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess+1;
        }
        const newNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        manageRounds();
        setCurrentGuess(newNumber);
        setGuessRounds(prev => [newNumber, ...prev]);
    }

   const numberOfRounds = guessRounds.length;
   
    return (
        <View style = {styles.container}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style = {styles.instruction}>Should I guess higher or lower?</InstructionText>
                <View style = {styles.buttonContainer}>
                    <PrimaryButton onPress = {nextGuessHandler.bind(this, 'higher')}>
                    <Ionicons name = "add" size= {24} color = "white"/>
                    </PrimaryButton>
                    <PrimaryButton onPress = {nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name = "remove" size= {24} color = "white"/>
                    </PrimaryButton>
                </View>
            </Card>
            <View style = {styles.listContainer}>
                <FlatList  data = {guessRounds} 
                    renderItem={(itemData) => 
                        <View style = {styles.roundText}>
                            <Text style = {styles.textItem}>#{numberOfRounds-itemData.index}</Text>
                            <Text style = {styles.textItem}>Opponent's Guess: {itemData.item}</Text>
                        </View>
                    }
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
        padding: 24,
        marginTop: 20,
       
    },
    buttonContainer: {
        flexDirection: "row",
        
    },
    instruction:{
        marginBottom: 12,
    },
    roundText: {
        borderColor: Colors.primary700,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
    },
    textItem: {
        color: 'white',
        fontFamily: 'open-sans',
    },
    listContainer: {
        fles: 1,
        padding: 16,
    },
});
