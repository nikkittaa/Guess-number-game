import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

export default function StartGameScreen({onPickNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid', 'Number has to be a  number between 1 and 99!', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        onPickNumber(chosenNumber);
    }
    return(
        <View style = {styles.rootContainer}>
            <Title>Guess My Number!</Title>
        <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput style = {styles.numberInput} maxLength= {2} 
                keyboardType="number-pad"
                value = {enteredNumber}
                onChangeText={numberInputHandler}
                />
             <View style = {styles.buttonContainer}>
                <PrimaryButton onPress = {resetInputHandler}>Reset</PrimaryButton>
                <PrimaryButton onPress = {confirmInputHandler}>Confirm</PrimaryButton>
             </View>
        </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
    },
});