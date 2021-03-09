import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  Vibration,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import TextFont from "./TextFont";
import ButtonComponent from "./ButtonComponent";
import colors from "../Colors";
import BottomSheet from 'reanimated-bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import FadeInOut from "./FadeInOut"

// <Popup 
//  button1={"OK"} 
//  button1Action={()=>{console.log("OK")}}
//  button2={"Cancel"} 
//  text={"Title"}
//  textLower={"Description"}
//  button2Action={()=>{ }}
//  popupVisible={this.state.open} 
//  close={() => this.setState({open:!this.state.open})}
// />


class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false
    };   
    
  }
  componentDidMount() {    
    if(this.props.button1!==undefined){
      this.Button1 = <ButtonComponent
        text={this.props.button1}
        color={colors.okButton[global.darkMode]}
        vibrate={5}
        onPress={() => {
          this.setPopupVisible(!this.state.popupVisible);
          this.props.button1Action();
        }}
      />
    }
    if(this.props.button2!==undefined){
      this.Button2 = <ButtonComponent
        text={this.props.button2}
        color={colors.cancelButton[global.darkMode]}
        vibrate={10}
        onPress={() => {
          this.setPopupVisible(!this.state.popupVisible);
          this.props.button2Action();
        }}
      /> 
    }
  }
  // componentDidUpdate(){
  //   if(this.props.popupVisible===true&&this.state.popupVisible===false)
  //     this.setPopupVisible(this.props.popupVisible);
  // }

  setPopupVisible = (visible) => {
    this.setState({popupVisible:visible});
  }

  render(){
    return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.popupVisible}
          statusBarTranslucent
          onRequestClose={()=>{this.props.button1===undefined && this.props.button2===undefined ? 0 : this.setPopupVisible(false);}}
        >
        <View style={styles.centeredView}>
          {this.props.button1===undefined && this.props.button2===undefined ? <View/> : <TouchableOpacity onPress={()=>{this.setPopupVisible(!this.state.popupVisible);}} style={{position:"absolute", width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: "black", opacity: 0.1}}/>}
          <View style={[styles.modalView,{backgroundColor: colors.white[global.darkMode]}]}>
            <TextFont bold={true} style={{fontSize: 28, textAlign:"center", color: colors.textBlack[global.darkMode]}}>{this.props.text}</TextFont>
            <ScrollView style={{maxHeight:Dimensions.get('window').height*0.75}}>
              <TextFont bold={false} style={{fontSize: 18, textAlign:"center", color: colors.textBlack[global.darkMode]}}>{this.props.textLower}</TextFont>
            </ScrollView>
            <View style={{flexDirection:"row", justifyContent:"center"}}>
              {this.Button2}
              {this.Button1}
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
export default Popup;


/* 
this.popup.setPopupVisible(true);
<PopupInfoCustom ref={(popup) => this.popup = popup} buttonText={"Close"}>
</PopupInfoCustom> 
*/

export class PopupInfoCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false
    };   
    
  }

  setPopupVisible = (visible) => {
    this.setState({popupVisible:visible});
  }

  render(){
    return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.popupVisible}
          statusBarTranslucent
          onRequestClose={()=>{this.setPopupVisible(false);}}
        >
        <View style={styles.centeredView}>
          <TouchableOpacity onPress={()=>{this.setPopupVisible(!this.state.popupVisible);}} style={{position:"absolute", width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: "black", opacity: 0.1}}/>
          <View style={[styles.modalView,{backgroundColor: colors.white[global.darkMode]}]}>
            <ScrollView style={{maxHeight:Dimensions.get('window').height*0.75}}>
              {this.props.children}
            </ScrollView>
            <View style={{flexDirection:"row", justifyContent:"center"}}>
              {!this.props.buttonDisabled ? <ButtonComponent
                text={this.props.buttonText}
                color={colors.okButton[global.darkMode]}
                vibrate={5}
                onPress={() => {
                  this.setPopupVisible(!this.state.popupVisible);
                }}
              /> : <View/>}
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}


// <PopupBottomCustom ref={(popup) => this.popup = popup} onClose={()=>this.props.onClose()}>
// </Popup>
export class PopupBottomCustom extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      openStart:false,
      otherSnap:0,
      firstSnap:0
    }
  }

  setPopupVisible = (visible) => {
    visible ? this.sheetRef.snapTo(0) : this.sheetRef.snapTo(2)
  }

  //so it can be draggable from anywhere
  headerSpacing = Dimensions.get('window').height;

  renderHeader = () => {
    return(<>
      <View style={{height: this.headerSpacing,}}/>
      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: colors.white[global.darkMode],
          padding:16,
          marginBottom:-1
        }}
      >
      <FadeInOut fadeIn={this.state.openStart} scaleInOut={true} duration={200} maxFade={0.4} minScale={0.7}>
        <View style={{width:"100%", alignItems:"center"}}>
          <View style={{backgroundColor:colors.lightDarkAccentHeavy2[global.darkMode], height:5, width: 45, borderRadius:50}}/>
        </View>
      </FadeInOut>
      </View>
      </>
    )
  }
  
  renderContent = () => {
    return(
      <>
      <View
        style={{
          backgroundColor: colors.white[global.darkMode],
          padding:this.props.padding===undefined ? 16 : this.props.padding,
          paddingTop:0
        }}
        onLayout={(event) => {
            var {x, y, width, height} = event.nativeEvent.layout;
            var otherSnap = Dimensions.get('window').height-40;
            var firstSnap = Dimensions.get('window').height*0.7
            if(height>firstSnap){
              if(otherSnap>height){
                otherSnap=height+37;
              }
            } else if (firstSnap > height){
              otherSnap = 0-this.headerSpacing;
              firstSnap=height+37;
            } else {
              
              otherSnap = 0-this.headerSpacing;
            }
            this.setState({otherSnap:otherSnap, firstSnap:firstSnap});
          }} 
      >
        {this.props.children}
        <View style={{height:85}}/>
      </View>
      </>
      

    )
  }

  bottomSheetCallback = new Animated.Value(1);

  render(){
    const springConfig = {
        damping: 20,
        mass: 1,
        stiffness: 135,
        overshootClamping: true,
        restSpeedThreshold: 0.01,
        restDisplacementThreshold: 0.001
    };

    return (
      <>
      <BottomSheet
        callbackNode={this.bottomSheetCallback}
        ref={(sheetRef) => this.sheetRef = sheetRef}
        snapPoints={[this.state.firstSnap+this.headerSpacing, this.state.otherSnap+this.headerSpacing, 0]}
        initialSnap={2}
        renderContent={this.renderContent}
        renderHeader={this.renderHeader}
        springConfig={springConfig}
        enabledContentTapInteraction={false}
        onCloseStart={()=>{this.setState({openStart:false})}}
        onCloseEnd={()=>{this.setState({openStart:false}); this.props.onClose===undefined ? 0 : this.props.onClose();}}
        onOpenStart={()=>{this.setState({openStart:true})}}
        onOpenEnd={()=>{this.setState({openStart:true})}}
      />
      <Animated.View pointerEvents="none" style={{zIndex:99, backgroundColor: "black", opacity: Animated.multiply(-0.8,Animated.add(-0.7,Animated.multiply(this.bottomSheetCallback,1))), width: Dimensions.get('window').width, height: Dimensions.get('window').height, position:"absolute"}}/>
      </>
    )
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingTop: "10%",
    backgroundColor:"rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 10,
    borderRadius: 10,
    padding: 20,
    elevation: 5
  },
});