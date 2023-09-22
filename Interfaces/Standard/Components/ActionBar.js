import { ActionBarUnit } from "./ActionBarUnit.js";

export class ActionBar {
    ECUI;
    id;
    component;
    element;

    constructor(global, actionBarInfo) {
        this.ECUI = global;
        this.id = actionBarInfo.id;
        this.component = "header";
        this.buildCss();

        this.element = document.createElement("div");
        this.element.className = `${this.ECUI.theme.classes.panel} ${this.ECUI.theme.classes.border} ECUI-Panel-Action-Bar-Component`;

        if(actionBarInfo.components != null && actionBarInfo.components.length > 0) {
            this.components = [];
            for(var i=0; i<actionBarInfo.components.length; i++) {
                var unit = new ActionBarUnit(this.ECUI, actionBarInfo.components[i]);
                this.components.push(unit);
                this.ECUI.components.push(unit);
                this.element.appendChild(unit.element); 
            }
        }
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Action-Bar-Style";

        var cssRules = `
            .ECUI-Panel-Action-Bar-Component { height: 100%; width: 36px; display: flex; flex-direction: column;
             border-width: 1px; border-style: solid; border-left: none!important; }
            
        `;   
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Action-Bar-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}