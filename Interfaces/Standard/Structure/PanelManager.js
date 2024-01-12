import { Header } from "../Components/Header.js";
import { SideNav } from "../Components/SideNav.js";

export class PanelManager {

    ECUI;

    constructor(global) {
        this.ECUI = global;
    }

    removeMatchingPanels(panelsIds) {
        panelsIds.forEach(panelId => {
            if(this.ECUI.ECUI_Panels.some(p => p.id == panelId)) {
                var panelToRemove = this.ECUI.ECUI_Panels.find(p => p.id == panelId);
                panelToRemove.element.remove();
                this.ECUI.ECUI_Panels = this.ECUI.ECUI_Panels.filter(p => p.id !== panelId);
            }
        });
    }

    loadPanels(panels) {
        panels.forEach(panel => {
            if(panel.components != null) {
                if(panel.area.includes("center")) {

                } else {
                    this.buildPanel(panel);
                }
            }
        });
    }

    buildPanel(panelInfo) {
        var panel;
        if(panelInfo.area == "header" && panelInfo.components.find(c => c.componentId == "header")) {
            panel = new Header(this.ECUI, panelInfo);
        } else if (panelInfo.area == "sideNav" && panelInfo.components.find(c => c.componentId == "sideNav")) {
            panel = new SideNav(this.ECUI, panelInfo);
        }
        this.ECUI.ECUI_Panels.push(panel);
        var container = this.ECUI.ECUI_Areas.find(a => a.id == panelInfo.area);
        container.area.appendChild(panel.element);
    }




}