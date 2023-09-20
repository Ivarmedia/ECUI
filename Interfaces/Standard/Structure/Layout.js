import { Background } from "./Background.js";
import { Loader } from "./Loader.js";

export class Layout {

    ECUI;
    structure;
    container;
    background;
    loader;

    constructor(container, global) {
        this.ECUI = global;
        container.innerHTML = "";

        this.buildCss();

        this.structure = document.createElement("div");
        this.structure.className = "ECUI-General-Container";

        this.buildStructure();

        container.appendChild(this.structure);
    }

    buildStructure(panels) {
        this.structure.innerHTML = "";

        this.background = new Background(this.structure, this.ECUI.theme);

        this.container = document.createElement("div");
        this.container.className = "ECUI-General-Layout";
        this.structure.appendChild(this.container);

        this.loader = new Loader(this.structure, this.ECUI.theme);

        this.buildLayout();
    }

    buildCss() {
        var styleSheet = document.getElementById("ECUI-Structure-Style");
        if(styleSheet) {
            styleSheet.remove();
        }

        styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Structure-Style";

        var cssRules = `
            .ECUI-General-Container { width: 100%; height: 100%; position: relative; overflow: hidden; }
            .ECUI-General-Layout { width: 100%; height: 100%; position: relative; display: flex; flex-direction: column; }`;

        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    buildLayout() {
        this.container.innerHTML = "";
        this.ECUI.areas = [];

        var headerArea = document.createElement("div");
        headerArea.className = "ECUI-Layout-Header-Area";
        this.ECUI.areas.push({ id: "header", area: headerArea });
        this.container.appendChild(headerArea);

        var navArea = document.createElement("div");
        navArea.className = "ECUI-Layout-Navigation-Bar-Area";
        this.ECUI.areas.push({ id: "nav", area: navArea });
        this.container.appendChild(navArea);

        var workspace = document.createElement("div");
        workspace.className = "ECUI-Layout-Workspace-Area";
        this.ECUI.areas.push({ id: "workspace", area: workspace });
        this.container.appendChild(workspace);

        var actionBarArea = document.createElement("div");
        actionBarArea.className = "ECUI-Layout-Action-Bar-Area";
        this.ECUI.areas.push({ id: "actionBar", area: actionBarArea });
        workspace.appendChild(actionBarArea);

        var leftArea = document.createElement("div");
        leftArea.className = "ECUI-Layout-Left-Area";
        this.ECUI.areas.push({ id: "left", area: leftArea });
        workspace.appendChild(leftArea);

        var centerArea = document.createElement("div");
        centerArea.className = "ECUI-Layout-Center-Area";
        this.ECUI.areas.push({ id: "center", area: centerArea });
        workspace.appendChild(centerArea);

        var rightrArea = document.createElement("div");
        rightrArea.className = "ECUI-Layout-Right-Area";
        this.ECUI.areas.push({ id: "right", area: rightrArea });
        workspace.appendChild(rightrArea);

        var footerArea = document.createElement("div");
        footerArea.className = "ECUI-Layout-Footer-Area";
        this.ECUI.areas.push({ id: "footer", area: footerArea });
        this.container.appendChild(footerArea);
    }

    update(panels) {
        this.removeStyleSheet();

        var areas = [...new Set(panels.map(panel => panel.area))];

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Layout-Style";

        var cssRules = ``;
        var navigationHeight = 0;
        var centerWidth = 0;

        if(areas.some(area => area == "header")) {
            cssRules = `
                .ECUI-Layout-Header-Area { width: 100%; height: 24px; position: relative; }
            `;
            navigationHeight = 24;
        }

        if(areas.some(area => area == "nav")) {
            cssRules += `
                .ECUI-Layout-Navigation-Bar-Area { width: 100%; height: 34px; position: relative; }
            `;
            navigationHeight += 34;
        }

        if(areas.some(area => area == "footer")) {
            cssRules += `
                .ECUI-Layout-Footer-Area { width: 100%; height: 38px); position: relative; }
            `;
            navigationHeight += 38;
        }

        cssRules += `
            .ECUI-Layout-Workspace-Area { width: 100%; height: calc(100% - ${navigationHeight}px); position: relative; }
        `;

        if(areas.some(area => area == "actionBar")) {
            cssRules += `
                .ECUI-Layout-Action-Bar-Area { width: 38px; height: 100%); position: relative; }
            `;
            centerWidth += 38;
        }

        if(areas.some(area => area == "left")) {
            cssRules += `
                .ECUI-Layout-Left-Area { width: 280px; height: 100%); position: relative; }
            `;
            centerWidth += 280;
        }

        if(areas.some(area => area == "right")) {
            cssRules += `
                .ECUI-Layout-Right-Area { width: 280px; height: 100%); position: relative; }
            `;
            centerWidth += 280;
        }

        cssRules += `
            .ECUI-Layout-Center-Area { width: calc(100% - ${centerWidth}px); height: 100%; position: relative; }
        `;

        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Layout-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}