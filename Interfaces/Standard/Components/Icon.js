export class Icon {

    colourClass;
    elementClass;
    element;
    id;

    constructor(id, type, colour) {
        
        this.id = id;
        this.colourClass = colour;
        if(type == "navButton") {
            this.elementClass = "ECUI-Panel-Nav-Button-Icon";
        } else if (type == "navButtonOnly") {
            this.elementClass = "ECUI-Panel-Nav-Button-Icon-No-Text";
        } else if (type == "navOption") {
            this.elementClass = "ECUI-Panel-Nav-Button-Icon-Option";
        }

        var temp = document.createElement("div");

        if (id == "accesibility" && (type == "navButton" || type == "navButtonOnly" || type == "navOption")) {
            temp.innerHTML = `<svg id="${this.id}" class="${this.colourClass} ${this.elementClass}" viewBox="0 0 16 16"> <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143Zm-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"/> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Z"/> </svg>`;
        } else if (id == "building" && (type == "navButton" || type == "navButtonOnly" || type == "navOption")) {
            temp.innerHTML = `<svg id="${this.id}" class="${this.colourClass} ${this.elementClass}" viewBox="0 0 16 16"> <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/> </svg>`;
        } else if (id == "company" && (type == "navButton" || type == "navButtonOnly" || type == "navOption")) {
            temp.innerHTML = `<svg id="${this.id}" class="${this.colourClass} ${this.elementClass}" viewBox="0 0 16 16"> <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/> </svg>`;
        } else if (id == "help" && (type == "navButton" || type == "navButtonOnly" || type == "navOption")) {
            temp.innerHTML = `<svg id="${this.id}" class="${this.colourClass} ${this.elementClass}" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg>`;
        } else if (id == "project" && (type == "navButton" || type == "navButtonOnly" || type == "navOption")) {
            temp.innerHTML = `<svg id="${this.id}" class="${this.colourClass} ${this.elementClass}" viewBox="0 0 16 16"> <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/> </svg>`;
        } else if (id == "return" && type == "navButtonOnly") {
            temp.innerHTML = `<svg id="${this.id}" class="${this.colourClass} ${this.elementClass}" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/> <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/> </svg>`;
        } else if (id == "window" && (type == "navButton" || type == "navButtonOnly" || type == "navOption")) {
            temp.innerHTML = `<svg id="${this.id}" class="${this.colourClass} ${this.elementClass}" viewBox="0 0 16 16"> <path d="M3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v1H1V2a1 1 0 0 1 1-1h12zm1 3v10a1 1 0 0 1-1 1h-2V4h3zm-4 0v11H2a1 1 0 0 1-1-1V4h10z"/> </svg>`;
        }   
            
        this.element = temp.querySelector("svg");

        this.buildCss();
    }

    buildCss() {
        this.removeStyleSheet();

        var styleSheet = document.createElement('style');
        styleSheet.setAttribute('type', 'text/css');
        styleSheet.id = "ECUI-Icon-Style";

        var cssRules = `
            .ECUI-Panel-Nav-Button-Icon { width: 12px; min-width: 12px; }
            .ECUI-Panel-Nav-Button-Icon-No-Text { width: 16px; min-width: 16px; }  
        `;   
        
        if (styleSheet.styleSheet) {
            styleSheet.styleSheet.cssText = cssRules;
        } else {
            styleSheet.appendChild(document.createTextNode(cssRules));
        }

        document.head.appendChild(styleSheet);
    }

    removeStyleSheet() {
        var styleSheet = document.getElementById("ECUI-Icon-Style");
        if(styleSheet) {
            styleSheet.remove();
        }
    }

}