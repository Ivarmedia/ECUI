var ECUI;
var Theme = 1;
var Themes;
var Panels;
var interval;

initECUI();

function initECUI() {
  import('../ECUI.js').then((ECUIModule) => {
    var element = document.querySelector(".here");
    ECUI = new ECUIModule.ECUI(element, null);
    importExamples();
  }).catch((error) => {
    console.error('Module import failed:', error);
  });
}

function importExamples() {
  import('./Themes/Themes.js').then((ExampleThemes) => {
    Themes = ExampleThemes;
    import('./Panels/Panels.js').then((ExamplePanels) => {
      Panels = ExamplePanels;
      ECUI.removeLoader();
      getDefaultExample();
      //getBrightExample();
    }).catch((error) => {
      console.error('Themes import failed:', error);
    });
  }).catch((error) => {
      console.error('Themes import failed:', error);
  });
}

function getDefaultExample() {
  ECUI.buildTheme(Themes.getTheme("default"));
  var defaultPanels = [];
  defaultPanels.push(Panels.getPanel("default", "header"));
  defaultPanels.push(Panels.getPanel("default", "sideNav"))
  ECUI.loadPanels(defaultPanels);
}

function getFexillonExample() {
  ECUI.buildTheme(Themes.getTheme("fexillon"));
  var fexillonPanels = [];
  fexillonPanels.push(Panels.getPanel("fexillon", "header"));
  ECUI.loadPanels(fexillonPanels);
}

function getBrightExample() {
  ECUI.buildTheme(Themes.getTheme("bright"));
  var brightPanels = [];
  brightPanels.push(Panels.getPanel("bright", "header"));
  ECUI.loadPanels(brightPanels);
}

function getTeamsExample() {
  ECUI.buildTheme(Themes.getTheme("teams"));
  var teamsPanels = [];
  teamsPanels.push(Panels.getPanel("teams", "header"));
  ECUI.loadPanels(teamsPanels);
}
