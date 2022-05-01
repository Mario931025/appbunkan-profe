import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity, StatusBar, Dimensions, FlatList,Linking  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon, Avatar, ButtonGroup, AirbnbRating } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import ImagenesMapache from './ImagenesMapache'
import ImagenesMapacheItem from './ImagenesMapacheItem'


const {height, width} = Dimensions.get("window")

export default function CursoMapache() {

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
                    source={require("../../../assets/Bg1.png")}
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
                    
                    {/** 
                     * <TouchableOpacity 
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
                    </TouchableOpacity> 
                     */}
                      
                </View>
            </View>
            <View style={styles.body}>
                <View style={{backgroundColor:"#e6cbe0", height:8, width:"18%", marginTop:15, borderRadius:10 }}/>
                <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',alignSelf:'center', }}>
                    <Text style={styles.titulo}>Mapache N5</Text>
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
                            15,486
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
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FMESES%20-%20DIAS%20MES.pdf?alt=media&token=ff31024b-8796-49ab-973a-388209520c1f")
};

const tema2 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FMESES-COLORES.pdf?alt=media&token=5f826a8b-29a1-4c80-ba25-413eb159ff1e")
};

const tema3 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FKARA-MADE.pdf?alt=media&token=cace512f-26ba-4710-ba73-00674a84a4cf")
};

const tema4 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FParticula%20to.pdf?alt=media&token=9e5732c1-e06c-483e-8411-d7190dee82d4")
};

const tema5 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FVERBOS.pdf?alt=media&token=275c0879-6f9e-42f2-99cf-471b41e1531b")
};

const tema6 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2FPARTCIULA%20HE.pdf?alt=media&token=d7a6ef04-5561-46bd-b7f8-0aea616e9635")
};

const tema7 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2Fpartciula%20de.pdf?alt=media&token=e73d6882-089c-4eaf-901c-3d46c9ddd07d")
};

const tema8 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2Fpartciula%20ni.pdf?alt=media&token=18d2e038-d00f-4d8e-a520-0f97e230adc4")
    

};

const tema9 = async () => {
    await Linking.openURL("https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/PDF%2Fverbos%20pasado%20y%20negativo.pdf?alt=media&token=29e86cc1-bdfd-4f7b-9265-881b1d3883be")
    

};

    if (selectedIndex==0) {
        return(
            <View style={styles.galeria}>
                <View style={{width:"100%", height:300,}}>
                    <FlatList
                        data={ImagenesMapache}
                        renderItem={({ item }) => <ImagenesMapacheItem item={item} />}
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
                            source={require("../../../assets/avatar3.jpg")}
                            style={styles.avatar}
                            rounded
                        />
                        <Text style={styles.txtOpinion} >
                            Excelente curso, me gustaron mucho los temas para iniciar en mi camino de aprender japonés
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
                            source={require("../../../assets/avatar1.jpg")}
                            style={styles.avatar}
                            rounded
                        />
                        <Text style={styles.txtOpinion} >
                            Me sorprendió mucho el curso, amo el idioma y esto me ayudó a aprender mucho
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
                   <Text style={styles.temas}> 1. Meses / dias del mes {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema2()
                    }}>
                   <Text style={styles.temas}> 2. Dias semana / colores {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>
                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema3()
                    }}>
                   <Text style={styles.temas}> 3. Kara / Made  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>
                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema4()
                    }}>
                   <Text style={styles.temas}> 4. Particula to  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema5()
                    }}>
                   <Text style={styles.temas}> 5. Verbos  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema6()
                    }}>
                   <Text style={styles.temas}> 6.Partciula e  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema7()
                    }}>
                   <Text style={styles.temas}> 7.Partciula de  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema8()
                    }}>
                   <Text style={styles.temas}> 8.Partciula ni  {"\n"} </Text>
                    </TouchableOpacity>
                    
                </Text>

                <Text style={styles.cuerpoTemario}>
                    
                    {/*1. Tenmos que comentar que se necesita dominar hiragana, katakana y 12 kanji (formas de escritura) apartir de la certificacion N5.
                    Esta unidad estara escrita en Romaji. {"\n"}*/}
                    
                    <TouchableOpacity  onPress={() => {
                        tema9()
                    }}>
                   <Text style={styles.temas}> 9. verbos en pasado / negativo  {"\n"} </Text>
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
        left: -361,
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
        fontSize:34,
        fontWeight:'600',
        fontFamily:"OpenSans",
        marginBottom:10,
    },
    cuerpoTemario:{
        fontSize:24,
        fontWeight:'600',
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
        left:"10%"

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
        //elevation:2, //Si el sombreado se ve extraño, hay que quitar el elevation
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
