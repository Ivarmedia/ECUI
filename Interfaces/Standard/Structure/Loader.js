import * as Utils from "../../../Module/Utils.js";

export class Loader {

    screen;
    logoContainer;
    logo;
    classes;

    constructor(structure, theme) {
        this.classes = theme.classes;

        this.buildCss();

        this.screen = document.createElement("div");
        this.screen.className = "ECUI-General-Loader-Container";

        var spinnerContainer = document.createElement("div");
        spinnerContainer.className = "ECUI-General-Loader";

        var spinnerBackground = document.createElement("div");
        spinnerBackground.className = "ECUI-General-Loader-Background";

        var spinnerPath = document.createElement("div");
        spinnerPath.className = "ECUI-General-Loader-Background-Path";
        spinnerBackground.appendChild(spinnerPath);

        var spinnerOutShadow = document.createElement("div");
        spinnerOutShadow.className = "ECUI-General-Loader-Background-Out-Shadow";
        spinnerBackground.appendChild(spinnerOutShadow);

        var spinnerInShadow = document.createElement("div");
        spinnerInShadow.className = "ECUI-General-Loader-Background-In-Shadow";
        spinnerBackground.appendChild(spinnerInShadow);

        spinnerContainer.appendChild(spinnerBackground);

        var spinner = document.createElement("div");
        spinner.className = "ECUI-General-Loader-spinner";

        for(var i=0; i<3; i++) {
            var spinnerRing = document.createElement("div");
            spinnerRing.className = `${this.classes.spinner} ECUI-General-Loader-spinner-ring`;
            spinner.appendChild(spinnerRing);
        }

        spinnerContainer.appendChild(spinner);
        
        this.logoContainer = document.createElement("div");
        this.logoContainer.className = "ECUI-General-Loader-Logo-Container";
        spinnerContainer.appendChild(this.logoContainer);
        this.setLoaderImg(theme.spinnerLogo);

        this.screen.appendChild(spinnerContainer);
        structure.appendChild(this.screen);
    }

    setLoaderImg(url) {
        if(this.logo) {
            this.logo.remove();
        }

        if(!Utils.isNullOrEmpty(url)) {
            this.logo = document.createElement("img");
            this.logo.className = "ECUI-General-Loader-Logo-Img";
            this.logo.src = url;
        } else {
            this.logo = document.createElement("div");
            this.logo.className = "ECUI-General-Loader-Logo";

            this.logo.innerHTML = `<svg class="ECUI-General-Loader-Logo-Lines" x="0px" y="0px" viewBox="0 0 400 400" xml:space="preserve"> <line class="${this.classes.secondarySpinnerLogoLines} ECUI-General-Loader-Logo-Line-First" x1="156.9" y1="84.6" x2="390" y2="84.6"/> <polyline class="${this.classes.secondarySpinnerLogoLines} ECUI-General-Loader-Logo-Line-Second" points="345.3,212.2 92.7,212.2 92.7,343.2 390,343.2 "/> </svg> <div class="ECUI-General-Loader-Logo-Squares-Container"> <svg class="${this.classes.primarySpinnerLogo} ECUI-General-Loader-Logo-Square"  viewBox="0 0 400 400"><rect width="400" height="400"/></svg> <svg class="${this.classes.primarySpinnerLogo} ECUI-General-Loader-Logo-Square"  viewBox="0 0 400 400"><rect width="400" height="400"/></svg> </div> `;
        }

        this.logoContainer.appendChild(this.logo);
    }

    display() {
        this.screen.style.display = "flex";
    }

    remove() {
        this.screen.style.display = "none";
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Loader-Style";
    
        var cssRules = `
            .ECUI-General-Loader-Container { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; display: flex; flex-direction: row; justify-content: center; align-items: center }
            .ECUI-General-Loader { width: 140px; height: 140px; position: relative; opacity: 0; animation: generalSpinner 1s forwards; animation-delay: 0.3s; }
            .ECUI-General-Loader-Background { width: 140px; height: 140px; position: absolute }
            .ECUI-General-Loader-Background-Path { width: 140px; height: 140px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: 50%; border: solid 10px #00000012; }
            .ECUI-General-Loader-Background-Out-Shadow { width: 140px; height: 140px; position: absolute; border-radius: 50%; box-shadow: inset 0px 0px 10px #0000000f; }
            .ECUI-General-Loader-Background-In-Shadow { width: 120px; height: 120px; position: absolute; border-radius: 50%; left: 50%; top: 50%; transform: translate(-50%, -50%); box-shadow: 0px 0px 10px #0000000f; }
            .ECUI-General-Loader-spinner { width: 140px; height: 140px; position: absolute; display: inline-block; filter: blur(0.5px); }
            .ECUI-General-Loader-spinner-ring { position: absolute; margin: 3px; width: 134px; height: 134px; border-radius: 50%; border-style: solid; border-width: 5px; border-bottom-color: transparent!important; border-left-color: transparent!important; border-right-color: transparent!important; animation: generalSpinnerRing 1.2s linear infinite; }
            .ECUI-General-Loader-spinner .ECUI-General-Loader-spinner-ring:nth-child(1) { animation-delay: 0.15s; }
            .ECUI-General-Loader-spinner .ECUI-General-Loader-spinner-ring:nth-child(2) { animation-delay: 0.3s; }
            .ECUI-General-Loader-Logo-Container { width: 100%; height: 100%; position: relative; display: flex; flex-direction: row; justify-content: center; align-items: center; }
            .ECUI-General-Loader-Logo { width: 56px; height: 56px; position: relative }
            .ECUI-General-Loader-Logo-Img { width: 76px; height: 56px; position: relative; object-fit: contain; }
            .ECUI-General-Loader-Logo-Lines { width: 56px; height: 56px; position: relative; filter: blur(0.2px); }
            .ECUI-General-Loader-Logo-Line-First { fill:none; stroke-width:64; stroke-dasharray: 300; stroke-dashoffset: 360; animation: generalSpinnerLogoFirstLine 6s linear infinite; animation-delay: 0.8s; }
            .ECUI-General-Loader-Logo-Line-Second { fill:none; stroke-width:64; stroke-dasharray: 800; stroke-dashoffset: -700; animation: generalSpinnerLogoSecondLine 6s linear infinite; animation-delay: 0.6s; }
            .ECUI-General-Loader-Logo-Squares-Container { width: 16.4px; height: 16.4px; position: absolute; top: 0px; left: 0px; filter: blur(0.2px); }
            .ECUI-General-Loader-Logo-Square:nth-child(1) { position: absolute; width: 7.4px; left: 0px; top: 0px; animation: generalSpinnerLogoSquare 6s linear infinite; transform: rotate(0deg) scale(0); animation-delay: 0.5s; }
            .ECUI-General-Loader-Logo-Square:nth-child(2) { position: absolute; width: 9px; right: 0px; bottom: 0px; animation: generalSpinnerLogoSquare 6s linear infinite; transform: rotate(0deg) scale(0); animation-delay: 0.6s; }
            @keyframes generalSpinner { 0% { opacity: 0; } 100% { opacity: 1; } }
            @keyframes generalSpinnerRing { 0% { transform: rotate(0deg); } 20% { transform: rotate(130deg) } 80% { transform: rotate(230deg) } 100% { transform: rotate(360deg); } }
            @keyframes generalSpinnerLogoSquare { 0% { transform: rotate(0deg) scale(0) } 5% { transform: rotate(135deg) scale(1.4) } 10% { transform: rotate(180deg) scale(1) } 70% { transform: rotate(180deg) scale(1) } 75% { transform: rotate(135deg) scale(1.4) }  80% { transform: rotate(0deg) scale(0) }  100% { transform: rotate(0deg) scale(0) } }
            @keyframes generalSpinnerLogoFirstLine { 0% { stroke-dashoffset: 360; } 5% { stroke-dashoffset: 600; } 65% { stroke-dashoffset: 600; } 70% { stroke-dashoffset: 900; } 100% { stroke-dashoffset: 900; }}
            @keyframes generalSpinnerLogoSecondLine { 0% { stroke-dashoffset: -700; } 5% { stroke-dashoffset: 0; } 70% { stroke-dashoffset: 0; } 75% { stroke-dashoffset: 800; } 100% { stroke-dashoffset: 800; }}
        `;
    
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }
    
        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Loader-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}