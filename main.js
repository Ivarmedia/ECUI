var ECUI;

//import('./ECUI.js').then((ECUIModule) => {
  import('https://raw.githubusercontent.com/Ivarmedia/ECUI/main/ECUI.js').then((ECUIModule) => {
    var element = document.querySelector(".here");
    ECUI = new ECUIModule.ECUI(element, null);
  }).catch((error) => {
    console.error('Module import failed:', error);
  });