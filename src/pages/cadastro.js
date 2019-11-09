import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Dimensions, Picker, alert, Alert, CheckBox } from 'react-native';
import FormRow from '../components/FormRow';


export default class cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TextInputLocal: '',
            TextInputTelefone: '',
            TextInputRua: '',
            TextInputNumero: '',
            language: ''
        };

        this.onChange = this.onChange.bind(this);
        this.CheckTextInput = this.CheckTextInput.bind(this);
    }

    onChange(key, value) {
        this.setState({ TextInputLocal: value });
        this.setState({ TextInputTelefone: value });
        this.setState({ TextInputRua: value });
        this.setState({ TextInputNumero: value });
        this.setState({ language: value });

    }

    CheckTextInput() {
        const TextinputLocal = this.state.TextInputLocal;
        const TextInputTelefone = this.state.TextInputTelefone;
        const TextInputRua = this.state.TextInputRua;
        const TextInputNumero = this.state.TextInputNumero;
        const language = this.state.language;

        if (TextinputLocal == '' || TextInputRua == '' || TextInputNumero == '' || TextInputTelefone == '') {
            Alert.alert('Preencha todos os campos!');
        } else if (this.state.TextInputTelefone.length < 8) {
            Alert.alert('Número de telefone inválido!');
        } else if (language == '-selecione-') {
            Alert.alert('Voce deve selecionar uma modalidade')
        } else {
            Alert.alert('Sucesso!');
            //gravar no banco
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> ESTABELECIMENTO </Text>
                <View style={{ backgroundColor: '#f28d5e', height: 70, marginTop: 10 }}>

                    <View style={styles.avatar}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../assets/avatar.png')}
                        />
                    </View>
                </View>


                <View style={styles.campo}>
                    <FormRow>
                        <TextInput
                            //value={this.state.TextInputLocal}
                            onChangeText={value => this.onChange('TextInputLocal', value)}
                            placeholder="insira o nome do local"

                        />
                    </FormRow>
                    <FormRow>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 30 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="-selecione-" value="-selecione-" />
                            <Picker.Item label="Lanchonete" value="Lanchonete" />
                            <Picker.Item label="Distribuidora" value="Distribuidora" />
                            <Picker.Item label="Restaurante" value="Restaurante" />
                            <Picker.Item label="churrascaria" value="churrascaria" />
                            <Picker.Item label="panificadora" value="panificadora" />
                        </Picker>

                    </FormRow>

                    <FormRow>
                        <TextInput
                            //value={this.state.TextInputTelefone}
                            // type={'cel-phone'}
                            // options={{
                            //     dddMask: '+99 99 '
                            //  }}
                            onChangeText={value => this.onChange('TextInputTelefone', value)}
                            placeholder="Telefone"
                            keyboardType='numeric'
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            //value={this.state.TextInputRua}
                            onChangeText={value => this.onChange('TextInputRua', value)}
                            placeholder="Nome da rua"
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            //value={this.state.TextInputNumero}
                            onChangeText={value => this.onChange('TextInputNumero', value)}
                            placeholder="numero"
                            keyboardType='numeric'
                        />
                    </FormRow>


                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.CheckTextInput}
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
        marginTop: -40,
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
        margin: 15

    }

})