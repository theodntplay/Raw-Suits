import React from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity,Image,SafeAreaView} from "react-native";
import { MaterialIcons,Feather,Ionicons,Foundation,FontAwesome } from '@expo/vector-icons';

export default function Signup(props) {

const navigation = props.navigation
    return (
        <View style={styles.container}>

            <SafeAreaView style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image style={styles.logoImage} resizeMode="contain" source={require("../assets/Suitw.png")}/>
                </View>
            </SafeAreaView>

            
            <View 
            style={styles.footer}
            >
                {/* enter e-mail */}
                <Text style={styles.text_footer}>E-mail</Text>
                <View style={styles.action}>
                    <TextInput placeholder="Enter E-mail" style={styles.textInput} autoCapitalize="none"/>
                    <MaterialIcons name="email" size={24} color="black" />
                </View>

                {/* enter password */}
                <Text style={[styles.text_footer,{marginTop:35}]}>Username</Text>
                <View style={styles.action}>
                    <TextInput placeholder="Enter Username" style={styles.textInput} autoCapitalize="none"/>
                    <FontAwesome name="user" size={24} color="black" />
                </View>
                {/* enter password */}
                <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <TextInput placeholder="Enter password" style={styles.textInput} autoCapitalize="none" secureTextEntry={true}/>
                    <Feather name="eye-off" size={24} color="black" />
                </View>

                <TouchableOpacity
                       
                        style={{
                        padding: 15,
                        paddingHorizontal: 80,
                        marginTop: 20,
                        alignItems: "center",
                        borderRadius: 10,
                        flexDirection: "row",
                        justifyContent:"center",
                        backgroundColor: "black",
                        }}

                        onPress={() => {
                            navigation.navigate("Home")
                        }}
                    >
                        <Text style={{ color: "white",fontSize:20, }}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={styles.loginWith}>
                <Text style={styles.loginWithText}>or Sign up with</Text>
                </View>

                <View style={styles.lastIcons}>
                <TouchableOpacity>
                    <MaterialIcons name="email" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <Foundation style={{marginLeft:20,}} name="social-apple" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <Ionicons style={{marginLeft:20,}} name="logo-instagram" size={35} color="black" />
                </TouchableOpacity>
                </View>


            </View>
        </View>

        
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },

    loginWith:{
        justifyContent:"center",
        alignItems:"center",
    },

    lastIcons:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:25,
    },

    loginWithText:{
        fontWeight:"bold",
        marginTop:40,
    },
    textContext:{
        justifyContent:"center",
        alignItems:"center",
        color:"white"
    },

    logoImage:{
        width:"100%",
        height:"100%",
        
    },


    imageContainer:{
        justifyContent:"center",
        alignItems:"center",
    },

    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        width:"100%",
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor:"#F9F7F7",
        paddingHorizontal: 20,
        paddingTop:60,
        width:"100%",
    },

    text_footer:{
        fontSize:18,
        color:"black",
    },

    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

    
})

// export default Login;