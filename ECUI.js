import * as manager from "./Module/Interface.js";

export class ECUI {

    interface;
    theme;
    layout;
    areas;
    panels;
    components;

    constructor(container, themeInfo) {
        var theme = manager.buildTheme(themeInfo);
        this.interface = manager.setInterface(container, theme, this);
    };

    buildTheme(theme) {
        this.interface.buildTheme(theme);
    }

    loadPanels(panels) {
        this.interface.loadPanels(panels);
    }

    loadComponents(components) {
        this.interface.loadComponents(components);
    }

    displayLoader() {
        this.interface.displayLoader();
    }

    removeLoader() {
        this.interface.removeLoader();
    }

}
