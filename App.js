import { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
  Modal
} from "react-native";
import Logo from "./assets/Hoeklogo.png";

const product = [
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
  // useState y useEffect hooks para controlar el estado de la aplicación y el ciclo de vida de un componente
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([])

  const handleAddCounter = () => setCounter(counter + 1);

  const handleInputChange = (value) => setInputValue(value);

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime()
    }
    setCartItems([...cartItems, newItem])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <view><Text>TIENDA</Text></view>
        
        <view><Image style={styles.image} source={Logo} /></view>

        
      </View>
      <View style={styles.inputContainer}>
        <View >
          <TextInput
            onChangeText={handleInputChange}
            value={inputValue}
            style={styles.input}
            placeholder="Ingrese un producto"
          />

        </View>
        <View style={{ backgroundColor:"#448FDA" }}>
          <Pressable onPress={addItem}>
            <Text style={{ fontSize: 30}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.productList}>

        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={{width: 400}}>
              <Text style={styles.product}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Pressable onPress={handleAddCounter}>
        <Text style={{ fontSize: 20 }}>{counter}</Text>
      </Pressable>
      <Text>Valor del input: {inputValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#448FDA",
    flex: 1,
    paddingHorizontal: 14,
    gap:20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#F3EB90",
    width:"100%"
  },
  image: {
    width: 50,
    height: 50,
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
    backgroundColor: "#FDFFFC"
  },
  inputContainer: { 
    flexDirection: "row",
    backgroundColor:"#448FDA",
    width:"100%",
    
 },
});
