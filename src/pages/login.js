import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, Dimensions } from 'react-native';
import FormRow from '../components/FormRow';


export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        //this.handleChangeText = this.handleChangeText.bind(this)
    }
    // handleChangeText(newText) {
    // this.setState({
    //    value: newText
    //})
    // }
    onPressButton() {
        alert.alert('clicou');
    }


    render() {
        return (
            <View style={styles.Container}>
                <View style={{ backgroundColor: '#f28d5e', height: 100 }}>


                    <View style={styles.avatar}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../assets/avatar.png')}
                        />

                    </View>
                </View>
                <FormRow>
                    <TextInput
                        keyboardType='email-address'
                        //defaultValue={this.state.value}
                        // onChangeText={this.handleChangeText}
                        placeholder="Email"

                    />
                </FormRow>
                <FormRow>

                    <TextInput
                        secureTextEntry={true}
                        placeholder="Senha"
                    />
                </FormRow>
                <Text
                    style={styles.forgot}
                    accessibilityRole='link'
                >
                    ESQUECI A SENHA

                        </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressButton}
                /*criando botao de login*/
                >
                    <Text style={styles.TextBotao}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressButton}

                /*crinado botao do facebook */
                >
                    <Image
                        style={styles.Image}
                        source={require('../../assets/facebook.png')}


                    />
                    <Text style={{ color: 'blue', fontSize: 20, marginTop: 5, fontWeight: '500' }}> Entrar com Facebook </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressButton}


                /*crinado botao do google */
                >
                    <Image
                        style={styles.Image}
                        source={require('../../assets/google.png')}

                    />
                    <Text style={{ color: 'red', fontSize: 20, marginTop: 5, fontWeight: '500' }}> Entrar com Email </Text>
                </TouchableOpacity>

                <Text
                    style={{ alignSelf: 'center', margin: 10, fontWeight: '800' }}
                    accessibilityRole='link'
                >
                    CADASTRE-SE

                        </Text>


            </View >
        );
    }
}

const widthWindow = Dimensions.get('window').width;
const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    avatar: {
        alignItems: 'center',
        marginTop: 30,
    },
    forgot: {
        alignSelf: 'flex-end',
        margin: 10,
        fontSize: 14,
        fontWeight: '800'

    },
    button: {
        width: widthWindow - 50,
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        justifyContent: 'space-evenly',
        borderRadius: 8,
        elevation: 4,
        alignItems: 'stretch',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    TextBotao: {
        color: 'white',
        fontSize: 20,
        textShadowColor: '#919191',
        textShadowOffset: { width: 0.8, height: 0.8 },
        textShadowRadius: 6,
    },
    Image: {
        width: 40,
        height: 40,
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },


})
