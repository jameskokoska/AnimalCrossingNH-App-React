
const colors = {
    //Use global.darkMode or global.darkModeReverse
    background: ["#f5f5f5","#1a1a1a"], //"#34454f" original
    backgroundLight: ["#ebebeb","#272727"],
    FAB: ["#49599a", "#455a64"],
    FAB2: ["#67BB4DD8", "#5B7C57D7"],
    searchbarBG : ["#DFDFDF", "#A3A3A3"],
    searchbarIcon : ["#000000","#FFFFFF"],
    shadow : ["#ebebeb", "#313131"],
    inkWell : ["#CDD0D3","#737592"],
    shadowPopUp : ["#000000", "#000000"],
    lightDarkAccent : ["#F5F5F5","#1A1A1A"],
    lightDarkAccentTextBG : ["#F7F7F7","#202020"],
    lightDarkAccent2 : ["#DADADA","#383838"],
    lightDarkAccentHeavy : ["#bcbfc2","#494c4d"],
    lightDarkAccentHeavy2 : ["#ebebeb","#494c4d"],
    lightDarkAccentHeavyBackground : ["#ebebeb","#282829"],
    filterBG : ["#ebebeb","#494c4d"],
    filterText : ["#ebebeb","#494c4d"],
    filterSearch : ["#bcbfc2","#A3A3A3"],
    textBlack : ["#373737","#f2f2f2"],
    textWhite : ["#FFFFFF","#373737"],
    textError : ["#D87474","#E2B8B8"],
    textWhiteOnly : ["#FFFFFF","#FFFFFF"],
    textLight : ["#a8a8a8","#8c8c8c"],
    white : ["#FFFFFF","#2B2B2B"],
    white2 : ["#FAFAFA","#3A3A3A"],
    checkRed : ["#F8DFE3","#805D62"],
    redText : ["#C56977","#944753"],
    checkGreen : ["#8CB48D","#557E55"],
    checkGreen2 : ["#B6DBB8","#395039"],
    checkBlue : ["#A5AAE9","#57649C"],
    checkBlue2 : ["#AFC3FA","#4F4F86"],
    checkPurple : ["#BEA9E2","#7B6892"],
    checkPurple2 : ["#D2C0EE","#6A4E77"],
    gyroidAppBar : ["#CA9F82","#A18458"],
    fishAppBar : ["#A2D0F7","#536991"],
    seaCollectionProgress : ["#92A0EE","#536991"],
    fishAccent : ["#E3F2FD","#434C53"],
    fishText : ["#3F51B5","#9AA2D4"],
    bugAppBar : ["#a5d6a7","#295029"],
    bugAccent : ["#e8f5e9","#6D756E"],
    bugText : ["#1b5e20","#729E75"],
    fossilAppBar : ["#947C5D","#4E463B"],
    fossilAccent : ["#E9DAC5","#726A5F"],
    villagerAppBar : ["#80CACF","#4B6E70"],
    villagerAccent : ["#EEFDFC","#71807F"],
    villagerCheck : ["#D6F5F2","#E2B0B0"],
    furnitureAppBar : ["#7BB16E","#2F5832"],
    furnitureAccent : ["#e8f5e9","#626D63"],
    foodCollectionProgress : ["#93B1DB","#4c6337"],
    furnitureCollectionProgress : ["#9FDBA7","#4c6337"],
    photosCollectionProgress : ["#DA8383","#4c6337"],
    postersCollectionProgress : ["#CC95D3","#4c6337"],
    clothingAppBar : ["#7569A0","#473C6B"],
    clothingAccent : ["#ede7f6","#625D69"],
    clothingCollectionProgress : ["#8069D1","#473C6B"],
    toolsAppBar : ["#D87575","#6E3333"],
    toolsAccent : ["#FDF1F2","#5A474A"],
    floorWallsAppBar : ["#416EA1","#304F74"],
    floorWallsCollectionProgress : ["#7B9EC6","#304F74"],
    floorWallsAccent : ["#e3f2fd","#505E68"],
    newItemsAppBar : ["#93C0F3","#2F527A"],
    newItemsAccent : ["#e3f2fd","#505E68"],
    emojipediaAppBar : ["#F3E98E","#807623"],
    emojipediaAccent : ["#dbd388","#878468"],
    allItemsAppBar : ["#B5DFB5","#2A522A"],
    allItemsAccent : ["#e8f5e9","#586353"],
    musicAppBar : ["#6B78BE","#364980"],
    musicAccent : ["#E3F2FD","#434C53"],
    musicCollectionProgress : ["#6973D5","#364980"],
    musicWavesTransparency: [0.9,0.4],
    photosAppBar : ["#BCDFFF","#2D6F83"],
    photosAccent : ["#E3F0FF","#3F545C"],
    selectPhotos : ["#CEDBE7", "#657B94"],
    giftsAppBar : ["#C6BCFF","#2D3D83"],
    artAppBar : ["#e57373","#793030"],
    artAccent : ["#FFF0F5","#5A4043"],
    warningBackground : ["#ffccbc","#4d2a2c"],
    warningEventBackground : ["#F5D9D9","#38292B"],
    startEventBackground : ["#D3F3D3","#2B3326"],
    specialEventBackground : ["#D4EDF5","#2B333A"],
    specialEventResidentBirthdayBackground : ["#D7DDF7","#2E303F"],
    specialEventBirthdayBackground : ["#EFDEF3","#36293B"],
    specialEventBackgroundHighlight : ["#56CFF7","#3077B4"],
    specialEventBirthdayBackgroundHighlight : ["#D963F3","#8332A3"],
    warningEventBackgroundHeavy : ["#FF5959","#A13341"],
    tvGuideHighlight : ["#98C7FD","#2D5C86"],
    tvGuideHighlightSpecial : ["#C498FD","#7B3A8B"],
    startEventBackgroundHeavy : ["#6BFF6B","#3F8018"],
    specialEventResidentBirthdayBackgroundHeavy : ["#B5BFEE","#515883"],
    specialEventBackgroundHeavy : ["#56CFF7","#3077B4"],
    specialEventBirthdayBackgroundHeavy : ["#D963F3","#8332A3"],
    seaAppBar : ["#A2D0F7","#536991"],
    seaAccent : ["#E3F2FD","#434C53"],
    musicWaves : ["#404662","#a9afdd"],
    constructionAppBar : ["#EEBE77","#946E1B"],
    amiiboAppBar : ["#E79E6D","#945E3A"],
    cardsAppBar : ["#b884bf","#703D77"],
    cardsAccent : ["#fbf0fc","#57365c"],
    materialsAppBar : ["#66A9AC","#266164"],
    materialsAccent : ["#e8feff","#434C53"],
    foodAppBar : ["#DAC568","#776F28"],
    foodAccent : ["#FFFDE8","#535243"],
    wishlistAppBar: ["#E69D9F", "#8B535A"],
    wishlistAccent: ["#FCE1E3", "#805759"],
    obtainableItemsAppBar: ["#D4D8A3", "#7C7A56"],
    obtainableItemsAccent: ["#EFF0CD", "#535344"],
    customFiltersAppBar: ["#A8DAD5", "#53808B"],
    customFiltersAccent: ["#E1FCFB", "#394A4B"],
    skyColor : ["#aad5f0","#1A1A1A"],
    grassColor : ["#9FDBA7","#4c6337"],
    checkedColor : ["#dcebce","#34402a"],
    eventsColor : ["#ffe366","#333333"],
    todoColor : ["#FDC496","#333333"],
    todoColorAccent : ["#ffeccf","#333333"],
    loanTrackingColor : ["#E99298","#333333"],
    toolTrackingColor : ["#DF91D2","#333333"],
    shootingStarsColor : ["#FFDE98","#333333"],
    timeTravelStarsColor : ["#CFFF98","#333333"],
    turnipColor : ["#A0C988","#333333"],
    visitorsColor : ["#98C4C3","#333333"],
    storeHoursColor : ["#9ECDF7","#333333"],
    collectionColor : ["#c7a4ff","#333333"],
    wordsOfWisdomColor : ["#A864B1","#333333"],
    profileColor : ["#97D39A","#333333"],
    activeCreaturesColor : ["#FFA599","#333333"],
    sectionBackground1 : ["#f8f8f8", "#1A1A1A"],
    eventBackground : ["#FFFFFF", "#262626"],
    sectionBackground2 : ["#f2f2f2", "#171717"],
    topSidebar : ["#e7f3e9","#6d746e"],
    selectHome : ["#D6D6D6", "#828282"],
    selectSupport : ["#CAC1F0", "#665F7E"],
    selectCreatures : ["#D4DBEC", "#697385"],
    selectItems : ["#CFE6DD", "#57694e"],
    selectIsland : ["#c1d8d0", "#57694e"],
    selectOrdinances : ["#C1D5DD", "#4E6169"],
    selectSongs : ["#D8E0F7", "#688194"],
    selectNewItems : ["#CADFEC", "#526474"],
    selectEverything : ["#D3E9D3", "#4E664D"],
    selectEmotes : ["#f0efd5", "#918f76"],
    selectCrafting : ["#f2e2d8", "#907373"],
    selectVillagers : ["#CEE1E7", "#738790"],
    selectConstruction : ["#ECE5D0", "#9B8B77"],
    selectCards : ["#E6D0E9", "#988799"],
    selectMisc : ["#c1d8d0", "#6d8387"],
    selectSettings : ["#C0CED8","#72818b"],
    selectAbout : ["#D6DBE7","#7d8986"],
    selectMeteoNook : ["#CBD6EE","#747F9C"],
    selectProfile: ["#D6DBE7","#596B66"],
    selectCatalogScanning : ["#D7DBF3","#4E5C86"],
    selectBackupAndRestore : ["#cdd8df","#72818b"],
    selectFAQ : ["#D6DBE7","#7d8986"],
    selectCalendar : ["#f2e2d8", "#907373"],
    selectParadise : ["#DBF2D8", "#65886C"],
    selectWishlist: ["#FDE7E9", "#886769"],
    selectActiveCreatures: ["#FDE7E9", "#886769"],
    selectAchievements : ["#E8ECFD","#566181"],
    selectVillagerCompatibility : ["#E8ECFD","#566181"],
    selectObtainable : ["#F0EBD5", "#777459"],
    selectAmiibo : ["#ECE0D0", "#806955"],
    selectGyroids : ["#DACBB9", "#917357"],
    selectText : ["#7792A8","#3C7477"],
    selectedText : ["#5B82AF","#2D82A3"],
    achievementsAppBar : ["#B2BCE9","#485068"],
    achievementsNoun : ["#5c6bc0","#3C56A3"],
    achievementsModifier : ["#548BAA","#3C8BA3"],
    paradisePlansAppBar : ["#A4CFA4","#4E6848"],
    highlightNonCustomizableItems : ["#8DAFEE6B","#7688C04B"],
    highlightTurnipDay : ["#A1B9E66B","#1942647C"],
    okButton : ["#5AA7E6","#2B719C"],
    okButton2 : ["#4C9B5D","#337A32"],
    okButton3 : ["#61A899","#338585"],
    okButton4 : ["#61A876","#336E85"],
    okButtonFaint : ["#99cbf2","#1B5B83"],
    dateButton : ["#81c784","#519657"],
    cancelButton : ["#E96D6D","#A0343D"],
    filtersResetButton : ["#ff8d7e","#e57373"],
    closedStore : ["#EBC2C2","#6D4B4B"],
    openStore : ["#B5E0B7","#3A613C"],
    closingSoonStore : ["#EAF1B2","#7E7949"],
    selectedProfile : ["#C2E4C3","#1C3D1E"],
    template : ["#","#"],
    creaturesLeavingBG : ["#F0D1D1","#4B3030"],
    itemBoxYellow : ["#b1b400","#ece739"],
    itemBoxBeige : ["#d9b600","#e3bf55"],
    itemBoxRed : ["#ff0000","#ff6c6c"],
    itemBoxBrown : ["#a77600","#d88f00"],
    itemBoxBlue : ["#006dff","#00b0ff"],
    itemBoxWhite : ["#A3A3A3","#FFFFFF"],
    itemBoxBlack : ["#000000","#414141"],
    itemBoxPink : ["#ff4ebb","#ff4ebb"],
    itemBoxGreen : ["#0bb600","#8bff00"],
    itemBoxGray : ["#3a3a3a","#7b7b7b"],
    itemBoxOrange : ["#ff9200","#ff9200"],
    itemBoxAqua : ["#00ffc7","#00ffc7"],
    itemBoxPurple : ["#8000ff","#c35bff"],
    itemBoxNone : ["#3a3a3a","#7b7b7b"],
    itemBoxColorful : ["#f000ff","#ff78f5"],
    itemBoxYellowDisplay : ["#ece739","#ece739"],
    itemBoxBeigeDisplay : ["#e3bf55","#e3bf55"],
    itemBoxRedDisplay : ["#ff6c6c","#ff6c6c"],
    itemBoxBrownDisplay : ["#A17B23","#A17B23"],
    itemBoxBlueDisplay : ["#006dff","#006dff"],
    itemBoxWhiteDisplay : ["#FFFFFF","#FFFFFF"],
    itemBoxBlackDisplay : ["#000000","#000000"],
    itemBoxPinkDisplay : ["#ff4ebb","#ff4ebb"],
    itemBoxGreenDisplay : ["#0bb600","#0bb600"],
    itemBoxGrayDisplay : ["#7b7b7b","#7b7b7b"],
    itemBoxOrangeDisplay : ["#FFBB00","#FFBB00"],
    itemBoxAquaDisplay : ["#94FFE8","#94FFE8"],
    itemBoxPurpleDisplay : ["#c35bff","#c35bff"],
    itemBoxNoneDisplay : ["#3a3a3a","#3a3a3a"],
    itemBoxColorfulDisplay : ["#3a3a3a","#3a3a3a"],
    "villagerOutlineGet Along" : ["#A3F09EAF","#A3F09EA2"],
    "villagerOutlineNeutral" : ["#E6EC9083","#E6EC9083"],
    "villagerOutlineOccasionally" : ["#FFC57AAD","#FFC57AAD"],
    "villagerOutlineConflict" : ["#FF9090A6","#FF9090A6"],
    missingVariations : ["#E4DD1ADE","#D8D22BB6"],
    allVariations : ["#6BC055DE","#55B428B6"],
    loanProgress : ["#D0EEFF","#253041"],
    toolProgress : ["#EAD0FF","#422C4D"],
    starProgress : ["#FDEBB3","#464023"],
    popupDanger : ["#AF5858","#A86B6B"],
    popupSuccess : ["#60A860","#51914B"],
    popupNeutral : ["#DFDFDF","#383838"],
    purchaseSuccess : ["#C2E3FF","#336E85"],
  }
module.exports = colors;