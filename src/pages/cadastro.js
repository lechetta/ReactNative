import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Dimensions, Picker } from 'react-native';
import FormRow from '../components/FormRow';
import { withFormik } from 'formik';

export default class cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event = {}) {
        //  const name = event.target && event.target.name;
        // const value = event.target && event.target.value;

        // this.setState([name], value);
    }

    onPressButton() {


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
                            //name="local"
                            // onChangeText={this.handleChange}
                            // value={this.state.local}
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
                            <Picker.Item label="Lanchonete" value="Lanchonete" />
                            <Picker.Item label="Distribuidora" value="Distribuidora" />
                            <Picker.Item label="Restaurante" value="Restaurante" />
                            <Picker.Item label="churrascaria" value="churrascaria" />
                            <Picker.Item label="panificadora" value="panificadora" />
                        </Picker>

                    </FormRow>

                    <FormRow>
                        <TextInput
                            placeholder="Telefone"
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            placeholder="Nome da rua"
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            placeholder="numero"
                            keyboardType='numeric'
                        />
                    </FormRow>


                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPressButton}
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

        //cor ver 4dba3a
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
const enhaceWithFormik = withFormik({
    mapPropsToValues: () => ({ local: '', telefone: '', rua: '', numero: '' }),
    validate: values => {
        const { local, telefone, rua, numero } = values
        const errors = {}

        if (!local) errors.local = 'informa o local!'

        if (!telefone) errors.telefone = 'informe um numero de telefone!'

        if (!rua) errors.rua = 'informe o nome da rua'

        if (!numero) errors.numero = 'informe o numero do seu estabelecimento'

        return errors


    }
})
