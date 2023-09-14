import { Layout } from "./Structure/Layout.js";
import { Theme } from "./Theme/Theme.js";

export class StandardUI {

    ECUI;

    constructor(container, theme, global) {
        this.ECUI = global;
        this.buildTheme(theme);
        this.buildLayout(container);
    };

    buildTheme(theme) {
        this.ECUI.theme = new Theme(theme);
    }

    buildLayout(container) {
        this.ECUI.layout = new Layout(container, this.ECUI.theme);
    }

    initPanels(panels) {
        this.ECUI.panels = [];
        loadPanels(panels);
        this.ECUI.layout.loader.remove();
    }

    loadPanels(panels) {
        panels.forEach(panel => {
            this.ECUI.panels.push(panel);
        });
        this.ECUI.layout.buildLayout(this.ECUI.panels);
        
    }

    removePanel(panels) {

    }

    loadComponents(components, panelId) {

    }




}
