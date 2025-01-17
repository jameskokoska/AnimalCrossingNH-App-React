import React, {Component} from 'react';
import {TextInput, Linking, TouchableOpacity, ScrollView, View, Dimensions, Text, Image} from 'react-native';
import ListPage from '../components/ListPage';
import LottieView from 'lottie-react-native';
import TextFont from '../components/TextFont'
import StoreHoursContainer from '../components/StoreHoursContainer';
import colors from '../Colors'
import ButtonComponent from "../components/ButtonComponent"
import {attemptToTranslate, collectionListSave, checkOff, loadGlobalData, indexCollectionList, openURL, getSettingsString, capitalize, attemptToTranslateSpecial, variationsCheckedPercent, getStorage, isNonCraftableVariation} from "../LoadJsonData"
import Popup, { PopupBottomCustom, PopupInfoCustom, PopupOnlyLoading } from '../components/Popup';
import ToggleSwitch from 'toggle-switch-react-native';
import FastImage from '../components/FastImage';
import { getVariations, VariationItem, Variations } from '../components/BottomSheetComponents';
import { getPhoto } from '../components/GetPhoto';
import { TabBar, TabView } from 'react-native-tab-view';
import { MailLink, SubHeader } from '../components/Formattings';
import AsyncStorage from '@react-native-async-storage/async-storage';


class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.input = "";
    this.linkInput = "";
    this.totalSuccess = 0;
    this.totalFail = 0;
    this.method = "";
    this.importedItems = [];
    this.importedItemsIndices = [];
    this.state = {
      method:"",
      totalSuccess:"",
      totalFail:"",
      totalErrorItems: "",
      currentItemIndex: 0,
      noMoreMessage:"",
      index: 0,
      includeVillagers: false,
      includeRecipes: true,
      selectVariations: true,
      skipCompletedVariations: true,
      selectNonCraftableVariationsOnly: false,
      routes: [
        { key: 'Catalog Scanner App', title: attemptToTranslate('Catalog Scanner App') },
        { key: 'Catalog Scanner Website', title: attemptToTranslate('Catalog Scanner Website') },
        { key: 'Nook.lol', title: attemptToTranslate('Nook.lol') },
      ],
    }
  }

  async componentDidMount(){
    setTimeout(async ()=>{
      let response = await getStorage("catalogScannerInfoPopup","")
      if(response === ""){
        this.popupCatalogScannerInfo?.setPopupVisible(true)
        await AsyncStorage.setItem("catalogScannerInfoPopup", "true");
      }
    },0)
  }

  import = async (type) =>{
    this.popupWait?.setPopupVisible(true)
    await setTimeout(async ()=>{
      try{
        if((this.linkInput==="") && type=="nook.lol"){
          toast.show(attemptToTranslate("Please enter a link"), {type:"danger",
            placement:'top',
            duration: 4000, 
            renderType:{
              danger: (toast) => (
                <View style={{paddingHorizontal: 15, paddingVertical: 10, marginHorizontal: 10, marginLeft:15, marginVertical: 5, marginRight: 20, borderRadius: 5, backgroundColor: colors.popupDanger[global.darkMode], alignItems:"center", justifyContent:"center"}}>
                  <TextFont translate={false} style={{color:"white", fontSize: 15}}>{toast.message}</TextFont>
                </View>
              ),
            }
          })
          this.popupWait?.setPopupVisible(false)
          return
        } else if ((this.input==="") && type=="catalogScanner"){
          toast.show(attemptToTranslate("Please paste entries"), {type:"danger",
            placement:'top',
            duration: 4000, 
            renderType:{
              danger: (toast) => (
                <View style={{paddingHorizontal: 15, paddingVertical: 10, marginHorizontal: 10, marginLeft:15, marginVertical: 5, marginRight: 20, borderRadius: 5, backgroundColor: colors.popupDanger[global.darkMode], alignItems:"center", justifyContent:"center"}}>
                  <TextFont translate={false} style={{color:"white", fontSize: 15}}>{toast.message}</TextFont>
                </View>
              ),
            }
          })
          this.popupWait?.setPopupVisible(false)
          return
        }
        this.importedItems = []
        this.importedItemsIndices = []
        var inputList = [];
        var inputType = "";
        if((this.linkInput!=="") && type=="nook.lol"){
          this.method = attemptToTranslate("Using nook.lol link to import data")+"\n";
          var responseJSON = await (await fetch(this.linkInput+"/json?locale=en-us")).json();
          inputType = responseJSON["type"];
          inputList = responseJSON["data"];
          this.method = this.method + "\nImport type: " + inputType;
        } else if (this.input!=="" && type=="catalogScanner"){
          this.method = attemptToTranslate("Using list of results to import data")+"\n";
          inputList = this.input.split("\n");
        }
        if(inputList===undefined)
          inputList = [];
        var success = false;
        this.totalSuccess = 0;
        this.totalFail = 0;
        let totalErrorItems = [];
        for(var z = 0; z < inputList.length; z++){
          if(inputList[z].toString()==="" || inputList[z].toString()==="\n") continue
          success = false;
          for(var i = 0; i < global.dataLoadedAll.length; i++){
            for(var a = 0; a < global.dataLoadedAll[i].length; a++){
              if(global.dataLoadedAll[i][a]["Name"]!==undefined && global.dataLoadedAll[i][a]["Name"].toString().toLowerCase() === inputList[z].toString().toLowerCase()){
                success = true;

                if(this.state.includeVillagers===false && global.dataLoadedAll[i][a]["Data Category"]!==undefined && global.dataLoadedAll[i][a]["Data Category"]==="Villagers"){
                  continue
                }

                if(this.state.includeRecipes===false && global.dataLoadedAll[i][a]["Data Category"]!==undefined && global.dataLoadedAll[i][a]["Data Category"]==="Recipes"){
                  continue
                }

                this.totalSuccess++;
                if(inputType==="recipes" && global.dataLoadedAll[i][a]["checkListKey"].includes("recipesCheckList")){
                  checkOff(global.dataLoadedAll[i][a]["checkListKey"], false, "", "", false, false);
                } else if(inputType==="recipes" && !global.dataLoadedAll[i][a]["checkListKey"].includes("recipesCheckList")){
                  this.totalSuccess--;
                } else if(inputType==="catalog" && global.dataLoadedAll[i][a]["checkListKey"].includes("recipesCheckList")){
                  this.totalSuccess--;
                } else if(inputType==="critters" && global.dataLoadedAll[i][a]["checkListKey"].includes("villagerCheckList")){
                  this.totalSuccess--;
                } else {
                  checkOff(global.dataLoadedAll[i][a]["checkListKey"], false, "", "", false, false);
                  this.importedItems.push(global.dataLoadedAll[i][a])
                  this.importedItemsIndices.push(a)
                }
                break;
              } else {
                continue;
              }
            }
          }
          if(!success){
            console.log("When importing didn't find: " + inputList[z]);
            if(inputList[z]!==undefined)
              totalErrorItems.push(inputList[z])
            this.totalFail++;
          }
        }
        await loadGlobalData();
        global.collectionList = Array.from(new Set(collectionList));
        collectionListSave();
        global.collectionListIndexed = indexCollectionList(global.collectionList)
        console.log("Total error items: "+ totalErrorItems)
        this.setState({
          method: this.method,
          totalFail: this.totalFail,
          totalSuccess: this.totalSuccess,
          totalErrorItems: totalErrorItems.join("\n")
        })
        if(this.state.selectVariations){
          this.setState({currentItemIndex:-1, currentItemVariation: this.importedItems[0]})
          this.popupSelectVariations?.setPopupVisible(true);
          this.nextVariationsButton()
        }
      } catch(err){
        this.setState({
          method: attemptToTranslate("Attempted:") + "\n"+ this.method + "\n"+attemptToTranslate("There was an error, please check the link and try again...") +"\n\n" + err + "\n",
          totalFail: 0,
          totalSuccess: 0
        })
      }
      this.popupWait?.setPopupVisible(false); 
      this.popup?.setPopupVisible(true);
    },10)
  }

  nextVariationsButton = () => {
    if(this.state.currentItemIndex+1 >= this.importedItems.length){
      this.setState({noMoreMessage:"There are no more variations. Press 'Done' when complete."})
    } else {
      let amountToSkip = 0
      for(let index = this.state.currentItemIndex+1; index < this.importedItems.length; index++){
        const item = this.importedItems[index]
        if(item === undefined){
          amountToSkip++
        } else if (item?.checkListKey.includes("fenceCheckList")){
          amountToSkip++
        } else if(this.state.skipCompletedVariations === true && variationsCheckedPercent(item, this.importedItemsIndices[this.state.currentItemIndex+1+amountToSkip]) === 1){
          amountToSkip++
        } else if(this.state.selectNonCraftableVariationsOnly === true && isNonCraftableVariation(item)===false){
          amountToSkip++
        } else if((item.hasOwnProperty("Variation") && item["Variation"]!=="NA") || item.hasOwnProperty("Pattern") && item["Pattern"]!=="NA"){
          break
        } else{
          amountToSkip++
        }
      }
      if(this.state.currentItemIndex+1+amountToSkip >= this.importedItems.length){
        this.setState({noMoreMessage:"There are no more variations. Press 'Done' when complete."})
      } else {
        this.setState({noMoreMessage:"",currentItemVariation:this.importedItems[this.state.currentItemIndex+1+amountToSkip], currentItemIndex:this.state.currentItemIndex+=1+amountToSkip})
      }
    }
  }

  prevVariationsButton = () => {
    if(this.state.currentItemIndex <= 0 ){
      this.setState({noMoreMessage:"There are no more previous variations. Press 'Done' when complete."})
      return
    } else {
      let amountToSkip = 0
      for(let index = this.state.currentItemIndex-1; index < this.importedItems.length; index--){
        const item = this.importedItems[index]
        if(item === undefined){
          amountToSkip++
          break
        } else if (item?.checkListKey.includes("fenceCheckList")){
          amountToSkip++
        } else if(this.state.skipCompletedVariations === true && variationsCheckedPercent(item, this.importedItemsIndices[this.state.currentItemIndex-1-amountToSkip]) === 1){
          amountToSkip++
        } else if(this.state.selectNonCraftableVariationsOnly === true && isNonCraftableVariation(item)===false){
          amountToSkip++
        } else if((item.hasOwnProperty("Variation") && item["Variation"]!=="NA") || item.hasOwnProperty("Pattern") && item["Pattern"]!=="NA"){
          break
        } else {
          amountToSkip++
        }
      }
      if(this.state.currentItemIndex-amountToSkip <= 0){
        this.setState({noMoreMessage:"There are no more previous variations. Press 'Done' when complete."})
      } else {
        this.setState({noMoreMessage:"",currentItemVariation:this.importedItems[this.state.currentItemIndex-1-amountToSkip], currentItemIndex:this.state.currentItemIndex-1-amountToSkip})
      }
    }
  }

  infoButton = () => {
    const icon = global.darkMode?require("../assets/icons/infoWhite.png"):require("../assets/icons/info.png");
    return (
      <>
        <TouchableOpacity style={{zIndex:5, position:"absolute", padding:15, right:0}} onPress={()=>{this.popupCatalogScannerInfo?.setPopupVisible(true)}}>
          <Image style={{width:25,height:25,opacity: 0.35, resizeMode:"contain"}} source={icon}/>
        </TouchableOpacity>
      </>
    )
  }

  catalogScannerAppWeb = ({banner, subtitle}) => {
    return <View style={{backgroundColor:colors.lightDarkAccent[global.darkMode], height:"100%"}}>
      <ScrollView>
        {this.infoButton()}
        <View style={{height: 100}}/>
        <TextFont bold={true} style={{fontSize: 37, marginLeft: 30, marginRight: 30, color:colors.textBlack[global.darkMode]}}>Catalog Import</TextFont>
        <TextFont bold={true} style={{fontSize: 17, marginLeft: 30, marginRight: 30, color:colors.textBlack[global.darkMode]}}>{subtitle}</TextFont>
        {banner}
        {!supportCatalogScanner() ? <View style={{marginTop:0, marginBottom: 20}}>
          <View style={{height: 10}}/>
          <View style={{backgroundColor: colors.popupDanger[global.darkMode]}}>
            <View style={{height: 10}}/>
            <TextFont bold={true} style={{fontSize: 16, marginRight: 20, color:colors.textWhite[0], alignSelf: 'flex-start', padding:5, paddingHorizontal:10, marginHorizontal: 20, borderRadius:10}}>{"For other languages other than English items please use nook.lol"}</TextFont>
            <TextFont bold={true} style={{fontSize: 16, marginRight: 20, color:colors.textWhite[0], alignSelf: 'flex-start', padding:5, paddingHorizontal:10, marginHorizontal: 20, borderRadius:10}}>{"This can be found on the third tab of this page above."}</TextFont>
            <View style={{height: 10}}/>
          </View>
          </View> : 
        <View/>}
        <TextFont bold={true} style={{fontSize: 20, marginLeft: 30, marginRight: 40, color:colors.textBlack[global.darkMode]}}>{"Paste results here and Import"}</TextFont>
        <View style={{height: 15}}/>
        <TextInput
          allowFontScaling={false}
          style={{borderRadius: 10, maxHeight: 130, paddingVertical: 10, paddingHorizontal: 20, marginHorizontal: 20, fontSize: 18, backgroundColor:colors.white[global.darkMode], color:colors.textBlack[global.darkMode], fontFamily: "ArialRoundedBold"}}
          onChangeText={(text) => {this.input = text}}
          placeholder={"Abstract wall\nBackyard-fence wall\nGo K.K. Rider\n..."}
          placeholderTextColor={colors.lightDarkAccentHeavy[global.darkMode]}
          multiline={true}
        />
        <View style={{height: 10}}/>
        <View style={{marginHorizontal: 10}}>
          <ButtonComponent vibrate={10} color={colors.dateButton[global.darkMode]} onPress={async ()=>{await this.import("catalogScanner");}} text={"Import"}/>
        </View>
        <View style={{height: 10}}/>
        <TextFont suffix={"\n"+attemptToTranslate("Please be patient.")} bold={false} style={{fontSize: 13, marginLeft: 30, marginRight: 30, textAlign:"center",color:colors.textBlack[global.darkMode]}}>{"May take a few seconds to complete."}</TextFont>
        <View style={{height: 25}}/>
        <IncludeSwitch header={"Select Variations"} text={"Open a popup to select variations of the item when importing. Only the items with variations will create a popup."} value={this.state.selectVariations} toggleValue={()=>{this.setState({selectVariations:!this.state.selectVariations})}}/>
        <View style={{height: 5}}/>
        <IncludeSwitch header={"Skip Completed Variations"} text={"Don't show variation selection for items you've already collected all the variations for. This option is only used when 'Select Variations' is enabled."} value={this.state.skipCompletedVariations} toggleValue={()=>{this.setState({skipCompletedVariations:!this.state.skipCompletedVariations})}}/>
        <View style={{height: 5}}/>
        <IncludeSwitch header={"Select Only Non-Craftable Variations"} text={"Only enable the variation selection for items without a craftable variation."} value={this.state.selectNonCraftableVariationsOnly} toggleValue={()=>{this.setState({selectNonCraftableVariationsOnly:!this.state.selectNonCraftableVariationsOnly})}}/>
        <View style={{height: 5}}/>
        <IncludeSwitch header={"Include Recipes"} text={"Include recipes when importing items. Recipes and the item counterpart have the same name."} value={this.state.includeRecipes} toggleValue={()=>{this.setState({includeRecipes:!this.state.includeRecipes})}}/>
        <View style={{height: 5}}/>
        <IncludeSwitch header={"Include Villagers"} text={"Include villagers when importing items. Some villagers have the same name as items."} value={this.state.includeVillagers} toggleValue={()=>{this.setState({includeVillagers:!this.state.includeVillagers})}}/>
        <View style={{height: 90}}/>
      </ScrollView>
    </View>;
  }

  nookLolWebsiteCard = () => {
    return <WebsiteCard previewHeight={90} backgroundColor={"#46392F"} bannerSrc={require("../assets/icons/nooklol-banner.png")} url={'https://nook.lol/'} description={"A simple bot for extracting your ACNH catalog items, DIY recipes, critters and more."} title={"nook.lol"}/>
  }

  scannerAppCard = () => {
    return <>
      <TouchableOpacity activeOpacity={0.6} onPress={()=>{openURL("https://play.google.com/store/apps/details?id=com.acnh.catalog_scanner")}} style={{backgroundColor: colors.white[global.darkMode], marginHorizontal: 15, borderColor: colors.lightDarkAccentHeavy[global.darkMode], borderStyle: 'solid', borderWidth: 1.5, borderRadius: 15, marginVertical: 25, paddingTop: 15, paddingBottom: 5}}>
        <CatalogScannerApp/>
      </TouchableOpacity>
    </>
  }

  scannerWebsiteCard = () => {
    return <WebsiteCard backgroundColor={"#fff563"} bannerSrc={require("../assets/icons/catalog-scanner-banner.png")} url={'https://acnh-scanner.web.app/'} description={"Scan your ACNH collection with ease!"} title={"ACNH Catalog Scanner"}/>
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'Catalog Scanner App':
        return this.catalogScannerAppWeb({subtitle: "With the catalog scanner app", 
        banner: this.scannerAppCard()
      })
      case 'Catalog Scanner Website':
        return this.catalogScannerAppWeb({subtitle: "With the catalog scanner website", 
        banner: this.scannerWebsiteCard()
      })
      case 'Nook.lol':
        return <View style={{backgroundColor:colors.lightDarkAccent[global.darkMode], height:"100%"}}>
          <ScrollView>
            {this.infoButton()}
            <View style={{height: 100}}/>
            <TextFont bold={true} style={{fontSize: 37, marginLeft: 30, marginRight: 30, color:colors.textBlack[global.darkMode]}}>Catalog Import</TextFont>
            <TextFont bold={true} style={{fontSize: 17, marginLeft: 30, marginRight: 30, color:colors.textBlack[global.darkMode]}}>With nook.lol</TextFont>
            {this.nookLolWebsiteCard()}
            <TextFont bold={true} style={{fontSize: 20, marginLeft: 30, marginRight: 40, color:colors.textBlack[global.darkMode]}}>{"Paste nook.lol link and Import"}</TextFont>
            <View style={{height: 15}}/>
            <TextInput
              allowFontScaling={false}
              style={{borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20, marginHorizontal: 20, fontSize: 18, backgroundColor:colors.white[global.darkMode], color:colors.textBlack[global.darkMode], fontFamily: "ArialRoundedBold"}}
              onChangeText={(text) => {
                this.linkInput = text.replace("https://","")
                this.linkInput = "https://" + this.linkInput.replace(/ /g,'')
                if(text===""){
                  this.linkInput = ""
                }
              }}
              placeholder={"https://nook.lol/abc123"}
              placeholderTextColor={colors.lightDarkAccentHeavy[global.darkMode]}
              multiline={false}
            />
            <View style={{height: 10}}/>
            <View style={{marginHorizontal: 10}}>
              <ButtonComponent vibrate={10} color={colors.dateButton[global.darkMode]} onPress={async ()=>{await this.import("nook.lol");}} text={"Import"}/>
            </View>
            <View style={{height: 10}}/>
            <TextFont suffix={"\n"+attemptToTranslate("Please be patient.")} bold={false} style={{fontSize: 13, marginLeft: 30, marginRight: 30, textAlign:"center",color:colors.textBlack[global.darkMode]}}>{"May take a few seconds to complete."}</TextFont>
            <View style={{height: 25}}/>
            <IncludeSwitch header={"Select Variations"} text={"Open a popup to select variations of the item when importing. Only the items with variations will create a popup."} value={this.state.selectVariations} toggleValue={()=>{this.setState({selectVariations:!this.state.selectVariations})}}/>
            <View style={{height: 5}}/>
            <IncludeSwitch header={"Skip Completed Variations"} text={"Don't show variation selection for items you've already collected all the variations for. This option is only used when 'Select Variations' is enabled."} value={this.state.skipCompletedVariations} toggleValue={()=>{this.setState({skipCompletedVariations:!this.state.skipCompletedVariations})}}/>
            <View style={{height: 5}}/>
            <IncludeSwitch header={"Select Only Non-Craftable Variations"} text={"Only enable the variation selection for items without a craftable variation."} value={this.state.selectNonCraftableVariationsOnly} toggleValue={()=>{this.setState({selectNonCraftableVariationsOnly:!this.state.selectNonCraftableVariationsOnly})}}/>
            <View style={{height: 90}}/>
          </ScrollView>
        </View>;
      default:
        return <View/>;
    }
  };

  handleIndexChange = index => this.setState({index});

  render(){
    return(
      <>
        <TabView
          animationEnabled={global.reducedMotion!=true}
          lazy
          gestureHandlerProps={{ failOffsetX: this.state.index === 0 ? 1 : 100}}
          navigationState={this.state}
          renderScene={this.renderScene}
          onIndexChange={(this.handleIndexChange)}
          initialLayout={{ width: Dimensions.get('window').width }}
          renderTabBar={renderTabBar}
        />
        <Popup 
          ref={(popup) => this.popup = popup}
          button1={"OK"}
          button1Action={async ()=>{if(this.state.selectVariations===false && await getStorage("loginEmail","")==="") this.popupBackup?.setPopupVisible(true)}}
          text={"Import Results"}
          textLower={this.state.method + "\n"+attemptToTranslate("Imported:") + " " + this.state.totalSuccess + " " + attemptToTranslate("items") +"\n" + attemptToTranslate("Errors:") + " " + this.state.totalFail + " " + attemptToTranslate("items") + "\n" + this.state.totalErrorItems}
        />
        <Popup ref={(popupBackup) => this.popupBackup = popupBackup} text="Data Backup" textLower="Don't forget to backup your data!" button1={"Go to page"} button1Action={()=>{this.props.setPage(30)}} button2={"Cancel"} button2Action={()=>{}}/>
        <Popup
          ref={(popupWait) => this.popupWait = popupWait}
          button1Action={()=>{}}
          text={"Importing..."}
          textLower={"Please wait"}
          loading
        />
        <PopupBottomCustom ref={(popupCatalogScannerInfo) => this.popupCatalogScannerInfo = popupCatalogScannerInfo} onClose={()=>{}}>
          <SubHeader style={{marginLeft: 10}}>{"Supported Tools"}</SubHeader>
          <TextFont style={{fontSize: 17, marginLeft: 10, marginRight: 10, color:colors.textBlack[global.darkMode]}}>There are 3 supported tools. If one does not work/is not supported on your device, switch to another by using the tabs at the top.</TextFont>
          <View style={{height:15}}/>
          <View style={{marginVertical:-20, marginHorizontal: -20, marginBottom: -10}}>
            {this.scannerAppCard()}
          </View>
          <View style={{marginVertical:-20, marginHorizontal: -20, marginBottom: -10}}>
            {this.scannerWebsiteCard()}
          </View>
          <View style={{marginVertical:-20, marginHorizontal: -20}}>
            {this.nookLolWebsiteCard()}
          </View>
          <View style={{height:20}}/>
          <MailLink/>
        </PopupBottomCustom>
        <PopupInfoCustom alwaysMaxHeight ref={(popup) => this.popupSelectVariations = popup} buttonDisabled noDismiss 
          header = { <TextFont bold translate={false} style={{color:colors.textBlack[global.darkMode], fontSize: 25, textAlign:"center", marginBottom: 5}}>{this.state.currentItemVariation!==undefined ? capitalize(this.state.currentItemVariation["NameLanguage"]) : ""}</TextFont> }
          buttons={
            <>
              <View style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:"wrap", marginTop: -5}}>
                <ButtonComponent
                  text={"Previous"}
                  color={colors.okButton3[global.darkMode]}
                  vibrate={5}
                  onPress={() => {
                    this.prevVariationsButton()
                }}/>
                <ButtonComponent
                  text={"Next"}
                  color={colors.okButton3[global.darkMode]}
                  vibrate={5}
                  onPress={() => {
                    this.nextVariationsButton()
                }}/>
              </View>
              {this.state.noMoreMessage===""?<></>:<TextFont style={{fontSize: 15, marginHorizontal: 20, marginVertical:10, textAlign:"center", color:colors.textBlack[global.darkMode]}}>{this.state.noMoreMessage}</TextFont>}
              <View style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:"wrap", marginTop:-5, marginBottom: -8}}>
                <ButtonComponent
                  text={"Done"}
                  color={colors.okButton[global.darkMode]}
                  vibrate={5}
                  onPress={async () => {
                    this.popupSelectVariations?.setPopupVisible(false)
                    if(await getStorage("loginEmail","")==="")
                      this.popupBackup?.setPopupVisible(true)
                }}/>
              </View>
            </>
          }>
          <TextFont translate={true} style={{color:colors.textBlack[global.darkMode], fontSize: 14, textAlign:"center", marginBottom: 5}}>{"Select the variations you want to check off. The main item has already been marked as collected."}</TextFont>
          <View style={{flexWrap: 'wrap', flexDirection:"row",justifyContent:"center"}}>
            {
              getVariations(this.state.currentItemVariation!==undefined?this.state.currentItemVariation["Name"]:"", global.dataLoadedAll, this.state.currentItemVariation!==undefined?this.state.currentItemVariation["checkListKey"]:"", this.importedItemsIndices[this.state.currentItemIndex]!==undefined ? this.importedItemsIndices[this.state.currentItemIndex]:0).map((item, index)=>{
                return <VariationItemCatalog index={index} key={item["Unique Entry ID"]!==undefined?item["Unique Entry ID"]:itemImage} item={item}/>
              })
            }
          </View>
        </PopupInfoCustom>
      </>
    )
  }
}
export default CatalogPage;


export class VariationItemCatalog extends Component{
  constructor(props) {
    super(props);
    this.extraIndex = this.props.index===0 ? "0":"";
    this.state = {
      checked: global.collectionListIndexed[this.props.item["checkListKey"]+this.extraIndex]===true,
    }
  }
  componentDidUpdate(prevProps){
    if(prevProps!==this.props){
      if(this.props.item.checkListKey+this.extraIndex === this.props.updateKey){
        this.setState({
          checked: !this.props.updateChecked,
        })
      }
    }
  }
  render(){
    var item=this.props.item;
    var dataSet=this.props.dataSet;
    var itemImage = item["Image"]
    if(itemImage===undefined){
      itemImage = item["Closet Image"]
    }
    if(itemImage===undefined){
      return <></>
    }
    return(
      <TouchableOpacity 
        onPress={()=>{ 
          checkOff(item.checkListKey, this.state.checked, "", this.extraIndex); 
          this.setState({checked: !this.state.checked})
        }}>
        <View style={[{borderWidth: 2, borderColor: this.state.checked ? colors.checkGreen[global.darkMode] : colors.eventBackground[global.darkMode], marginHorizontal:3, marginVertical: 2, padding: 5, borderRadius: 100,justifyContent: "center",alignItems: "center",backgroundColor:colors.lightDarkAccent[global.darkMode]}]}>
          {itemImage!==undefined&&itemImage.startsWith("http")?
          <FastImage
            style={{height: getSettingsString("settingsLargerItemPreviews")==="false"?67:80, width: getSettingsString("settingsLargerItemPreviews")==="false"?53:70, resizeMode:'contain',}}
            source={{
              uri: itemImage,
            }}
            cacheKey={itemImage}
          />:<Image
            style={{height: getSettingsString("settingsLargerItemPreviews")==="false"?67:80, width: getSettingsString("settingsLargerItemPreviews")==="false"?53:70, resizeMode:'contain',}}
            source={getPhoto(itemImage!==undefined?itemImage.toString().toLowerCase():"")}
          />}
        </View>
        {item?.["Color 1"]==="NA" ? <></> : <TextFont style={{color:colors.textBlack[global.darkMode], fontSize: 13, textAlign:"center"}}>{attemptToTranslateSpecial(item?.["Color 1"], "variants")}</TextFont>}
        {item?.["Color 2"]==="NA" ? <></> : <TextFont style={{color:colors.textBlack[global.darkMode], fontSize: 13, textAlign:"center"}}>{attemptToTranslateSpecial(item?.["Color 2"], "variants")}</TextFont>}
        {item?.["Pattern"]==="NA" ? <></> : <TextFont style={{color:colors.textBlack[global.darkMode], fontSize: 13, textAlign:"center"}}>{attemptToTranslateSpecial(item?.["Pattern"], "variants")}</TextFont>}
        {item?.["Pattern Title"]==="NA" ? <></> : <TextFont style={{color:colors.textBlack[global.darkMode], fontSize: 13, textAlign:"center"}}>{attemptToTranslateSpecial(item?.["Pattern Title"], "variants")}</TextFont>}
        <View style={{height:5}}/>
      </TouchableOpacity>
    )
  }
}

class IncludeSwitch extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <TouchableOpacity activeOpacity={0.7} onPress={() => {this.props.toggleValue()}}>
        <View style={{paddingVertical: 10, paddingHorizontal:5, flexDirection:"row",flex:1,alignItems: 'center',marginHorizontal: 15, borderRadius: 10,backgroundColor:colors.white[global.darkMode]}}>
          <View style={{marginHorizontal: 10,padding:5}}>
            <TextFont bold={true} style={{fontSize: 18, marginRight: 65,color:colors.textBlack[global.darkMode]}}>{this.props.header}</TextFont>
            <TextFont style={{fontSize: 12, marginRight: 65,color:colors.textBlack[global.darkMode]}}>{this.props.text}</TextFont>
          </View>
          <View style={{position:"absolute", right: 8, transform: [{ scale: 0.75 }]}}>
            <ToggleSwitch
              animationSpeed={global.reducedMotion ? 0 : 250}
              isOn={this.props.value}
              onColor="#57b849"
              offColor="#DFDFDF"
              size="large"
              onToggle={() => {this.props.toggleValue()}}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: colors.lightDarkAccentHeavy[global.darkMode], height:'100%', opacity: 0.6, borderRadius: 10 }}
    style={{ backgroundColor: colors.white[global.darkMode]}}
    activeColor={colors.textBlack[global.darkMode]}
    inactiveColor={colors.textBlack[global.darkMode]}
    getLabelText={({ route }) => route.title}
    renderLabel={({ route, focused, color }) => (
      <TextFont style={{ color, textAlign:"center", fontSize: 14}}>
        {route.title}
      </TextFont>
    )}
  />
);

export function supportCatalogScanner(){
  return global.language==="English (Europe)" || global.language==="English" || global.language==="French" || global.language==="French (US)" || global.language==="Spanish" || global.language==="Spanish (US)" || global.language==="German" || global.language==="Italian" || global.language==="Dutch" || global.language==="Portuguese"
}

export class CatalogScannerApp extends Component{
  render(){
    return <TouchableOpacity onPress={()=>{openURL("https://play.google.com/store/apps/details?id=com.acnh.catalog_scanner")}} activeOpacity={0.6}>
      <View style={{flexDirection:"row", alignContent:"center", justifyContent:"center", marginHorizontal: 40}}>
        <Image 
          source={require("../assets/icons/acnh-scanner-app-icon.png")} 
          style={{width:85, height:85, resizeMode:"contain",borderColor: colors.lightDarkAccent[global.darkMode],borderWidth: 2, borderRadius: 18}}
        />
        <View style={{marginLeft: 10, alignContent:'center', justifyContent:"center"}}>
          <TextFont bold={true} style={{fontSize: 18, color:colors.textBlack[global.darkMode]}}>{"Catalog Scanner App"}</TextFont>
          <TextFont bold={false} style={{fontSize: 14, marginLeft:2, color:colors.textBlack[global.darkMode]}}>{"For ACNH Pocket Guide"}</TextFont>
          <View style={{height: 5}}/> 
          <View style={{alignContent:"flex-end", justifyContent:"space-between",flexDirection:"row"}}>
          <TextFont bold={true} style={{fontSize: 16, marginRight: 20, color:colors.textWhite[0], backgroundColor:colors.popupSuccess[global.darkMode], alignSelf: 'flex-start', padding:5, paddingHorizontal:10, marginTop:3, borderRadius:10}}>{"Free"}</TextFont>
          <Image 
            source={require("../assets/icons/google-play-badge.png")} 
            style={{width:145, height:60, resizeMode:"contain",}}
          />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  }
}

export const WebsiteCard = ({bannerSrc, url, title, description, backgroundColor, previewHeight}) => {
  return <TouchableOpacity activeOpacity={0.6} onPress={() => openURL(url) } style={{backgroundColor: colors.white[global.darkMode], marginHorizontal: 30, borderColor: colors.lightDarkAccentHeavy[global.darkMode], borderStyle: 'solid', borderWidth: 1.5, borderRadius: 15, marginVertical: 20, }}>
    <Image source={bannerSrc} style={{resizeMode:'contain', width:"100%", height:previewHeight ?? 120, backgroundColor:backgroundColor, borderTopLeftRadius: 15, borderTopRightRadius: 15}}/>
    <View style={{height:2, backgroundColor:colors.lightDarkAccentHeavy[global.darkMode]}}/>
    <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
      <TextFont bold={true} style={{color:colors.textBlack[global.darkMode], fontSize: 18}}>{title}</TextFont>
      <TextFont style={{color:colors.textBlack[global.darkMode], fontSize: 15, opacity: 0.7}}>{description}</TextFont>
      <TextFont bold={false} style={{color: colors.fishText[global.darkMode], fontSize: 15, opacity: 0.8}}>{url}</TextFont>
    </View>
  </TouchableOpacity>
}