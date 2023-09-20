import * as Utils from "../../../Module/Utils.js";

export class Background {

    container;
    classes;
    img;

    constructor(structure, theme) {
        this.classes = theme.classes;
        
        this.buildCss();

        this.container = document.createElement("div");
        this.container.className = `${this.classes.background} ECUI-General-background-Container`;
        
        this.loadImg(theme.backgroundImg);

        structure.appendChild(this.container);
    }

    loadImg(url) {
        if(this.img) {
            this.img.remove();
        }

        if(!Utils.isNullOrEmpty(url)) {
            this.img = document.createElement("img");
            this.img.src = url;
            this.img.className = `${this.classes.opacity} ECUI-General-background`;
            this.container.appendChild(this.img);
        }
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Background-Style";

        var cssRules = `
            .ECUI-General-background-Container { width: 100%; height: 100%; position: absolute; }
            .ECUI-General-background { width: 100%; height: 100%; object-fit: cover; }
        }`;

        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Background-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }
}