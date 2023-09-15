import * as Utils from "../../../Module/Utils.js";

export class Header {

    id;
    element;
    logoContainer;
    logo;
    secondaryLogoContainer;
    secondaryLogo;

    constructor(headerInfo) {

        if(headerInfo != null && !Utils.isNullOrEmpty(headerInfo.id)) {
            this.id = headerInfo.id;
        } else {
            this.id = "header";
        }

        this.element = document.createElement("div");
        this.element.className = "ECUI-Panel-Header-Component";

        var leftContainer = document.createElement("div");
        leftContainer.className = "ECUI-Panel-Header-Left";

        this.logoContainer = document.createElement("button");
        this.logoContainer.className = "ECUI-Panel-Header-Logo-Container";
        
        if(headerInfo != null && !Utils.isNullOrEmpty(headerInfo.logo)) {
            this.logo = document.createElement("img");
            this.logo.className = "ECUI-Panel-Header-Logo";
        } else {

        }

        leftContainer.appendChild(this.logoContainer);
        this.element.appendChild(leftContainer);

        var centerContainer = document.createElement("div");
        centerContainer.className = "ECUI-Panel-Header-Center";
        this.element.appendChild(centerContainer);

        var rightContainer = document.createElement("div");
        rightContainer.className = "ECUI-Panel-Header-Right";
        this.element.appendChild(rightContainer);


    }

}