import React from 'react';
import { ScrollView, Text,View,StyleSheet,Image,TextInput,Dimensions} from 'react-native';
import { Ionicons,EvilIcons,FontAwesome,AntDesign,Entypo } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Hairs from '../Const/Hairs';
const width = Dimensions.get('screen').width / 2 - 30;


function Home(props) {

        // category
  const categories= ["SUITS","SHOES","TIE","CUFFLINKS"];
  const [categoryIndex,setCategoryIndex] = React.useState(0);

  const CategoriesList = () =>{
    return <View style={styles.categoriesContainer}>
      {categories.map((items,index) =>(
        <TouchableOpacity key={index}
        activeOpacity={0.8}
         onPress ={ () => setCategoryIndex(index)}>
          <Text  style={[styles.categoryText, categoryIndex ==index && styles.categoryTextSelected]}>{items}</Text>
        </TouchableOpacity>
      ))}
    </View>;
  };

  const Card = ({Hair}) => {
    return (
      <TouchableOpacity>
        <View style={styles.card}>
      <View style={{alignItems:"flex-end"}}>
        <View style={{width:30,height:30,borderRadius:15,alignItems:"center",justifyContent:"center",
        backgroundColor: Hair.like ? "rgba(245,42,42,0.2)":"rgba(0,0,0,0.2)",}}>
          <Entypo name="heart-outlined" size={18} color={Hair.like ? "red" : "black"} />
        </View>
      </View>
      <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={Hair.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
        </View>
        <Text style={{fontWeight:"bold",fontSize:17,marginTop:10,}}>{Hair.name}</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
          <Text style={{fontWeight:"bold"}}>{Hair.price}</Text>
          <FontAwesome name="shopping-bag" size={20} color="black" />
        </View>
    </View>
      </TouchableOpacity>
    
    );
  };
    return (
            <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
            <TouchableOpacity>
                <Ionicons name="ios-menu-outline" size={24} color="black" />
            </TouchableOpacity>
        <Image style={styles.logoUp} source={require("../assets/Suitw.png")}/>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity>
                <FontAwesome name="shopping-bag" size={20} color="black" />
            </TouchableOpacity>
        </View>
      </View>

      {/* categories VIew */}
        <View style={{marginTop:10}}>
            <CategoriesList/>
        </View>
        {/* search btn */}
        <View style={{flexDirection:"row"}}>
            <View style={styles.searchContainer}>
            <EvilIcons name="search" size={24} color="black" style={{paddingLeft:10}} />
            <TextInput placeholder="Search" style={styles.searchText}/>
            </View>
        </View>
        {/* search end */}

        <FlatList 
        columnWrapperStyle={{justifyContent:"space-between"}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop:10,
          paddingBottom:50,
        }}
        numColumns={2} data={Hairs}  renderItem={({item})=> <Card Hair={item}/>}/>
    </View>

    
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
    },

    logoUp:{
        width:100,
        height:90,
    },


    categoriesContainer:{
        flexDirection:"row",
        marginTop:20,
        marginBottom:20,
        justifyContent:"space-between",
        
      },
    
      categoryText:{
        fontSize:16,
        fontWeight:"bold",
        color:"lightgrey",
      },
    
      categoryTextSelected:{
        color:"black",
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:"red",
      },

    searchContainer:{
        flex:1,
        height:40,
        borderRadius:10,
        alignItems:"center",
        backgroundColor:"white",
        borderBottomColor:"black",
        borderBottomWidth:1,
        flexDirection:"row",
      },
    
      searchText:{
        fontSize:15,
        color:"black",
        flex:1,
      },

      clothesContainer :{
        flex:1,
        width:"100%",
        // height:"85%",
        padding:5,
        flexDirection:"row",
        flexWrap:"wrap",
    
    },

    card: {
      height: 225,
      backgroundColor:"lightgrey",
      width,
      marginHorizontal: 2,
      borderRadius: 10,
      marginBottom: 20,
      padding: 15,
    },

})

export default Home;