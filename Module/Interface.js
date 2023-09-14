import { StandardUI } from "../Interfaces/Standard/StandardUI.js";
import { SpaceUI } from "../Interfaces/Space/SpaceUI.js";
import { SecretUI } from "../Interfaces/Secret/SecretUI.js";
import * as Utils from "./Utils.js";

export function buildTheme(themeInfo) {
    var theme = themeInfo;
    if(theme == null || Utils.isNullOrEmpty(theme.style)) {
        theme = { style: "Standard" };
    }
    return theme;
}

export function setInterface(container, theme, global) {
    if(theme.style == "Space") {
        return new SpaceUI(container, theme, global);
    } else if(theme.style == "Secret") {
        return new SecretUI(container, theme, global);
    } else {
        return new StandardUI(container, theme, global);
    }
}
