export function getHeader() {
    var header = { 
        area: "header", 
        id: "header-panel", 
        components: [
            { 
                id: "header-component",
                componentId: "header",
                style: "fixed",
                blur: "4",
                components: [
                  {
                    id: "header-left-unit",
                    componentId: "unit",
                    components: [
                      {
                        id: "header-logo",
                        componentId: "logo",
                        url: "default",
                        function: "something"
                      }
                    ]
                  },
                  {
                    id: "header-center-unit",
                    componentId: "unit",
                    components: [
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
                            colours: {
                              background: "#4285f4",
                              text: "#ffffff",
                              border: "#171e2a",
                              shadow: "0 2px 5px rgba(66, 133, 244, 0.3)",
                              icon: "#ffffff",
                              backgroundHover: "#3367d6",
                              textHover: "#ffffff",
                              borderHover: "#1a3e8c",
                              shadowHover: "0 2px 5px rgba(33, 67, 125, 0.3)",
                              iconHover: "#ffffff"
                            }
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