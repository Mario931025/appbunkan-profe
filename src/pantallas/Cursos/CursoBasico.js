import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity, StatusBar, Dimensions, FlatList,Linking } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon, Avatar, ButtonGroup, AirbnbRating } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import ImagenesLeon from './ImagenesLeon'
import ImagenesLeonItem from './ImagenesLeonItem'


const {height, width} = Dimensions.get("window")

export default function CursoBasico() {

    const [selectedIndex, setSelectedIndex] = useState(0);
    //console.log(selectedIndex)
    

    const [loaded] = useFonts({
        Montserrat: require("../../../assets/fonts/Montserrat-Regular.ttf"),
        MontserratBold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
        OpenSans: require("../../../assets/fonts/OpenSans-Regular.ttf")

        
    });

   

    const navigation = useNavigation();




    


    if (!loaded) {
        return null;
    }
    
    return (
        <View style={styles.container}>
        <ScrollView style={{
            flex:1,
            //borderWidth:1,
            //borderColor:"red",
            width:width
            
            }}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar translucent backgroundColor={"transparent"}/>
            <View style={styles.header}>
                <Image 
                    source={require("../../../assets/Pagoda1.png")}
                    style={styles.imagenBGheader}
                />
                <LinearGradient
                        //Background Linear Gradient
                        colors={["#333333", "transparent"]}
                        style={styles.lg}
                />
                <View 
                    style={{
                        //borderWidth:3,
                        borderColor:"black",
                        top:50,
                        left:35,
                    }}>
                    <TouchableOpacity 
                        style={styles.btnBack}
                        onPress={()=>navigation.goBack()}
                    >
                        <Icon
                            name="chevron-left"
                            type="material-community"
                            size={25}
                            color="#E4253F"
                            style={{padding:0,justifyContent:'center',}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{left:width-100, top:-30,}}>
                   {/*<TouchableOpacity 
                        style={styles.btnBack}
                        onPress={()=>navigation.goBack()}
                    >
                        <Icon
                            name="share-variant"
                            type="material-community"
                            size={25}
                            color="#E4253F"
                            style={{padding:0,justifyContent:'center',}}
                        />
                    </TouchableOpacity>   */}  
                </View>
            </View>
            <View style={styles.body}>
                <View style={{backgroundColor:"#e6cbe0", height:8, width:"18%", marginTop:15, borderRadius:10 }}/>
                <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',alignSelf:'center', }}>
                    <Text style={styles.titulo}>Curso Básico </Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',alignSelf:'center', }}>
                    <Text style={styles.descri}>Uno de los niveles iniciales para comenzar</Text>
                    <Text style={styles.descri2}>tu viaje por este fascinante idioma.</Text>
                </View>
                <View style={styles.btnera}>
                    <ButtonGroup
                        buttons={['Galería', 'Opiniones', 'Temario']}
                        selectedIndex={selectedIndex}
                        onPress={(valor) => {
                            setSelectedIndex(valor);
                            //console.log("++++++++++++")
                            //console.log(valor)
                            //console.log(selectedIndex)
                        }}
                        containerStyle={styles.btongroup}
                        buttonContainerStyle={{backgroundColor: '#FFF0EB', borderWidth:0, }}
                        buttonStyle={{borderRadius:20,borderWidth:0}}
                        innerBorderStyle={{color:"transparent"}}
                        selectedButtonStyle={{backgroundColor:"#D62D56"}}
                        textStyle={{fontSize:16, fontWeight:"600", fontFamily:"Montserrat"}}
                    />
                </View>
                <Renderizador
                    selectedIndex={selectedIndex}
                />
                <View style={styles.comenzar}>
                    <TouchableOpacity style={styles.btnComenzar}>
                        <Text style={styles.txtbton}>
                            Descargas
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnCora}>
                        <Icon
                            name="heart-outline"
                            type="material-community"
                            size={25}
                            color="#001A72"
                            style={{padding:0,justifyContent:'center',}}
                        />
                        <Text style={styles.num}>
                            14,167
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>
)
}

function Renderizador(props){

   const{selectedIndex}=props
   const hiraKata = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FA%20Guide%20to%20learning%20Hiragana%20and%20Katakana-18-114.pdf?alt=media&token=697a3028-4e92-4e88-9417-73d8bb4fefe2")
};
const kanji = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FBasic%20kanji%20book%201%2C2-1-102%20(1).pdf?alt=media&token=2dc54a68-c346-4f72-9d2e-eba9db5d9e7f")
};

   const tema1 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FROMANJI%2C%20HIRAGANA%2C%20KATAKANA.pdf?alt=media&token=3933d733-fe75-49c2-b25e-1d2b461b5f07")
};
const tema2 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2Fkanji.pdf?alt=media&token=26680281-d913-41ca-be07-d3dd6662d48d")
};
const tema3 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FSALUDOS.pdf?alt=media&token=c2cbde38-53a8-4be8-8167-7ba06d48b3bb")
};

const tema4 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FDESU%2CDEWAARIMASEN.pdf?alt=media&token=f5223a29-cb5b-4d3d-bb9a-f7123d105fe0")
};

const tema5 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FParticula%20wa%20y%20ka.pdf?alt=media&token=cf705026-da98-48f6-b6a6-e136c6ff189a")
};

const tema6 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FPartciula%20mo%2C%20no.pdf?alt=media&token=d8a3cac9-d297-4889-becd-9ab3a67468c8")
};

const tema7 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2Fpaises%2C%20nacionalidades.pdf?alt=media&token=5095b223-b00f-48b4-adb3-e0791b2945cb")
};

const tema8 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2Fnumeros.pdf?alt=media&token=67cd6e84-c2fb-4290-a05d-1b6bb5bdbb17")
};

const tema9 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FHORAS%2C%20MINUTOS.pdf?alt=media&token=1d7045a9-99f7-4581-9841-176840832645")
};
const tema10 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2Fcompras.pdf?alt=media&token=f04e3374-5562-4d56-8fb3-ea7b42ff2046")
};


    if (selectedIndex==0) {
        return(
            <View style={styles.galeria}>
                <View style={{width:"100%", height: 300}}>
                    <FlatList
                        data={ImagenesLeon}
                        renderItem={({ item }) => <ImagenesLeonItem item={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false}
                        //scrollEventThrottle={320}
                        //onScroll={() => {console.log("slide")}}
                        centerContent={true}
                        style={styles.flatContainer}
                    />
                    </View>
            </View>
        )
    } if (selectedIndex==1) {
        return(
            <View style={styles.opinion}>
                <View style={styles.opinion1}>
                    <View style={{flexDirection:'row', }}>
                        <Avatar
                            source={require("../../../assets/alexa.jpg")}
                            style={styles.avatar}
                            rounded
                        />
                        <Text style={styles.txtOpinion} >
                            
                            Me encanta estudiar en esta escuela, tiene un excelente ambiente escolar y además el profesor da lo mejor.{"\n"}
                            {"\n"}
                            -Alexa Dariana {"  "}  México

                        </Text>
                    </View >
                        <View style={{ width:"50%", alignItems:'center',alignSelf:'flex-end', marginRight:"10%", top:"-2%"}}>
                            <AirbnbRating
                                count={5}
                                reviews={["Baja","Deficiente","Normal","Muy bueno","Excelente"]}
                                defaultRating={5}
                                size={20}
                                reviewSize={20}
                                isDisabled={true}
                                reviewColor={"#ffdc14"}
                                starContainerStyle={{top:-5}}
                                selectedColor={"#ffdc14"}
                                //showRating={false}
                            />
                        </View>
                </View>
                <View style={styles.opinion1}>
                    <View style={{flexDirection:'row', }}>
                        <Avatar
                            source={require("../../../assets/kao.jpg")}
                            style={styles.avatar}
                            rounded
                        />
                        <Text style={styles.txtOpinion} >
                        Mi experiencia en esta escuela ha sido muy grata gracias a la manera de explicar del sensei{"\n"}
                            {"\n"}
                            -Kao Shinpa  {"  "} México
                        </Text>
                    </View >
                        <View style={{ width:"50%", alignItems:'center',alignSelf:'flex-end', marginRight:"10%", top:"-2%"}}>
                            <AirbnbRating
                                count={5}
                                reviews={["Baja","Deficiente","Normal","Muy bueno","Excelente"]}
                                defaultRating={5}
                                size={20}
                                reviewSize={20}
                                isDisabled={true}
                                reviewColor={"#ffdc14"}
                                starContainerStyle={{top:-5}}
                                selectedColor={"#ffdc14"}
                                //showRating={false}
                            />
                        </View>
                </View>
                <View style={styles.opinion1}>
                    <View style={{flexDirection:'row', }}>
                        <Avatar
                            source={require("../../../assets/gerardo.jpg")}
                            style={styles.avatar}
                            rounded
                        />
                        <Text style={styles.txtOpinion} >
                        
                        Mario sensei siempre te motiva e inspira para superarte tanto en su clase como fuera de ella{"\n"}
                            {"\n"}
                            -Gerardo Ortiz  {"  "} México

                        </Text>
                    </View >
                        <View style={{ width:"50%", alignItems:'center',alignSelf:'flex-end', marginRight:"10%", top:"-2%"}}>
                            <AirbnbRating
                                count={5}
                                reviews={["Baja","Deficiente","Normal","Muy bueno","Excelente"]}
                                defaultRating={5}
                                size={20}
                                reviewSize={20}
                                isDisabled={true}
                                reviewColor={"#ffdc14"}
                                starContainerStyle={{top:-5}}
                                selectedColor={"#ffdc14"}
                                //showRating={false}
                            />
                        </View>
                </View>
            </View>
        )
    }if (selectedIndex==2) {
        return(
            <View style={styles.temario}>
                <View style={{marginLeft:20}}>
                    <Text style={styles.tituloTemario}>
                        Da click en cada texto para descargar el PDF{"\n"}
                        {"\n"}
                        Temario
                    </Text>
                </View>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        hiraKata()
                    }}>
                   <Text style={styles.temas}> Descargar libro de Hiragana y Katakana {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        hiraKata()
                    }}>
                   <Text style={styles.temas}> Descargar libro de kanji básico {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>
                
                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema1()
                    }}>
                   <Text style={styles.temas}> 1. Romanji, Hiragana, Katakana {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>
                <Text style={styles.cuerpoTemario}>
                    
                  
                    
                    <TouchableOpacity  onPress={() => {
                        tema2()
                    }}>
                   <Text style={styles.temas}>2. Kanji {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>
                <Text style={styles.cuerpoTemario}>
                    
                    
                    <TouchableOpacity  onPress={() => {
                        tema3()
                    }}>
                   <Text style={styles.temas}>3. Saludos {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>
                <Text style={styles.cuerpoTemario}>
                    
             
                    
                    <TouchableOpacity  onPress={() => {
                        tema4()
                    }}>
                   <Text style={styles.temas}>4. Desu / dewaarimasen {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
             
                    
                    <TouchableOpacity  onPress={() => {
                        tema5()
                    }}>
                   <Text style={styles.temas}>5. Particulas wa / ka {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                
                <Text style={styles.cuerpoTemario}>
                    
             
                    
                    <TouchableOpacity  onPress={() => {
                        tema6()
                    }}>
                   <Text style={styles.temas}>6. Particulas mo / no {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
             
                    
                    <TouchableOpacity  onPress={() => {
                        tema7()
                    }}>
                   <Text style={styles.temas}>7. Paises / Nacionalidades {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
             
                    
                    <TouchableOpacity  onPress={() => {
                        tema8()
                    }}>
                   <Text style={styles.temas}>8. Paises / Nacionalidades {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                
                <Text style={styles.cuerpoTemario}>
                    
             
                    
                    <TouchableOpacity  onPress={() => {
                        tema9()
                    }}>
                   <Text style={styles.temas}>9. Horas/ Minutos {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                
                <Text style={styles.cuerpoTemario}>
                    
             
                    
                    <TouchableOpacity  onPress={() => {
                        tema10()
                    }}>
                   <Text style={styles.temas}>10. Comprar algo {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>


                
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:"100%",
        
    },
    header:{
        flex:1,
        //borderWidth:1,
        borderColor:"black",
        width:"100%",
        height:517,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        //position:'absolute',
        //overflow:'hidden'
    },
    lg:{
        position: "absolute",
        left: 0,
        right: 0,
        top: -300,
        height: "100%",
        //borderWidth:3,
        //borderColor:"black",
    },
    imagenBGheader:{
        width:830,
        height:620,
        left: -401,
        top:-27,
        position:'absolute'
    },
    btnBack:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        //alignSelf:'center',
        width:74,
        height:74,
        borderRadius:17,
        backgroundColor:"#FAFAFA",
        shadowColor:"black",
        shadowRadius:10,// sombra al raido
        shadowOffset:{height:15},
        shadowOpacity:0.7,// da una opacidad
        elevation:20
    },
    body:{
        flex:1,
        backgroundColor:"#FEFEFE",
        alignItems:'center',
        //justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        //borderWidth:1,
        borderColor:"black",
        width:"100%",
        top:-160,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        marginBottom:-100
    },
    titulo:{
        //flex:1,
        fontSize:30,
        fontWeight:'bold',
        fontFamily:"MontserratBold",
        letterSpacing:1,
        marginTop:10,
        //borderWidth:1,
        borderColor:"black",
    },
    descri:{
        //flex:1,
        fontSize:16,
        fontWeight:'400',
        fontFamily:"Montserrat",
        width:"85%",
        //borderWidth:1,
        borderColor:"black",
        marginTop:10
        
    },
    descri2:{
        fontSize:16,
        fontWeight:'400',
        width:"85%",
        //borderWidth:1,
        borderColor:"black",
        fontFamily:"Montserrat"
    },
    btnera:{
        //borderWidth:1,
        borderColor:"black",
        width:"80%",
        marginTop:20,
        marginBottom:20,
        height:50,
        alignItems:'center'
    },
    btongroup:{
        borderRadius:20,
        borderWidth:0, 
        width:"100%",
        shadowColor:"#FFC9BC",
        shadowRadius:5,// sombra al raido
        shadowOffset:{height:10},
        shadowOpacity:0.3,// da una opacidad
        elevation:6
    },
    opinion:{
        //borderWidth:1,
        borderColor:"black",
        width:"85%",
        //height:300,
        
    },
    temario:{
        //borderWidth:1,
        borderColor:"black",
        width:"85%",
        //height:370
    },
    tituloTemario:{
        fontSize:24,
        fontWeight:'600',
        fontFamily:"OpenSans",
        marginBottom:10,
    },
    cuerpoTemario:{
        fontSize:18,
        fontWeight:'400',
        fontFamily:"OpenSans",
        justifyContent:'flex-start',
       // left:width-350,
        //top:-20
        marginLeft:15,
       // borderColor:"red",
        //borderWidth:15
    },
    temas:{
        fontSize: 16,
        fontWeight:"300",
        fontFamily:"OpenSans",
        justifyContent:'flex-start',
        
    },
    comenzar:{
        //borderWidth:1,
        borderColor:"black",
        //marginTop:15,
        width: "100%",
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:35
    },
    btnComenzar:{
        //borderWidth:1,
        borderColor:"black",
        width:"50%",
        height:65,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#681853",
        borderRadius:16,
        shadowColor:"#681853",
        shadowRadius:5,// sombra al raido
        shadowOffset:{height:10},
        shadowOpacity:0.3,// da una opacidad
        elevation:6
    },
    txtbton:{
        fontSize:25,
        fontFamily:"MontserratBold",
        fontWeight:'bold',
        color:"#fff",
        letterSpacing:1,
    },
    btnCora:{
        backgroundColor:"#FFF0EB",
        width:"30%",
        borderRadius:17,
        height:65,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        shadowColor:"#FFF0EB",
        shadowRadius:5,// sombra al raido
        shadowOffset:{height:10},
        shadowOpacity:0.3,// da una opacidad
        elevation:6,
        //left:width-415
    },
    num:{
        fontSize:22,
        fontFamily:"Montserrat",
        fontWeight:'900',
        color:"#001A72",
        marginLeft:5
    },
    avatar:{
        width:70,
        height:70,
        top:"10%",
        left:"10%",
        marginRight:20

    },
    txtOpinion:{
        fontSize:18,
        fontWeight:'600',
        fontFamily:"OpenSans",
        lineHeight:22,
        color:"#68184F",
        paddingHorizontal:"6%",
        marginLeft:0,
        flex:1
    },
    opinion1:{
        borderColor:"#efa9ae",
        borderWidth:3,
        borderRadius:20,
        paddingVertical:10,
        shadowColor:"#FFF0EB",
        shadowRadius:5,// sombra al raido
        shadowOffset:{height:10},
        shadowOpacity:0.2,// da una opacidad
        //elevation:2,
        marginBottom:15

    },
    flatContainer:
    {
        borderRadius:30
    },
    galeria:
    {
        marginTop:-30
    }
})


