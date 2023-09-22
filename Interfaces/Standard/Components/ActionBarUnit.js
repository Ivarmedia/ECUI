import * as Utils from "../../../Module/Utils.js";
import { ActionBarButton } from "./ActionBarButton.js";

export class ActionBarUnit {

    id;
    element;
    component;
    components;
    ECUI;

    constructor(global, actionBarUnitInfo) {
        this.ECUI = global;
        this.id = actionBarUnitInfo.id;
        this.component = "actionBarUnit";
        this.buildCss();

        this.element = document.createElement("div");
        this.element.className = `${this.ECUI.theme.classes.border} ECUI-Panel-Action-Bar-Unit`;

        var border = document.createElement("div");
        border.className = `${this.ECUI.theme.classes.panelHead} ${this.ECUI.theme.classes.border} ECUI-Panel-Action-Bar-Border`;
        this.element.appendChild(border);

        if(actionBarUnitInfo.components != null && actionBarUnitInfo.components.length > 0) {
            this.components = [];
            for(var i=0; i<actionBarUnitInfo.components.length; i++) {
                var button = new ActionBarButton(this.ECUI, actionBarUnitInfo.components[i]);
                this.components.push(button);
                this.ECUI.components.push(button);
                this.element.appendChild(button.element); 
            }
        }
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Action-Bar-Unit-Style";

        var cssRules = `
            .ECUI-Panel-Action-Bar-Unit { width: 100%; display: flex; flex-direction: column; }
            .ECUI-Panel-Action-Bar-Border { height: 8px; width: 100%; border-width: 1px; border-style: solid; border-top: none!important; border-left: none!important; border-right: none!important; }
        `;   
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Action-Bar-Unit-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}