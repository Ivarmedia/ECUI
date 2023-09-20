import { Header } from "../Components/Header.js";
import { Nav } from "../Components/Nav.js";


export class PanelManager {

    ECUI;

    constructor(global) {
        this.ECUI = global;
    }

    removeMatchingPanels(panels) {
        panels.forEach(panel => {
            if(this.ECUI.panels.some(p => p.id == panel.id)) {
                var panelToRemove = this.ECUI.panels.find(p => p.id == panel.id);
                panelToRemove.element.remove();
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
        panel.element.className = `ECUI-Panel-Header`;

        if(panel.components != null && panel.components.find(c => c.component == "header")) {
            var headerInfo = panel.components.find(c => c.component == "header");
            var headerComponent = new Header(this.ECUI, headerInfo);
            var index = panel.components.findIndex(c => c.component == "header");
            panel.components.splice(index, 1);
            panel.components.push(headerComponent);
            this.ECUI.components.push(headerComponent);
            panel.element.appendChild(headerComponent.element);
        } else {
            panel.components = [];
            var headerComponent = new Header(this.ECUI);
            panel.components.push(headerComponent);
            this.ECUI.components.push(headerComponent);
            panel.element.appendChild(headerComponent.element);

        }

        this.ECUI.panels.push(panel);
        var container = this.ECUI.areas.find(a => a.id == "header");
        container.area.appendChild(panel.element);

    }

    buildNavigationBar(panel) {
        panel.element = document.createElement("div");
        panel.element.className = `ECUI-Panel-Navigation-Bar`;

        if(panel.components != null && panel.components.find(c => c.component == "nav")) {
            var navInfo = panel.components.find(c => c.component == "nav");
            var navComponent = new Nav(this.ECUI, navInfo);
            var index = panel.components.findIndex(c => c.component == "nav");
            panel.components.splice(index, 1);
            panel.components.push(navComponent);
            this.ECUI.components.push(navComponent);
            panel.element.appendChild(navComponent.element);
        }

        this.ECUI.panels.push(panel);
        var container = this.ECUI.areas.find(a => a.id == "nav");
        container.area.appendChild(panel.element);
    }

    buildActionBarPanel(panel) {

    }

    buildPanel(panel) {
        
    }

}