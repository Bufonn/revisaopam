import { styles } from './style';
import { View, TouchableOpacity, Text, ScrollView, TextInput, Image } from 'react-native';
import { useState } from 'react';

export default function CadastroScreen({ navigation }) {
    const aviso = () => {
        if (email != '' && senha != '' && senha === confirma) {
            alert('Registro Efetuado');
        } else {
            alert('Registro não efetuado.');
        }
    }

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirma, setConfirma] = useState('');
    return (
        <ScrollView style={styles.background}>

            <View style={styles.cadastroH1}>
                <Text style={styles.cadastroH1}> Cadastre-se</Text>

                <Text style={styles.cadastroArea}> Area para realizar o cadastro</Text>
            </View>

            <View style={styles.BlocoE}>
                <Text style={styles.Email}> Email: </Text>
                <TextInput style={styles.SndEmail}
                    placeholder='Digite seu email aqui'
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.BlocoS}>
                <Text style={styles.Senha}>Senha:</Text>

                <View style={styles.inputContainer}>

                    <TextInput style={styles.SndSenha}
                        placeholder='Digite sua senha aqui'
                        value={senha}
                        onChangeText={setSenha} />
                </View>
            </View>

            <View style={styles.BlocoS}>
                <Text style={styles.Senha}>Confirme sua senha:</Text>

                <View style={styles.inputContainer}>

                    <TextInput style={styles.SndSenha}
                        placeholder='Digite sua senha aqui'
                        value={confirma}
                        onChangeText={setConfirma} />
                </View>
            </View>

            <View style={styles.cadastroBtns}>
                <TouchableOpacity style={styles.cadastroBtn} onPress={aviso}>
                    <Text style={styles.cadastroBtnText}>Entre</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.ou}>
                <View style={styles.Line} />
                <Text>Ou</Text>
                <View style={styles.Line} />
            </View>

            <View style={styles.blocoRedes}>

                <TouchableOpacity style={styles.Google}>
                    <Image source={require('../assets/Google.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.Facebook}>
                    <Image source={require('../assets/Facebook.png')} />
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}