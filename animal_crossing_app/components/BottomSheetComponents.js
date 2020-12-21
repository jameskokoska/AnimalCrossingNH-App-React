import React, { Component } from "react";
import {TouchableOpacity, Text, View, StyleSheet} from "react-native";
import colors from '../Colors.js';
import CachedImage from 'react-native-expo-cached-image';
import Check from './Check';
import TextFont from './TextFont'
import {capitalize, checkOff} from '../LoadJsonData'

export class CircularImage extends Component {
  render() {
    return <View style={{width:"100%", alignItems: 'center'}}>
      <View style={[styles.rowImageBackground,{backgroundColor:this.props.accentColor}]}>
        <CachedImage
          style={styles.rowImage}
          source={{
            uri: this.props.item[this.props.imageProperty[this.props.item.dataSet]],
          }}
        />
      </View>
    </View>
  }
}

export class LeftCornerImage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <View style={[styles.cornerImageBackground,{backgroundColor:this.props.accentColor}]}>
        <CachedImage
          style={styles.cornerImage}
          source={{
            uri: this.props.item[this.props.imageProperty[this.props.item.dataSet]],
          }}
        />
      </View>
  }
}

export class RightCornerCheck extends Component {
  constructor(props) {
    super(props);
    this.setCollected = this.setCollected.bind(this);
    this.state = {
      collected:props.collected
    };
  }
  //update component when new data is passed into the class, or when the check mark local value changes
  componentDidUpdate(prevProps) {
    if(this.state.collected!==this.props.collected && this.state.collected===prevProps.collected || this.props.item !== prevProps.item || this.state.collected!==prevProps.item.collected)
      this.setState({collected:this.props.collected});
  }
  setCollected(collected){
    this.setState({collected: collected});
    this.props.updateCheckChildFunction(this.state.collected==="true" ? "false":"true");
    console.log("set");
  }
  render() {
    return <TouchableOpacity style={[styles.checkMark]} 
              activeOpacity={0.6}
              onPress={() => {  
                checkOff(this.props.item.checkListKey, this.state.collected, this.props.item.index, this.props.dataGlobalName);
                this.setCollected(this.state.collected==="true" ? "false":"true");
            }}>
      <Check fadeOut={false} play={this.state.collected==="true"} width={135} height={135}/>
    </TouchableOpacity>
  }
}

export class Phrase extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <View/>
  }
}

export class Title extends Component {
  render() {
    if(this.props.item[this.props.textProperty[this.props.item.dataSet]]!==undefined){
      return <View style={styles.titleContainer}>
        <TextFont style={[styles.title]} bold={true}>
          {capitalize(this.props.item[this.props.textProperty[this.props.item.dataSet]])}
        </TextFont>
      </View>
    } else {
      return <View/>;
    }
    
  }
}


const styles = StyleSheet.create({
  titleContainer:{
    width:"100%",
    paddingLeft: 75,
    paddingRight: 75,
    alignItems: "center",
  },
  title:{
    fontSize: 30,
    textAlign: "center",
  },
  rowImageBackground:{
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:50,
    elevation: 5,
    position:"absolute",
    top: -130/2-20,
    height: 130,
    width: 130,
  },
  rowImage:{
    height: 110,
    width: 110,
    resizeMode:'contain',
  },
  cornerImageBackground:{
    width: 75,
    height: 75,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -130/2,
    zIndex:50,
    margin: 30,
    position: "absolute",
    top:-15,
    left:-15,
  },
  cornerImage:{
    height: 65,
    width: 65,
    resizeMode:'contain',
  },
  checkMark:{
    zIndex:50,
    position: "absolute",
    top:-15,
    right:-15,
  }
})