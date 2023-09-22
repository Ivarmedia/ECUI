import { Icon } from "./Icon.js";
import * as Utils from "../../../Module/Utils.js";

export class NavButton {

    id;
    component;
    element;
    ECUI;
    icon;
    text;
    img;
    reversed;

    constructor(global, navButtonInfo) {
        this.ECUI = global;
        this.id = navButtonInfo.id;
        this.component = "navButton";
        this.icon = navButtonInfo.icon;
        this.text = navButtonInfo.text;
        this.img = navButtonInfo.img;
        this.reversed = navButtonInfo.reversed;
        this.buildCss();

        this.element = document.createElement("button");
        this.element.className = `${this.ECUI.theme.classes.border} ${this.ECUI.theme.classes.buttonHover} ECUI-Selectable-Object ECUI-Panel-Nav-Button`;

        if(this.reversed && !Utils.isNullOrEmpty(navButtonInfo.text)) {
            var text = document.createElement("div");
            text.className = `${this.ECUI.theme.classes.primaryText} ECUI-Panel-Nav-Button-Text`;
            text.innerHTML = navButtonInfo.text;
            this.element.appendChild(text);
        }

        if(!Utils.isNullOrEmpty(navButtonInfo.icon)) {
            if(!Utils.isNullOrEmpty(navButtonInfo.text)) {
                var icon = new Icon(this.icon, "navButton", this.ECUI.theme.classes.primaryIcon);
                this.element.appendChild(icon.element);
            } else {
                var icon = new Icon(this.icon, "navButtonOnly", this.ECUI.theme.classes.primaryIcon);
                this.element.appendChild(icon.element);
            }
        }
        if(!Utils.isNullOrEmpty(navButtonInfo.img)) {
            var img = document.createElement("img");
            img.className = "ECUI-Panel-Nav-Button-Image";
            img.src = navButtonInfo.img;
            this.element.appendChild(img);
        }
        if(!this.reversed && !Utils.isNullOrEmpty(navButtonInfo.text)) {
            var text = document.createElement("div");
            text.className = `${this.ECUI.theme.classes.primaryText} ECUI-Panel-Nav-Button-Text`;
            text.innerHTML = navButtonInfo.text;
            this.element.appendChild(text);
        }
        var hoverEffect = document.createElement("div");
        hoverEffect.className = `${this.ECUI.theme.classes.hover} ECUI-Panel-Nav-Button-Hover-Effect`;
        this.element.appendChild(hoverEffect);

    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Nav-Button-Style";

        var cssRules = `
            .ECUI-Panel-Nav-Button { position: relative; height: 100%; padding: 0 14px; margin: 0px; outline: 0; background-color: transparent; cursor: pointer; border-style: solid; border-width: 1px; border-top: none!important; border-bottom: none!important; display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 6px; }
            .ECUI-Panel-Nav-Unit:first-child .ECUI-Panel-Nav-Button { border-left: none!important; }
            .ECUI-Panel-Nav-Unit:last-child .ECUI-Panel-Nav-Button { border-right: none!important; }
            .ECUI-Panel-Nav-Button-Text { font-size: 12px; }
            .ECUI-Panel-Nav-Button-Hover-Effect { display: none; width: 100%; height: 0px; position: absolute; left: 0px; bottom: 0px; opacity: 0; animation: navButtonHover 0.3s forwards; }
            .ECUI-Panel-Nav-Button:hover .ECUI-Panel-Nav-Button-Hover-Effect { display: block; }
            .ECUI-Panel-Nav-Button-Image { width: 20px; height: 20px; border-radius: 50%; object-fit: cover; }
            @keyframes navButtonHover { 0% { opacity: 0; height: 0px; } 100% { opacity: 1; height: 2px; } }
        `;   
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Nav-Button-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}