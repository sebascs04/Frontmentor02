import { StyleSheet, Text, View } from "react-native";
import ThankIcon from "./icons/Thank";


export default function Submit({getlabel}) {
    return (
        <View style={styles.container} >
            <ThankIcon></ThankIcon>
            <Text style={styles.score}>You selected {getlabel()} out of 5</Text>
            <Text style={{color: 'rgba(255,255,255,0.7)', fontSize: 25, fontWeight: '600'}}>
                    Thank you!
            </Text>
            <Text style={{color: 'rgba(204,204,204,0.4)', paddingHorizontal: 20, lineHeight: 22, marginVertical:10,
                textAlign: 'center'}}>
                We aprecciate you taking the time to give a rating. If you ever need more support,
                don't hesitate to get in touch! 
            </Text>  
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        paddingTop: 38
    },
    score: {
        backgroundColor: '#rgba(36,38,49,0.5)',
        borderRadius: 20,
        color: '#rgba(251,125,0,0.6)',
        paddingHorizontal: 14,
        paddingVertical: 7,
        marginBottom: 22,
        marginTop: 24
    }
})