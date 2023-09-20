import * as Utils from "../../../Module/Utils.js";
import { NavButton } from "./NavButton.js";
import { NavDropdown } from "./NavDropdown.js";

export class NavUnit {

    id;
    element;
    component;
    components;
    ECUI;

    constructor(global, navUnitInfo) {
        this.ECUI = global;
        this.id = navUnitInfo.id;
        this.component = "navUnit";
        this.buildCss();

        this.element = document.createElement("div");
        this.element.className = `${this.ECUI.theme.classes.border} ECUI-Panel-Nav-Unit`;

        if(navUnitInfo.components != null && navUnitInfo.components.length > 0) {
            this.components = [];
            for(var i=0; i<navUnitInfo.components.length; i++) {
                if(navUnitInfo.components[i].component == "navButton") {
                    var button = new NavButton(this.ECUI, navUnitInfo.components[i]);
                    this.components.push(button);
                    this.ECUI.components.push(button);
                    this.element.appendChild(button.element); 
                } else if (navUnitInfo.components[i].component == "navDropdown") {
                    var dropdown = new NavDropdown(this.ECUI, navUnitInfo.components[i]);
                    this.components.push(dropdown);
                    this.ECUI.components.push(dropdown);
                    this.element.appendChild(dropdown.element); 
                } else if (navUnitInfo.components[i].component == "button") {

                }
            }
        }
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Nav-Unit-Style";

        var cssRules = `
            .ECUI-Panel-Nav-Unit { height: 100%; display: flex; flex-direction: row; }
        `;   
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Nav-Unit-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}