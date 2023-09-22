import { Icon } from "./Icon.js";
import * as Utils from "../../../Module/Utils.js";
import { NavOption } from "./NavOption.js";

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
        this.element.className = `${this.ECUI.theme.classes.border} ${this.ECUI.theme.classes.buttonHover} ECUI-Selectable-Object ECUI-Panel-Nav-Dropdown`;

        if(this.reversed && !Utils.isNullOrEmpty(navDropdownInfo.text)) {
            var text = document.createElement("div");
            text.className = `${this.ECUI.theme.classes.primaryText} ECUI-Panel-Nav-Dropdown-Text`;
            text.innerHTML = navDropdownInfo.text;
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
            var img = document.createElement("img");
            img.className = "ECUI-Panel-Nav-Dropdown-Image";
            img.src = navDropdownInfo.img;
            this.element.appendChild(img);
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

        if(navDropdownInfo.options != null && navDropdownInfo.options.length > 0) {
            var optionsContainer = document.createElement("div");
            optionsContainer.className = `${this.ECUI.theme.classes.border} ${this.ECUI.theme.classes.panel} ECUI-Panel-Nav-Dropdown-Options-Container`;
            
            var border = document.createElement("div");
            border.className = `${this.ECUI.theme.classes.panelHead} ${this.ECUI.theme.classes.border} ECUI-Panel-Nav-Dropdown-Options-Border`;
            optionsContainer.appendChild(border);

            var content = document.createElement("div");
            content.className = "ECUI-Panel-Nav-Dropdown-Options-Content";

            this.options = [];
            for(var i=0; i<navDropdownInfo.options.length; i++) {
                if(navDropdownInfo.options[i].component == "navOption") {
                    var option = new NavOption(this.ECUI, navDropdownInfo.options[i]);
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
        styleSheet.id = "ECUI-Nav-Dropdown-Style";

        var cssRules = `
            .ECUI-Panel-Nav-Dropdown { position: relative; height: 100%; padding: 0 14px; margin: 0px; outline: 0; background-color: transparent; cursor: pointer; border-style: solid; border-width: 1px; border-top: none!important; border-bottom: none!important; display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 6px; }
            .ECUI-Panel-Nav-Unit:first-child .ECUI-Panel-Nav-Dropdown { border-left: none!important; }
            .ECUI-Panel-Nav-Unit:last-child .ECUI-Panel-Nav-Dropdown { border-right: none!important; }
            .ECUI-Panel-Nav-Dropdown-Text { font-size: 12px; }
            .ECUI-Panel-Nav-Dropdown-Hover-Effect { display: none; width: 100%; height: 0px; position: absolute; left: 0px; bottom: 0px; opacity: 0; animation: navDropdownHover 0.3s forwards; }
            .ECUI-Panel-Nav-Dropdown:hover .ECUI-Panel-Nav-Dropdown-Hover-Effect,
            .ECUI-Panel-Nav-Dropdown:focus .ECUI-Panel-Nav-Dropdown-Hover-Effect { display: block; }
            .ECUI-Panel-Nav-Dropdown-Image { width: 20px; height: 20px; border-radius: 50%; object-fit: cover; }
            .ECUI-Panel-Nav-Dropdown-Options-Container { position: absolute; left: 0px; top: 34px; min-width: 100%; z-index: 100; cursor: default; flex-direction: row; display: none; border-style: solid; border-width: 1px; border-top: none!important; width: max-content; }
            .ECUI-Panel-Nav-Dropdown:hover .ECUI-Panel-Nav-Dropdown-Options-Container, 
            .ECUI-Panel-Nav-Dropdown:focus .ECUI-Panel-Nav-Dropdown-Options-Container, 
            .ECUI-Panel-Nav-Dropdown-Options-Container:hover { display: flex; }
            .ECUI-Panel-Nav-Dropdown-Options-Border { width: 8px; border-width: 1px; border-style: solid; border-top: none!important; border-bottom: none!important; border-left: none!important; }
            .ECUI-Panel-Nav-Dropdown-Options-Content { display: flex; flex-direction: column; }
            @keyframes navDropdownHover { 0% { opacity: 0; height: 0px; } 100% { opacity: 1; height: 2px; } }
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