import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import Category from "./Category";

export default function App() {
  let flag =0; 

  
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58691f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-abb28ba",
      title: "Fourth Item",
    },
    {
      id: "3ac68afc-c605-4897f63",
      title: "Fifth Item",
    },
    {
      id: "586971f-bd96-145571e29d72",
      title: "Six Item",
    },
    {
      id: "bd7acbea5-3ad53abb28ba",
      title: "Seventh Item",
    },
    {
      id: "3ac68afc-c97f63",
      title: "Eighth Item",
    },
    {
      id: "58694a0571e29d72",
      title: "Nineth Item",
    },
  ];
  // const [flag,setFlag] = useState(0);

  const renderIncomingData =(item) =>{
    return (
      <View style={style.card}>
        <Text style={style.cardText}>{item.title}</Text>
      </View>
    );
 

  }

  const renderMainContent = ({ item }) => {
    flag++;
    //you can set here in which number you havr to displaay flatlist
    
    if (flag === 2) {
      return (
        <View>
          <Category />
          {renderIncomingData(item)}
        </View>
      );
    } else {
      return (renderIncomingData(item));
    }
  };

  return (
    <ScrollView style={style.container}>
      <View>
        <TouchableOpacity style={style.btn}>
          <Text style={{ color: "white" }}>Hall Of Fame</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={data} renderItem={renderMainContent} />
    </ScrollView>
  );
}




const style = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F6F8ff",
  },
  item: {
    backgroundColor: "#87CEEB",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  btn: {
    backgroundColor: "#050152",
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
  },
  card: {
    backgroundColor: "#233445",
    
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    padding: 10,
    fontSize: 30,
    color: "white",
  },
});