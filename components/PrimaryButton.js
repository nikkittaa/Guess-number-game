import { View , Text, Pressable, StyleSheet} from "react-native";
import Colors from "../constants/colors";

export default function PrimaryButton({children, onPress}){
    return (
        <View style = {styles.OuterContainer}>
            <Pressable android_ripple = {{color: Colors.primary600}} onPress = {onPress}
                style = {({pressed}) => pressed ? [styles.InnerContainer, styles.pressed]: styles.InnerContainer}>
        
            <Text style = {styles.buttontext}>
                {children}
            </Text>
        
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    OuterContainer: {
        overflow: "hidden",
        margin: 4,
        borderRadius: 28,
        flex: 1
    },
    InnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttontext: {
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    }
});