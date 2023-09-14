import * as manager from "./Module/Interface.js";

export class ECUI {

    interface;
    theme;
    layout;
    areas;
    panels;

    constructor(container, themeInfo) {
        var theme = manager.buildTheme(themeInfo);
        this.interface = manager.setInterface(container, theme, this);
    };

    initPanels(panels) {
        this.interface.initPanels(panels);
    }

    loadPanels(panels) {
        this.interface.loadPanels(panels);
    }

}
