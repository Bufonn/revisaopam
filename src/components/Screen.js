import styles from "./style";
import { View, TouchableOpacity, Text, ScrollView, TextInput, Image } from "react-native";
import Checkbox from 'expo-checkbox';
import { useState } from "react";

export default function AcessoScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [check, setChecked] = useState(false);

  const aviso = () => {
    if (email === 'Admin' && senha === 'Admin' && check !== false) {
      alert('Login Efetuado!');
    } else {
      alert('Login não efetuado');
    }
  };

  return (
    <ScrollView style={styles.background}>
      <View style={styles.cadastroTitle}>
        <Text style={styles.cadastroH1}>Acesse</Text>
        <Text style={styles.cadastroAlgumacoisa}>Área para fazer o Login</Text>
      </View>

      <View style={styles.BlocoE}>
        <Text style={styles.Email}>Email:</Text>
        <TextInput
          style={styles.SndEmail}
          placeholder="Digite seu email aqui"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.BlocoS}>
        <Text style={styles.Senha}>Senha:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.SndSenha}
            placeholder="Digite sua senha aqui"
            value={senha}
            onChangeText={setSenha}
          />
        </View>
      </View>

      <View style={styles.Checkbox}>
        <Checkbox
          value={check}
          onValueChange={setChecked}
          color={check ? '#13b666' : undefined}
        />
        <Text style={styles.checkboxTxt}>Concordo com os Termos de Serviço</Text>
      </View>

      <View style={styles.acessoBtns}>
        <TouchableOpacity style={styles.acessoBtn} onPress={aviso}>
          <Text style={styles.acessoBtnText}>Entre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.acessoBtn2} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.acessoBtnText2}>Cadastre-se</Text>
        </TouchableOpacity>

        <View style={styles.ou}>
          <View style={styles.Line} />
          <Text>Ou</Text>
          <View style={styles.Line} />
        </View>

        <View style={styles.blocoRedes}>
          <TouchableOpacity style={styles.Google}>
            <Image source={require("../assets/Google.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Facebook}>
            <Image source={require("../assets/Facebook.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
