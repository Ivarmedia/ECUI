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

    buildStructure() {
        this.structure.innerHTML = "";

        this.background = new Background(this.structure, this.ECUI.ECUI_Theme);

        this.container = document.createElement("div");
        this.container.className = `${this.ECUI.ECUI_Theme.classes.fontSize} ${this.ECUI.ECUI_Theme.classes.primaryFont} ECUI-General-Layout`;
        this.structure.appendChild(this.container);

        this.loader = new Loader(this.structure, this.ECUI.ECUI_Theme);

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
        this.ECUI.ECUI_Areas = [];

        var headerArea = document.createElement("div");
        headerArea.className = "ECUI-Layout-Header-Area";
        this.ECUI.ECUI_Areas.push({ id: "header", area: headerArea });
        this.container.appendChild(headerArea);

        var navArea = document.createElement("div");
        navArea.className = "ECUI-Layout-Navigation-Bar-Area";
        this.ECUI.ECUI_Areas.push({ id: "nav", area: navArea });
        this.container.appendChild(navArea);

        var workspace = document.createElement("div");
        workspace.className = "ECUI-Layout-Workspace-Area";
        this.ECUI.ECUI_Areas.push({ id: "workspace", area: workspace });
        this.container.appendChild(workspace);

        var sideNavArea = document.createElement("div");
        sideNavArea.className = "ECUI-Layout-Side-Navigation-Bar-Area";
        this.ECUI.ECUI_Areas.push({ id: "sideNav", area: sideNavArea });
        workspace.appendChild(sideNavArea);

        var blurArea = document.createElement("div");
        blurArea.className = "ECUI-Layout-Blur-Area";
        this.ECUI.ECUI_Areas.push({ id: "blur", area: blurArea });
        workspace.appendChild(blurArea);

        var leftArea = document.createElement("div");
        leftArea.className = "ECUI-Layout-Left-Area";
        this.ECUI.ECUI_Areas.push({ id: "left", area: leftArea });
        blurArea.appendChild(leftArea);

        var centerArea = document.createElement("div");
        centerArea.className = "ECUI-Layout-Center-Area";
        this.ECUI.ECUI_Areas.push({ id: "center", area: centerArea });
        blurArea.appendChild(centerArea);

        var rightrArea = document.createElement("div");
        rightrArea.className = "ECUI-Layout-Right-Area";
        this.ECUI.ECUI_Areas.push({ id: "right", area: rightrArea });
        blurArea.appendChild(rightrArea);

        var footerArea = document.createElement("div");
        footerArea.className = "ECUI-Layout-Footer-Area";
        this.ECUI.ECUI_Areas.push({ id: "footer", area: footerArea });
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
                .ECUI-Layout-Header-Area { width: 100%; height: 56px; position: relative; z-index: 1000; }
            `;
            navigationHeight = 56;
        }

        if(areas.some(area => area == "nav")) {
            cssRules += `
                .ECUI-Layout-Navigation-Bar-Area { width: 100%; height: 34px; position: relative; z-index: 900; }
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
            .ECUI-Layout-Workspace-Area { width: 100%; height: calc(100% - ${navigationHeight}px); position: relative; display: flex; flex-direction: row; }
        `;

        if(areas.some(area => area == "sideNav")) {
            cssRules += `
                .ECUI-Layout-Side-Navigation-Bar-Area { height: 100%; position: relative; z-index: 800; }
            `;
        }

        cssRules += `
            .ECUI-Layout-Blur-Area { width: calc(100% - ${this.ECUI.ECUI_Areas.find(a => a.id == "sideNav").area.offsetWidth}px); height: 100%; position: relative; }
        `;

        if(areas.some(area => area == "left")) {
            cssRules += `
                .ECUI-Layout-Left-Area { width: 280px; height: 100%); position: relative; z-index: 700 }
            `;
            centerWidth += 280;
        }

        if(areas.some(area => area == "right")) {
            cssRules += `
                .ECUI-Layout-Right-Area { width: 280px; height: 100%); position: relative; z-index: 700 }
            `;
            centerWidth += 280;
        }

        cssRules += `
            .ECUI-Layout-Center-Area { width: calc(100% - ${centerWidth}px); height: 100%; position: relative; z-index: 600 }
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