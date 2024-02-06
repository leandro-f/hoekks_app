import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import cartLogo from "./assets/Hoeklogo.png";
import RemoveModal from "./src/components/RemoveModal";
import lupa  from "./assets/lupa.png";
import cruz from "./assets/cruz.png"
const DATA = [
  {
    name: "Remera",
    id: 1,
  },
  {
    name: "Pantalón",
    id: 2,
  },
  {
    name: "Gorra",
    id: 3,
  },
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleInputChange = (value) => setInputValue(value);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
    console.log(id);
  };


  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />

      <View style={styles.header}>
        <Text>TU TIENDA</Text>
        <Image style={styles.image} source={cartLogo}/>
      </View>


      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputChange}
          value={inputValue}
          style={styles.input}
          placeholder="Ingrese un producto"
          
        />
        <Pressable onPress={addItem}>
          <Text style={{ fontSize: 40 }}><Image style={styles.image1} source={lupa}/></Text>
        </Pressable>
      </View>


      <View style={styles.productList}>

        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={{ width: 400, flexDirection: "row" }}>
              <Text style={styles.product}>{item.name}</Text>
              <Pressable onPress={() => handleModal(item.id)}>
                <Text style={{ fontSize: 20 }}><Image style={styles.image1} source={cruz}/></Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBA760",
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight,
    
  },
  modalContainer: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    backgroundColor: "#81ACDA",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    border: "1px solid",

  },
  image: {
    width: 50,
    height: 50,
  },
  image1: {
    width: 30,
    height: 30,
  },
  productList: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  product: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "90%",
  },
  inputContainer: { 
    flexDirection: "row",
    marginVertical: 10

   },
});

