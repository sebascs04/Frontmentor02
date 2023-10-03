import { StyleSheet, Text, View } from 'react-native';
import Unsubmit from './components/Unsubmit';
import Submit from './components/Submit';
import { useState } from 'react';

const points =[
  {
      id: 1,
      label: '1',
      state: false
  },
  {
      id: 2,
      label: '2',
      state: false

  },
  {   
      id: 3,
      label: '3',
      state: false

  },
  {
      id: 4,
      label: '4',
      state: false

  },
  {
      id: 5,
      label: '5',
      state: false
  },
]

export default function App() {
  const[send,setSend]=useState(false)
  const [options,setOptions] = useState(points)
        
  function handleClick(index) {
    setOptions(
        options.map((option)=> option.id == index && option.state != true ? {...option, state: true} : {...option, state: false}))
  }

  function getlabel() {
    const labelsend = options.filter((option)=> option.state == true)
    const {label} = labelsend[0]
    return label
  }

  function Selected() {
        setSend(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        {
          send == false ? <Unsubmit 
                          options={options} 
                          handleClick={handleClick} 
                          Selected={Selected} /> : <Submit getlabel={getlabel} />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111214',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    backgroundColor: 'rgba(36,38,49,0.5)',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    height: 380
  }
});
