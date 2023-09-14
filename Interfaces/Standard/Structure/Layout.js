import { Background } from "./Background.js";
import { Loader } from "./Loader.js";

export class Layout {

    container;
    areas;
    background;
    loader;

    constructor(container, theme) {
        var layout = document.createElement("div");
        layout.className = "ECUI-General-Container";

        this.buildCss();

        this.background = new Background(layout, theme);

        this.container = document.createElement("div");
        this.container.className = "ECUI-General-Layout";
        layout.appendChild(this.container);

        this.loader = new Loader(layout, theme);

        container.appendChild(layout);
    }

    buildCss() {
        var layoutCss = document.createElement('style');
        layoutCss.setAttribute('type', 'text/css');
        layoutCss.id = "ECUI-Layout-Style";

        var cssRules = `
            .ECUI-General-Container { width: 100%; height: 100%; position: relative; overflow: hidden; }
            .ECUI-General-Layout { width: 100%; height: 100%; position: relative; display: flex; flex-direction: column; }`;

        if (layoutCss.styleSheet) {
            layoutCss.styleSheet.cssText = cssRules;
        } else {
            layoutCss.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(layoutCss);
    }

}