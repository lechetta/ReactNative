import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Dimensions, Picker, alert, Alert, CheckBox, value } from 'react-native';
import FormRow from '../components/FormRow';


export default class CadPessoa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nome: '',
            Email: '',
            cpf: '',
            Senha: '',
            ConSenha: ''
        };

        this.onChange = this.onChange.bind(this);
        this.CheckText = this.CheckText.bind(this);
    }

    onChange(key, value) {
        this.setState({ Nome: value });
        this.setState({ Email: value });
        this.setState({ cpf: value });
        this.setState({ Senha: value });
        this.setState({ ConSenha: value });

    }
    CheckText() {
        const Nome = this.state.Nome;
        const Email = this.state.Email;
        const cpf = this.state.cpf;
        const Senha = this.state.Senha;
        const ConSenha = this.state.ConSenha;

    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> ESTABELECIMENTO </Text>
                <View style={{ backgroundColor: '#f28d5e', height: 70, marginTop: 10 }}>
                    <Text style={styles.Icon}>
                        Cadastre-se
                    </Text>
                </View>
                <View style={styles.avatar}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../assets/avatar.png')}
                    />
                </View>
                <View style={styles.campo}>
                    <FormRow>
                        <TextInput
                            onChangeText={value => this.onChange('Nome', value)}
                            placeholder="insira o seu nome"

                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            onChangeText={value => this.onChange('Email', value)}
                            placeholder="insira seu email"
                            keyboardType='email-address'
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            onChangeText={value => this.onChange('cpf', value)}
                            placeholder="CPF"
                            keyboardType="numeric"
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            onChangeText={value => this.onChange('senha', value)}
                            placeholder="Senha"
                            secureTextEntry={true}
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            onChangeText={value => this.onChange('ConSenha', value)}
                            placeholder="Confirmar senha"
                            secureTextEntry={true}
                        />
                    </FormRow>


                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.CheckText}
                    /*Criar*/
                    >
                        <Text style={styles.TextBotao}> Cadastrar </Text>
                    </TouchableOpacity>
                </View>
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
        marginTop: -90,
        alignSelf: 'flex-end',
        flexDirection: "row",
        marginRight: 20
    },
    Icon: {
        fontSize: 25,
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 15,
        fontWeight: '800',
        color: 'black',
        marginRight: 100


    },
    button: {
        width: widthWindow - 50,
        backgroundColor: '#f28d5e',
        padding: 10,
        margin: 10,
        justifyContent: 'space-evenly',
        borderRadius: 8,
        elevation: 4,
        alignItems: 'stretch',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    Image: {
        width: 40,
        height: 40,
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },
    title: {
        alignSelf: 'center',
        margin: 30,
        fontSize: 25,
        fontWeight: '800',
        color: 'black',

    },
    TextBotao: {
        color: 'white',
        fontSize: 20,
        textShadowColor: '#919191',
        textShadowOffset: { width: 0.8, height: 0.8 },
        textShadowRadius: 6,
    },
    campo: {
        // backgroundColor: '#ededed',
        margin: 10

    }

})