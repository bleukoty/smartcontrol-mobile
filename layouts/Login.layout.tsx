import React from 'react'
import { StyleSheet, View } from 'react-native'


interface LoginLayoutProps {
    children: React.ReactNode
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent: "center"
    }
});

const LoginLayout = ({children}: LoginLayoutProps) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

export default LoginLayout;
