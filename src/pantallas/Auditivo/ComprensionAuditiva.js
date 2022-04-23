import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image,Text,ScrollView,StatusBar,Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from 'expo-blur'
import { extend } from 'lodash'
import { useNavigation } from '@react-navigation/native'
const {height, width} = Dimensions.get("window")



const audioBookPlaylist = [
  {
    title: '挨拶- Saludos',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 1',
    uri:
      'https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F05%20Pista%205.mp3?alt=media&token=fda68b76-4ecc-4df1-ad2c-f7069c10cbc5',
    imageSource: 'https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Imagenes%2FBunkanLogo_Drawer.png?alt=media&token=08c41392-8ed3-42ff-816f-c51e50043f25',
    textoJapones:`
    1. おはようございます。(x2) 
    
    2. こんにちは(x2)
    
    3. こんばんは(x2) 
    
    4.さようなら(x2)
    
    5.-すみません　
    -いいえ
    
    6.-どうぞ
    －ありがとうございます。
    -いいえ
   
    7.どうぞ 
    -しつれいします`,
    textoEspañol:`
    1. Buenos días.(x2) 
    
    ２．Buenas tardes(x2)
   
    3. Buenas noches(x2 en la calle) 
    
    4. Adios
   
    5. Disculpa 
     -No hay problema
   
    6.Aqui tienes 
    -Muchas gracias 
    -No hay de que
    
    7.Adelante, pasa
    -Con permiso`,
    consejos: `
    1) Intenta repetir este audio hasta lograr una pronunciación adecuada
    de cada saludo
    `
                　
    
  },
  {
    title: '買い物 - Numeros',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 2',
    uri:
      'https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F11%20Pista%2011.mp3?alt=media&token=0076197d-e193-4358-a155-3ca9cbdc41b2',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`１．いち、に、さん、よん/し、ご、ろく、なな/しち、はち、きゅう/く、じゅう
    ２．じゅういち、じゅうに、じゅうさん、じゅうよん/じゅうし、じゅうご、じゅうろく、じゅうなな/じゅうしち、じゅうはち、じゅうきゅう/じゅうく
    ３．にじゅう、さんじゅう、よんじゅう、ごじゅう、ろくじゅう、ななじゅう、しちじゅう、はちじゅう、きゅうじゅう
    ４．ひゃく、にひゃく、さんびゃく、よんひゃく、ごひゃく、ろっぴゃく、ななひゃく、はっぴゃく、きゅうひゃく
    5．せん/いっせん、にせん、さんぜん、よんせん、ごせん、ろくせん、ななせん、はっせん、きゅうせん
    6．いちまん`,
    textoEspañol:`1.　１，２，３，４，５，６，７，８，９，10 
    ２．11，12，13，14，15，16，17，18，19
    3. 20，30，40，50，60，70，80，90
    4. 100，200，300，400，500，600，700，800，900
    5. 1000，2000，3000，4000，5000，6000，7000，8000，9000
    6.10000`,
    consejos: `
    1) Intenta repetir este audio hasta lograr una pronunciación adecuada
    de cada número, y la escritura hiragana.

    2)Intenta armar numeros como 28, 48, 120, etc. 
    `
  },
  {
    title: '買い物 - Compra',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 3',
    uri:
      'https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F11%20Pista%2011.mp3?alt=media&token=0076197d-e193-4358-a155-3ca9cbdc41b2',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`A: ハンバーガー　は　いくらですか
   
    Ｂ: 200(にひゃく) えん　です
   
    A:ハンバーガー　と　コーヒ　を　ください
   
    Ｂ:はい

    A:いくらですか
    
    B:350(さんびゃくごじゅう)　えんです`,
    textoEspañol:`A: ¿La hambuguesa cuánto cuesta?
    B: 200 YENES
    A: Por favor deme una hamburguesa y un café
    B: si
    A:¿Cuánto es?
    B: son 350 yenes`,
    consejos: `
    1) Intenta recordar la palabra pregunta Ikura desuka
    (¿cuanto cuesta?)
    2)Intenta recordar o kudasai (por favor deme)
    `
  },
  {
    title: '時間 - Jikan',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 4',
    uri:
      'https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F17%20Pista%2017.mp3?alt=media&token=e7cafaa9-0b84-441f-ba3f-bbcc9da13a24',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`A: すみません、いま、なんじですか。
    
    Ｂ: 4(よ)　じ　よんじゅうご　ふん　です。
    
    
    A:ありがとうございます。`,
    textoEspañol:`A: Disculpa, ahora, ¿qué hora es?
    
    B: Son las 4 con 45 minutos
    
    A: Muchas gracias`,
    consejos: `
    1) Intenta recordar la frase ima nanji desuka
    (¿ahora, ¿Qué hora es?).
    
    2) Intenta estudiar las horas y minutos de los PDF.
    `
  },
  {
    title: '月 - Meses',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 5',
    uri:
      'https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F19%20Pista%2019.mp3?alt=media&token=b95d8c8e-1937-4a6d-a900-7c184e5c5ed0',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`いちがつ、
    にがつ、
    さんがつ、
    しがつ
    ごがつ、
    ろくがつ、
    しちがつ、
    はちがつ　
    くがつ、
    じゅうがつ、
    じゅういちがつ、
    じゅうにがつ
    なんがつ`,
    textoEspañol:`enero, 
    febrero, 
    marzo, 
    abril
    mayo, 
    junio, 
    julio, 
    agosto
    septiembre,
     octubre, 
     noviembre, 
     diciembre
    ¿qué mes?`,
    consejos: `
    1) Intenta repetir este audio hasta lograr una pronunciación adecuada
    de cada mes.
    `
  },
  {
    title: '日 - Dias (del mes)',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 6',
    uri:
      'https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F20%20Pista%2020.mp3?alt=media&token=6f0a6304-a281-47ce-87de-a1eee9442715',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`ついたち、
    ふつか、
    みっか、
    よっか
    いつか、
    むいか、
    なのか、
    ようか
    ここのか、
    とおか、
    じゅういちにち、
    じゅうよっか
    じゅうくにち、
    はつか、
    にじゅうよっか、
    にじゅうくにち
    なんにち`,
    textoEspañol:`Dia 1 (mes), 
    2, 3, 4,
    5, 6, 7, 8,
    9, 10, 12, 14,
    19, 20, 24, 29,
    ¿qué día del mes?`,
    consejos: `
    1) Intenta repetir este audio hasta lograr una pronunciación adecuada
    de cada día.(Intenta estudiar los PDF)
    `
  }, 
  {
    title: '曜日　 - Dias (de la semana)',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 7',
    uri:
      'https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F21%20Pista%2021.mp3?alt=media&token=a740af72-6d69-4da7-9db4-a89cae5fba8c',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`げつようび、
    かようび、
    すいようび、
    もくようび、
    きんようび、
    どようび
    にちようび、
    なんようび`,
    textoEspañol:`
    lunes, 
    martes,
    miercoles,
    jueves,
    viernes,
    sábado
    domingo,
    ¿qué día (de la semana)`,
    consejos: `
    1) Intenta repetir este audio hasta lograr una pronunciación adecuada
    de cada día.(Intenta estudiar los PDF)
    `
  }, 
  {
    title: '紹介　 - Presentaciones',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 8',
    uri:
      'https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F24%20Pista%2024.mp3?alt=media&token=62b41bb2-2178-41b0-9a3b-60244079fdf9',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`(きょうしつで)
    A: はじめまして。わたしは　ワン　シューミンです。
    シンガポールからきました。
    
    B: はじめまして。ラフルです。
    インドからきました。
    
    A: どうぞよろしくおねがいします。
    
    B:　よろしくおねがいします`,
    textoEspañol:`(en el salón de clases)
    A:Mucho gusto, Soy Wan Shuumin
    vengo desde Singapur,
   
    B:Mucho gusto,soy Rafael
    vengo desde la India
   
    A: Es un place conocerte
   
    B: El placer es mio`,
    consejos: `
    1) Intenta recordar frases como:
    "Hajimemashite" (Mucho gusto)
    "tu país + kara kimashita (viné desde x pais)"
    "yorooshiku onegaishimasu" (es un placer conocerte)
    `
  },
  {
    title: '紹介二 - Presentaciones 2',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 9',
    uri:
      'https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F26%20Pista%2026.mp3?alt=media&token=34c863a4-09a9-4620-ac4d-2dc7927f91e2',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`(がくせいかいかん で)
    A: はじめまして。はらです。
   
    B: わたし は　ワンです。
    よろしくおねがいします。
    
    A: ワンさん は　だいがくせい です か。
    
    B:　いいえ、にほんごがっこう の がくせいです
   
    A:わたしは　ぶんか おんがく だいがく の がくせい　です
    よろしく`,
    textoEspañol:`(En el dormitorio de estudiantes)
    A:Mucho gusto, soy Hara.
   
    B:Mucho gusto,soy Wan,
    es un placer conocerte
   
    A: Wan, eres estudiante universitario?
   
    B: No, soy estudiante de una escuela del idioma Japonés
   
    A: Yo soy estudiante de una universidad de musica cultural
    es un placer conocerte`,
    consejos: `
    A) Intenta recordar palabras como: 
    1.daigakusei (estudiante universitario)
    2.gakkou ( escuela)
    3.Gakusei ( estudiante)
    4.Ongaku (música)
    5.Daigaku (universidad)
    `
  },
  {
    title: '休み - Descanso',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 10',
    uri:
      'https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F28%20Pista%2028.mp3?alt=media&token=0f94e1c0-3898-4cb3-8a7f-dcba2b381487',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`(きょうしつ で)
    A: じゅぎょう は　くじ　じっぷん　からです。
    
    B: なんじまでですか。
    
    A: にじ　ごじっぷん　までです。
    
    B:　ひるやすみは　なんじから　なんじまでですか。
    
    A:あのう、やすみは　いつですか。
    
    B:どようび　と　にちようびです`,
    textoEspañol:`(En el salón de clases)
    A:La clase inicia desde las 9 con 10min.
   
    B:¿Hasta que hora terminara?,
   
    A: Hasta las 2:50
   
    B: El resceso de medio dia ¿desde que hora inicia y hasta que hora termina?
    
    A: Desde las 12 hasta la 1
    
    B:este..., ¿los descansos cuando son?
   
    A: los sabados y los domingos.`,
    consejos: `
    A) Intenta recordar palabras como: 
    1.kyoushitsu (salón de clases)
    2.kara, made (desde y hasta)
    3. nanjikara nanjimade (desde a que hora, hasta que hora)
    4. istu (cuando)
    5. juugyou (clase)
    `
  },
 
  {
    title: '動詞 - Verbo',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 11',
    uri:
      ' https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F30%20Pista%2030.mp3?alt=media&token=a6ecbbed-3226-4499-befc-1a1d7b51530f',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`
    1.のみます
    ２．たべます
    ３，みます
    ４．ききます
    ５．よみます
    ６．かきます
    ７．すいます
    8．します
    9．しごとをします
    10．べんきょうをしています
    11．テニスをします
    12．おきます
    13．ねます
    14．いきます
    15．かえります
    16．きます`,
    textoEspañol:`
    1. Beber
    ２．Comer
    ３，Ver
    ４. Escuchar
    ５．Leer
    ６．Escribir
    ７．Fumar
    8．Hacer
    9．Trabajar
    10．Estudiar
    11．Jugar Tenis
    12．Despertar
    13．Dormir
    14．Ir
    15．Regresar
    16．Venir`,
    consejos: `
    1) Intenta repetir este audio hasta lograr una pronunciación adecuada
    de cada verbo.
    `
  },

  {
    title: '一日 - Un día ',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 12',
    uri:
      '  https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F32%20Pista%2032.mp3?alt=media&token=ffef1806-59dd-4715-a692-7557e53335af',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`
    1.しちじはん　に　おきます
    コーヒー を のみます
    
    ２．がっこう へ いきます
    
    ３．9じから 3じまで　がっこう で べんきょうをします。
    
    ４．さんじはん から テニス を します
    
    ５．ろくじに うち へ かえります
    ばんごはん を たべます
    
    6．テレビ を みます
    
    7．じゅういちじはん に ねます`,
    textoEspañol:`
    1. me levanto a las 7 y media
    tomo café
    
    2.voy a la escuela
   
    3. desde las 9 hasta las 3 estudio en la escuela
   
    4．desde las tres y media juego tenis
   
    5．A las 6 regreso a casa
    ceno
    
    6. veo la televisión

    7.Me duermo a las 11 y media`,
    consejos: `
    A) Dominar las partciulas ni,o,de,kara,made,e. (PDF)
    `
  },
  {
    title: '会話 一 - Conversación 1 ',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 13',
    uri:
      '  https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F34%20Pista%2034.mp3?alt=media&token=24aad7f4-4150-4fa5-a425-e04526d4ceda',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`(にちようび　きょうしつで)
    A: おはようございます。
    
    Ｂ: おはようございます。
    
    A:ワンさんは　きのう、なにをしましたか
    しぶやで　えいが　を　みました。ラフルさんは?
   
    B:わたしは　テニスをしました
   
    A:そうですか`,
    textoEspañol:`
    (Domingo en el salón de clases)
    A: Buenos días。
    
    Ｂ: Buenos días。
   
    A:Wan, ¿qué hiciste ayer?
    En shibuya vi una película, Y tu Rafar?
    
    B:Yo jugué tenis
   
    A:Oh, ya veo.
    `,
    consejos: `
    A) Dominar verbos en pasado (pdf)
    `
  }
  ,

  {
    title: '会話ニ - Conversación 2 ',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 14',
    uri:
      ' https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F39%20Pista%2039.mp3?alt=media&token=43cf4c48-62c9-4445-b490-346ee3375e21',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`
    A: これは　だれの　ノートですか
    
    B: それは　わたしの　ノートです。
    
    A: これも　ラフルさん の ですか
    
    B:いいえ、それはわたし の　じゃありません。`,
    textoEspañol:`
   　A:¿Este cuaderno de quién es?
  
   B: Ese es mi cuaderno.
  
   A: Este también es de Rafur?
  
   B: No, ese no es mío.
    `,
    consejos: `
    A) Dominar recordar dareno(¿de quien?)
    B) Dominar korewa, sorewa, arewa
    `
  }
  ,

  {
    title: '会話ニ - Conversación 2 ',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 15',
    uri:
      ' https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F45%20Pista%2045.mp3?alt=media&token=d2ce0fc7-f986-40e1-a9d0-34db66c6aca6',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`
    A: ちんさんの　へやは　ひろいですか
    
    B: いいえ、ひろくありません。
    マリーさん の へや は ひろいですか。
   
    A:いいえ、わたしのへや　も　ひろくありません
    
    B:マリーさん　の　へやは　きれいですか
    
    A:はい、わたし の へや は きれいです
    
    B:そうですか。わたし の へや は きれいじゃありません。`,
    textoEspañol:`
   　A:¿Tu habitación Chin es amplia?
  
   B: No, no es amplia.
    ¿Tu habitación Maria es amplia?
   
    A: no, mi habitación no es amplia.
  
    B:¿Tu habitación es bonita?
  
    A: Si, mi habitación es amplia.
  
    B: Ya veo, mi habitación no es bonita. 
    `,
    consejos: `
    A) Dominar los adjetivos i y na
    B) Dominar la negación de los adjetivos.
    `
  }
  ,

  {
    title: '位置 - Posiciones ',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 16',
    uri:
      ' https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F51%20Pista%2051.mp3?alt=media&token=49d01bd8-346c-401e-8c79-192158ff2990',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`
    A: けんじくん
    おかえりなさい
    
    れいぞうこ　の　なかに　ジュース　が　あります
    
    テーブル　のうえ　に　おかし　が　あります
    
    ごじごろ　かえります
   
    おかあさんより`,
    textoEspañol:`
   Kenji
  
   Bienvenido a casa
  
   Adentro del refrijerador hay un jugo
  
   Hay dulces arriba de la mesa
  
   A las 5 aproximadamente regreso
  
   de parte de mamá
    `,
    consejos: `
    A) Dominar posiciones.
    B) Dominar verbo Arimasu e imasu
    `
  }
  ,

  {
    title: '会話 - Conversación ',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 17',
    uri:
      ' https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F61%20Pista%2061.mp3?alt=media&token=f59c0409-cfbb-4ae3-8372-8cd68e6c89c3',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`
    A: さとうさん　は　にちようび　に　なにを　しますか。
    
    B: えいが　を　みます。
    
    A: そうですか。　えいがかん　で　みますか。
    
    B: いいえ、えいがかん　では　みません。うち　で　みます。
   
    A: どんな　えいが　が　すきですか。
   
    B:　わたしは　コメディー　が　すきです
    よしださんは　どんな　えいが　が　すきですか。
   
    A:　わたしは　ホラーが　すきです。
   
    B:そうですか。わたしは　ホラー　は　すきじゃありません。
    `,
    textoEspañol:`
    A: Sato, ¿qué haras el domingo?。
    B: Vere peliculas。
    A: Ya veo。　¿La veras en el cine?。
    B: No la veré en el cine。La vere en mi casa。
    A: ¿Qué tipo de peliculas te gustan?。
    B:　Me gustan las comedias.
    Yoshida ¿qué tipo de peliculas te gustan?。
    A:　Me gustan las peliculas de terror。
    B:Ya veo。A mi no me gustan las de terror。
    `,
    consejos: `
    A) Recordar vocabulario
    1.Eigakan ( cine)
    2. Eiga ( pelicula)
    3. donna ( que tipo)
    4. Comedii ( comedia)
    5. Horaa ( horror)
    `
  }
  ,

  {
    title: '会話二 - Conversación 2 ',
    author: 'BUNKAN NICHIBOKU',
    source: 'Audio 18',
    uri:
      ' https://firebasestorage.googleapis.com/v0/b/bunkan-app-8d29e.appspot.com/o/Auditivos%2F63%20Pista%2063.mp3?alt=media&token=e1d872a2-8ea9-4604-b2e5-5e4b1848949b',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
    textoJapones:`
    A: さとうさん　は よく　スポーツをしますか。
    B:　いいえ、あまりしません。　よしださんは?
    A.わたしは　よく　テニスをします。サッカーもすきです
    B.サッカーをしますか。
    A.いいえ、しません。
    わたしはサッカーをみるのが　すきです。
    さとうさん　も　よくサッカーをみますか。

    Ｂ.いいえ、あまりみません。
    わたしは　すもうをみるのがすきです。
    よしださんは　すもう　をみますか。

    A.いいえ、ぜんぜんみません.

    `,
    textoEspañol:`
    A: Sato, ¿frecuentemente haces deportes?。
    B:　No, casi no lo hago。　Y ¿tu Yoshida?
    A.Yo practico frecuentemente tenis。 También em gusta el soccer.
    B.¿Practicas soccer?。
    A.No, no lo hago。
    Me gusta jugar soccer。
    Sato, frecuentemente ves soccer?。

    Ｂ.No, casi no lo veo。
    A mi me gusta ver sumo。
    ¿Yoshida ves sumo?。
    A.No, no lo veo para nada.
    `,
    consejos: `
    A) Revisar partciula のが
    B) Revisar adverbios de frecuencia (yoku, tokidoki, amari)

    `
  }

]

export default class ComprensionAuditiva extends React.Component {

 

  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: false
  }

  
  
  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      })
 
      this.loadAudio()
    } catch (e) {
      console.log(e)
    }
  }

  async loadAudio() {
    const {currentIndex, isPlaying, volume} = this.state
   
    try {
      const playbackInstance = new Audio.Sound()
      const source = {
        uri: audioBookPlaylist[currentIndex].uri
      }
   
      const status = {
        shouldPlay: isPlaying,
        volume
      }
   
      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)     
      await playbackInstance.loadAsync(source, status, false)
      this.setState({playbackInstance})
      } catch (e) {
        console.log(e)
      }
  }

  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering
    })
  }

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state
    isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
  
    this.setState({
      isPlaying: !isPlaying
    })
  }

  handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex } = this.state
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      currentIndex < audioBookPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0)
      this.setState({
        currentIndex
      })
      this.loadAudio()
    }
  }

  handleNextTrack = async () => {
    let { playbackInstance, currentIndex } = this.state
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      currentIndex < audioBookPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
      this.setState({
        currentIndex
      })
      this.loadAudio()
    }
  }

  renderFileInfo() {
    const { playbackInstance, currentIndex } = this.state
    return playbackInstance ? (
      
      <View style={styles.trackInfo}>
        <Text style={[styles.trackInfoText, styles.largeText]}>
          {audioBookPlaylist[currentIndex].title}
        </Text>
        <Text style={[styles.trackInfoText, styles.smallTextAuthor, ]}>
          {audioBookPlaylist[currentIndex].author}
        </Text>
        <Text style={[styles.trackInfoText, styles.smallTextSource]}>
          {audioBookPlaylist[currentIndex].source}
        </Text>
        <View style={[ styles.box]}>
        <Text style={[styles.trackInfoText, styles.smallText]}>
          {audioBookPlaylist[currentIndex].textoJapones}
        </Text>
        <Text style={[styles.trackInfoTextEsp, styles.smallText,{marginTop:25}]}>
          {audioBookPlaylist[currentIndex].textoEspañol}
        </Text>
        <Text style={[styles.trackInfoTextEsp, styles.smallText,{marginTop:25}]}>
          {audioBookPlaylist[currentIndex].consejos}
        </Text>
        </View>
      </View>
     
    ) : null
  }


render() {

   

  return (

     
    
  <View style={styles.containerprincipal}>
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
                    source={require("../../../assets/audio.png")}
                    style={styles.imagenBGheader}
                />
                <LinearGradient
                        //Background Linear Gradient
                        colors={["#333333", "transparent"]}
                        style={styles.lg}
                />
                
                
                <View style={styles.controls}>
                <BlurView intensity={200} tint={'default'} style={{flex:1 ,height:210,flexDirection:"row",paddingLeft:50,paddingTop:75}}>
        <TouchableOpacity style={styles.control} onPress={this.handlePreviousTrack}>
          {this.state.currentIndex===0 ? ( null ): ( <Ionicons name='caret-back-outline' size={48} color='#444' /> )}
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
          {this.state.isPlaying ? (
            <Ionicons name='pause-circle' size={48} color='#444' />
          ) : (
            <Ionicons name='ios-play-circle' size={48} color='#444' />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.control} onPress={this.handleNextTrack}>
        <Ionicons name='caret-forward-outline' size={48} color='#444' />
          
        </TouchableOpacity>

        </BlurView>
                </View>

                
            </View>



            <View style={styles.body}>
                <View style={{backgroundColor:"#e6cbe0", height:8, width:"18%", marginTop:15, borderRadius:10 }}/>
                <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',alignSelf:'center', }}>
                    <Text style={styles.titulo}>聴解</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',alignSelf:'center', }}>
                    <Text style={styles.descri}>Te sugerimos dominar hiragana y Katakana.</Text>
                    <Text style={styles.descri2}>Puedes verlo en japonés y despues español. </Text>
                    <Text style={styles.descri2}>Revisa los consejos del al final. </Text>
                    
                </View>
                {this.renderFileInfo()}
            </View>

          
  

        </ScrollView>
  </View>
     
     
   
  )
}

}

// update the Stylesheet object 
const styles = StyleSheet.create({
  containerprincipal:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width:"100%",
  },
  header: {
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
  container1:{
    flex:1,
    //borderWidth:1,
    //borderColor:"red",
    width:width
  },
    imagenBGheader:{
        width:430,
        height:420,
        left: -401,
        top:-27,
        position:'absolute',
        marginLeft:350
    },
  albumCover: {
    width: 250,
    height: 250
  },
  trackInfo: {
    padding: 40,
    backgroundColor: '#fff'
  },
  box:{
    borderColor:"#efa9ae",
        borderWidth:3,
        borderRadius:20,
        paddingVertical:10,
        shadowColor:"#FFF0EB",
        shadowRadius:5,// sombra al raido
        shadowOffset:{height:10},
        shadowOpacity:0.2,// da una opacidad
        //elevation:2,
        marginBottom:15,
        marginTop:-75,
       // height:200
        
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
        //fontFamily:"MontserratBold",
        letterSpacing:1,
        marginTop:10,
        //borderWidth:1,
        borderColor:"black",
    },
  smallTextAuthor:{
    paddingBottom:-45
  },
  smallTextSource:{
    paddingBottom:80,
    fontSize: 20,
    
  },

  trackInfoText: {
    textAlign: 'center',
    flexWrap: 'wrap-reverse',
    color: '#550088',
   // borderWidth:3,
   // borderColor:"#efa9ae",
  },
  trackInfoTextEsp:{
    textAlign: 'center',
    flexWrap: 'wrap',
    color: '#550088',
    
    //marginTop:20
  },
  largeText: {
    fontSize: 25,
    marginTop:-45

  },
  smallText: {
    fontSize: 16,
    height:500,
    
  },
  control: {
    margin: 20
  },
  controls: {
    flexDirection: 'row',
    borderWidth:3,
    borderColor:"#fff",
    marginTop:185,
    height:-250,
    
    
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
    descri:{
        //flex:1,
        fontSize:16,
        fontWeight:'400',
       // fontFamily:"Arial",
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
        marginBottom:10
       // fontFamily:"Arial"
    },
})