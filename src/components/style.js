import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ffffffff",
  },
  h1: {
    marginLeft: windowWidth * 0.25,
    justifyContent: "center",
    alignItems: "center",
    color: "#32404d",
    fontSize: 40,
    marginBottom: windowWidth * 0.02,
  },
  h3: {
    marginLeft: windowWidth * 0.3,
    justifyContent: "center",
    alignItems: "center",
    color: "#32404d",
    fontSize: 14,
  },
  btn1: {
    marginTop: windowWidth * 0.2,
    flexDirection: "row",
    backgroundColor: "#13b666",
    marginLeft: windowWidth * 0.05,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    width: windowWidth * 0.9,
    height: windowWidth * 0.17,
  },
  dog: {
    height: windowWidth * 0.82,
    marginTop: windowWidth * 0.01,
    marginBottom: windowWidth * 0.1,
  },
  google: {
    alignItems: "flex-start",
    backgroundColor: "#ffffffff",
    width: 40,
    height: 40,
    marginLeft: windowWidth * 0.05,
    borderRadius: 8,
  },
  btn2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2FAFA",
    borderColor: "#13b666",
    borderWidth: 2,
    padding: "5px",
    marginTop: windowWidth * 0.05,
    marginLeft: windowWidth * 0.05,
    marginBottom: windowWidth * 0.2,
    borderRadius: 10,
    width: windowWidth * 0.9,
    height: windowWidth * 0.17,
  },
  textBtn1: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
    color: "#f2f2f2",
    fontSize: 15,
    marginRight: windowWidth * 0.23,
  },
  textBtn2: {
    color: "#32404d",
    fontSize: 15,
  },

  cadastroTitle: {
    marginLeft: 25,
    display: "flex",
    justifyContent: "center",
  },
  cadastroH1: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#2e3e4b",
    marginTop: windowWidth * 0.01,
  },
  cadastroArea: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 8,
    color: "#757e86",
  },

  BlocoE: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  Email: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#757e86",
  },

  SndEmail: {
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#ebecee",
    height: windowWidth * 0.17,
  },

  BlocoS: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Senha: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#757e86",
  },

  SndSenha: {
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#ebecee",
    height: windowWidth * 0.17,
    width: '100%'
  },

  cadastroBtns: {
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 20,
    width: windowWidth,
  },

  cadastroBtn: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: "#13b666",
    height: windowWidth * 0.16,
    justifyContent: 'center'
  },

  cadastroBtnText: {
    textAlign: 'center',
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  ou: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    paddingHorizontal: 20,
  },

  Line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },

  blocoRedes: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginBottom: 40,
  },

  Google: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 99,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  Facebook: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 99,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  acessoBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly",
    marginTop: 30,
    width: windowWidth,
  },

  acessoBtn: {
    width: '40%',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: "#13b666",
    height: windowWidth * 0.16,
    justifyContent: 'center'
  },

  acessoBtnText: {
    textAlign: 'center',
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  acessoBtn2: {
    width: '40%',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: "#13b666",
    height: windowWidth * 0.16,
    justifyContent: 'center'
  },
  acessoBtnText2: {
    textAlign: 'center',
    color: "#32404d",
    fontSize: 16,
  },
  Checkbox: {
    padding: 10,
    marginLeft: windowWidth * 0.1,
    marginTop: windowWidth * 0.1,
    flexDirection: 'row',
  },
  checkboxTxt: {
    marginLeft: windowWidth * 0.06,
  }
});
