export function getRules(classes, colours, fonts) {
    var cssRules = `
        /* Background */

            .${classes.background} {
                background-color: ${colours.background};
            }

            .${classes.backgroundOpacity} {
                opacity: ${colours.backgroundOpacity};
            }

        /* Fonts */

            *, body, .${classes.fontSize} {
                font-size: ${fonts.fontSize};
            }

            *, body, .${classes.primaryFont} {
                font-family: ${fonts.primaryFont};
                font-weight: ${fonts.primaryFontWeight};
                letter-spacing: ${fonts.primaryFontSeparation};
            }

            .${classes.secondaryFont} {
                font-family: ${fonts.secondaryFont};
                font-weight: ${fonts.secondaryFontWeight};
                letter-spacing: ${fonts.secondaryFontSeparation};
            }

            .${classes.headerPrimaryFont} {
                font-family: ${fonts.headerPrimaryFont};
                font-weight: ${fonts.headerPrimaryFontWeight};
                letter-spacing: ${fonts.headerPrimaryFontSeparation};
            }

            .${classes.headerSecondaryFont} {
                font-family: ${fonts.headerSecondaryFont};
                font-weight: ${fonts.headerSecondaryFontWeight};
                letter-spacing: ${fonts.headerSecondaryFontSeparation};
            }

            .${classes.sideNavFont} {
                font-family: ${fonts.sideNavFont};
                font-weight: ${fonts.sideNavFontWeight};
                letter-spacing: ${fonts.sideNavFontSeparation};
            }

        /* Header */

            .${classes.header} {
                background-color: ${colours.header};
            }

            .${classes.headerBorder} {
                border-color: ${colours.headerBorder};
            }

            .${classes.headerShadow} {
                box-shadow: ${colours.headerShadow};
            }

            .${classes.logoPrimary} {
                fill: ${colours.logoPrimary};
            }

            .${classes.logoSecondary} {
                fill: ${colours.logoSecondary};
            }

        /* Header Buttons */

            .${classes.headerButtons} {
                background-color: ${colours.headerButtons};
            }

            .${classes.headerButtonsIcon} {
                fill: ${colours.headerButtonsIcon};
            }

            .${classes.headerButtonsText} {
                color: ${colours.headerButtonsText};
            }

            .${classes.headerButtonsBorder} {
                border-color: ${colours.headerButtonsBorder};
            }

            .${classes.headerButtonsShadow} {
                box-shadow: ${colours.headerButtonsShadow};
            }

            .${classes.headerButtonsHover}:hover {
                background-color: ${colours.headerButtonsHover};
            }

            .${classes.headerButtonsHover}:hover .${classes.headerButtonsIconHover} {
                fill: ${colours.headerButtonsIconHover};
            }

            .${classes.headerButtonsTextHover}:hover {
                color: ${colours.headerButtonsTextHover};
            }

            .${classes.headerButtonsBorderHover}:hover {
                border-color: ${colours.headerButtonsBorderHover};
            }

            .${classes.headerButtonsShadowHover}:hover {
                box-shadow: ${colours.headerButtonsShadowHover};
            }

        /* Header Inputs */

            .${classes.headerInputs} {
                background-color: ${colours.headerInputs};
            }

            .${classes.headerInputsIcon} {
                fill: ${colours.headerInputsIcon};
            }

            .${classes.headerInputsText} {
                color: ${colours.headerInputsText};
            }

            .${classes.headerInputsText}::placeholder {
                color: ${colours.headerInputsText};
                opacity: 0.8;
            }

            .${classes.headerInputsText}:-ms-input-placeholder {
                color: ${colours.headerInputsText};
                opacity: 0.8;
            }

            .${classes.headerInputsBorder} {
                border-color: ${colours.headerInputsBorder};
            }

            .${classes.headerInputsShadow} {
                box-shadow: ${colours.headerInputsShadow};
            }

            .ECUI-Panel-Hoverable-Input-Container:hover .${classes.headerInputsHover} {
                background-color: ${colours.headerInputsHover};
            }

            .ECUI-Panel-Hoverable-Input-Container:hover .${classes.headerInputsIconHover} {
                fill: ${colours.headerInputsIconHover};
            }

            .ECUI-Panel-Hoverable-Input-Container:hover .${classes.headerInputsTextHover} {
                color: ${colours.headerInputsTextHover};
            }

            .ECUI-Panel-Hoverable-Input-Container:hover .${classes.headerInputsBorderHover} {
                border-color: ${colours.headerInputsBorderHover};
            }

            .ECUI-Panel-Hoverable-Input-Container:hover .${classes.headerInputsShadowHover} {
                box-shadow: ${colours.headerInputsShadowHover};
            }

        /* Header Profile */

            .${classes.headerProfile} {
                background-color: ${colours.headerProfile};
            }

            .${classes.headerProfileTopLine} {
                color: ${colours.headerProfileTopLine};
            }

            .${classes.headerProfileBottomLine} {
                color: ${colours.headerProfileBottomLine};
            }

            .${classes.headerProfileIcon} {
                fill: ${colours.headerProfileIcon};
            }

            .${classes.headerProfileBorder} {
                border-color: ${colours.headerProfileBorder};
            }

            .${classes.headerProfileShadow} {
                box-shadow: ${colours.headerProfileShadow};
            }

            .ECUI-Panel-Header-Profile-Container:hover .${classes.headerProfileHover}, .ECUI-Panel-Header-Profile-Container:focus .${classes.headerProfileHover} {
                background-color: ${colours.headerProfileHover};
            }

            .ECUI-Panel-Header-Profile-Container:hover .${classes.headerProfileTopLineHover} {
                color: ${colours.headerProfileTopLineHover};
            }

            .ECUI-Panel-Header-Profile-Container:hover .${classes.headerProfileBottomLineHover} {
                color: ${colours.headerProfileBottomLineHover};
            }

            .ECUI-Panel-Header-Profile-Container:hover .${classes.headerProfileIconHover} {
                fill: ${colours.headerProfileIconHover};
            }

            .ECUI-Panel-Header-Profile-Container:hover .${classes.headerProfileBorderHover} {
                border-color: ${colours.headerProfileBorderHover};
            }

            .ECUI-Panel-Header-Profile-Container:hover .${classes.headerProfileShadowHover} {
                box-shadow: ${colours.headerProfileShadowHover};
            }

        /* Side Navigation Bar */

            .${classes.sideNav} {
                background-color: ${colours.sideNav};
            }

            .${classes.sideNavBorder} {
                border-color: ${colours.sideNavBorder};
            }

            .${classes.sideNavShadow} {
                box-shadow: ${colours.sideNavShadow};
            }

            .${classes.sideNavScrollBar}::-webkit-scrollbar-thumb {
                background-color: ${colours.sideNavScrollBar};
            }

        /* Side Navigation Bar Buttons */

            .${classes.sideNavButtonsHover}:hover {
                background-color: ${colours.sideNavButtonsHover};
            }

            .${classes.sideNavButtonsHover}:hover.${classes.sideNavButtonsBorderHover} {
                border-color: ${colours.sideNavButtonsBorderHover};
            }

            .${classes.sideNavButtonsPrimaryIcons} {
                fill: ${colours.sideNavButtonsPrimaryIcons};
            }

            .${classes.sideNavButtonsSecondaryIcons} {
                fill: ${colours.sideNavButtonsSecondaryIcons};
            }

            .${classes.sideNavButtonsIconsBorder} {
                border-color: ${colours.sideNavButtonsIconsBorder};
            }

            .${classes.sideNavButtonsText} {
                color: ${colours.sideNavButtonsText};
            }

            .${classes.sideNavButtonsTextHover} {
                color: ${colours.sideNavButtonsTextHover};
            }

        /* Sub Side Navigation Bar */

            .${classes.subSideNav} {
                background-color: ${colours.subSideNav};
            }

            .${classes.subSideNavBorder} {
                border-color: ${colours.subSideNavBorder};
            }

            .${classes.subSideNavShadow} {
                box-shadow: ${colours.subSideNavShadow};
            }

            .${classes.subSideNavContrast} {
                background-color: ${colours.subSideNavContrast};
            }

            .${classes.subSideNavContrastShadow} {
                box-shadow: ${colours.subSideNavContrastShadow};
            }

            .${classes.subSideNavScrollBar}::-webkit-scrollbar-thumb {
                background-color: ${colours.subSideNavScrollBar};
            }

            .${classes.subSideNavText} {
                color: ${colours.subSideNavText};
            }

            .${classes.subSideNavText}::placeholder {
                color: ${colours.subSideNavText};
                opacity: 0.8;
            }

        /* Sub Side Navigation Bar Buttons */

            .${classes.subSideNavButtons}{
                background-color: ${colours.subSideNavButtons};
            }

            .${classes.subSideNavButtonsBorder} {
                border-color: ${colours.subSideNavButtonsBorder};
            }

            .${classes.subSideNavButtonsShadow} {
                box-shadow: ${colours.subSideNavButtonsShadow};
            }

            .${classes.subSideNavButtonsHover}:hover {
                background-color: ${colours.subSideNavButtonsHover};
            }

            .${classes.subSideNavButtonsText}{
                color: ${colours.subSideNavButtonsText};
            }




    `;
    return cssRules;
}