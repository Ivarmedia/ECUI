import * as Utils from "../../../Module/Utils.js";
import * as Icons from "./Icons.js";

export class Header {

    ECUI;
    id;
    area;
    element;
    components;
    customizedButtons;
    blur;

    constructor(global, info) {
        this.ECUI = global;
        this.id = info.id;
        this.area = info.area;
        this.components = [];

        this.element = document.createElement("header");
        this.element.className = `ECUI-Panel-Header`;
        
        this.element.id = this.id;

        var header = info.components[0];
        header.element = document.createElement("div");
        header.element.className = `${this.ECUI.ECUI_Theme.classes.header} ${this.ECUI.ECUI_Theme.classes.headerShadow} ECUI-Panel-Header-Component`; 
        if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.headerBorder)) {
            header.element.className = `${this.ECUI.ECUI_Theme.classes.header} ${this.ECUI.ECUI_Theme.classes.headerBorder} ${this.ECUI.ECUI_Theme.classes.headerShadow} ECUI-Panel-Header-Component-With-Border`;
        }
        header.element.id = header.id;
        this.components.push(header);

        if(!Utils.isNullOrEmpty(header.background)) {
            var background = document.createElement("img");
            background.className = "ECUI-Panel-Header-Background";
            background.src = header.background;
            this.element.appendChild(background);
        }

        if(!Utils.isNullOrEmpty(header.blur)) {
            this.blur = `backdrop-filter: blur(${header.blur}px);`
        }

        this.element.append(header.element);

        this.customizedButtons = [];

        if(!Utils.isNullOrEmpty(header.components)) {
            header.components.forEach(unit => {
                if(unit.componentId == "unit") {
                    unit.element = document.createElement("div");
                    unit.element.className = "ECUI-Panel-Header-Unit";
                    unit.element.id = unit.id;
                    header.element.append(unit.element);
                    
                    if(!Utils.isNullOrEmpty(unit.components)) {
                        unit.components.forEach(component => {
                            if(component.componentId == "logo") {
                                this.buildLogo(component, unit.element);
                            } else if (component.componentId == "input") {
                                this.buildInput(component, unit.element);
                            } else if (component.componentId == "button") {
                                this.buildButton(component, unit.element);
                            } else if (component.componentId == "inputWithButtons") {
                                this.buildInputWithButtons(component, unit.element);
                            } else if (component.componentId == "profile") {
                                this.buildProfile(component, unit.element);
                            }
                        });
                    }
                }
            });
        }

        this.buildCss();
    }

    buildLogo(component, container) {
        component.element = document.createElement("button");
        component.element.className = `${this.ECUI.ECUI_Theme.classes.headerButtonsText} ${this.ECUI.ECUI_Theme.classes.headerPrimaryFont} ECUI-Panel-Header-Logo-Container`;
        if(!Utils.isNullOrEmpty(component.function)) {
            component.element.className = `${this.ECUI.ECUI_Theme.classes.headerButtonsText} ${this.ECUI.ECUI_Theme.classes.headerPrimaryFont} ECUI-Panel-Header-Logo-Container ECUI-Panel-Header-Cursor`;
        }
        component.element.id = component.id;
        
        if(!Utils.isNullOrEmpty(component.url) && component.url != "default") {
            var logo = document.createElement("img");
            logo.className = "ECUI-Panel-Header-Logo";
            logo.src = component.url;
            component.element.appendChild(logo);
        } else {
            component.element.innerHTML = `<svg class="ECUI-Panel-Header-Logo" x="0px" y="0px" viewBox="0 0 400 400" xml:space="preserve"> <rect class="${this.ECUI.ECUI_Theme.classes.logoSecondary}" x="51.7" y="51.7" width="58.8" height="58.8"/> <rect class="${this.ECUI.ECUI_Theme.classes.logoSecondary}" width="51.7" height="51.7"/> <path class="${this.ECUI.ECUI_Theme.classes.logoPrimary}" d="M121.2,299.2v-67.4h201.6v-58.6H51.7v184.6H367v-58.6L121.2,299.2z"/> <rect class="${this.ECUI.ECUI_Theme.classes.logoPrimary}" x="142.8" y="51.7" width="219.8" height="58.6"/> </svg>`;
        }

        if(!Utils.isNullOrEmpty(component.text)) {
            component.element.innerHTML += component.text;
        }

        container.append(component.element); 
    }

    buildInputWithButtons(component, container) {
        component.element = document.createElement("div");
        component.element.className = "ECUI-Panel-Header-Input-With-Button";
        component.element.id = component.id;
        
        if(!Utils.isNullOrEmpty(component.components)) {
            for(var i = 0; i < component.components.length; i++) {
                var subComponent = component.components[i];
                var subComponentPlace = "-Middle";
                if(i == 0) {
                    subComponentPlace = "-Start";
                } else if (i == (component.components.length - 1)) {
                    subComponentPlace = "-End";
                }
                if(subComponent.componentId == "input") {
                    this.buildInput(subComponent, component.element, subComponentPlace);
                } else if(subComponent.componentId == "button") {
                    this.buildButton(subComponent, component.element, subComponentPlace);
                }
            }
        };

        container.append(component.element); 
    }

    buildInput(component, container, place = "") {
        component.element = document.createElement("button");
        component.element.className = "ECUI-Panel-Hoverable-Input-Container ECUI-Panel-Header-Search-Input-Container";
        component.element.id = component.id;
        
        component.input = document.createElement("input");
        
        component.input.className = `${this.ECUI.ECUI_Theme.classes.headerPrimaryFont} ${this.ECUI.ECUI_Theme.classes.headerInputs} ${this.ECUI.ECUI_Theme.classes.headerInputsText} ${this.ECUI.ECUI_Theme.classes.headerInputsShadow} ${this.ECUI.ECUI_Theme.classes.headerInputsHover} ${this.ECUI.ECUI_Theme.classes.headerInputsTextHover} ${this.ECUI.ECUI_Theme.classes.headerInputsShadowHover} ECUI-Panel-Header-Search-Input${place}`;
        if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.headerInputsBorder)) {
            component.input.className = `${this.ECUI.ECUI_Theme.classes.headerPrimaryFont} ${this.ECUI.ECUI_Theme.classes.headerInputs} ${this.ECUI.ECUI_Theme.classes.headerInputsText} ${this.ECUI.ECUI_Theme.classes.headerInputsBorder} ${this.ECUI.ECUI_Theme.classes.headerInputsShadow} ${this.ECUI.ECUI_Theme.classes.headerInputsHover} ${this.ECUI.ECUI_Theme.classes.headerInputsTextHover} ${this.ECUI.ECUI_Theme.classes.headerInputsBorderHover} ${this.ECUI.ECUI_Theme.classes.headerInputsShadowHover} ECUI-Panel-Header-Search-Input-With-Border${place}`;
        }

        component.input.type = component.type;
        component.input.placeholder = component.placeholder;
        component.element.append(component.input);

        Icons.printIcon(component.type, `${this.ECUI.ECUI_Theme.classes.headerInputsIcon} ECUI-Panel-Header-Search-Input-Icon`, component.element);
        
        container.append(component.element); 
    }

    buildButton(component, container, place = "") {
        component.element = document.createElement("button");
        component.element.id = component.id;

        var padding = "ECUI-Panel-Header-Button-Padding";
        if(!Utils.isNullOrEmpty(component.icon) && Utils.isNullOrEmpty(component.name)) {
            padding = "ECUI-Panel-Header-Button-Icon-Padding";
        }
        var uppercase = "";
        if(component.uppercase == true) {
            uppercase = "ECUI-Panel-Header-Button-Uppercase";
        }

        if(!Utils.isNullOrEmpty(component.colours)) {
            this.customizedButtons.push(component);
            component.element.className = `${this.ECUI.ECUI_Theme.classes.headerPrimaryFont} ECUI-Panel-Header-Button${place} ${padding} ${uppercase}`;
            if(!Utils.isNullOrEmpty(component.colours.border)) {
                component.element.className = `${this.ECUI.ECUI_Theme.classes.headerPrimaryFont} ECUI-Panel-Header-Button-With-Border${place} ${padding} ${uppercase}`;
            }
            if(!Utils.isNullOrEmpty(component.icon) && !Utils.isNullOrEmpty(component.name)) {
                Icons.printIcon(component.icon, `ECUI-Panel-Header-Button-Icon`, component.element);
                component.element.innerHTML += component.name;
            } else if (!Utils.isNullOrEmpty(component.icon) && Utils.isNullOrEmpty(component.name)) {
                if(component.colours.background == "transparent") {
                    Icons.printIcon(component.icon, `ECUI-Panel-Header-Button-Icon-Only-No-Backrgound`, component.element);
                } else {
                    Icons.printIcon(component.icon, `ECUI-Panel-Header-Button-Icon-Only`, component.element);
                }
            } else if(Utils.isNullOrEmpty(component.icon) && !Utils.isNullOrEmpty(component.name)) {
                component.element.innerHTML += component.name;
            }
        } else {
            component.element.className = `${this.ECUI.ECUI_Theme.classes.headerPrimaryFont} ${this.ECUI.ECUI_Theme.classes.headerButtons} ${this.ECUI.ECUI_Theme.classes.headerButtonsText} ${this.ECUI.ECUI_Theme.classes.headerButtonsShadow} ${this.ECUI.ECUI_Theme.classes.headerButtonsHover} ${this.ECUI.ECUI_Theme.classes.headerButtonsTextHover} ${this.ECUI.ECUI_Theme.classes.headerButtonsShadowHover} ECUI-Panel-Header-Button${place} ${padding} ${uppercase}`;
            if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.headerButtonsBorder)) {
                component.element.className = `${this.ECUI.ECUI_Theme.classes.headerPrimaryFont} ${this.ECUI.ECUI_Theme.classes.headerButtons} ${this.ECUI.ECUI_Theme.classes.headerButtonsText} ${this.ECUI.ECUI_Theme.classes.headerButtonsBorder} ${this.ECUI.ECUI_Theme.classes.headerButtonsShadow} ${this.ECUI.ECUI_Theme.classes.headerButtonsHover} ${this.ECUI.ECUI_Theme.classes.headerButtonsTextHover} ${this.ECUI.ECUI_Theme.classes.headerButtonsBorderHover} ${this.ECUI.ECUI_Theme.classes.headerButtonsShadowHover} ECUI-Panel-Header-Button-With-Border${place} ${padding} ${uppercase}`;
            }
            if(!Utils.isNullOrEmpty(component.icon) && !Utils.isNullOrEmpty(component.name)) {
                Icons.printIcon(component.icon, `${this.ECUI.ECUI_Theme.classes.headerButtonsIcon} ${this.ECUI.ECUI_Theme.classes.headerButtonsIconHover} ECUI-Panel-Header-Button-Icon`, component.element);
                component.element.innerHTML += component.name;
            } else if (!Utils.isNullOrEmpty(component.icon) && Utils.isNullOrEmpty(component.name)) {
                if(this.ECUI.ECUI_Theme.classes.headerButtons == "transparent") {
                    Icons.printIcon(component.icon, `${this.ECUI.ECUI_Theme.classes.headerButtonsIcon} ${this.ECUI.ECUI_Theme.classes.headerButtonsIconHover} ECUI-Panel-Header-Button-Icon-Only-No-Backrgound`, component.element);
                } else {
                    Icons.printIcon(component.icon, `${this.ECUI.ECUI_Theme.classes.headerButtonsIcon} ${this.ECUI.ECUI_Theme.classes.headerButtonsIconHover} ECUI-Panel-Header-Button-Icon-Only`, component.element);
                }
            } else if(Utils.isNullOrEmpty(component.icon) && !Utils.isNullOrEmpty(component.name)) {
                component.element.innerHTML += component.name;
            }

        }
        container.append(component.element); 
    }

    buildProfile(component, container) {
        component.element = document.createElement("button");
        component.element.className = "ECUI-Panel-Header-Profile-Container";
        component.element.id = component.id;

        if(!Utils.isNullOrEmpty(component.topLine) || !Utils.isNullOrEmpty(component.bottomLine)) {
            var info = document.createElement("div");
            info.className = "ECUI-Panel-Header-Profile-Info";
            component.element.append(info);

            if(!Utils.isNullOrEmpty(component.topLine)) {
                var topLine = document.createElement("div");
                topLine.className = `${this.ECUI.ECUI_Theme.classes.headerPrimaryFont} ${this.ECUI.ECUI_Theme.classes.headerProfileTopLine} ${this.ECUI.ECUI_Theme.classes.headerProfileTopLineHover} ECUI-Panel-Header-Profile-Info-Top-Line`;
                topLine.innerHTML = component.topLine;
                info.append(topLine);
            }

            if(!Utils.isNullOrEmpty(component.bottomLine)) {
                var bottomLine = document.createElement("div");
                bottomLine.className = `${this.ECUI.ECUI_Theme.classes.headerSecondaryFont} ${this.ECUI.ECUI_Theme.classes.headerProfileBottomLine} ${this.ECUI.ECUI_Theme.classes.headerProfileBottomLineHover} ECUI-Panel-Header-Profile-Info-Bottom-Line`;
                bottomLine.innerHTML = component.bottomLine;
                info.append(bottomLine);
            }
        }

        var iconContainer = document.createElement("div");
        iconContainer.className = `${this.ECUI.ECUI_Theme.classes.headerProfile} ${this.ECUI.ECUI_Theme.classes.headerProfileShadow} ${this.ECUI.ECUI_Theme.classes.headerProfileHover} ${this.ECUI.ECUI_Theme.classes.headerProfileShadowHover} ECUI-Panel-Header-Profile-Icon-Container`;
        if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.headerProfileBorder)) {
            iconContainer.className = `${this.ECUI.ECUI_Theme.classes.headerProfile} ${this.ECUI.ECUI_Theme.classes.headerProfileBorder} ${this.ECUI.ECUI_Theme.classes.headerProfileShadow} ${this.ECUI.ECUI_Theme.classes.headerProfileHover} ${this.ECUI.ECUI_Theme.classes.headerProfileBorderHover} ${this.ECUI.ECUI_Theme.classes.headerProfileShadowHover} ECUI-Panel-Header-Profile-Icon-Container-With-Border`;
        }
        component.element.append(iconContainer);
        
        if(!Utils.isNullOrEmpty(component.url)) {
            var profilePicture = document.createElement("img");
            profilePicture.className = "ECUI-Panel-Header-Profile-Picture";
            profilePicture.src = component.url;
            iconContainer.element.appendChild(profilePicture);
        } else {
            iconContainer.innerHTML += `<svg class="${this.ECUI.ECUI_Theme.classes.headerProfileIcon} ${this.ECUI.ECUI_Theme.classes.headerProfileIconHover} ECUI-Panel-Header-Profile-Icon" width="16" height="16" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/> </svg>`;
        }
        container.append(component.element); 
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Header-Style";

        if(!Utils.isNullOrEmpty(this.components) && !Utils.isNullOrEmpty(this.components[0].components) && this.components[0].components.length > 2) {
            var lengths = [];
        }

        var cssRules = `
            .ECUI-Panel-Header { position: relative; height: 56px; width: 100%; }
            
            .ECUI-Panel-Header-Component { position: relative; height: 56px; width: 100%; padding: 0 16px; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 30px; ${this.blur} }
            .ECUI-Panel-Header-Component-With-Border { position: relative; height: 56px; width: 100%; border-bottom-width: 1px; border-bottom-style: solid; padding: 0 16px; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 30px; ${this.blur} }
            .ECUI-Panel-Header-Background { width: 100%; height: 56px; position: absolute; left: 0%; top: 0%; object-fit: cover; }

            .ECUI-Panel-Header-Unit { display: flex; flex-direction: row; align-items: center; gap: 20px; }
            .ECUI-Panel-Header-Logo-Container { outline: 0; background-color: transparent; margin: 0px; padding: 0px; border: none; line-height: 0px; display: flex; flex-direction: row; align-items: center; gap: 15px; font-size: 1.2em; }
            .ECUI-Panel-Header-Logo { height: 34px; max-width: 200px; min-width: 40px; object-fit: contain; object-position: center; margin-top: 1px; }
            .ECUI-Panel-Header-Cursor { cursor: pointer }

            .ECUI-Panel-Header-Input-With-Button { display: flex; flex-direction: row; }
            
            .ECUI-Panel-Header-Button { height: 38px; outline: 0; display: flex; flex-direction: row; align-items: center; margin: 0px; border-radius: 4px; border: none; gap: 10px; cursor: pointer; white-space: nowrap; font-size: 1em; }
            .ECUI-Panel-Header-Button-Start { height: 38px; outline: 0; display: flex; flex-direction: row; align-items: center; margin: 0px; border-top-left-radius: 4px; border-bottom-left-radius: 4px; border: none; gap: 10px; cursor: pointer; white-space: nowrap; font-size: 1em; }
            .ECUI-Panel-Header-Button-Middle { height: 38px; outline: 0; display: flex; flex-direction: row; align-items: center; margin: 0px; border: none; gap: 10px; cursor: pointer; white-space: nowrap; font-size: 1em; }
            .ECUI-Panel-Header-Button-End { height: 38px; outline: 0; display: flex; flex-direction: row; align-items: center; margin: 0px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border: none; gap: 10px; cursor: pointer; white-space: nowrap; font-size: 1em; }
            .ECUI-Panel-Header-Button-With-Border { height: 38px; outline: 0; display: flex; flex-direction: row; align-items: center; margin: 0px; border-radius: 4px; border-style: solid; border-width: 1px; gap: 10px; cursor: pointer; white-space: nowrap; font-size: 1em; }
            .ECUI-Panel-Header-Button-With-Border-Start { height: 38px; outline: 0; display: flex; flex-direction: row; align-items: center; margin: 0px; border-top-left-radius: 4px; border-bottom-left-radius: 4px; border-style: solid; border-width: 1px; gap: 10px; cursor: pointer; white-space: nowrap; font-size: 1em; }
            .ECUI-Panel-Header-Button-With-Border-Middle { height: 38px; outline: 0; display: flex; flex-direction: row; align-items: center; margin: 0px; border-style: solid; border-width: 1px; gap: 10px; cursor: pointer; white-space: nowrap; font-size: 1em; }
            .ECUI-Panel-Header-Button-With-Border-End { height: 38px; outline: 0; display: flex; flex-direction: row; align-items: center; margin: 0px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border-style: solid; border-width: 1px; gap: 10px; cursor: pointer; white-space: nowrap; font-size: 1em; }
            
            .ECUI-Panel-Header-Button-Icon { height: 14px; width: 14px; min-width: 14px; }
            .ECUI-Panel-Header-Button-Icon-Only { height: 18px; width: 18px; min-width: 18px; }
            .ECUI-Panel-Header-Button-Icon-Only-No-Backrgound { height: 22px; width: 24px; min-width: 22px; }
            .ECUI-Panel-Header-Button-Padding { padding: 0 15px; }
            .ECUI-Panel-Header-Button-Icon-Padding { padding: 0 10px; }
            .ECUI-Panel-Header-Button-Uppercase { text-transform: uppercase; }

            .ECUI-Panel-Header-Search-Input-Container { width: 60vw; max-width: 500px; position: relative; margin: 0px; padding: 0px; border: none; outline: 0; background-color: transparent; }
            .ECUI-Panel-Header-Search-Input { height: 38px; min-width: 260px; width: 100%; outline: 0; padding: 0 15px; margin: 0px; border-radius: 4px; border: none; font-size: 1em; }
            .ECUI-Panel-Header-Search-Input-Start { height: 38px; min-width: 260px; width: 100%; outline: 0; padding: 0 15px; margin: 0px; border: none; border-top-left-radius: 4px; border-bottom-left-radius: 4px; font-size: 1em; }
            .ECUI-Panel-Header-Search-Input-Middle { height: 38px; min-width: 260px; width: 100%; outline: 0; padding: 0 15px; margin: 0px; border: none; font-size: 1em; }
            .ECUI-Panel-Header-Search-Input-End { height: 38px; min-width: 260px; width: 100%; outline: 0; padding: 0 15px; margin: 0px; border: none; border-top-right-radius: 4px; border-bottom-right-radius: 4px; font-size: 1em; }
            .ECUI-Panel-Header-Search-Input-With-Border { height: 38px; min-width: 260px; width: 100%; outline: 0; padding: 0 15px; margin: 0px; border-radius: 4px; border-style: solid; border-width: 1px; font-size: 1em; }
            .ECUI-Panel-Header-Search-Input-With-Border-Start { height: 38px; min-width: 260px; width: 100%; outline: 0; padding: 0 15px; margin: 0px; border-style: solid; border-width: 1px; border-top-left-radius: 4px; border-bottom-left-radius: 4px; border-right: none; font-size: 1em; }
            .ECUI-Panel-Header-Search-Input-With-Border-Middle { height: 38px; min-width: 260px; width: 100%; outline: 0; padding: 0 15px; margin: 0px; border-style: solid; border-width: 1px; border-left: none; border-right: none; font-size: 1em; }
            .ECUI-Panel-Header-Search-Input-With-Border-End { height: 38px; min-width: 260px; width: 100%; outline: 0; padding: 0 15px; margin: 0px; border-style: solid; border-width: 1px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border-left: none; font-size: 1em;}
            
            .ECUI-Panel-Header-Search-Input::-webkit-search-cancel-button, .ECUI-Panel-Header-Search-Input-Start::-webkit-search-cancel-button, .ECUI-Panel-Header-Search-Input-Middle::-webkit-search-cancel-button, ECUI-Panel-Header-Search-Input-End::-webkit-search-cancel-button, .ECUI-Panel-Header-Search-Input-With-Border::-webkit-search-cancel-button, .ECUI-Panel-Header-Search-Input-With-Border-Start::-webkit-search-cancel-button, .ECUI-Panel-Header-Search-Input-With-Border-Middle::-webkit-search-cancel-button, .ECUI-Panel-Header-Search-Input-With-Border-End::-webkit-search-cancel-button { -webkit-appearance: none; }
            .ECUI-Panel-Header-Search-Input::-moz-search-cancel-button, .ECUI-Panel-Header-Search-Input-Start::-moz-search-cancel-button, .ECUI-Panel-Header-Search-Input-Middle::-moz-search-cancel-button, ECUI-Panel-Header-Search-Input-End::-moz-search-cancel-button, .ECUI-Panel-Header-Search-Input-With-Border::-moz-search-cancel-button, .ECUI-Panel-Header-Search-Input-With-Border-Start::-moz-search-cancel-button, .ECUI-Panel-Header-Search-Input-With-Border-Middle::-moz-search-cancel-button, .ECUI-Panel-Header-Search-Input-With-Border-End::-moz-search-cancel-button
            .ECUI-Panel-Header-Search-Input::-ms-clear, .ECUI-Panel-Header-Search-Input-Start::-ms-clear, .ECUI-Panel-Header-Search-Input-Middle::-ms-clear, ECUI-Panel-Header-Search-Input-End::-ms-clear, .ECUI-Panel-Header-Search-Input-With-Border::-ms-clear, .ECUI-Panel-Header-Search-Input-With-Border-Start::-ms-clear, .ECUI-Panel-Header-Search-Input-With-Border-Middle::-ms-clear, .ECUI-Panel-Header-Search-Input-With-Border-End::-ms-clear { -webkit-appearance: none; }
            .ECUI-Panel-Header-Search-Input::-ms-reveal, .ECUI-Panel-Header-Search-Input-Start::-ms-reveal, .ECUI-Panel-Header-Search-Input-Middle::-ms-reveal, ECUI-Panel-Header-Search-Input-End::-ms-reveal, .ECUI-Panel-Header-Search-Input-With-Border::-ms-reveal, .ECUI-Panel-Header-Search-Input-With-Border-Start::-ms-reveal, .ECUI-Panel-Header-Search-Input-With-Border-Middle::-ms-reveal, .ECUI-Panel-Header-Search-Input-With-Border-End::-ms-reveal { -webkit-appearance: none; }
            
            .ECUI-Panel-Header-Search-Input-Icon { position: absolute; right: 12px; width: 18px; height: 18px; top: 50%; transform: translateY(-50%); pointer-events: none; }
            .ECUI-Panel-Header-Profile-Container { cursor: pointer; outline: 0; background-color: transparent; margin: 0px; padding: 0px; border: none; display: flex; flex-direction: row; align-items: center; gap: 12px; }
            .ECUI-Panel-Header-Profile-Info { display: flex; flex-direction: column; align-items: flex-end; }
            .ECUI-Panel-Header-Profile-Info-Top-Line { font-size: 14px; max-width: 140px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
            .ECUI-Panel-Header-Profile-Info-Bottom-Line { font-size: 11px; max-width: 140px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
            .ECUI-Panel-Header-Profile-Icon-Container { position: relative; height: 38px; width: 38px; border-radius: 50%; border: none; overflow: hidden; }
            .ECUI-Panel-Header-Profile-Icon-Container-With-Border { position: relative; height: 38px; width: 38px; border-radius: 50%; border-style: solid; border-width: 1px; overflow: hidden; }
            .ECUI-Panel-Header-Profile-Icon { height: 22px; width: 22px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -55%);}
        `; 
        
        if(!Utils.isNullOrEmpty(this.customizedButtons)) {
            this.customizedButtons.forEach(button => {
                cssRules += `
                    #${button.id} { background-color: ${button.colours.background}; color: ${button.colours.text}; border-color: ${button.colours.border}; box-shadow: ${button.colours.shadow} }
                    #${button.id} svg { fill: ${button.colours.icon}; }
                    #${button.id}:hover, #${button.id}:focus, #${button.id}:active { background-color: ${button.colours.backgroundHover}; color: ${button.colours.textHover}; border-color: ${button.colours.borderHover}; box-shadow: ${button.colours.shadowHover} }
                    #${button.id}:hover svg, #${button.id}:focus svg, #${button.id}:active svg { fill: ${button.colours.iconHover}; }
                `;
            });
        }
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Header-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}