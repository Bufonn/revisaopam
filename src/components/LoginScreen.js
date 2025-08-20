import { styles } from './style';
import { ScrollView, Text, TouchableOpacity, Image, View } from 'react-native';

export default function LoginScreen({ navigation }) {

  const Cadastro = () => {

  }
  const Acesso = () => {
    navigation.navigate('Acesso')
  }
  return (
    <ScrollView >

      <View style={styles.background}>

        <Image
          source={require('../assets/casual_dog.png')}
          style={styles.dog}
        />

        <Text style={styles.h1}>Ótimo dia!</Text>
        <Text style={styles.h3}> Como deseja acessar?</Text>

        <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Acesso')}>

          <Image
            source={require('../assets/Google.png')}
            style={styles.google}
          />
          <Text style={styles.textBtn1}>Como deseja acessar?</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.textBtn2}>Outras opções</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}