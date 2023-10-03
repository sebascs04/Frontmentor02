import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Button({Selected}) {
    return (
        <View style={styles.container}>
            <Pressable onPress={Selected} style={({pressed})=> 
            [{backgroundColor: pressed ? 'rgba(255,255,255,0.9)': '#rgba(251,125,0,0.8)'},styles.button]}>
                {
                    ({pressed})=> (
                        <Text style={[{color: pressed ? '#rgba(251,125,0,0.8)' : '#rgba(255,255,255,0.8)'},styles.text]}>
                            SUBMIT
                        </Text>
                    ) 
                }
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginHorizontal: 20,
        marginTop: 30,
    },
    button: {
        borderRadius: 25,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        letterSpacing: 2,
        fontWeight: '600'
    }
})