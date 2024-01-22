import { StandardUI } from "../Interfaces/Standard/StandardUI.js";
import { SpaceUI } from "../Interfaces/Space/SpaceUI.js";
import { SecretUI } from "../Interfaces/Secret/SecretUI.js";
import * as Utils from "./Utils.js";
import * as Default from "../Resources/Default/Default.js";

export function buildTheme(themeInfo) {
    if(themeInfo == null || Utils.isNullOrEmpty(themeInfo.style)) {
        themeInfo = Default.getDefaultTheme();
    }
    return themeInfo;
}

export function setInterface(container, theme, global) {
    if(theme.style == "space") {
        return new SpaceUI(container, theme, global);
    } else if(theme.style == "secret") {
        return new SecretUI(container, theme, global);
    } else {
        return new StandardUI(container, theme, global);
    }
}
