import React, {Component} from 'react';
import {View, Button, Image, ScrollView, Dimensions, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import TextFont from '../components/TextFont';
import Onboarding from 'react-native-onboarding-swiper';
import ButtonComponent from '../components/ButtonComponent'
import colors from '../Colors'
import {LanguagePicker} from "./SettingsPage"
import {setSettingsString} from "../LoadJsonData"
import { CatalogScannerApp, supportCatalogScanner } from './CatalogPage';

class Onboard extends Component {
  render(){
    let catalogScanning = []
    if(supportCatalogScanner()){
      catalogScanning.push({
        backgroundColor: colors.background[global.darkMode],
        image: <View style={{marginTop:10}}>
          <View style={{height: 10}}/>
          <CatalogScannerApp/>
        </View>,
        title: <TextFont style={{fontSize: 24, width: "90%", color:colors.textBlack[global.darkMode]}} bold={true}>Import your ACNH collection automatically</TextFont>,
        subtitle: <TextFont style={{fontSize: 16, width: "90%", paddingTop: 20, color:colors.textBlack[global.darkMode]}} bold={true}>Tap above to download the catalog scanner application or visit the Catalog Scanner page for more information.</TextFont>,
      })
    }
    return(
      <Onboarding
        allowFontScaling={false}
        transitionAnimationDuration={global.reducedMotion ? 0 : 400}
        showDone={false}
        skipLabel= {<TextFont style={{fontSize: 20, color:"gray"}}>Skip</TextFont>}
        imageContainerStyles = {{paddingBottom:30, marginTop:-70}}
        nextLabel= {
          <View>
            <Image
              style={{width:27,height:37, resizeMode:"contain"}}
              source={require("../assets/icons/rightArrow.png")}
            />
          </View>
        }
        onDone={() => {AsyncStorage.setItem("firstLogin", "false"); this.props.setFirstLogin(false);}}
        onSkip={() => {AsyncStorage.setItem("firstLogin", "false"); this.props.setFirstLogin(false);}}
        pages={[
          {
            backgroundColor: colors.white[0],
            image: <Image style={{height: 250, width: 250, resizeMode:'contain', margin:0}} source={require('../assets/icons/palmIcon.png')} />,
            title: <TextFont style={{fontSize: 30, width: "70%", textAlign:'center'}} bold={true}>Welcome to ACNH Pocket Guide</TextFont>,
            subtitle: <TextFont style={{fontSize: 16, width: "90%", paddingTop: 20, color:colors.white[0]}} bold={true}></TextFont>,
          },
          {
            backgroundColor: colors.FAB[0],
            image: <Image style={{height: 250, width: 250, resizeMode:'contain'}} source={require('../assets/icons/emote.png')} />,
            title: <TextFont style={{fontSize: 24, width: "90%", color:colors.white[0]}} bold={true}>Track your creatures, collection, and game events</TextFont>,
            subtitle: <TextFont style={{fontSize: 16, width: "90%", paddingTop: 20, color:colors.white[0]}} bold={true}>Designed with a user friendly and modern interface and experience.</TextFont>,
          },
          ...catalogScanning,
          // {
          //   backgroundColor: colors.FAB[1],
          //   image: <TextFont style={{fontSize: 24, marginHorizontal:30, color:colors.white[0]}} bold={true}>Select Language</TextFont>,
          //   title: <View style={{marginHorizontal:10}}><LanguagePicker/></View>,
          //   subtitle: <View/>
          // },
          {
            backgroundColor: colors.background[global.darkMode],
            image: <LottieView 
              autoPlay
              loop={true}
              style={{
                width: 120,
                height: 120,
                transform: [
                  { scale: 1.25 },
                ],
              }} 
              source={require('../assets/balloon.json')}
            />,
            title: <TextFont style={{fontSize: 30, paddingTop: 20, width: "70%", textAlign:'center', color:colors.textBlack[global.darkMode]}} bold={true}>Let's go!</TextFont>,
            subtitle: <>
              <ButtonComponent vibrate={10} color={colors.okButton[global.darkMode]} text="Northern Hemisphere" onPress={() => {
                AsyncStorage.setItem("firstLogin", "false"); 
                setSettingsString("settingsNorthernHemisphere","true");
                this.props.setFirstLogin(false);
              }} />
              <ButtonComponent vibrate={10} color={colors.okButton[global.darkMode]} text="Southern Hemisphere" onPress={() => {
                AsyncStorage.setItem("firstLogin", "false"); 
                setSettingsString("settingsNorthernHemisphere","false");
                this.props.setFirstLogin(false);
              }} />
              
              {/* <TextFont style={{fontSize: 12, paddingTop: 30, width: "70%", textAlign:'center', color:colors.textBlack[global.darkMode]}} bold={true}>You can import your exported data from the last version of the app in settings.</TextFont> */}
            </>,
          },
        ]}
      />
    )
  }
}
export default Onboard;