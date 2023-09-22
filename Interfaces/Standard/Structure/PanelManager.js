import { ActionBar } from "../Components/ActionBar.js";
import { Header } from "../Components/Header.js";
import { Nav } from "../Components/Nav.js";
import * as Utils from "../../../Module/Utils.js";
import { CardSelector } from "../Components/CardSelector.js";

export class PanelManager {

    ECUI;

    constructor(global) {
        this.ECUI = global;
    }

    removeMatchingPanels(panelsIds) {
        panelsIds.forEach(panelId => {
            if(this.ECUI.panels.some(p => p.id == panelId)) {
                var panelToRemove = this.ECUI.panels.find(p => p.id == panelId);
                panelToRemove.element.remove();
                this.ECUI.panels = this.ECUI.panels.filter(p => p.id !== panelId);
            }
        });
    }

    loadPanels(panels) {
        panels.forEach(panel => {
            if(panel.area == "header") {
                this.buildHeader(panel);
            } else if (panel.area == "nav") {
                this.buildNavigationBar(panel);
            } else if (panel.area == "actionBar") {
                this.buildActionBarPanel(panel);
            } else if (panel.area.includes("center")) {
                this.buildCenterPanel(panel);
            } else {
                this.buildPanel(panel);
            }
        });
    }

    buildHeader(panel) {
        panel.element = document.createElement("div");
        panel.element.className = `ECUI-Panel-Header`;
        panel.element.id = panel.id;

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
        panel.element.id = panel.id;

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
        panel.element = document.createElement("div");
        panel.element.className = `ECUI-Panel-Action-Bar`;
        panel.element.id = panel.id;

        if(panel.components != null && panel.components.find(c => c.component == "actionBar")) {
            var actionBarInfo = panel.components.find(c => c.component == "actionBar");
            var actionBarComponent = new ActionBar(this.ECUI, actionBarInfo);
            var index = panel.components.findIndex(c => c.component == "actionBar");
            panel.components.splice(index, 1);
            panel.components.push(actionBarComponent);
            this.ECUI.components.push(actionBarComponent);
            panel.element.appendChild(actionBarComponent.element);
        }

        this.ECUI.panels.push(panel);
        var container = this.ECUI.areas.find(a => a.id == "actionBar");
        container.area.appendChild(panel.element);
    }

    buildPanel(panel) {
        panel.element = document.createElement("div");
        panel.element.className = `ECUI-Panel`;
        panel.element.id = panel.id;
        
        this.ECUI.panels.push(panel);
        var container = this.ECUI.areas.find(a => a.id == panel.area);
        container.area.appendChild(panel.element);
    }

    buildCenterPanel(panel) {
        if( this.ECUI.panels.find(p => p.area == panel.area)) {

        } else {
            if(panel.components != null && panel.components.find(c => c.component == "cardSelector")) {
                panel.element = document.createElement("div");
                panel.element.className = `ECUI-Panel-Card-Selector`;
                panel.element.id = panel.id;
                panel.element.style.gridArea = panel.area;
                var cardSelectorInfo = panel.components.find(c => c.component == "cardSelector");
                var cardSelectorComponent = new CardSelector(this.ECUI, cardSelectorInfo);
                var index = panel.components.findIndex(c => c.component == "cardSelector");
                panel.components.splice(index, 1);
                panel.components.push(cardSelectorComponent);
                this.ECUI.components.push(cardSelectorComponent);
                panel.element.appendChild(cardSelectorComponent.element);
            } else {
                var areaClass = Utils.getAreaClass(panel.area);

                panel.element = document.createElement("div");
                panel.element.className = `ECUI-Panel`;
                panel.element.id = panel.id;
            }

            
        }

        this.ECUI.panels.push(panel);
        var container = this.ECUI.areas.find(a => a.id == "center");
        container.area.appendChild(panel.element);
    }

}