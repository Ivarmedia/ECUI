import { getDefaultTheme } from "./Default.js";
import { getBrightTheme } from "./Brights.js";
import { getFexillonTheme } from "./Fexillon.js";
import { getTeamsTheme } from "./Teams.js";

export function getTheme(name) {
    var theme = getDefaultTheme();
    theme.fonts
    if(name == "bright") {
        theme = getBrightTheme();
    } else if (name == "fexillon") {
        theme = getFexillonTheme();
    } else if (name == "teams") {
        theme = getTeamsTheme();
    }
    return theme;
}

