import * as Default from "./Default/Panels.js";
import * as Bright from "./Bright/Panels.js";
import * as Fexillon from "./Fexillon/Panels.js";
import * as Teams from "./Teams/Panels.js";

export function getPanel(style, name) {
    var panel = Default.getPanel(name);
    if (style == "bright") {
        panel = Bright.getPanel(name);
    } else if (style == "fexillon") {
        panel = Fexillon.getPanel(name);
    } else if (style == "teams") {
        panel = Teams.getPanel(name);
    }
    return panel;
}