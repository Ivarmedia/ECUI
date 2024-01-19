import * as Utils from "../../../Module/Utils.js";
import * as Icons from "./Icons.js";

export class SubSideNav {

    ECUI;
    id;
    componentId;
    element;
    components;
    blur;

    constructor(global, info, colours, icon) {
        this.ECUI = global;
        this.id = info.id;
        this.componentId = info.componentId;
        this.components = [];

        this.element = document.createElement("div");   
        this.element.id = this.id;

        if(!Utils.isNullOrEmpty(info.blur)) {
            this.blur = `backdrop-filter: blur(${info.blur}px);`
        }

        this.element.className = `ECUI-Panel-Sub-Side-Nav-Container`;

        if(!Utils.isNullOrEmpty(info.background)) {
            var background = document.createElement("img");
            background.className = "ECUI-Panel-Sub-Side-Nav-Background";
            background.src = info.background;
            this.element.appendChild(background);
        }

        var subSideNav = document.createElement("div");
        subSideNav.className = `${this.ECUI.ECUI_Theme.classes.subSideNav} ${this.ECUI.ECUI_Theme.classes.subSideNavShadow} ECUI-Panel-Sub-Side-Nav`;
        if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.subSideNavBorder)) {
            subSideNav.className = `${this.ECUI.ECUI_Theme.classes.subSideNav} ${this.ECUI.ECUI_Theme.classes.subSideNavBorder} ${this.ECUI.ECUI_Theme.classes.subSideNavShadow} ECUI-Panel-Sub-Side-Nav-With-Border`;
            if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.sideNavBorder)) {
                subSideNav.className = `${this.ECUI.ECUI_Theme.classes.subSideNav} ${this.ECUI.ECUI_Theme.classes.subSideNavBorder} ${this.ECUI.ECUI_Theme.classes.subSideNavShadow} ECUI-Panel-Sub-Side-Nav-With-Double-Border`;
            }
        }
        this.element.append(subSideNav);

        for(var i = 0; i < info.components.length; i++) {
            var subComponent = info.components[i];
            if(subComponent.componentId == "title") {
                var titleContainer = document.createElement("div");
                titleContainer.className = "ECUI-Panel-Sub-Side-Title-Container";
                titleContainer.id = subComponent.id;
                subSideNav.append(titleContainer);

                var titleImageContainer = document.createElement("div");
                titleImageContainer.className = `${this.ECUI.ECUI_Theme.classes.subSideNavContrast} ${this.ECUI.ECUI_Theme.classes.subSideNavContrastShadow} ECUI-Panel-Sub-Side-Title-Image-Container`;
                if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.subSideNavBorder)) {
                    titleImageContainer.className = `${this.ECUI.ECUI_Theme.classes.subSideNavContrast} ${this.ECUI.ECUI_Theme.classes.subSideNavContrastShadow} ${this.ECUI.ECUI_Theme.classes.subSideNavBorder} ECUI-Panel-Sub-Side-Title-Image-Container-With-Border`;
                }
                titleContainer.append(titleImageContainer);

                if(!Utils.isNullOrEmpty(subComponent.background)) {
                    var background = document.createElement("img");
                    background.className = "ECUI-Panel-Sub-Side-Title-Background";
                    background.src = subComponent.background;
                    titleImageContainer.appendChild(background);
                }

                if(!Utils.isNullOrEmpty(subComponent.image)) {
                    var image = document.createElement("img");
                    image.className = "ECUI-Panel-Sub-Side-Title-Image";
                    image.src = subComponent.image;
                    titleImageContainer.appendChild(image);
                    if(!Utils.isNullOrEmpty(icon)) {
                        Icons.printComplexIcon(icon, "ECUI-Panel-Sub-Side-Title-Displaced-Icon", colours, titleImageContainer);
                    }
                } else if(!Utils.isNullOrEmpty(subComponent.logo)) {
                    var logo = document.createElement("img");
                    logo.className = "ECUI-Panel-Sub-Side-Title-Logo";
                    logo.src = subComponent.logo;
                    titleImageContainer.appendChild(logo);
                    if(!Utils.isNullOrEmpty(icon)) {
                        Icons.printComplexIcon(icon, "ECUI-Panel-Sub-Side-Title-Displaced-Icon", colours, titleImageContainer);
                    }
                } else {
                    if(!Utils.isNullOrEmpty(icon)) {
                        Icons.printComplexIcon(icon, "ECUI-Panel-Sub-Side-Title-Icon", colours, titleImageContainer);
                    }
                }

                var titleText = document.createElement("div");
                titleText.className = `${this.ECUI.ECUI_Theme.classes.sideNavFont} ${this.ECUI.ECUI_Theme.classes.subSideNavText} ECUI-Panel-Sub-Side-Title-Text`;
                titleText.innerHTML = subComponent.name;
                titleContainer.append(titleText);
            } else if (subComponent.componentId == "buttons") {
                var searchContainer = document.createElement("div");
                searchContainer.className = `${this.ECUI.ECUI_Theme.classes.subSideNavContrast} ${this.ECUI.ECUI_Theme.classes.subSideNavContrastShadow} ECUI-Panel-Sub-Side-Buttons-Search-Container ECUI-Panel-Sub-Side-Buttons-Search-Element`;
                if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.subSideNavBorder)) {
                    searchContainer.className = `${this.ECUI.ECUI_Theme.classes.subSideNavContrast} ${this.ECUI.ECUI_Theme.classes.subSideNavContrastShadow} ${this.ECUI.ECUI_Theme.classes.subSideNavBorder} ECUI-Panel-Sub-Side-Buttons-Search-Container-With-Border ECUI-Panel-Sub-Side-Buttons-Search-Element`;
                }
                subSideNav.append(searchContainer);

                var search = document.createElement("input");
                search.className = `${this.ECUI.ECUI_Theme.classes.sideNavFont} ${this.ECUI.ECUI_Theme.classes.subSideNavText} ECUI-Panel-Sub-Side-Buttons-Search`;
                search.type = "search";
                search.placeholder = "Search...";
                Icons.printIcon("search", `${this.ECUI.ECUI_Theme.classes.headerInputsIcon} ECUI-Panel-Sub-Side-Buttons-Search-Icon`, searchContainer);   
                searchContainer.append(search);

                var buttonsContainer = document.createElement("div");
                buttonsContainer.className = `ECUI-Panel-Sub-Side-Buttons-Container`;
                buttonsContainer.id = subComponent.id;
                subSideNav.append(buttonsContainer);

                var buttonsScrollTrack = document.createElement("div");
                buttonsScrollTrack.className = `${this.ECUI.ECUI_Theme.classes.subSideNavContrast} ${this.ECUI.ECUI_Theme.classes.subSideNavContrastShadow} ECUI-Panel-Sub-Side-Buttons-Container-Scroll-Bar-Track`;
                buttonsContainer.append(buttonsScrollTrack);

                var buttonsContent = document.createElement("div");
                buttonsContent.className = `${this.ECUI.ECUI_Theme.classes.subSideNavScrollBar} ECUI-Panel-Sub-Side-Buttons-Scrollable-Content`;
                buttonsContainer.append(buttonsContent);

                var buttons = document.createElement("div");
                buttons.className = "ECUI-Panel-Sub-Side-Buttons";
                buttonsContent.append(buttons);

                if(!Utils.isNullOrEmpty(subComponent.components)) {
                    var hueVariation = 0;
                    for(var i = 0; i < subComponent.components.length; i++) {
                        var button = subComponent.components[i];
                        if (!Utils.isNullOrEmpty(subComponent.colours)) {
                            this.buildButton(button, buttons, button.colours);
                        } else if (!Utils.isNullOrEmpty(subComponent.options) && subComponent.options.progressive && !Utils.isNullOrEmpty(subComponent.options.hueVariation)) {
                            var proggressiveColours = {
                                primary: Utils.variateColourHue(colours.primary, hueVariation),
                                contrast: Utils.variateColourHue(colours.contrast, hueVariation),
                                border: colours.border
                            }
                            hueVariation = hueVariation + subComponent.options.hueVariation;
                            this.buildButton(button, buttons, proggressiveColours);
                        } else if (!Utils.isNullOrEmpty(subComponent.options) && subComponent.options.alternate && !Utils.isNullOrEmpty(subComponent.options.hueVariation)) {
                            var alternativeColours = {
                                primary: Utils.variateColourHue(colours.primary, subComponent.options.hueVariation),
                                contrast: Utils.variateColourHue(colours.contrast, subComponent.options.hueVariation),
                                border: colours.border
                            }
                            if(i % 2 != 0) {
                                this.buildButton(button, buttons, colours);
                            } else {
                                this.buildButton(button, buttons, alternativeColours);
                            }
                        }  else {
                            this.buildButton(button, buttons, colours);
                        } 
                    }
                }
            }
        }

        this.buildCss();
        this.animateButtons();
        setTimeout(() => {
            this.adjustButtonsContainerHeight();
        }, 50);
    }

    buildButton(component, container, colours) {
        component.element = document.createElement("button");
        component.element.id = component.id;

        var uppercase = "";
        if(!Utils.isNullOrEmpty(component.options) && component.options.uppercase) {
            uppercase = "ECUI-Panel-Sub-Side-Nav-Button-Uppercase";
        }

        component.element.className = `${this.ECUI.ECUI_Theme.classes.subSideNavButtons} ${this.ECUI.ECUI_Theme.classes.subSideNavButtonsShadow} ${this.ECUI.ECUI_Theme.classes.subSideNavButtonsHover} ECUI-Panel-Side-Sub-Nav-Button ECUI-Panel-Side-Sub-Nav-Animated-Button ${uppercase}`;
        if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.subSideNavButtonsBorder)) {
            component.element.className = `${this.ECUI.ECUI_Theme.classes.subSideNavButtons} ${this.ECUI.ECUI_Theme.classes.subSideNavButtonsBorder} ${this.ECUI.ECUI_Theme.classes.subSideNavButtonsShadow} ${this.ECUI.ECUI_Theme.classes.subSideNavButtonsHover} ECUI-Panel-Side-Sub-Nav-Button-With-Border ECUI-Panel-Side-Sub-Nav-Animated-Button ${uppercase}`;
        }

        var decoration = document.createElement("div");
        decoration.className = "ECUI-Panel-Sub-Side-Nav-Button-Decoration";
        decoration.style.backgroundColor = colours.primary;
        component.element.append(decoration);

        var buttonContent = document.createElement("div");
        buttonContent.className = "ECUI-Panel-Sub-Side-Nav-Button-Content";
        component.element.append(buttonContent);

        var textContainer = document.createElement("div");
        textContainer.className = `${this.ECUI.ECUI_Theme.classes.sideNavFont} ${this.ECUI.ECUI_Theme.classes.subSideNavButtonsText} ECUI-Panel-Sub-Side-Nav-Button-Text-Container`;
        textContainer.innerHTML = component.name;
        buttonContent.append(textContainer);

        var iconContainer = document.createElement("div");
        iconContainer.className = "ECUI-Panel-Sub-Side-Nav-Button-Icon-Container";
        buttonContent.append(iconContainer);
        Icons.printComplexIcon(component.icon, "ECUI-Panel-Sub-Side-Nav-Button-Icon", colours, iconContainer)

        container.append(component.element); 
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Sub-Side-Nav-Style";



        var cssRules = `
            .ECUI-Panel-Sub-Side-Nav-Container { width: 300px; max-width: 0px; position: absolute; left: 100%; height: 100%; overflow: hidden; animation: subSideNavAppearance; animation-duration: 0.5s; animation-fill-mode: forwards; }
            .ECUI-Panel-Sub-Side-Nav { width: 300px; height: 100%; border: none; display:flex; flex-direction: column; justify-content: space-between; overflow: hidden; transform: translateX(-100px); animation: subSideNavContentAppearance; animation-duration: 0.5s; animation-fill-mode: forwards; ${this.blur} }
            .ECUI-Panel-Sub-Side-Nav-With-Border { width: 300px; border-right-width: 1px; border-right-style: solid; height: 100%; display:flex; flex-direction: column; justify-content: space-between; overflow: hidden; transform: translateX(-100px); animation: subSideNavContentAppearance; animation-duration: 0.5s; animation-fill-mode: forwards; ${this.blur} }
            .ECUI-Panel-Sub-Side-Nav-With-Double-Border { width: 300px; border-right-width: 1px; border-right-style: solid; border-left-width: 1px; border-left-style: solid; height: 100%; display:flex; flex-direction: column; justify-content: space-between; overflow: hidden; transform: translateX(-100px); animation: subSideNavContentAppearance; animation-duration: 0.5s; animation-fill-mode: forwards; ${this.blur} }
            .ECUI-Panel-Sub-Side-Nav-Background { position: absolute; width: 100%; height: 100%; object-fit: cover; object-position: right; right: 0px; top: 0px; transform: translateX(-100px); animation: subSideNavContentAppearance; animation-duration: 0.5s; animation-fill-mode: forwards; }

            .ECUI-Panel-Sub-Side-Title-Container { padding: 20px; width: 100%; display: flex; flex-direction: column; align-items: center; }
            .ECUI-Panel-Sub-Side-Title-Image-Container { position: relative; width: 100px; height: 100px; border-radius: 50%; border: none; }
            .ECUI-Panel-Sub-Side-Title-Image-Container-With-Border { position: relative; width: 100px; height: 100px; border-radius: 50%; border-style: solid; border-width: 1px; }
            .ECUI-Panel-Sub-Side-Title-Background { position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
            .ECUI-Panel-Sub-Side-Title-Icon { min-width: 40px; width: 40px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }
            .ECUI-Panel-Sub-Side-Title-Displaced-Icon { position: absolute; width: 40px; right: -10px; bottom: 0px; min-width: 40px; }
            .ECUI-Panel-Sub-Side-Title-Logo { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: 100%; width: 100%; max-height: 46px; max-width: 70px; object-fit: contain; }
            .ECUI-Panel-Sub-Side-Title-Image { position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
            .ECUI-Panel-Sub-Side-Title-Text { width: 100%; padding: 0px 15px; font-size: 1.1em;; margin-top: 15px; word-break: break-word; text-align: center; border: none; }
            
            .ECUI-Panel-Sub-Side-Buttons-Search-Container { padding: 0px 15px; width: calc(100% + 20px); transform: translateX(-10px); }
            .ECUI-Panel-Sub-Side-Buttons-Search-Container-With-Border { padding: 0px 15px; width: calc(100% + 20px); transform: translateX(-10px); border-top-style: solid; border-bottom-style: solid; border-top-width: 1px; border-bottom-width: 1px; }
            .ECUI-Panel-Sub-Side-Buttons-Search { width: 100%; font-size: 1em; background-color: transparent; border: none; outline: 0; margin: 0px; padding: 12px; }
            .ECUI-Panel-Sub-Side-Buttons-Search-Icon { position: absolute; width: 18px; height: 18px; top: 11px; right: 20px; }

            .ECUI-Panel-Sub-Side-Buttons-Container { height: 100%; position: relative; width: 100%; padding: 3px 0px; overflow: hidden; }
            .ECUI-Panel-Sub-Side-Buttons-Container-Scroll-Bar-Track { height: 100%; width: 28px; position: absolute; right: -14px; top: 0px; }

            .ECUI-Panel-Sub-Side-Buttons-Scrollable-Content { position: relative; width: calc(100% - 3px); height: 100%; max-height: 100%; overflow-y: scroll; padding-right: 5px; }
            
            .ECUI-Panel-Sub-Side-Buttons-Scrollable-Content::-webkit-scrollbar {  width: 8px; }
            .ECUI-Panel-Sub-Side-Buttons-Scrollable-Content::-webkit-scrollbar-thumb { border-radius: 1px; }
            
            .ECUI-Panel-Sub-Side-Buttons { width: 100%; display: flex; flex-direction: column; gap: 16px; padding: 16px 12px 16px 20px; }
            .ECUI-Panel-Side-Sub-Nav-Button { height: 50px; width: 100%; padding: 0px; border-radius: 6px; border: none; cursor: pointer; display: flex; flex-direction: row; }
            .ECUI-Panel-Side-Sub-Nav-Button-With-Border { height: 50px; width: 100%; padding: 0px; border-radius: 6px; border-style: solid; border-width: 1px; cursor: pointer; display: flex; flex-direction: row; }
            .ECUI-Panel-Side-Sub-Nav-Animated-Button { transform: translateX(-30%); opacity: 0;
                animation: subSideNavButtonsAppearance; animation-duration: 0.5s; animation-fill-mode: forwards; animation-play-state: paused;
            }

            .ECUI-Panel-Sub-Side-Nav-Button-Decoration {     
                height: 100%;
                width: 4px;
                border-top-left-radius: 3px;
                border-bottom-left-radius: 3px; 
                pointer-events: none;
            }

            .ECUI-Panel-Sub-Side-Nav-Button-Content {
                height: 100%;
                width: 100%;
                display: flex; 
                flex-direction: row; 
                align-items: center;
                justify-Content: space-between;
                padding: 0px 12px;
            }

            .ECUI-Panel-Sub-Side-Nav-Button-Icon-Container {
                line-height: 0px;
                margin-left: 12px;
            }

            .ECUI-Panel-Sub-Side-Nav-Button-Icon {
                width: 30px;
                min-width: 30px;
                height: 30px;
                min-height: 30px;
            }

            .ECUI-Panel-Sub-Side-Nav-Button-Text-Container {
                text-align: left;
                max-height: 32px;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-word;
                font-size: 1em;
            }
 
            @keyframes subSideNavAppearance { 0% { max-width: 0px; overflow: hidden; } 95% { overflow: hidden; } 100% { max-width: 500px; overflow: unset; } }
            @keyframes subSideNavContentAppearance { 0% { transform: translateX(-100%) } 100% { transform: translateX(0px) } }
            @keyframes subSideNavButtonsAppearance { 0% { transform: translateX(-30%); opacity: 0; } 100% { transform: translateX(0px); opacity: 1; } }
        `; 
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    animateButtons() {
        const buttonsContainers = this.element.querySelectorAll('.ECUI-Panel-Side-Sub-Nav-Animated-Button');
        buttonsContainers.forEach((container, index) => {
            container.style.animationDelay = `${index * 0.05}s`;
            container.style.animationPlayState = 'running';
        });
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Sub-Side-Nav-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

    adjustButtonsContainerHeight() {
        var buttons = this.element.querySelector(".ECUI-Panel-Sub-Side-Buttons-Container");
        var searchBar = this.element.querySelector(".ECUI-Panel-Sub-Side-Buttons-Search-Element");
        var title = this.element.querySelector(".ECUI-Panel-Sub-Side-Title-Container");
        if(title) {
            buttons.style.height = this.element.offsetHeight - title.offsetHeight - searchBar.offsetHeight + "px";
        }
    }
}