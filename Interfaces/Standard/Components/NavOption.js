import { Icon } from "./Icon.js";
import * as Utils from "../../../Module/Utils.js";

export class NavOption {
    id;
    component;
    element;
    ECUI;
    icon;
    text;
    disabled;
    options;

    constructor(global, navOptionInfo) {
        this.ECUI = global;
        this.id = navOptionInfo.id;
        this.component = "navOption";
        this.icon = navOptionInfo.icon;
        this.text = navOptionInfo.text;
        this.disabled = navOptionInfo.disabled;
        this.buildCss();

        this.element = document.createElement("button");

        if(this.disabled) {
            this.element.className = `${this.ECUI.theme.classes.border} ECUI-Selectable-Object ECUI-Panel-Nav-Dropdown-Option-Disabled`;
        } else {
            this.element.className = `${this.ECUI.theme.classes.border} ${this.ECUI.theme.classes.frameHover} ECUI-Selectable-Object ECUI-Panel-Nav-Dropdown-Option`;
        }

        if(this.icon) {
            var icon = new Icon(this.icon, "navOption", this.ECUI.theme.classes.primaryIcon);
            this.element.appendChild(icon.element);
        }

        var text = document.createElement("div");
        text.className = `${this.ECUI.theme.classes.primaryText} ECUI-Panel-Nav-Dropdown-Option-Text`;
        text.innerHTML = this.text;
        this.element.appendChild(text);

        var hoverEffect = document.createElement("div");
        hoverEffect.className = `${this.ECUI.theme.classes.hover} ECUI-Panel-Nav-Dropdown-Option-Hover-Effect`;
        this.element.appendChild(hoverEffect);  

        if(navOptionInfo.options != null && navOptionInfo.options.length > 0) {
            var optionsContainer = document.createElement("div");
            optionsContainer.className = `${this.ECUI.theme.classes.border} ${this.ECUI.theme.classes.panel} ECUI-Panel-Nav-Dropdown-Sub-Options-Container`;

            var content = document.createElement("div");
            content.className = "ECUI-Panel-Nav-Dropdown-Sub-Options-Content";

            this.options = [];
            for(var i=0; i<navOptionInfo.options.length; i++) {
                if(navOptionInfo.options[i].component == "navOption") {
                    var option = new NavOption(this.ECUI, navOptionInfo.options[i]);
                    this.options.push(option);
                    this.ECUI.components.push(option);
                    content.appendChild(option.element);
                }
            }

            optionsContainer.appendChild(content);
            this.element.appendChild(optionsContainer);
        }
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Nav-Dropdown-Option-Style";

        var cssRules = `
            .ECUI-Panel-Nav-Dropdown-Option { position: relative; padding: 5px 22px 5px 6px; margin: 0px; outline: 0; background-color: transparent; cursor: pointer; border-style: solid; border-width: 1px; border-top: none!important; border-right: none!important; border-left: none!important; display: flex; flex-direction: row; align-items: center; gap: 6px; }
            .ECUI-Panel-Nav-Dropdown-Option-Disabled { position: relative; padding: 5px 22px 5px 6px; margin: 0px; outline: 0; background-color: transparent; pointer-events: none; border-style: solid; border-width: 1px; border-top: none!important; border-right: none!important; border-left: none!important; display: flex; flex-direction: row; align-items: center; gap: 6px; opacity: 0.3; }
            .ECUI-Panel-Nav-Dropdown-Option-Text { font-size: 11px; }
            .ECUI-Panel-Nav-Dropdown-Option-Hover-Effect { display: none; width: 0%; height: 100%; position: absolute; right: 0px; top: 0px; opacity: 0; animation: navOptionDropdownHover 0.3s forwards; }
            .ECUI-Panel-Nav-Dropdown-Option:hover > .ECUI-Panel-Nav-Dropdown-Option-Hover-Effect,
            .ECUI-Panel-Nav-Dropdown-Option:focus > .ECUI-Panel-Nav-Dropdown-Option-Hover-Effect { display: block; }
            .ECUI-Panel-Nav-Dropdown-Sub-Options-Container { position: absolute; left: 100%; top: 0px; z-index: 100; cursor: default; flex-direction: row; display: none; border-style: solid; border-width: 1px; border-top: none!important; width: max-content; }
            .ECUI-Panel-Nav-Dropdown-Option:hover .ECUI-Panel-Nav-Dropdown-Sub-Options-Container, 
            .ECUI-Panel-Nav-Dropdown-Option:focus .ECUI-Panel-Nav-Dropdown-Sub-Options-Container, 
            .ECUI-Panel-Nav-Dropdown-Sub-Options-Container:hover { display: flex; }
            .ECUI-Panel-Nav-Dropdown-Sub-Options-Content { display: flex; flex-direction: column; }
            @keyframes navOptionDropdownHover { 0% { opacity: 0; width: 0px; } 100% { opacity: 1; width: 2px; } }
        `;   
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Nav-Dropdown-Option-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }
}