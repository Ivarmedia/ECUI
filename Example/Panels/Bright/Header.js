export function getHeader() {
    var header = { 
        area: "header", 
        id: "header-panel", 
        components: [
            { 
                id: "header",
                componentId: "header",
                style: "fixed",
                background: "./Example/Images/Bright-Header-Background.jpg",
                blur: "3",
                components: [
                  {
                    id: "header-left-unit",
                    componentId: "unit",
                    components: [
                      {
                        id: "header-logo",
                        componentId: "logo",
                        url: "default",
                        function: "something",
                      }
                    ]
                  },
                  {
                    id: "header-center-unit",
                    componentId: "unit",
                    components: [
                      {
                        id: "header-search-alerts-button",
                        componentId: "button",
                        icon: "link",
                        name: "Get Link"
                      },
                      {
                        id: "header-search-container",
                        componentId: "inputWithButtons",
                        components: [
                          {
                            id: "header-search-input",
                            componentId: "input",
                            type: "search",
                            placeholder: "Search..."
                          },
                          {
                            id: "header-search-alerts-button",
                            componentId: "button",
                            icon: "bell",
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "header-right-unit",
                    componentId: "unit",
                    components: [
                      {
                        id: "header-profile-button",
                        componentId: "profile",
                        topLine: "Alvaro Gestoso",
                        bottomLine: "Account Settings"
                      }
                    ]
                  }
                ]
            }
        ] 
    }

    return header;
}