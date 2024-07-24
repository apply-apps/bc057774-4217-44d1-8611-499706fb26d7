// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createStackNavigator();

function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (password === 'password123') {
            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Incorrect password');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <LinearGradient
                    colors={['#FF6F61', '#DE1A1A']}
                    style={styles.header}
                >
                    <Text style={styles.headerText}>Welcome</Text>
                </LinearGradient>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter username"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text style={styles.warningText}>Password must be 'password123'</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.dividerText}>or</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

function Home() {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <Text style={styles.homeText}>Home Screen</Text>
        </SafeAreaView>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        alignItems: 'center',
        paddingVertical: 50,
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '80%',
        marginTop: 10,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
    },
    warningText: {
        color: 'red',
        marginTop: 5,
        fontSize: 12,
    },
    button: {
        width: '80%',
        backgroundColor: '#FF6F61',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dividerText: {
        marginVertical: 20,
        fontSize: 16,
    },
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});