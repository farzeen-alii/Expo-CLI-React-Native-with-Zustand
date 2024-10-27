import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Counter from './src/Counter'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Counter />
    </SafeAreaView>
  )
}

export default App