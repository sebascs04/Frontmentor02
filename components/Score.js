import { Alert, StyleSheet, Text, View } from "react-native";
import Element from "./Element";


export default function Score({options,handleClick}) {

    return (
        <View style={styles.container}>
            {
                options.map((option)=> {
                    return (
                        <Element 
                            handleClick={handleClick}
                            key={option.id} 
                            option= {option} 
                            />
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between'
    },
})