import React, {useState, useEffect} from 'react';
import { 
    Text, 
    View, 
    StatusBar, 
    TouchableOpacity, 
    Modal, Pressable, 
    TextInput, 
    FlatList
} from 'react-native';
import { styles } from '../../styles/homeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import 'react-native-get-random-values'
import { Icon } from 'react-native-elements'


const HomeScreen = () => {
    //Control de modal
    const [modalVisible, setModalVisible] = useState(false);
    //Cadena de tareas
    const [todoList, setTodoList] = useState([]);
    //Lectura del input
    const [todoText, setTodoText] = useState("");


    //Cuando inicie la app
    useEffect(() => {
        obtenerDatosStorage();
    }, []);

    //Si los hay, busca y trae los datos del Storage
    const obtenerDatosStorage = async () => {
        try {
            const tarea = await AsyncStorage.getItem('tarea');
            if(tarea){
                setTodoList(JSON.parse(tarea))
                console.log(todoList)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Cuando se escriba en el input se guarda en todoText
    const capturarTexto = (text) => {
        setTodoText(text);
    };

    // cuando se presione aceptar, si tiene contenido, se cargará al string de tareas, se guardará en storage, se limpiará el input y se esconde el modal.
    const cuandoSePresioneAceptar = () => {
        if(todoText.trim().length > 0){
            guardarTareaEnArray()
            guardarArrayEnStorage(JSON.stringify(todoList));
            setTodoText("");
        }
        setModalVisible(!modalVisible)
    };

    //Guarda la tarea en el array
    const guardarTareaEnArray = () => {
        setTodoList(
            (value)=> value.concat({text: todoText})
            );
       
    }

    //Almacena el array en storage, recibe como parámetro el array en formato JSON.
    const guardarArrayEnStorage = async (tareasJSON) => {
        try{
            await AsyncStorage.setItem('tarea', tareasJSON)
        } catch (error) {
            console.log(error);
        }
    }

    //Cuando se presione cancelar
    const cuandoSePresioneCancelar = () => {
        setTodoText("");
        setModalVisible(!modalVisible)
    };
    
    //Cuando se muestrec la lista de tareas en pantalla (mostrará el siguiente componente)
    const CuandoSeMuestreLaLista = ({item, index}) => {
        return (
                <BouncyCheckbox
                        size={25}
                        fillColor="black"
                        unfillColor="#303F46"
                        text={item.text}
                        iconStyle={{ borderColor: "white", marginLeft: 30, marginTop: 30 }}
                        textStyle={{ fontFamily: "NunitoLight", color: 'white', marginTop: 30 }}
                        onLongPress={(isChecked) => eliminarTarea(item)}
                        />
        )
    };

    //Elimina la tarea de la lista, lo guarda en el array y en el storage.
    const eliminarTarea = id => {
        //console.log(id)
        const tareasFiltradas = todoList.filter( tarea => id !== tarea);
        //console.log(tareasFiltradas)
        setTodoList(tareasFiltradas);
        guardarArrayEnStorage(JSON.stringify(tareasFiltradas));
    }

    return (
       <View style={styles.container}>
            <StatusBar  backgroundColor='#303F46'/>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Text style={styles.modalText}>Agregar tarea</Text>
                    <TextInput 
                        placeholder="Escribe tu tarea" 
                        placeholderTextColor="#C4C4C4"
                        value={todoText}
                        onChangeText={capturarTexto}
                        />
                    <Pressable
                        style={[styles.button, styles.buttonAgregar]}
                        onPress={cuandoSePresioneAceptar}
                    >
                        <Text style={styles.textStyle}>Agregar</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonCancelar]}
                        onPress={cuandoSePresioneCancelar}
                    >
                        <Text style={styles.textStyle}>Cancelar</Text>
                    </Pressable>
                    </View>
                </View>
            </Modal>
                <View>
                    <Text style={styles.title}>Tareas</Text>
                </View>
                {
                    todoList.length === 0 ? 
                    <View>
                        <Text style={styles.aviso}>Presiona + para agregar una tarea a tu lista</Text> 
                        <Text style={{color:'white', textAlign:'center', marginTop: 100}}>Creado por Axel Ivan Molina</Text>
                    </View>
                    : 
                    <View>
                        <FlatList
                        data={todoList}
                        renderItem={CuandoSeMuestreLaLista}
                        keyExtractor={ ({item, index}) => index }
                        >
                        </FlatList>
                    </View>
                }
            <View style={styles.containerAddBtn}>
                    <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
                        <Icon
                                name='plus'
                                type='font-awesome'
                                color='white'
                             />
                    </TouchableOpacity>
            </View>
       </View>
    )
}

export default HomeScreen

