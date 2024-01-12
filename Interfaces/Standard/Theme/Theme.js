import * as Utils from "../../../Module/Utils.js";
import * as Rules from "./Rules.js";
import * as Default from "../Default/Default.js"

export class Theme {

    ECUI;
    classes;
    colours;
    fonts;
    backgroundImg;
    spinnerLogo;
    header;

    constructor(theme, global) {
        this.ECUI = global;

        this.classes = {};
        this.colours = {};
        this.fonts = {};
        
        if(!Utils.isNullOrEmpty(theme.backgroundImg)) {
            this.setBackgroundImg(theme.backgroundImg);
        } else {
            this.removeBackgroundImg();
        }

        if(!Utils.isNullOrEmpty(theme.backgroundOpacity) ) {
            this.setBackgroundOpacity(theme.backgroundOpacity);
        }

        if(!Utils.isNullOrEmpty(theme.spinnerLogo) ) {
            this.setSpinnerLogo(theme.spinnerLogo);
        }

        if(theme.colours == null) {
            theme.colours = Default.getDefaultColours();
        }

        if(theme.fonts == null) {
            theme.fonts = Default.getDefaultFonts();
        }

        this.setBackgroundColour(theme.colours.background);
        this.setFontSize(theme.fonts.fontSize);
        this.setPrimaryFont(theme.fonts.primaryFont);
        this.setPrimaryFontWeight(theme.fonts.primaryFontWeight);
        this.setPrimaryFontSeparation(theme.fonts.primaryFontSeparation);
        this.setSecondaryFont(theme.fonts.secondaryFont);
        this.setSecondaryFontWeight(theme.fonts.secondaryFontWeight);
        this.setSecondaryFontSeparation(theme.fonts.secondaryFontSeparation);
        this.setHeaderPrimaryFont(theme.fonts.headerPrimaryFont);
        this.setHeaderPrimaryFontWeight(theme.fonts.headerPrimaryFontWeight);
        this.setHeaderPrimaryFontSeparation(theme.fonts.headerPrimaryFontSeparation);
        this.setHeaderSecondaryFont(theme.fonts.headerSecondaryFont);
        this.setHeaderSecondaryFontWeight(theme.fonts.headerSecondaryFontWeight);
        this.setHeaderSecondaryFontSeparation(theme.fonts.headerSecondaryFontSeparation);
        this.setSideNavFont(theme.fonts.headerPrimaryFont);
        this.setSideNavFontWeight(theme.fonts.headerPrimaryFontWeight);
        this.setSideNavFontSeparation(theme.fonts.headerPrimaryFontSeparation);
        this.setHeaderColour(theme.colours.header);
        this.setHeaderBorderColour(theme.colours.headerBorder);
        this.setHeaderShadowColour(theme.colours.headerShadow);
        this.setLogoPrimaryColour(theme.colours.logoPrimary);
        this.setLogoSecondaryColour(theme.colours.logoSecondary);
        this.setHeaderButtonsColour(theme.colours.headerButtons);
        this.setHeaderButtonsIconColour(theme.colours.headerButtonsIcon);
        this.setHeaderButtonsTextColour(theme.colours.headerButtonsText);
        this.setHeaderButtonsBorderColour(theme.colours.headerButtonsBorder);
        this.setHeaderButtonsShadowColour(theme.colours.headerButtonsShadow);
        this.setHeaderButtonsHoverColour(theme.colours.headerButtonsHover);
        this.setHeaderButtonsIconHoverColour(theme.colours.headerButtonsIconHover);
        this.setHeaderButtonsTextHoverColour(theme.colours.headerButtonsTextHover);
        this.setHeaderButtonsBorderHoverColour(theme.colours.headerButtonsBorderHover);
        this.setHeaderButtonsShadowHoverColour(theme.colours.headerButtonsShadowHover);
        this.setHeaderInputsColour(theme.colours.headerInputs);
        this.setHeaderInputsIconColour(theme.colours.headerInputsIcon);
        this.setHeaderInputsTextColour(theme.colours.headerInputsText);
        this.setHeaderInputsBorderColour(theme.colours.headerInputsBorder);
        this.setHeaderInputsShadowColour(theme.colours.headerInputsShadow);
        this.setHeaderInputsHoverColour(theme.colours.headerInputsHover);
        this.setHeaderInputsIconHoverColour(theme.colours.headerInputsIconHover);
        this.setHeaderInputsTextHoverColour(theme.colours.headerInputsTextHover);
        this.setHeaderInputsBorderHoverColour(theme.colours.headerInputsBorderHover);
        this.setHeaderInputsShadowHoverColour(theme.colours.headerInputsShadowHover);
        this.setHeaderProfileColour(theme.colours.headerProfile);
        this.setHeaderProfileTopLineColour(theme.colours.headerProfileTopLine);
        this.setHeaderProfileBottomLineColour(theme.colours.headerProfileBottomLine);
        this.setHeaderProfileIconColour(theme.colours.headerProfileIcon);
        this.setHeaderProfileBorderColour(theme.colours.headerProfileBorder);
        this.setHeaderProfileShadowColour(theme.colours.headerProfileShadow);
        this.setHeaderProfileHoverColour(theme.colours.headerProfileHover);
        this.setHeaderProfileTopLineHoverColour(theme.colours.headerProfileTopLineHover);
        this.setHeaderProfileBottomLineHoverColour(theme.colours.headerProfileBottomLineHover);
        this.setHeaderProfileIconHoverColour(theme.colours.headerProfileIconHover);
        this.setHeaderProfileBorderHoverColour(theme.colours.headerProfileBorderHover);
        this.setHeaderProfileShadowHoverColour(theme.colours.headerProfileShadowHover);
        this.setSideNavColour(theme.colours.sideNav);
        this.setSideNavBorderColour(theme.colours.sideNavBorder);
        this.setSideNavShadowColour(theme.colours.sideNavShadow);
        this.setSideNavScrollBarColour(theme.colours.sideNavScrollBar);
        this.setSideNavButtonsHoverColour(theme.colours.sideNavButtonsHover);
        this.setSideNavButtonsBorderHoverColour(theme.colours.sideNavButtonsBorderHover);
        this.setSideNavButtonsPrimaryIconsColour(theme.colours.sideNavButtonsPrimaryIcons);
        this.setSideNavButtonsSecondaryIconsColour(theme.colours.sideNavButtonsSecondaryIcons);
        this.setSideNavButtonsIconsBorder(theme.colours.sideNavButtonsIconsBorder);
        this.setSideNavButtonsText(theme.colours.sideNavButtonsText);
        this.setSideNavButtonsTextHover(theme.colours.sideNavButtonsTextHover);
        
    };

    createStyleSheet(cssRules) {
        this.removeStyleSheet();
        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Brand-Style";

        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Brand-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

    refreshStyleSheet() {
        var cssRules = Rules.getRules(this.classes, this.colours, this.fonts)
        this.createStyleSheet(cssRules);     
    }

    setBackgroundImg(url) {
        this.backgroundImg = url;
        if(this.ECUI.ECUI_Layout != null && this.ECUI.ECUI_Layout.background != null) {
            this.ECUI.ECUI_Layout.background.loadImg(url);
        }
    }

    removeBackgroundImg() {
        if(this.ECUI.ECUI_Layout != null && this.ECUI.ECUI_Layout.background != null) {
            this.ECUI.ECUI_Layout.background.removeImg();
        }
    }

    setBackgroundOpacity(opacity) {
        this.classes.backgroundOpacity = "ECUI-Brand-Style-Background-Opacity";
        this.colours.backgroundOpacity = opacity;
        this.refreshStyleSheet(); 
    }

    setFontSize(size) {
        this.classes.fontSize = "ECUI-Brand-Style-Font-Size";
        this.fonts.fontSize = size;
        this.refreshStyleSheet(); 
    }

    setPrimaryFont(font) {
        this.classes.primaryFont = "ECUI-Brand-Style-Primary-Font";
        this.fonts.primaryFont = font;
        this.refreshStyleSheet(); 
    }

    setPrimaryFontWeight(weight) {
        this.fonts.primaryFontWeight = weight;
        this.refreshStyleSheet(); 
    }

    setPrimaryFontSeparation(separation) {
        this.fonts.primaryFontSeparation = separation;
        this.refreshStyleSheet(); 
    }

    setSecondaryFont(font) {
        this.classes.secondaryFont = "ECUI-Brand-Style-Secondary-Font";
        this.fonts.secondaryFont = font;
        this.refreshStyleSheet(); 
    }

    setSecondaryFontWeight(weight) {
        this.fonts.secondaryFontWeight = weight;
        this.refreshStyleSheet(); 
    }

    setSecondaryFontSeparation(separation) {
        this.fonts.secondaryFontSeparation = separation;
        this.refreshStyleSheet(); 
    }

    setSpinnerLogo(url) {
        this.spinnerLogo = url;
        if(this.ECUI.ECUI_Layout != null && this.ECUI.ECUI_Layout.loader != null) {
            this.ECUI.ECUI_Layout.loader.setLoaderImg(url);
        }
    }

    setBackgroundColour(colour) {
        this.classes.background = "ECUI-Brand-Style-Background";
        this.colours.background = colour;
        this.refreshStyleSheet(); 
    }

    setHeaderPrimaryFont(font) {
        this.classes.headerPrimaryFont = "ECUI-Brand-Style-Header-Primary-Font";
        this.fonts.headerPrimaryFont = font;
        this.refreshStyleSheet(); 
    }

    setHeaderPrimaryFontWeight(weight) {
        this.fonts.headerPrimaryFontWeight = weight;
        this.refreshStyleSheet(); 
    }

    setHeaderPrimaryFontSeparation(separation) {
        this.fonts.headerPrimaryFontSeparation = separation;
        this.refreshStyleSheet(); 
    }

    setHeaderSecondaryFont(font) {
        this.classes.headerSecondaryFont = "ECUI-Brand-Style-Header-Secondary-Font";
        this.fonts.headerSecondaryFont = font;
        this.refreshStyleSheet(); 
    }

    setHeaderSecondaryFontWeight(weight) {
        this.fonts.headerSecondaryFontWeight = weight;
        this.refreshStyleSheet(); 
    }

    setHeaderSecondaryFontSeparation(separation) {
        this.fonts.headerSecondaryFontSeparation = separation;
        this.refreshStyleSheet(); 
    }

    setSideNavFont(font) {
        this.classes.sideNavFont = "ECUI-Brand-Style-Side-Nav-Font";
        this.fonts.sideNavFont = font;
        this.refreshStyleSheet(); 
    }

    setSideNavFontWeight(weight) {
        this.fonts.sideNavFontWeight = weight;
        this.refreshStyleSheet(); 
    }

    setSideNavFontSeparation(separation) {
        this.fonts.sideNavFontSeparation = separation;
        this.refreshStyleSheet(); 
    }

    setHeaderColour(colour) {
        this.classes.header = "ECUI-Brand-Style-Header";
        this.colours.header = colour;
        this.refreshStyleSheet();      
    }

    setHeaderBorderColour(colour) {
        this.classes.headerBorder = "ECUI-Brand-Style-Header-Border";
        this.colours.headerBorder = colour;
        this.refreshStyleSheet();      
    }

    setHeaderShadowColour(colour) {
        this.classes.headerShadow = "ECUI-Brand-Style-Header-Shadow";
        this.colours.headerShadow = colour;
        this.refreshStyleSheet();      
    }

    setLogoPrimaryColour(colour) {
        this.classes.logoPrimary = "ECUI-Brand-Style-Logo-Primary";
        this.colours.logoPrimary = colour;
        this.refreshStyleSheet();
    }

    setLogoSecondaryColour(colour) {
        this.classes.logoSecondary = "ECUI-Brand-Style-Logo-Secondary";
        this.colours.logoSecondary = colour;
        this.refreshStyleSheet();
    }

    setHeaderButtonsColour(colour) {
        this.classes.headerButtons = "ECUI-Brand-Style-Header-Buttons";
        this.colours.headerButtons = colour;
        this.refreshStyleSheet();
    }

    setHeaderButtonsIconColour(colour) {
        this.classes.headerButtonsIcon = "ECUI-Brand-Style-Header-Buttons-Icon";
        this.colours.headerButtonsIcon = colour;
        this.refreshStyleSheet();
    }

    setHeaderButtonsTextColour(colour) {
        this.classes.headerButtonsText = "ECUI-Brand-Style-Header-Buttons-Text";
        this.colours.headerButtonsText = colour;
        this.refreshStyleSheet();
    }

    setHeaderButtonsBorderColour(colour) {
        this.classes.headerButtonsBorder = "ECUI-Brand-Style-Header-Buttons-Border";
        this.colours.headerButtonsBorder = colour;
        this.refreshStyleSheet();
    }

    setHeaderButtonsShadowColour(colour) {
        this.classes.headerButtonsShadow = "ECUI-Brand-Style-Header-Buttons-Shadow";
        this.colours.headerButtonsShadow = colour;
        this.refreshStyleSheet();
    }

    setHeaderButtonsHoverColour(colour) {
        this.classes.headerButtonsHover = "ECUI-Brand-Style-Header-Buttons-Hover";
        this.colours.headerButtonsHover = colour;
        this.refreshStyleSheet();
    }

    setHeaderButtonsIconHoverColour(colour) {
        this.classes.headerButtonsIconHover = "ECUI-Brand-Style-Header-Buttons-Icon-Hover";
        this.colours.headerButtonsIconHover = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderButtonsTextHoverColour(colour) {
        this.classes.headerButtonsTextHover = "ECUI-Brand-Style-Header-Buttons-Text-Hover";
        this.colours.headerButtonsTextHover = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderButtonsBorderHoverColour(colour) {
        this.classes.headerButtonsBorderHover = "ECUI-Brand-Style-Header-Buttons-Border-Hover";
        this.colours.headerButtonsBorderHover = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderButtonsShadowHoverColour(colour) {
        this.classes.headerButtonsShadowHover = "ECUI-Brand-Style-Header-Buttons-Shadow-Hover";
        this.colours.headerButtonsShadowHover = colour;
        this.refreshStyleSheet();
    }

    setHeaderInputsColour(colour) {
        this.classes.headerInputs = "ECUI-Brand-Style-Header-Inputs";
        this.colours.headerInputs = colour;
        this.refreshStyleSheet();
    }

    setHeaderInputsIconColour(colour) {
        this.classes.headerInputsIcon = "ECUI-Brand-Style-Header-Inputs-Icon";
        this.colours.headerInputsIcon = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderInputsTextColour(colour) {
        this.classes.headerInputsText = "ECUI-Brand-Style-Header-Inputs-Text";
        this.colours.headerInputsText = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderInputsBorderColour(colour) {
        this.classes.headerInputsBorder = "ECUI-Brand-Style-Header-Inputs-Border";
        this.colours.headerInputsBorder = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderInputsShadowColour(colour) {
        this.classes.headerInputsShadow = "ECUI-Brand-Style-Header-Inputs-Shadow";
        this.colours.headerInputsShadow = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderInputsHoverColour(colour) {
        this.classes.headerInputsHover = "ECUI-Brand-Style-Header-Inputs-Hover";
        this.colours.headerInputsHover = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderInputsIconHoverColour(colour) {
        this.classes.headerInputsIconHover = "ECUI-Brand-Style-Header-Inputs-Icon-Hover";
        this.colours.headerInputsIconHover = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderInputsTextHoverColour(colour) {
        this.classes.headerInputsTextHover = "ECUI-Brand-Style-Header-Inputs-Text-Hover";
        this.colours.headerInputsTextHover = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderInputsBorderHoverColour(colour) {
        this.classes.headerInputsBorderHover = "ECUI-Brand-Style-Header-Inputs-Border-Hover";
        this.colours.headerInputsBorderHover = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderInputsShadowHoverColour(colour) {
        this.classes.headerInputsShadowHover = "ECUI-Brand-Style-Header-Inputs-Shadow-Hover";
        this.colours.headerInputsShadowHover = colour;
        this.refreshStyleSheet();
    }

    setHeaderProfileColour(colour) {
        this.classes.headerProfile = "ECUI-Brand-Style-Header-Profile";
        this.colours.headerProfile = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderProfileTopLineColour(colour) {
        this.classes.headerProfileTopLine = "ECUI-Brand-Style-Header-Profile-Top-Line";
        this.colours.headerProfileTopLine = colour;
        this.refreshStyleSheet();
    }

    setHeaderProfileBottomLineColour(colour) {
        this.classes.headerProfileBottomLine = "ECUI-Brand-Style-Header-Profile-Bottom-Line";
        this.colours.headerProfileBottomLine = colour;
        this.refreshStyleSheet();
    }

    setHeaderProfileIconColour(colour) {
        this.classes.headerProfileIcon = "ECUI-Brand-Style-Header-Profile-Icon";
        this.colours.headerProfileIcon = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderProfileBorderColour(colour) {
        this.classes.headerProfileBorder = "ECUI-Brand-Style-Header-Profile-Border";
        this.colours.headerProfileBorder = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderProfileShadowColour(colour) {
        this.classes.headerProfileShadow = "ECUI-Brand-Style-Header-Profile-Shadow";
        this.colours.headerProfileShadow = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderProfileHoverColour(colour) {
        this.classes.headerProfileHover = "ECUI-Brand-Style-Header-Profile-Hover";
        this.colours.headerProfileHover = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderProfileTopLineHoverColour(colour) {
        this.classes.headerProfileTopLineHover = "ECUI-Brand-Style-Header-Profile-Top-Line-Hover";
        this.colours.headerProfileTopLineHover = colour;
        this.refreshStyleSheet();
    }

    setHeaderProfileBottomLineHoverColour(colour) {
        this.classes.headerProfileBottomLineHover = "ECUI-Brand-Style-Header-Profile-Bottom-Line-Hover";
        this.colours.headerProfileBottomLineHover = colour;
        this.refreshStyleSheet();
    }

    setHeaderProfileIconHoverColour(colour) {
        this.classes.headerProfileIconHover = "ECUI-Brand-Style-Header-Profile-Icon-Hover";
        this.colours.headerProfileIconHover = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderProfileBorderHoverColour(colour) {
        this.classes.headerProfileBorderHover = "ECUI-Brand-Style-Header-Profile-Border-Hover";
        this.colours.headerProfileBorderHover = colour;
        this.refreshStyleSheet();
    }
    
    setHeaderProfileShadowHoverColour(colour) {
        this.classes.headerProfileShadowHover = "ECUI-Brand-Style-Header-Profile-Shadow-Hover";
        this.colours.headerProfileShadowHover = colour;
        this.refreshStyleSheet();
    }
    
    setSideNavColour(colour) {
        this.classes.sideNav = "ECUI-Brand-Style-Side-Nav";
        this.colours.sideNav = colour;
        this.refreshStyleSheet();      
    }

    setSideNavBorderColour(colour) {
        this.classes.sideNavBorder = "ECUI-Brand-Style-Side-Nav-Border";
        this.colours.sideNavBorder = colour;
        this.refreshStyleSheet();      
    }

    setSideNavShadowColour(colour) {
        this.classes.sideNavShadow = "ECUI-Brand-Style-Side-Nav-Shadow";
        this.colours.sideNavShadow = colour;
        this.refreshStyleSheet();      
    }

    setSideNavScrollBarColour(colour) {
        this.classes.sideNavScrollBar = "ECUI-Brand-Style-Side-Nav-Scroll-Bar";
        this.colours.sideNavScrollBar = colour;
        this.refreshStyleSheet(); 
    }

    setSideNavButtonsHoverColour(colour) {
        this.classes.sideNavButtonsHover = "ECUI-Brand-Style-Side-Nav-Button-Hover";
        this.colours.sideNavButtonsHover = colour;
        this.refreshStyleSheet();  
    }

    setSideNavButtonsBorderHoverColour(colour) {
        this.classes.sideNavButtonsBorderHover = "ECUI-Brand-Style-Side-Nav-Button-Border-Hover";
        this.colours.sideNavButtonsBorderHover = colour;
        this.refreshStyleSheet(); 
    }

    setSideNavButtonsPrimaryIconsColour(colour) {
        this.classes.sideNavButtonsPrimaryIcons = "ECUI-Brand-Style-Side-Nav-Button-Primary-Icon";
        this.colours.sideNavButtonsPrimaryIcons = colour;
        this.refreshStyleSheet(); 
    }

    setSideNavButtonsSecondaryIconsColour(colour) {
        this.classes.sideNavButtonsSecondaryIcons = "ECUI-Brand-Style-Side-Nav-Button-Secondary-Icon";
        this.colours.sideNavButtonsSecondaryIcons = colour;
        this.refreshStyleSheet(); 
    }

    setSideNavButtonsIconsBorder(colour) {
        this.classes.sideNavButtonsIconsBorder = "ECUI-Brand-Style-Side-Nav-Button-Icon-Border";
        this.colours.sideNavButtonsIconsBorder = colour;
        this.refreshStyleSheet(); 
    }

    setSideNavButtonsText(colour) {
        this.classes.sideNavButtonsText = "ECUI-Brand-Style-Side-Nav-Button-Text";
        this.colours.sideNavButtonsText = colour;
        this.refreshStyleSheet(); 
    }

    setSideNavButtonsTextHover(colour) {
        this.classes.sideNavButtonsTextHover = "ECUI-Brand-Style-Side-Nav-Button-Text-Hover";
        this.colours.sideNavButtonsTextHover = colour;
        this.refreshStyleSheet(); 
    }









    setPanelsColours(colour) {
        this.classes.panel = "ECUI-Brand-Style-Panel";
        this.colours.panel = colour;
        var border = Utils.sustractColourLightness(colour, 12);
        this.setPanelBordersColour(border);
        var head = Utils.sustractColourLightness(colour, 6);
        this.setPanelHeadColour(head);
        var frame = Utils.sustractColourLightness(colour, 6);
        this.setFrameColour(frame);
        this.setFrameBorderColour(border);
        this.setPrimaryLogoColour(colour);
        this.refreshStyleSheet(); 
    }

}
