import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity, StatusBar, Dimensions, FlatList,Linking } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon, Avatar, ButtonGroup, AirbnbRating } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import ImagenesZorro from './ImagenesZorro.js'
import ImagenesZorroItem from './ImagenesZorroItem.js'


const {height, width} = Dimensions.get("window")

export default function CursoZorro() {

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
                    source={require("../../../assets/puertasTorri.png")}
                    style={styles.imagenBGheader}
                />
                <LinearGradient
                        // Background Linear Gradient
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
                   
                   {/**  <TouchableOpacity 
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
                    </TouchableOpacity>  */}
                    
                </View>
            </View>
            <View style={styles.body}>
                <View style={{backgroundColor:"#e6cbe0", height:8, width:"18%", marginTop:15, borderRadius:10 }}/>
                <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',alignSelf:'center', }}>
                    <Text style={styles.titulo}>Zorro N4</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',alignSelf:'center', }}>
                    <Text style={styles.descri}>Uno de los niveles iniciales para comenzar</Text>
                    <Text style={styles.descri2}>tu viaje por este fascinante idioma.</Text>
                </View>
                <View style={styles.btnera}>
                    <ButtonGroup
                        buttons={['Galer??a', 'Opiniones', 'Temario']}
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
                            17,678
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

   const tema1 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2F%E3%81%9D%E3%82%8C%E3%81%8B%E3%82%89.pdf?alt=media&token=d2427b96-1a1b-4c25-8cf1-5c695b061d7b")
};


const tema2 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2F%E3%81%A7%E3%82%82.pdf?alt=media&token=00c880ec-c83a-43df-94fc-ac2316572932")
};


const tema3 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2F%E3%81%8F%E3%81%A6.pdf?alt=media&token=dfc0dbd4-114a-42a1-b71a-88f5a8d3c12a")
};

const tema4 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2F%E3%81%A0%E3%81%91.pdf?alt=media&token=c57aec3e-f10c-4ebf-b0ba-b28aa6b7b211")
};

const tema5 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2F%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%99%E3%80%80%E3%81%8B%E3%81%97%E3%81%BE%E3%81%99.pdf?alt=media&token=79c76c29-27d0-42d7-9b46-2be47171084e")
};


const tema6 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2F%E3%81%A9%E3%81%AE%E3%81%90%E3%82%89%E3%81%84.pdf?alt=media&token=0d480339-8b6c-4a6e-a3d3-f69271c92971")
};


const tema7 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2F%E3%81%8B%E3%81%A3%E3%81%9F-%E3%81%A7%E3%81%97%E3%81%9F.pdf?alt=media&token=cb686026-17cf-4eb0-943e-fe3672e2074f")
};

const tema8 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2F%E3%82%88%E3%81%8F%E3%80%81%E3%81%A8%E3%81%8D%E3%81%A9%E3%81%8D%E3%80%81%E3%81%9C%E3%82%93%E3%81%9C%E3%82%93.pdf?alt=media&token=366de379-db6b-48fa-b66b-94ac652154cc")
};


    if (selectedIndex==0) {
        return(
            <View style={styles.galeria}>
                <View style={{width:"100%", height: 300}}>
                    <FlatList
                        data={ImagenesZorro}
                        renderItem={({ item }) => <ImagenesZorroItem item={item}/>}
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
                            source={require("../../../assets/sherry.jpg")}
                            style={styles.avatar}
                            rounded
                        />
                        <Text style={styles.txtOpinion} >
                        Una de mis metas era aprender japon??s. Estoy eternamente agradecida.{"\n"}
                            {"\n"}
                            -Sherry Alcal?? {"  "}  M??xico
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
                            source={require("../../../assets/noe.jpg")}
                            style={styles.avatar}
                            rounded
                        />
                        <Text style={styles.txtOpinion} >
                        "Una gran escuela con una gran oportunidad no solo de aprender, si no de amar y entender este maravilloso idioma!"{"\n"}
                            {"\n"}
                            -No?? Mart??nez {"  "}  M??xico
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
                            source={require("../../../assets/avatar4.jpg")}
                            style={styles.avatar}
                            rounded
                        />
                        <Text style={styles.txtOpinion} >
                            Muy buen curso, lo recomiendo bastante para iniciar en el idioma
                            -Mariana Alcanta {"  "} Argentina
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
                        Temario
                    </Text>
                </View>
                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema1()
                    }}>
                   <Text style={styles.temas}> 1. ????????????  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>
            
                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema2()
                    }}>
                   <Text style={styles.temas}> 2. ??????  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema3()
                    }}>
                   <Text style={styles.temas}> 3. ??????  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema4()
                    }}>
                   <Text style={styles.temas}> ????????????  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>
                    
                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema5()
                    }}>
                   <Text style={styles.temas}> 5.????????????-????????????-???????????????  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema6()
                    }}>
                   <Text style={styles.temas}> 6.???????????????  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema7()
                    }}>
                   <Text style={styles.temas}> 7.?????????-?????????  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema8()
                    }}>
                   <Text style={styles.temas}> 8.????????????????????????????????????... {"\n"} </Text>
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
    temas:{
        fontSize: 18,
        fontWeight:"300",
        fontFamily:"OpenSans",
        justifyContent:'flex-start',
        
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
        width:930,
        height:620,
        left: -71,
        top:-117,
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
        //left:width-500,
        //top:-20
        marginLeft:15
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
