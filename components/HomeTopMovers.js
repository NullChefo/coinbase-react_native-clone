import React,{useState,useEffect} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import axios from "axios";

const HomeTopMovers = () => {

  const [data, setData] = useState([]);
  var prc;


  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/`)
      .then(function (response) {
        // console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


   /*  #TODO Fetch real data  */

  
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          paddingTop: 10,
        }}
      >
        Top Movers
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 20 }}
      >
        {data.map((coin) => (
          


          <View key={coin.id}>
            <View
              style={{
                width: 150,
                height: 150,
                borderWidth: 0.5,
                borderColor: "#ddd",
                borderRadius: 10,
                marginRight: 15,
                paddingHorizontal: 15,
              }}
            > 
            <View>
                <Image
                source={{uri: coin.image.large}}
                style={{width:35,height:35,marginTop:15}}/>
            </View>

            <View style={{marginTop:15,flexDirection:'row',alignItems:'center',position:"relative" }}>
                  <Text style={{
                              fontSize: 13,
                              fontWeight: "500"
                            }}>{coin.name}</Text>
                  
              </View>

              <Text style={{
                              fontSize: 14,
                              fontWeight: "400",
                              
                              color: "#5D616D",
                              paddingTop: 5
                            }}>${coin.market_data.current_price.usd}</Text>
              
              <View style={{paddingTop:10}}>
              <Text style={{
                              fontSize: 30,
                              fontWeight: "400",
                              paddingLeft:5,
                              color:  coin.market_data.price_change_percentage_24h < 0 ? "red" : "green"  ,
                            }}>
                              {prc=coin.market_data.price_change_percentage_24h ,  prc.toFixed(2)}%</Text>
              </View>

              
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeTopMovers;
