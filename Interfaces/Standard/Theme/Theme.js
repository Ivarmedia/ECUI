import * as Utils from "../../../Module/Utils.js";

export class Theme {

    ECUI;
    classes;
    colours;
    backgroundImg;
    spinnerLogo;
    font;

    constructor(theme, global) {
        this.ECUI = global;

        this.classes = {};
        this.colours = {};

        if(!Utils.isNullOrEmpty(theme.font) ) {
            this.setFont(theme.font);
        } else {
            this.setFont("sans-serif");
        }
        
        if(!Utils.isNullOrEmpty(theme.backgroundImg) ) {
            this.setBackgroundImg(theme.backgroundImg);
        }

        if(!Utils.isNullOrEmpty(theme.spinnerLogo) ) {
            this.setSpinnerLogo(theme.spinnerLogo);
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.backgroundOpacity) ) {
            this.setBackgroundOpacity(theme.colours.backgroundOpacity);
        } else {
            this.setBackgroundOpacity(0.05);
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.header) ) {
            this.setHeaderColour(theme.colours.header);
        } else {
            this.setHeaderColour("hsl(210.69deg 70.73% 51.76%)");
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.background) ) {
            this.setBackgroundColour(theme.colours.background);
        } else {
            this.setBackgroundColour("hsl(220deg 24.59% 11.96%)");
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.panel) ) {
            this.setPanelsColours(theme.colours.panel);
        } else {
            this.setPanelsColours("hsl(225deg 25.45% 21.57%)");
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.border) ) {
            this.setPanelBordersColour(theme.colours.border);
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.panelHead) ) {
            this.setPanelHeadColour(theme.colours.panelHead);
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.frame) ) {
            this.setFrameColour(theme.colours.frame);
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.frameContrast) ) {
            this.setFrameContrastColour(theme.colours.frameContrast);
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.frameBorder) ) {
            this.setFrameBorderColour(theme.colours.frameBorder);
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.frameHover) ) {
            this.setFrameHoverColour(theme.colours.frameHover);
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.buttonHover) ) {
            this.setButtonHoverColour(theme.colours.buttonHover);
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.primaryLogo)) {
            this.setPrimaryLogoColour(theme.colours.primaryLogo);
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.primaryIcon) ) {
            this.setPrimaryIconColour(theme.colours.primaryIcon);
            if(!Utils.isNullOrEmpty(theme.colours.secondaryIcon)) {
                this.setSecondaryIconColour(theme.colours.secondaryIcon);
            }
            if(!Utils.isNullOrEmpty(theme.colours.spinner)) {
                this.setSpinnerColour(theme.colours.spinner);
            }
            if(!Utils.isNullOrEmpty(theme.colours.primarySpinnerLogo)) {
                this.setPrimarySpinnerLogoColour(theme.colours.primarySpinnerLogo);
            }
        } else {
            this.setPrimaryIconColour("hsl(210.69deg 70.73% 51.76%)");
            this.setSecondaryIconColour("hsl(223.64deg 29.73% 85.49%)");
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.primaryText) ) {
            this.setPrimaryTextColour(theme.colours.primarytext);
            if(!Utils.isNullOrEmpty(theme.colours.secondarytext)) {
                this.setSecondaryTextColour(theme.colours.secondaryText);
            }
        } else {
            this.setPrimaryTextColour("hsl(223.64deg 29.73% 85.49%)");
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.secondaryLogo)) {
            this.setSecondaryLogoColour(theme.colours.secondaryLogo);
        } else {
            this.setSecondaryLogoColour("hsl(0deg 0% 100%)");
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.secondarySpinnerLogo)) {
            this.setSecondarySpinnerLogoColour(theme.colours.secondarySpinnerLogo);
        } else {
            this.setSecondarySpinnerLogoColour("hsl(0deg 0% 100%)");
        }

        if(theme.colours != null && !Utils.isNullOrEmpty(theme.colours.hover) ) {
            this.setHoverColour(theme.colours.hover);
        } else {
            this.setHoverColour("hsl(210.69deg 70.73% 51.76%)");
        }

    };

    createStyleSheet(cssRules) {
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
        this.removeStyleSheet();

        var cssRules = `
            body {
                font-family: ${this.font};
            }
            .${this.classes.header} {
                background-color: ${this.colours.header};
            }
            .${this.classes.background} {
                background-color: ${this.colours.background};
            }
            .${this.classes.panel} {
                background-color: ${this.colours.panel};
            }
            .${this.classes.border} {
                border-color: ${this.colours.border};
            }
            .${this.classes.panelHead} {
                background-color: ${this.colours.panelHead};
            }
            .${this.classes.frame} {
                background-color: ${this.colours.frame};
            }
            .${this.classes.frameContrast} {
                background-color: ${this.colours.frameContrast};
            }
            .${this.classes.frameBorder} {
                border-color: ${this.colours.frameBorder};
            }
            .${this.classes.frameHover}:hover {
                background-color: ${this.colours.frameHover};
            }
            .${this.classes.primaryIcon} {
                fill: ${this.colours.primaryIcon};
            }
            .${this.classes.secondaryIcon} {
                fill: ${this.colours.secondaryIcon};
            }
            .${this.classes.spinner} {
                border-color: ${this.colours.spinner};
            }
            .${this.classes.primaryLogo} {
                fill: ${this.colours.primaryLogo};
            }
            .${this.classes.secondaryLogo} {
                fill: ${this.colours.secondaryLogo};
            }
            .${this.classes.primarySpinnerLogo} {
                fill: ${this.colours.primarySpinnerLogo};
            }
            .${this.classes.secondarySpinnerLogo} {
                fill: ${this.colours.secondarySpinnerLogo};
            }
            .${this.classes.secondarySpinnerLogoLines} {
                stroke: ${this.colours.secondarySpinnerLogoLines};
            }
            .${this.classes.primaryText} {
                color: ${this.colours.primaryText};
            }
            .${this.classes.secondaryText} {
                color: ${this.colours.secondaryText};
            }
            .ECUI-Selectable-Object:hover .${this.classes.hover} {
                background-color: ${this.colours.hover};
            }
            .ECUI-Selectable-Object:focus .${this.classes.hover} {
                background-color: ${this.colours.hover};
            }
            .${this.classes.buttonHover}:hover {
                background-color: ${this.colours.buttonHover};
            }
            .${this.classes.buttonHover}:focus {
                background-color: ${this.colours.buttonHover};
            }
            .${this.classes.opacity} {
                opacity: ${this.colours.opacity};
            }
        `;

        this.createStyleSheet(cssRules);     
    }

    setFont(font) {
        this.font = font;
        this.refreshStyleSheet(); 
    }

    setBackgroundImg(url) {
        this.backgroundImg = url;
        if(this.ECUI.layout != null && this.ECUI.layout.background != null) {
            this.ECUI.layout.background.loadImg(url);
        }
    }

    setSpinnerLogo(url) {
        this.spinnerLogo = url;
        if(this.ECUI.layout != null && this.ECUI.layout.loader != null) {
            this.ECUI.layout.loader.setLoaderImg(url);
        }
    }

    setHeaderColour(colour) {
        this.classes.header = "ECUI-Brand-Style-Header";
        this.colours.header = colour;
        this.refreshStyleSheet();      
    }

    setBackgroundColour(colour) {
        this.classes.background = "ECUI-Brand-Style-Background";
        this.colours.background = colour;
        this.refreshStyleSheet(); 
    }

    setPanelsColours(colour) {
        this.classes.panel = "ECUI-Brand-Style-Panel";
        this.colours.panel = colour;
        var border = Utils.sustractColourLightness(colour, 12);
        this.setPanelBordersColour(border);
        var head = Utils.sustractColourLightness(colour, 6);
        this.setPanelHeadColour(head);
        var hover = Utils.sustractColourLightness(colour, 2);
        this.setButtonHoverColour(hover);
        var frame = Utils.sustractColourLightness(colour, 6);
        this.setFrameColour(frame);
        this.setFrameBorderColour(border);
        this.setPrimaryLogoColour(colour);
        this.refreshStyleSheet(); 
    }

    setPanelBordersColour(colour) {
        this.classes.border = "ECUI-Brand-Style-Border";
        this.colours.border = colour;
        this.refreshStyleSheet(); 
    }

    setPanelHeadColour(colour) {
        this.classes.panelHead = "ECUI-Brand-Style-Panel-Head";
        this.colours.panelHead = colour;
        this.refreshStyleSheet();
    }

    setFrameColour(colour) {
        this.classes.frame = "ECUI-Brand-Style-Frame";
        this.colours.frame = colour;
        var contrast = Utils.sustractColourLightness(colour, 2);
        this.setFrameContrastColour(contrast);
        var hover = Utils.sustractColourLightness(colour, -4);
        this.setFrameHoverColour(hover);
        this.refreshStyleSheet();
    }

    setFrameContrastColour(colour) {
        this.classes.frameContrast = "ECUI-Brand-Style-Frame-Contrast";
        this.colours.frameContrast = colour;
        this.refreshStyleSheet();
    }

    setFrameHoverColour(colour) {
        this.classes.frameHover = "ECUI-Brand-Style-Frame-Hover";
        this.colours.frameHover = colour;
        this.refreshStyleSheet();
    }

    setFrameBorderColour(colour) {
        this.classes.frameBorder = "ECUI-Brand-Style-Frame-Border";
        this.colours.frameBorder = colour;
        this.refreshStyleSheet();
    }

    setPrimaryIconColour(colour) {
        this.classes.primaryIcon = "ECUI-Brand-Style-Primary-Icon";
        this.colours.primaryIcon = colour;
        this.setSecondaryIconColour(colour);
        this.setSpinnerColour(colour);
        this.setPrimarySpinnerLogoColour(colour);
        this.refreshStyleSheet(); 
    }

    setSecondaryIconColour(colour) {
        this.classes.secondaryIcon = "ECUI-Brand-Style-Secondary-Icon";
        this.colours.secondaryIcon = colour;
        this.refreshStyleSheet(); 
    }

    setSpinnerColour(colour) {
        this.classes.spinner = "ECUI-Brand-Style-Spinner";
        this.colours.spinner = colour;
        this.refreshStyleSheet(); 
    }

    setPrimaryLogoColour(colour) {
        this.classes.primaryLogo = "ECUI-Brand-Style-Primary-Logo";
        this.colours.primaryLogo = colour;
        this.refreshStyleSheet(); 
    }

    setSecondaryLogoColour(colour) {
        this.classes.secondaryLogo = "ECUI-Brand-Style-Secondary-Logo";
        this.colours.secondaryLogo = colour;
        this.refreshStyleSheet(); 
    }

    setPrimarySpinnerLogoColour(colour) {
        this.classes.primarySpinnerLogo = "ECUI-Brand-Style-Spinner-Primary-Logo";
        this.colours.primarySpinnerLogo = colour;
        this.refreshStyleSheet(); 
    }

    setSecondarySpinnerLogoColour(colour) {
        this.classes.secondarySpinnerLogo = "ECUI-Brand-Style-Spinner-Secondary-Logo";
        this.colours.secondarySpinnerLogo = colour;
        this.classes.secondarySpinnerLogoLines = "ECUI-Brand-Style-Spinner-Secondary-Logo-Lines";
        this.colours.secondarySpinnerLogoLines = colour;
        this.refreshStyleSheet(); 
    }

    setPrimaryTextColour(colour) {
        this.classes.primaryText = "ECUI-Brand-Style-Primary-Text";
        this.colours.primaryText = colour;
        this.setSecondaryTextColour(colour)
        this.refreshStyleSheet(); 
    }

    setSecondaryTextColour(colour) {
        this.classes.secondaryText = "ECUI-Brand-Style-Secondary-Text";
        this.colours.secondaryText = colour;
        this.refreshStyleSheet(); 
    }

    setHoverColour(colour) {
        this.classes.hover = "ECUI-Brand-Style-Hover";
        this.colours.hover = colour;
        this.refreshStyleSheet(); 
    }

    setButtonHoverColour(colour) {
        this.classes.buttonHover = "ECUI-Brand-Style-Button-Hover";
        this.colours.buttonHover = colour;
        this.refreshStyleSheet(); 
    }

    setBackgroundOpacity(opacity) {
        this.classes.opacity = "ECUI-Brand-Style-Background-Opacity";
        this.colours.opacity = opacity;
        this.refreshStyleSheet(); 
    }


}
