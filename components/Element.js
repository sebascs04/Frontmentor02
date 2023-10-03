import { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function Element({option,handleClick}) {
    const {id,label,state} = option
    const [stylePressed,setStylePressed] = useState('rgba(36,38,49,0.5)')
    const [hover,setHover] = useState('#53545B')

    useEffect(()=> {
        changeStyle()
    },[state])

    function changeStyle() {
        if (state==true) {
            setStylePressed('rgba(251,125,0,0.8)')
            setHover('rgba(251,125,0,0.8)')
        } else {
            setStylePressed('rgba(36,38,49,0.5)')
            setHover('#53545B')
        }
    }

    
    return(
        <View style={styles.container}>
                <Pressable 
                onPress={()=>{changeStyle();handleClick(id)}}
                style={({pressed})=> [
                    {backgroundColor: pressed  ?  hover : stylePressed},styles.button]}>
                    {({pressed})=> (
                        <Text style={{color: pressed || state  ? 'white' : 'rgba(204,204,204,0.4)'}}>
                            {label}
                        </Text>
                    )}
                </Pressable>
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 22,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})