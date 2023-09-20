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
        var panelsIds = [...new Set(panels.map(panel => panel.id))];
        this.panelManager.removeMatchingPanels(panelsIds);
        var allPanels = this.ECUI.panels.concat(panels);
        this.ECUI.layout.update(allPanels);
        this.panelManager.loadPanels(panels);
    }

    removePanels(panelsIds) {
        this.panelManager.removeMatchingPanels(panelsIds);
        this.ECUI.layout.update(this.ECUI.panels);
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
