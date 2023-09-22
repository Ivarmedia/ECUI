import * as Utils from "../../../Module/Utils.js";
import { Icon } from "./Icon.js";

export class ActionBarButton {
    ECUI;
    id;
    component;
    element;
    icon;
    text;
    img;
    video;

    constructor(global, actionBarButtonInfo) {
        this.ECUI = global;
        this.id = actionBarButtonInfo.id;
        this.component = "actionBarButton";
        this.icon = actionBarButtonInfo.icon;
        this.img = actionBarButtonInfo.img;
        this.text = actionBarButtonInfo.text;
        this.video = actionBarButtonInfo.video;
        this.buildCss();

        this.element = document.createElement("div");
        this.element.className = `${this.ECUI.theme.classes.border} ${this.ECUI.theme.classes.buttonHover} ECUI-Selectable-Object ECUI-Panel-Action-Bar-Button-Component`;

        if(!Utils.isNullOrEmpty(this.icon)) {
            var icon = new Icon(this.icon, "actionBarButton", this.ECUI.theme.classes.primaryIcon, this.ECUI.theme.classes.secondaryIcon);
            this.element.appendChild(icon.element);
        }

        var hoverEffect = document.createElement("div");
        hoverEffect.className = `${this.ECUI.theme.classes.hover} ECUI-Panel-Action-Bar-Button-Hover-Effect`;
        this.element.appendChild(hoverEffect);

        var cardContainer = document.createElement("div");
        cardContainer.className = `${this.ECUI.theme.classes.border} ${this.ECUI.theme.classes.panel} ECUI-Panel-Action-Bar-Button-Card-Container`;
        
        var border = document.createElement("div");
        border.className = `${this.ECUI.theme.classes.panelHead} ${this.ECUI.theme.classes.border} ECUI-Panel-Action-Bar-Button-Card-Border`;
        cardContainer.appendChild(border);

        var content = document.createElement("div");
        content.className = "ECUI-Panel-Action-Bar-Button-Card-Content";

        if(!Utils.isNullOrEmpty(this.img)) {
            var image = document.createElement("img");
            image.className = `${this.ECUI.theme.classes.border} ECUI-Panel-Action-Bar-Button-Card-Image`;
            image.src = this.img;
            content.appendChild(image);
        }

        if(!Utils.isNullOrEmpty(this.text)) {
            var textContainer = document.createElement("div");
            textContainer.className = "ECUI-Panel-Action-Bar-Button-Card-Text-Container";

            textContainer.innerHTML = `<svg class="${this.ECUI.theme.classes.primaryIcon} ECUI-Panel-Action-Bar-Button-Card-Icon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>`;

            var text = document.createElement("div");
            text.className = `${this.ECUI.theme.classes.primaryText} ECUI-Panel-Action-Bar-Button-Card-Text`;
            text.innerHTML = this.text;
            textContainer.appendChild(text);

            content.appendChild(textContainer)
        }

        cardContainer.appendChild(content);
        this.element.appendChild(cardContainer);
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Action-Bar-Button-Style";

        var cssRules = `
            .ECUI-Panel-Action-Bar-Button-Component { 
                position: relative;
                height: 30px; 
                width: 100%; 
                display: flex; 
                flex-direction: row; 
                justify-content: center;
                align-items: center;
                border-width: 1px; 
                border-style: solid; 
                border-top: none!important; 
                border-left: none!important; 
                border-right: none!important; 
                cursor: pointer;
            }
            .ECUI-Panel-Action-Bar-Button-Hover-Effect { display: none; width: 0px; height: 100%; position: absolute; right: 0px; top: 0px; opacity: 0; animation: actionBarButtonHover 0.3s forwards; }
            .ECUI-Panel-Action-Bar-Button-Component:hover .ECUI-Panel-Action-Bar-Button-Hover-Effect { display: block; }

            .ECUI-Panel-Action-Bar-Button-Card-Container { position: absolute; left: 35px; top: -1px; flex-direction: row; display: none; border-style: solid; border-width: 1px; width: max-content; }
            .ECUI-Panel-Action-Bar-Button-Component:hover .ECUI-Panel-Action-Bar-Button-Card-Container, 
            .ECUI-Panel-Action-Bar-Button-Component:focus .ECUI-Panel-Action-Bar-Button-Card-Container, 
            .ECUI-Panel-Action-Bar-Button-Card-Container:hover { display: flex; }

            .ECUI-Panel-Action-Bar-Button-Card-Border {
                width: 8px;
                border-width: 1px;
                border-style: solid;
                border-top: none!important;
                border-bottom: none!important;
                border-left: none!important;
            }

            .ECUI-Panel-Action-Bar-Button-Card-Content {
                display: flex;
                flex-direction: column;
            }

            .ECUI-Panel-Action-Bar-Button-Card-Text-Container {
                min-height: 30px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 6px;
                padding: 0px 10px;
            }

            .ECUI-Panel-Action-Bar-Button-Card-Icon {
                width: 12px;
                min-width: 12px;
            }

            .ECUI-Panel-Action-Bar-Button-Card-Text {
                font-size: 11px;
            }

            @keyframes actionBarButtonHover { 0% { opacity: 0; width: 0px; } 100% { opacity: 1; width: 2px; } }
        `;   
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Action-Bar-Button-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}