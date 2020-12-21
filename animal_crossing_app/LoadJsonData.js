import * as Font from 'expo-font';
import React, {Component} from 'react';
import {Vibration, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getStorage(storageKey, defaultValue){
  const valueReturned = await AsyncStorage.getItem(storageKey);
  if(valueReturned === null) {
    await AsyncStorage.setItem(storageKey, defaultValue);
    return defaultValue;
  }
  return valueReturned;
}

export async function getStorageData(data, checkListKey, defaultValue){
  var checkListKeyString = "";
  var dataLoadingTotal = [];
  //Loop through all datasets
  var totalIndex = -1;
  for(var dataSet = 0; dataSet <data.length; dataSet++){
    var dataLoading = data[dataSet];
    //Loop through that specific dataset
    for(var i = 0; i < dataLoading.length; i++){
      totalIndex++;
      checkListKeyString = checkListKey[dataSet][0]
      //Loop through specific checklistKey property for that dataset
      for(var x = 1; x < checkListKey[dataSet].length; x++){
        checkListKeyString += dataLoading[i].[checkListKey[dataSet][x]];
      }
      //Get value from storage
      const value = await AsyncStorage.getItem(checkListKeyString);
      if(value === null) {
        await AsyncStorage.setItem(checkListKeyString, defaultValue);
        value = defaultValue;
      }
      dataLoading[i].dataSet=dataSet;
      dataLoading[i].collected=value;
      dataLoading[i].checkListKey=checkListKeyString;
      dataLoading[i].index=totalIndex;
    }
    dataLoadingTotal = dataLoadingTotal.concat(dataLoading);
  }
  return dataLoadingTotal;
}

export function determineDataGlobal(datakeyName){
  if(datakeyName==="dataLoadedReactions")
    return global.dataLoadedReactions;
  else if(datakeyName==="dataLoadedArt")
    return global.dataLoadedArt;
  else if(datakeyName==="dataLoadedMusic"){
    return global.dataLoadedMusic;
  }
}

export function updateDataGlobal(datakeyName, index, collected){
  if(datakeyName==="dataLoadedReactions")
    global.dataLoadedReactions[index].collected=collected;
  else if(datakeyName==="dataLoadedArt")
    global.dataLoadedArt[index].collected=collected;
  else if(datakeyName==="dataLoadedMusic")
    global.dataLoadedMusic[index].collected=collected;
}

export function checkOff(checkListKeyString, collected, index, dataGlobalName){
  if(collected==="false"){
    Vibration.vibrate([0,10,220,20]);
  } else {
    Vibration.vibrate(10);
  }
  AsyncStorage.setItem(checkListKeyString, collected==="false" ? "true":"false");
  updateDataGlobal(dataGlobalName, index, collected==="false" ? "true":"false")
  console.log(checkListKeyString);
  console.log(determineDataGlobal(dataGlobalName)[index])
  console.log(collected);
}

export function capitalize(name) {
  return name.replace(/\b(\w)/g, s => s.toUpperCase());
}

export const settings = [
  {
    "keyName" : "settingsNorthernHemisphere",
    "defaultValue" : "true",
    "currentValue" : "",
    "picture" : require("./assets/icons/earth.png"),
    "displayName" : "Northern hemisphere",
    "description" : "Set your hemisphere, north or south. This will change the data displayed for creatures and events.",
  },
  {
    "keyName" : "settingsAlwaysShowCatchphrase",
    "defaultValue" : "false",
    "currentValue" : "",
    "picture" : require("./assets/icons/speechBubble.png"),
    "displayName" : "Always show catchphrase",
    "description" : "",
  },
  {
    "keyName" : "settingsListOnlyActiveCreatures",
    "defaultValue" : "false",
    "currentValue" : "",
    "picture" : require("./assets/icons/clockIcon.png"),
    "displayName" : "List only active creatures",
    "description" : "",
  },
  {
    "keyName" : "settingsShowVariation",
    "defaultValue" : "false",
    "currentValue" : "",
    "picture" : require("./assets/icons/dice.png"),
    "displayName" : "Show variations in lists",
    "description" : "",
  },
  {
    "keyName" : "settingsCreaturesLeavingWarning",
    "defaultValue" : "false",
    "currentValue" : "",
    "picture" : require("./assets/icons/alarmClock.png"),
    "displayName" : "Creatures leaving warning",
    "description" : "",
  },
  {
    "keyName" : "settingsShowFAB",
    "defaultValue" : "true",
    "currentValue" : "",
    "picture" : require("./assets/icons/buttonIcon.png"),
    "displayName" : "Show floating menu button",
    "description" : "",
  },
  {
    "keyName" : "settingsTabBarPosition",
    "defaultValue" : "true",
    "currentValue" : "",
    "picture" : require("./assets/icons/scroll.png"),
    "displayName" : "Category labels on bottom",
    "description" : "Show the category tabs on the bottom, or top of the screen",
  },
]