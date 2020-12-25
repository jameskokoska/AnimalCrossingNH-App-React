import * as Font from 'expo-font';
import React, {Component} from 'react';
import {StyleSheet, ScrollView, Dimensions, Image, View, Text} from 'react-native';
import {InfoLineBeside, InfoLineTriple, InfoLineDouble, InfoLine, Phrase, CircularImage, RightCornerCheck, LeftCornerImage, Title} from '../components/BottomSheetComponents';
import colors from "../Colors"
import {getSculpturePhotoFake, getPaintingPhoto,getPaintingPhotoFake} from "../components/GetPhoto"
import {commas, capitalize} from '../LoadJsonData'
import CachedImage from 'react-native-expo-cached-image';
import TextFont from '../components/TextFont'

class ArtPopup extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  render(){
    var paintingComparisonReal = <CachedImage
      style={styles.comparisonImage}
      source={{
        uri: this.props.item["Image"],
      }}
    />
    var paintingComparisonRealLabel = <TextFont style={{paddingBottom: 20, fontSize:20, color: colors.textBlack[colors.mode]}}>^ Real ^</TextFont>
    var paintingComparisonFake = <View/>
    var paintingComparisonFakeLabel = <TextFont style={{paddingBottom: 20, fontSize:20, color: colors.textBlack[colors.mode]}}>There is no fake version</TextFont>
    if(this.props.item["Name"].includes("painting")){
      var paintingReal = getPaintingPhoto(capitalize(this.props.item["Name"]));
      if(paintingReal!=="none"){
        paintingComparisonReal = <Image style={styles.comparisonImage} source={paintingReal}/>
      }
      var paintingFake = getPaintingPhotoFake(capitalize(this.props.item["Name"]));
      if(paintingFake!=="none"){
        paintingComparisonFake = <Image style={styles.comparisonImage} source={paintingFake}/>
        paintingComparisonFakeLabel = <TextFont style={{paddingBottom: 20, fontSize:20, color: colors.textBlack[colors.mode]}}>^ Fake ^</TextFont>
      }
    } else {
      var sculptureFake = getSculpturePhotoFake(this.props.item["Name"]);
      if(sculptureFake!=="none" ){
        paintingComparisonFake = <CachedImage
          style={styles.comparisonImage}
          source={{
            uri: sculptureFake,
          }}
        />
        paintingComparisonFakeLabel = <TextFont style={{paddingBottom: 20, fontSize:20, color: colors.textBlack[colors.mode]}}>^ Fake ^</TextFont>
      }
    }
    return <View style={{width: "100%", alignItems: "center"}}>
        <InfoLine
          image={require("../assets/icons/coin.png")} 
          item={this.props.item}
          textProperty={["Sell"]}
          ending={" bells"}
        />
        <InfoLine
          image={require("../assets/icons/bellBag.png")} 
          item={this.props.item}
          textProperty={["Buy"]}
          ending={" bells"}
        />
        <View style={{marginTop: 20}}/>
        {paintingComparisonReal}
        {paintingComparisonRealLabel}
        {paintingComparisonFake}
        {paintingComparisonFakeLabel}
      </View>
  }
}
export default ArtPopup;

const styles = StyleSheet.create({
  comparisonImage:{
    width: 400,
    height:300,
    resizeMode: "contain"
  }
})