import { NavUnit } from "./NavUnit.js";
import * as Utils from "../../../Module/Utils.js";

export class Nav {

    id;
    element;
    component;
    components;
    ECUI;

    constructor(global, navInfo) {
        this.ECUI = global;
        this.id = navInfo.id;
        this.component = "nav";
        this.buildCss();

        this.element = document.createElement("div");
        this.element.className = `${this.ECUI.theme.classes.panel} ${this.ECUI.theme.classes.border} ECUI-Panel-Nav-Component`;

        var border = document.createElement("div");
        border.className = `${this.ECUI.theme.classes.panelHead} ${this.ECUI.theme.classes.border} ECUI-Panel-Nav-Border`;
        this.element.appendChild(border);

        var content = document.createElement("div");
        content.className = `ECUI-Panel-Nav-Content`;
        this.element.appendChild(content); 

        if(navInfo.components != null && navInfo.components.length > 0) {
            this.components = [];
            for(var i=0; i<navInfo.components.length; i++) {
                var unit = new NavUnit(this.ECUI, navInfo.components[i]);
                this.components.push(unit);
                this.ECUI.components.push(unit);
                content.appendChild(unit.element); 
            }
        }

        border = document.createElement("div");
        border.className = `${this.ECUI.theme.classes.panelHead} ${this.ECUI.theme.classes.border} ECUI-Panel-Nav-Border`;
        this.element.appendChild(border);

        
        
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Nav-Style";

        var cssRules = `
            .ECUI-Panel-Nav-Component { height: 34px; width: 100%; display: flex; flex-direction: row; border-width: 1px; border-style: solid; border-top: none!important; border-left: none!important; border-right: none!important; }
            .ECUI-Panel-Nav-Border { height: 100%; width: 8px; border-width: 1px; border-style: solid; border-top: none!important; border-bottom: none!important; }
            .ECUI-Panel-Nav-Border:nth-child(1) { border-left: none!important; }
            .ECUI-Panel-Nav-Border:nth-child(3) { border-right: none!important; }
            .ECUI-Panel-Nav-Content { height: 100%; width: calc(100% - 16px); display: flex; flex-direction: row; justify-content: space-between; }
        `;   
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Nav-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}