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


const HomeWatchList = () => {


 /*  #TODO Fetch real data  */
 const [data, setData] = useState([]);
 var prc;



  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/`)
      .then(function (response) {
        // console.log(response);
        setData(response.data);
        console.log("data is ", data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
 


    return (
        <View>
            <View>
                <Text style={{fontSize:20,fontWeight:"bold",color:"black",paddingTop:10}}>Watchlist</Text>
            </View>
            <View style={{paddingTop:10}}>
                <View style={{width:"100%",borderWidth:0.5,borderRadius:10,borderColor:"#ddd" , overflow:'auto' }}>
                    <View >
                    {data.map((coin) => (
                        <View key={coin.id}>
                            <View style={{flexDirection:'row',paddingTop:15,paddingHorizontal:15,justifyContent:"space-between",paddingBottom:20}}>
                                <View>
                                    <Image
                                    source={{uri: coin.image.large}}
                                    style={{width:35,height:35}}/>
                                </View>
                                <View style={{paddingLeft:15,flex:1}}>
                                    <Text style={{fontSize:16,fontWeight:"400"}}>{coin.name}</Text>
                                    <Text style={{fontSize:15,fontWeight:"400",color:"#5d616d"}}>{coin.symbol}</Text>
                                </View>   
                                <View style={{paddingLeft:15,}}>
                                    <Text style={{fontSize:16, alignSelf:'flex-end' }}>${coin.market_data.current_price.usd}</Text>
                                    <Text style={{fontSize:12, alignSelf:'flex-end' }}>{prc=coin.market_data.price_change_percentage_24h ,  prc.toFixed(2)}%</Text>
                                </View>   
                            </View>

                        </View>
                    ))}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeWatchList
