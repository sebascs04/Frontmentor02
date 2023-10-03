import { StyleSheet, Text, View } from "react-native";
import Score from "./Score";
import Button from "./Button";
import StartIcon from "./icons/Start";

export default function Unsubmit({Selected,options,handleClick}) {


    
    return (
        <>
            <View style={styles.icon}>
                <StartIcon />
            </View>
            <Text style={{color: 'rgba(255,255,255,0.9)', fontSize: 25, fontWeight: '600', marginHorizontal: 20}}>
                How did we go?
            </Text>
            <Text style={{color: 'rgba(204,204,204,0.4)', paddingHorizontal: 20, lineHeight: 22, marginVertical:12}}>
                Please let us how we did with your support request. 
                All feedback is appreciated to help us improve our offering!
            </Text>
            <Score options={options} handleClick={handleClick}/>
            <Button Selected={Selected} />
        </>
    )
}

const styles = StyleSheet.create({
    icon : {
      marginTop: 25, 
      marginBottom: 15, 
      marginHorizontal: 20, 
      backgroundColor: 'rgba(36,38,49,0.5)', 
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      borderRadius: 20
    }
  });
  

