import { Layout } from "./Structure/Layout.js";
import { Theme } from "./Theme/Theme.js";
import { PanelManager } from "./Structure/PanelManager.js";

export class StandardUI {

    ECUI;
    panelManager;

    constructor(container, theme, global) {
        this.ECUI = global;
        this.ECUI.ECUI_Panels = [];
        this.ECUI.ECUI_Components = [];
        this.ECUI.ECUI_Areas = [];

        this.ECUI.ECUI_Theme = new Theme(theme, this.ECUI);
        this.ECUI.ECUI_Layout = new Layout(container, this.ECUI);
        this.panelManager = new PanelManager(this.ECUI);
    };

    buildTheme(theme) {
        this.ECUI.ECUI_Theme = new Theme(theme, this.ECUI);
    }

    loadPanels(panels) {
        var panelsIds = [...new Set(panels.map(panel => panel.id))];
        this.panelManager.removeMatchingPanels(panelsIds);
        var allPanels = this.ECUI.ECUI_Panels.concat(panels);
        this.ECUI.ECUI_Layout.update(allPanels);
        this.panelManager.loadPanels(panels);
    }

    removePanels(panelsIds) {
        this.panelManager.removeMatchingPanels(panelsIds);
        this.ECUI.ECUI_Layout.update(this.ECUI.panels);
    }

    loadComponents(components) {

    }

    displayLoader() {
        this.ECUI.ECUI_Layout.loader.display();
    }

    removeLoader() {
        this.ECUI.ECUI_Layout.loader.remove();
    }




}
