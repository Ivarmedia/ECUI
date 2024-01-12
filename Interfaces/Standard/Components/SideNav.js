import * as Utils from "../../../Module/Utils.js";
import * as Icons from "./Icons.js";

export class SideNav {

    ECUI;
    id;
    area;
    element;
    components;
    blur;

    constructor(global, info) {
        this.ECUI = global;
        this.id = info.id;
        this.area = info.area;
        this.components = [];

        this.element = document.createElement("nav");
        this.element.className = `ECUI-Panel-Side-Nav`;    
        this.element.id = this.id;

        var sideNav = info.components[0];
        sideNav.element = document.createElement("div");
        sideNav.element.className = `${this.ECUI.ECUI_Theme.classes.sideNav} ${this.ECUI.ECUI_Theme.classes.sideNavScrollBar} ${this.ECUI.ECUI_Theme.classes.sideNavShadow} ECUI-Panel-Side-Nav-Component`; 
        if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.sideNavBorder)) {
            sideNav.element.className = `${this.ECUI.ECUI_Theme.classes.sideNav} ${this.ECUI.ECUI_Theme.classes.sideNavScrollBar} ${this.ECUI.ECUI_Theme.classes.sideNavBorder} ${this.ECUI.ECUI_Theme.classes.sideNavShadow} ECUI-Panel-Side-Nav-Component-With-Border`;
        }
        sideNav.element.addEventListener('resize', () => {
            this.checkSideNavOverflow();
        });
        sideNav.element.id = sideNav.id;
        this.components.push(sideNav);

        if(!Utils.isNullOrEmpty(sideNav.background)) {
            var background = document.createElement("img");
            background.className = "ECUI-Panel-Side-Nav-Background";
            background.src = sideNav.background;
            this.element.appendChild(background);
        }

        if(!Utils.isNullOrEmpty(sideNav.blur)) {
            this.blur = `backdrop-filter: blur(${sideNav.blur}px);`
        }

        this.element.append(sideNav.element);

        if(!Utils.isNullOrEmpty(sideNav.components)) {
            sideNav.components.forEach(unit => {
                if(unit.componentId == "unit") {
                    unit.element = document.createElement("div");
                    unit.element.className = "ECUI-Panel-Side-Nav-Unit";
                    unit.element.id = unit.id;
                    sideNav.element.append(unit.element);
                    var unitDecoration = document.createElement("div");
                    unitDecoration.className = "ECUI-Panel-Side-Nav-Unit-Decoration";
                    unit.element.append(unitDecoration);
                    if(!Utils.isNullOrEmpty(unit.components)) {
                        var colours = {
                            primary: this.ECUI.ECUI_Theme.colours.sideNavButtonsPrimaryIcons,
                            contrast: this.ECUI.ECUI_Theme.colours.sideNavButtonsSecondaryIcons,
                            border: this.ECUI.ECUI_Theme.colours.sideNavButtonsIconsBorder
                        };
                        var hueVariation;
                        for(var i = 0; i < unit.components.length; i++) {
                            var component = unit.components[i];
                            if(!Utils.isNullOrEmpty(unit.options) && unit.options.progressive && !Utils.isNullOrEmpty(unit.options.hueVariation)) {
                                var proggressiveColours = {
                                    primary: Utils.variateColourHue(colours.primary, unit.options.hueVariation),
                                    contrast: Utils.variateColourHue(colours.contrast, unit.options.hueVariation),
                                    border: colours.border
                                }
                                if(!hueVariation) {
                                    hueVariation = unit.options.hueVariation
                                }
                                unit.options.hueVariation = unit.options.hueVariation + hueVariation;
                                this.buildButton(component, unit.element, proggressiveColours);
                            } else if (!Utils.isNullOrEmpty(unit.options) && unit.options.alternate && !Utils.isNullOrEmpty(unit.options.hueVariation)) {
                                var alternativeColours = {
                                    primary: Utils.variateColourHue(colours.primary, unit.options.hueVariation),
                                    contrast: Utils.variateColourHue(colours.contrast, unit.options.hueVariation),
                                    border: colours.border
                                }
                                if(i % 2 != 0) {
                                    this.buildButton(component, unit.element, colours);
                                } else {
                                    this.buildButton(component, unit.element, alternativeColours);
                                }
                            }
                            else {
                                this.buildButton(component, unit.element, colours);
                            } 
                        }
                    }
                }
            });
        }

        this.buildCss();
        setTimeout(() => {
            this.checkSideNavOverflow();
            this.animateIcons();
        }, 100);
    }

    buildButton(component, container, colours) {
        component.element = document.createElement("button");
        component.element.id = component.id;

        var uppercase = "";
        if(!Utils.isNullOrEmpty(component.options) && component.options.uppercase) {
            uppercase = "ECUI-Panel-Side-Nav-Button-Uppercase";
        }

        component.element.className = `${this.ECUI.ECUI_Theme.classes.sideNavButtonsHover} ECUI-Panel-Side-Nav-Button ${uppercase}`;
        if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.sideNavButtonsBorderHover)) {
            component.element.className = `${this.ECUI.ECUI_Theme.classes.sideNavButtonsHover} ${this.ECUI.ECUI_Theme.classes.sideNavButtonsBorderHover} ECUI-Panel-Side-Nav-Button-With-Border ${uppercase}`;
        }
        var iconContainer = document.createElement("div");
        iconContainer.className = "ECUI-Panel-Side-Nav-Button-Icon-Container";
        component.element.append(iconContainer);
        Icons.printComplexIcon(component.icon, "ECUI-Panel-Side-Nav-Button-Icon", colours, iconContainer)

        var textContainer = document.createElement("div");
        textContainer.className = "ECUI-Panel-Side-Nav-Button-Text-Container";
        component.element.append(textContainer);

        var text = document.createElement("div");
        text.className = `${this.ECUI.ECUI_Theme.classes.sideNavFont} ${this.ECUI.ECUI_Theme.classes.sideNavButtonsText} ECUI-Panel-Side-Nav-Button-Text`;
        text.innerHTML = component.name;
        textContainer.append(text);

        var buttonHover = document.createElement("div");
        buttonHover.className = "ECUI-Panel-Side-Nav-Button-Hover";
        buttonHover.style.backgroundColor = colours.primary;
        component.element.append(buttonHover);

        component.element.addEventListener('click', () => {
            this.onButtonClick(component);
        });

        component.element.addEventListener('mouseover', () => {
            this.onButtonHover(component);
        });

        component.element.addEventListener('mouseout', (e) => {
            this.OnButtonHoverOut(component, e);
        });

        container.append(component.element); 
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Side-Nav-Style";

        var cssRules = `
            .ECUI-Panel-Side-Nav { max-width: 0px; position: relative; height: 100%; display: flex; flex-direction: row; width: auto; transition: max-width 0.5s; animation: sideNavAppearance; animation-duration: 3s; animation-fill-mode: forwards; }
            .ECUI-Panel-Side-Nav-Component { position: relative; height: 100%; padding: 0px; display: flex; flex-direction: column; justify-content: space-between; direction: rtl; max-height: 100%; overflow: hidden; padding-bottom: 20px; ${this.blur} }
            .ECUI-Panel-Side-Nav-Component-With-Border { position: relative; border-right-width: 1px; border-right-style: solid; padding: 0px; display: flex; flex-direction: column; justify-content: space-between; direction: rtl; max-height: 100%; overflow: hidden; padding-bottom: 20px; ${this.blur} }
            .ECUI-Panel-Side-Nav-Background { width: 100%; position: absolute; left: 0%; top: 0%; object-fit: cover; }

            .ECUI-Panel-Side-Nav-Background::-webkit-scrollbar-thumb, .ECUI-Panel-Side-Nav-Component-With-Border::-webkit-scrollbar { width: 6px; }
            .ECUI-Panel-Side-Nav-Background::-webkit-scrollbar-thumb, .ECUI-Panel-Side-Nav-Component-With-Border::-webkit-scrollbar-thumb { border-radius: 1px; }

            .ECUI-Panel-Side-Nav-Unit { display: flex; flex-direction: column; direction: ltr; }
            .ECUI-Panel-Side-Nav-Unit-Decoration { width: 100%; height: 20px; display: flex; flex-direction: row; justify-content: center; align-items: center; }

            .ECUI-Panel-Side-Nav-Button { height: 48px; position: relative; padding: 0px 12px; display: flex; flex-direction: row; align-items: center; margin: 0px; outline: 0px; width: 100%; background: transparent; cursor: pointer; border: none; }
            .ECUI-Panel-Side-Nav-Button-With-Border { height: 48px; position: relative; padding: 0px 12px; display: flex; flex-direction: row; align-items: center; margin: 0px; outline: 0px; width: 100%; background: transparent; cursor: pointer; border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: transparent; border-top-style: solid; border-top-width: 1px; border-top-color: transparent; border-left: none; border-right: none; }
            
            .ECUI-Panel-Side-Nav-Button-Uppercase { text-transform: uppercase; }
        
            .ECUI-Panel-Side-Nav-Button-Icon-Container { transform: translateX(-100px); animation: sideNavButtonsIconAppearance; animation-duration: 0.5s; animation-fill-mode: forwards; animation-play-state: paused; }
            .ECUI-Panel-Side-Nav-Button-Icon { width: 30px; min-width: 30px; height: 30px; min-height: 30px; }

            .ECUI-Panel-Side-Nav-Button-Text-Container { width: auto; max-width: 0px; overflow: hidden; transition: max-width 0.5s; opacity: 0; animation: sideNavButtonsTextAppearance; animation-duration: 0.5s; animation-fill-mode: forwards; animation-play-state: paused; }
            .ECUI-Panel-Side-Nav-Button-Text { font-size: 13px; white-space: nowrap; padding: 0px 16px; }
            .ECUI-Panel-Side-Nav:hover .ECUI-Panel-Side-Nav-Button-Text-Container { max-width: 1000px }
            
            .ECUI-Panel-Side-Nav-Button-Hover { position: absolute; right: 0px; top: 50%; width: 2px; height: 100%; transform: translateY(-50%); opacity: 0; }
            .ECUI-Panel-Side-Nav-Button:hover .ECUI-Panel-Side-Nav-Button-Hover, .ECUI-Panel-Side-Nav-Button-With-Border:hover .ECUI-Panel-Side-Nav-Button-Hover { opacity: 1 }
        
            .ECUI-Panel-Sub-Side-Nav-Container { width: 200px; }
            .ECUI-Panel-Sub-Side-Nav-Container-With-Border { width: 200px; }

            @keyframes sideNavAppearance { 0% { max-width: 0px; } 100% { max-width: 1000px; } }
            @keyframes sideNavButtonsIconAppearance { 0% { transform: translateX(-100px) } 100% { transform: translateX(0px) } }
            @keyframes sideNavButtonsTextAppearance { 0% { opacity: 0px; } 100% { opacity: 1; } }
        `; 
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Side-Nav-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

    checkSideNavOverflow() {
        var sideNav = this.components[0].element;     
        if (sideNav.scrollHeight > sideNav.clientHeight) {
            sideNav.style.overflowY = "auto";
        } else {
            sideNav.style.overflowY = "hidden";
        }
    }

    animateIcons() {
        const iconContainers = document.querySelectorAll('.ECUI-Panel-Side-Nav-Button-Icon-Container');
        iconContainers.forEach((container, index) => {
            container.style.animationDelay = `${index * 0.05}s`;
            container.style.animationPlayState = 'running';
        });
        
        const textContainers = document.querySelectorAll('.ECUI-Panel-Side-Nav-Button-Text-Container');
        textContainers.forEach((container, index) => {
            container.style.animationDelay = `${index * 0.08}s`;
            container.style.animationPlayState = 'running';
        });
    }

    onButtonClick(component) {
        if(!Utils.isNullOrEmpty(component.components)) {
            this.onButtonHover(component);
        }
    }

    onButtonHover(component) {
        var previousSubSideNav = document.querySelector(".ECUI-Panel-Sub-Side-Nav-Element");
        if(previousSubSideNav) {
            previousSubSideNav.remove();
        }
        if(!Utils.isNullOrEmpty(component.components)) {
            console.log('Options:', component.components);
            var subSideNavContainer = document.createElement("div");
            subSideNavContainer.className = `${this.ECUI.ECUI_Theme.classes.sideNav} ${this.ECUI.ECUI_Theme.classes.sideNavScrollBar} ${this.ECUI.ECUI_Theme.classes.sideNavShadow} ECUI-Panel-Sub-Side-Nav-Container ECUI-Panel-Sub-Side-Nav-Element`;
            if(!Utils.isNullOrEmpty(this.ECUI.ECUI_Theme.colours.sideNavBorder)) {
                subSideNavContainer.className = `${this.ECUI.ECUI_Theme.classes.sideNav} ${this.ECUI.ECUI_Theme.classes.sideNavScrollBar} ${this.ECUI.ECUI_Theme.classes.sideNavBorder} ${this.ECUI.ECUI_Theme.classes.sideNavShadow} ECUI-Panel-Sub-Side-Nav-Container-With-Border ECUI-Panel-Sub-Side-Nav-Element`;
            }
            this.element.append(subSideNavContainer);
        }
    }

    OnButtonHoverOut(component, event) {
        var subSideNav = document.querySelector(".ECUI-Panel-Sub-Side-Nav-Element");
        if(subSideNav && !subSideNav.contains(event.relatedTarget)) {
            subSideNav.remove();
        }
    }

}