import * as ECUI_Manager from "./Module/Manager.js";

export class ECUI {

    ECUI_Interface;
    ECUI_Theme;
    ECUI_Layout;
    ECUI_Areas;
    ECUI_Panels;
    ECUI_Components;

    constructor(container, themeInfo) {
        let theme = ECUI_Manager.buildTheme(themeInfo);
        this.ECUI_Interface = ECUI_Manager.setInterface(container, theme, this);
    };

    buildTheme(theme) {
        this.ECUI_Interface.buildTheme(theme);
    }

    loadPanels(panels) {
        this.ECUI_Interface.loadPanels(panels);
    }

    removePanels(panelsIds) {
        this.ECUI_Interface.removePanels(panelsIds);
    }

    loadComponents(components) {
        this.ECUI_Interface.loadComponents(components);
    }

    removeComponents(componentsIds) {
        this.ECUI_Interface.removeComponents(componentsIds);
    }

    displayLoader() {
        this.ECUI_Interface.displayLoader();
    }

    removeLoader() {
        this.ECUI_Interface.removeLoader();
    }

}
