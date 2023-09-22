
export class CardSelector {

    ECUI;
    id;
    component;
    element;

    constructor(global, cardSelectorInfo) {
        this.ECUI = global;
        this.id = cardSelectorInfo.id;
        this.component = "cardSelector";
        this.buildCss();

        this.element = document.createElement("div");
        this.element.className = `ECUI-Panel-Card-Selector-Component`;

    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Card-Selector-Style";

        var cssRules = `
            .ECUI-Panel-Card-Selector { width: 100%; height: 100%; }
            .ECUI-Panel-Card-Selector-Component { width: 100%; height: 100%; }
        `;   
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Card-Selector-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}