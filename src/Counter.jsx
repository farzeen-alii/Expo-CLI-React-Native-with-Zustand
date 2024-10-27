import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import useStore from './store/useStore'

const Counter = () => {
    const count = useStore((state) => state.count);
    const increment = useStore((state) => state.increment);
    const decrement = useStore((state) => state.decrement);
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <Button title='Increment' onPress={increment} />
      <Button title='Decrement' onPress={decrement} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText:{
        fontSize: 24,
        marginBottom: 20
    }
})

export default Counter
