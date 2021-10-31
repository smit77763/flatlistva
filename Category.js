/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Categories from './CategoryData';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  const flatlistRef = useRef();
  var x = 2;
  var alength=Categories.length;
  // this function will goto next three category from flatlist
  const nextItem = () => {
    if (x <alength) {
      if(x+1<alength)
      { 
          x = x + 1;
          flatlistRef.current.scrollToIndex({ animated: true, index: x ,viewPosition :1});
      }
      console.log(x);
     
      if (x === alength-1)
        x = 1;
    }
  };
  return (
    <View style={styles.container} >

      <Text style={styles.title}> Explore Categories</Text>

      <View style={styles.subcontainer}>
        <View style={styles.flatview}>
          <FlatList
            ref={flatlistRef}
            style={styles.flatview}
            horizontal={true}
            data={Categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ marginBottom: 5 }}>
                <View style={styles.shadow}>
                  {/* for image */}

                  <View style={styles.ctv1}><Image style={styles.cardImg} source={item.src} ></Image></View>
                  {/* for which category */}
                  <View style={styles.ctv2}>
                    <Text style={styles.cardTxt}>{item.cardText}</Text>
                  </View>

                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.arrbtn}>
          <TouchableOpacity onPress={nextItem} >
            <Image style={styles.rarrow} source={require('./images/arrow-right.png')} ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#F6F8FF",
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: "#050152",
  },
  subcontainer: {
    height: windowWidth * 0.26,
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10
  },
  flatview: {
    width: (windowWidth * 0.24) * 3 + 36,
  },
  arrbtn: {

    width: 30,
    height: 30,
    justifyContent: "center",
    alignSelf: "center",
  },
  rarrow: {
    alignSelf: "center",
    width: 12,
    height: 15,
  },
  shadow: {
    flex: 1,
    marginHorizontal: 6,
    shadowColor: "black",
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 16.3,
    elevation: 6,
    borderRadius: 16.3,
    backgroundColor: "white",
    height: windowWidth * 0.24,
    width: windowWidth * 0.24,
  },
  ctv1: {
    flex: 3 / 4,
    justifyContent: "center",
    alignSelf: "center",
  },
  cardImg: {
    width: 45,
    height: 45,
    alignContent: "center",
  },
  ctv2: {
    flex: 1 / 4,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  cardTxt: {
    textAlign: "center",
    fontSize: 9,
    fontWeight: "600",
    color: "#050152",
  },
});

