import { Icon } from "./Icon.js";
import * as Utils from "../../../Module/Utils.js";

export class NavDropdown {

    id;
    component;
    element;
    options;
    ECUI;

    constructor(global, navDropdownInfo) {
        this.ECUI = global;
        this.id = navDropdownInfo.id;
        this.component = "navDropdown";
        this.icon = navDropdownInfo.icon;
        this.text = navDropdownInfo.text;
        this.img = navDropdownInfo.img;
        this.reversed = navDropdownInfo.reversed;
        this.buildCss();

        this.element = document.createElement("button");
        this.element.className = `${this.ECUI.theme.classes.border} ECUI-Selectable-Object ECUI-Panel-Nav-Dropdown`;

        if(this.reversed && !Utils.isNullOrEmpty(navDropdownInfo.text)) {
            var text = document.createElement("div");
            text.className = "ECUI-Panel-Nav-Button-Text";
            this.element.appendChild(text);
        }

        if(!Utils.isNullOrEmpty(navDropdownInfo.icon)) {
            if(!Utils.isNullOrEmpty(navDropdownInfo.text)) {
                var icon = new Icon(this.icon, "navButton", this.ECUI.theme.classes.primaryIcon);
                this.element.appendChild(icon.element);
            } else {
                var icon = new Icon(this.icon, "navButtonOnly", this.ECUI.theme.classes.primaryIcon);
                this.element.appendChild(icon.element);
            }
        }
        if(!Utils.isNullOrEmpty(navDropdownInfo.img)) {
            if(!Utils.isNullOrEmpty(navDropdownInfo.text)) {

            } else {

            }
        }
        if(!this.reversed && !Utils.isNullOrEmpty(navDropdownInfo.text)) {
            var text = document.createElement("div");
            text.className = `${this.ECUI.theme.classes.primaryText} ECUI-Panel-Nav-Dropdown-Text`;
            text.innerHTML = navDropdownInfo.text;
            this.element.appendChild(text);
        }  
        var hoverEffect = document.createElement("div");
        hoverEffect.className = `${this.ECUI.theme.classes.hover} ECUI-Panel-Nav-Dropdown-Hover-Effect`;
        this.element.appendChild(hoverEffect);  
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Nav-Dropdown-Style";

        var cssRules = `
            .ECUI-Panel-Nav-Dropdown { position: relative; height: 100%; padding: 0 14px; margin: 0px; outline: 0; background-color: transparent; cursor: pointer; border-style: solid; border-width: 1px; border-top: none!important; border-bottom: none!important; display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 6px; }
            .ECUI-Panel-Nav-Unit:first-child .ECUI-Panel-Nav-Dropdown { border-left: none!important; }
            .ECUI-Panel-Nav-Unit:last-child .ECUI-Panel-Nav-Dropdown { border-right: none!important; }
            .ECUI-Panel-Nav-Dropdown-Text { font-size: 12px; }
            .ECUI-Panel-Nav-Dropdown-Hover-Effect { display: none; width: 100%; height: 0px; position: absolute; left: 0px; bottom: 0px; opacity: 0; animation: navButtonHover 0.3s forwards; }
             .ECUI-Panel-Nav-Dropdown:hover .ECUI-Panel-Nav-Dropdown-Hover-Effect { display: block; }
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
        var styleSheet = document.getElementById("ECUI-Nav-Dropdown-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}