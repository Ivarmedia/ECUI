import { getHeader } from "./Header.js";
import { getSideNav } from "./SideNav.js";

export function getPanel(name) {
    var panel = {};
    if(name == "header") {
        panel = getHeader();
    } else if (name == "sideNav") { 
        panel = getSideNav();
    }
    return panel;
}  
