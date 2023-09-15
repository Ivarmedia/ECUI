import { Header } from "../Components/Header.js";


export class PanelManager {

    ECUI;

    constructor(global) {
        this.ECUI = global;
    }

    removeMatchingPanels(panels) {
        panels.forEach(panel => {
            if(this.ECUI.panels.some(p => p.id == panel.id)) {
                var panelToRemove = this.ECUI.panels.find(p => p.id == panel.id);
                panelToRemove.html.remove();
                this.ECUI.panels = this.ECUI.panels.filter(p => p.id !== panel.id);
            }
        });
    }

    loadPanels(panels) {
        panels.forEach(panel => {
            if(panel.area == "header") {
                this.buildHeader(panel);
            } else if (panel.area == "nav") {
                this.buildNavigationBar(panel);
            } else {
                this.buildPanel(panel);
            }
        });
    }

    buildHeader(panel) {
        panel.element = document.createElement("div");
        panel.element.className = `${this.ECUI.theme.classes.header} ECUI-Panel-Header`;

        if(panel.components != null && panel.components.find(c => c.id == "header")) {
            var headerComponent = panel.components.find(c => c.id == "header");
            headerComponent = new Header(headerComponent);
            panel.element.appendChild(headerComponent.element);
        } else {
            panel.components = [];
            var headerComponent = new Header();
            panel.components.push(headerComponent);
            panel.element.appendChild(headerComponent.element);

        }

        this.ECUI.panels.push(panel);
        var container = this.ECUI.areas.find(a => a.id == "header");
        container.area.appendChild(panel.element);

    }

    buildNavigationBar(panel) {
        var addingPanel = this.ECUI.panels.find(p => p.id == panel.id);
        addingPanel.html = document.createElement("div");
        addingPanel.html.className = "ECUI-Panel-Navigation-Bar";
        var container = this.ECUI.areas.find(a => a.id == "nav");
        container.area.appendChild(addingPanel.html);
    }

    buildActionBarPanel(panel) {

    }

    buildPanel(panel) {
        
    }

}