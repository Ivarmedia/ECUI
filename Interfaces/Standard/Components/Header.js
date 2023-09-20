import * as Utils from "../../../Module/Utils.js";

export class Header {

    ECUI;
    id;
    component;
    element;
    logoContainer;
    logo;
    secondaryLogoContainer;
    secondaryLogo;
    classes;

    constructor(global, headerInfo) {
        this.ECUI = global;
        this.component = "header";
        this.buildCss();

        if(headerInfo != null && !Utils.isNullOrEmpty(headerInfo.id)) {
            this.id = headerInfo.id;
        } else {
            this.id = "header";
        }

        this.element = document.createElement("div");
        this.element.className = `${this.ECUI.theme.classes.header} ECUI-Panel-Header-Component`;

        var leftContainer = document.createElement("div");
        leftContainer.className = "ECUI-Panel-Header-Left";

        this.logoContainer = document.createElement("button");
        this.logoContainer.className = "ECUI-Panel-Header-Logo-Container";

        leftContainer.appendChild(this.logoContainer);
        this.element.appendChild(leftContainer);

        var centerContainer = document.createElement("div");
        centerContainer.className = "ECUI-Panel-Header-Center";
        this.element.appendChild(centerContainer);

        var rightContainer = document.createElement("div");
        rightContainer.className = "ECUI-Panel-Header-Right";

        this.secondaryLogoContainer = document.createElement("a");
        this.secondaryLogoContainer.className = "ECUI-Panel-Header-Secondary-Logo-Container";

        rightContainer.appendChild(this.secondaryLogoContainer);
        this.element.appendChild(rightContainer);

        if(headerInfo != null && !Utils.isNullOrEmpty(headerInfo.logo)) {
            this.loadLogo(headerInfo.logo);
        } else {
            this.loadLogo();
        }
        
    }

    loadLogo(url) {
        this.removeLogos();

        if(!Utils.isNullOrEmpty(url)) {
            this.logo = document.createElement("img");
            this.logo.className = "ECUI-Panel-Header-Logo";
            this.logo.src = url;
            this.logoContainer.appendChild(this.logo);

            this.secondaryLogoContainer.innerHTML = `
                <svg class="ECUI-Panel-Header-Secondary-Logo" x="0px" y="0px" viewBox="0 0 800 73.6" xml:space="preserve">
                    <path class="${this.ECUI.theme.classes.secondaryLogo}" d="M262.8,33.5c-12.2-1.2-20.7-1.2-20.7-6.7c0-5.5,10.3-7.3,18.3-6.7c9.7,0,18.3,2.4,24.9,7.3l7.9-9.7 c-7.9-6.1-19.5-9.1-32.2-9.1c-18.9,0-32.2,6.7-32.2,19.5s16.4,17,33.5,18.3c13.4,1.2,19.5,2.4,19.5,7.9c0,4.9-6.1,7.3-18.9,7.3 c-12.2,0-21.9-3-29.8-10.3l-7.3,9.7c9.1,7.9,21.9,12.2,37.1,12.2c21.3,0,32.9-8.5,32.9-20.1C295.7,39.5,281.7,35.3,262.8,33.5z"/>
                    <path class="${this.ECUI.theme.classes.secondaryLogo}" d="M295.7,52.9L295.7,52.9L295.7,52.9z"/>
                    <path class="${this.ECUI.theme.classes.secondaryLogo}" d="M396,10.3h-15.2l-32.2,60.8h14.6l6.7-12.8h36.5l6.7,12.8h15.2L396,10.3z M376,46.8l12.8-24.9l12.8,24.9 C401.5,46.8,376,46.8,376,46.8z"/>
                    <polygon class="${this.ECUI.theme.classes.secondaryLogo}" points="370.5,10.3 299.3,10.3 299.3,22.5 325.5,22.5 325.5,71.2 339.5,71.2 339.5,22.5 364.4,22.5 		"/>
                    <path class="${this.ECUI.theme.classes.secondaryLogo}" d="M176.4,10.3l-32.2,60.8h14.6l6.7-12.8H202l6.7,12.8h15.2l-32.2-60.8C191.6,10.3,176.4,10.3,176.4,10.3z M171,46.8l12.8-24.9l12.8,24.9C196.5,46.8,171,46.8,171,46.8z"/>
                    <polygon class="${this.ECUI.theme.classes.secondaryLogo}" points="97.3,10.3 83.3,10.3 83.3,71.2 133.8,71.2 135.7,66.9 139.9,59 97.3,59 		"/>
                    <polygon class="${this.ECUI.theme.classes.secondaryLogo}" points="23.7,46.2 63.9,46.2 63.9,34.7 9.7,34.7 9.7,71.2 72.4,71.2 72.4,59.6 23.7,59.6 		"/>
                    <rect x="28" y="10.3" class="${this.ECUI.theme.classes.secondaryLogo}" width="43.8" height="11.6"/>
                    <polygon class="${this.ECUI.theme.classes.primaryLogo}" points="9.7,0 0,0 0,10.3 9.7,10.3 9.7,21.9 21.9,21.9 21.9,10.3 9.7,10.3 		"/>
                    <path class="${this.ECUI.theme.classes.primaryLogo}" d="M487.3,51.1c-4.3,6.7-11,9.7-20.1,9.7c-14.6,0-23.7-6.7-23.7-20.1s9.7-20.1,23.7-20.1c9.1,0,15.8,3,20.1,9.7 l12.8-6.1c-5.5-8.5-17-15.2-32.9-15.2c-23.7,0-38.3,12.2-38.3,32.2s14.6,32.2,37.7,32.2c15.8,0,27.4-6.7,33.5-15.8L487.3,51.1 L487.3,51.1z"/>
                    <path class="${this.ECUI.theme.classes.primaryLogo}" d="M702.7,41.4c0,12.2-7.3,19.5-20.1,19.5c-13.4,0-20.1-7.3-20.1-19.5v-31h-14v32.2c0,18.3,12.2,30.4,34.1,30.4 s34.1-12.2,34.1-30.4V10.3h-14V41.4z"/>
                    <path class="${this.ECUI.theme.classes.primaryLogo}" d="M762.3,10.3H730v60.8h32.2c23.1,0,37.7-11.6,37.7-30.4S785.4,10.3,762.3,10.3z M761.1,59h-17V21.9h17.6 c14.6,0,24.3,6.1,24.3,18.9C785.4,52.9,775.7,59,761.1,59z"/>
                    <path class="${this.ECUI.theme.classes.primaryLogo}" d="M600.5,8.5c-23.7,0-38.9,12.2-38.9,32.2S576.7,73,600.5,73s38.9-12.2,38.9-32.2 C638.8,20.1,624.2,8.5,600.5,8.5z M600.5,60.8c-15.2,0-24.3-7.3-24.3-20.1s9.7-20.1,24.3-20.1c15.2,0,24.3,7.3,24.3,20.1 S615.1,60.8,600.5,60.8z"/>
                    <path class="${this.ECUI.theme.classes.primaryLogo}" d="M556.7,59L556.7,59h-33.5V10.3h-14v60.8h57.2l0,0C561.5,67.5,558.5,63.9,556.7,59z"/>
                </svg>
            `;
            this.secondaryLogo = this.secondaryLogoContainer.querySelector(".ECUI-Panel-Header-Secondary-Logo");
        } else {
            this.logoContainer.innerHTML = `
                <svg class="ECUI-Panel-Header-Logo" x="0px" y="0px" viewBox="0 0 800 73.6" xml:space="preserve">
                    <path class="${this.ECUI.theme.classes.secondaryLogo}" d="M262.8,33.5c-12.2-1.2-20.7-1.2-20.7-6.7c0-5.5,10.3-7.3,18.3-6.7c9.7,0,18.3,2.4,24.9,7.3l7.9-9.7 c-7.9-6.1-19.5-9.1-32.2-9.1c-18.9,0-32.2,6.7-32.2,19.5s16.4,17,33.5,18.3c13.4,1.2,19.5,2.4,19.5,7.9c0,4.9-6.1,7.3-18.9,7.3 c-12.2,0-21.9-3-29.8-10.3l-7.3,9.7c9.1,7.9,21.9,12.2,37.1,12.2c21.3,0,32.9-8.5,32.9-20.1C295.7,39.5,281.7,35.3,262.8,33.5z"/>
                    <path class="${this.ECUI.theme.classes.secondaryLogo}" d="M295.7,52.9L295.7,52.9L295.7,52.9z"/>
                    <path class="${this.ECUI.theme.classes.secondaryLogo}" d="M396,10.3h-15.2l-32.2,60.8h14.6l6.7-12.8h36.5l6.7,12.8h15.2L396,10.3z M376,46.8l12.8-24.9l12.8,24.9 C401.5,46.8,376,46.8,376,46.8z"/>
                    <polygon class="${this.ECUI.theme.classes.secondaryLogo}" points="370.5,10.3 299.3,10.3 299.3,22.5 325.5,22.5 325.5,71.2 339.5,71.2 339.5,22.5 364.4,22.5 		"/>
                    <path class="${this.ECUI.theme.classes.secondaryLogo}" d="M176.4,10.3l-32.2,60.8h14.6l6.7-12.8H202l6.7,12.8h15.2l-32.2-60.8C191.6,10.3,176.4,10.3,176.4,10.3z M171,46.8l12.8-24.9l12.8,24.9C196.5,46.8,171,46.8,171,46.8z"/>
                    <polygon class="${this.ECUI.theme.classes.secondaryLogo}" points="97.3,10.3 83.3,10.3 83.3,71.2 133.8,71.2 135.7,66.9 139.9,59 97.3,59 		"/>
                    <polygon class="${this.ECUI.theme.classes.secondaryLogo}" points="23.7,46.2 63.9,46.2 63.9,34.7 9.7,34.7 9.7,71.2 72.4,71.2 72.4,59.6 23.7,59.6 		"/>
                    <rect x="28" y="10.3" class="${this.ECUI.theme.classes.secondaryLogo}" width="43.8" height="11.6"/>
                    <polygon class="${this.ECUI.theme.classes.primaryLogo}" points="9.7,0 0,0 0,10.3 9.7,10.3 9.7,21.9 21.9,21.9 21.9,10.3 9.7,10.3 		"/>
                    <path class="${this.ECUI.theme.classes.primaryLogo}" d="M487.3,51.1c-4.3,6.7-11,9.7-20.1,9.7c-14.6,0-23.7-6.7-23.7-20.1s9.7-20.1,23.7-20.1c9.1,0,15.8,3,20.1,9.7 l12.8-6.1c-5.5-8.5-17-15.2-32.9-15.2c-23.7,0-38.3,12.2-38.3,32.2s14.6,32.2,37.7,32.2c15.8,0,27.4-6.7,33.5-15.8L487.3,51.1 L487.3,51.1z"/>
                    <path class="${this.ECUI.theme.classes.primaryLogo}" d="M702.7,41.4c0,12.2-7.3,19.5-20.1,19.5c-13.4,0-20.1-7.3-20.1-19.5v-31h-14v32.2c0,18.3,12.2,30.4,34.1,30.4 s34.1-12.2,34.1-30.4V10.3h-14V41.4z"/>
                    <path class="${this.ECUI.theme.classes.primaryLogo}" d="M762.3,10.3H730v60.8h32.2c23.1,0,37.7-11.6,37.7-30.4S785.4,10.3,762.3,10.3z M761.1,59h-17V21.9h17.6 c14.6,0,24.3,6.1,24.3,18.9C785.4,52.9,775.7,59,761.1,59z"/>
                    <path class="${this.ECUI.theme.classes.primaryLogo}" d="M600.5,8.5c-23.7,0-38.9,12.2-38.9,32.2S576.7,73,600.5,73s38.9-12.2,38.9-32.2 C638.8,20.1,624.2,8.5,600.5,8.5z M600.5,60.8c-15.2,0-24.3-7.3-24.3-20.1s9.7-20.1,24.3-20.1c15.2,0,24.3,7.3,24.3,20.1 S615.1,60.8,600.5,60.8z"/>
                    <path class="${this.ECUI.theme.classes.primaryLogo}" d="M556.7,59L556.7,59h-33.5V10.3h-14v60.8h57.2l0,0C561.5,67.5,558.5,63.9,556.7,59z"/>
                </svg>
            `;
            this.logo = this.logoContainer.querySelector(".ECUI-Panel-Header-Logo");
        }
    }

    removeLogos() {
        if(this.logo) {
            this.logo.remove();
        }
        if(this.secondaryLogo) {
            this.secondaryLogo.remove();
        }
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Header-Style";

        var cssRules = `
            .ECUI-Panel-Header-Component { height: 25px; width: 100%; padding: 0 16px; display: flex; flex-direction: row; justify-content: space-between; align-items: center; }
            .ECUI-Panel-Header-Left { height: 11px; width: 200px; line-height: 0px; }
            .ECUI-Panel-Header-Logo-Container { background-color: transparent; height: 11px; border: none; outline: none; margin: 0px; padding: 0px; cursor: pointer; line-height: 0px; }
            .ECUI-Panel-Header-Logo { height: 11px; object-fit: contain; object-position: left; }
        `;   
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Header-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}