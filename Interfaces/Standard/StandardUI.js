import { Layout } from "./Structure/Layout.js";
import { Theme } from "./Theme/Theme.js";
import { PanelManager } from "./Structure/PanelManager.js";

export class StandardUI {

    ECUI;
    panelManager;

    constructor(container, theme, global) {
        this.ECUI = global;
        this.ECUI.panels = [];
        this.ECUI.components = [];
        this.ECUI.theme = new Theme(theme, this.ECUI);
        this.ECUI.layout = new Layout(container, this.ECUI);
        this.panelManager = new PanelManager(this.ECUI);
    };

    buildTheme(theme) {
        this.ECUI.theme = new Theme(theme, this.ECUI);
    }

    loadPanels(panels) {
        this.panelManager.removeMatchingPanels(panels);
        var allPanels = this.ECUI.panels.concat(panels);
        this.ECUI.layout.update(allPanels);
        this.panelManager.loadPanels(panels);
    }

    removePanels(panels) {

    }

    loadComponents(components) {

    }

    displayLoader() {
        this.ECUI.layout.loader.display();
    }

    removeLoader() {
        this.ECUI.layout.loader.remove();
    }




}
