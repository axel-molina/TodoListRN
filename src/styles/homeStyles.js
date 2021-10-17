import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303F46',
    },
    title: {
        color: 'white',
        fontFamily: 'NunitoLight',
        fontSize: 64,
        textAlign: 'center',
        paddingTop: 15,
    },
    aviso: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'NunitoLight',
        marginTop: 190,
    },
    containerAddBtn: {
        position: 'absolute',
        top: 590,
        left: 300,
    },
    addBtn: {
        backgroundColor: '#738891',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
    },
    //Modal Styles

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 90,
        marginTop: 15,
        elevation: 2
      },
      buttonCancelar: {
        backgroundColor: '#303F46',
      },
      buttonAgregar: {
        backgroundColor: '#303F46',
      },
      textStyle: {
        color: "white",
        fontFamily: "NunitoLight",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: 'NunitoRegular',
      }
});