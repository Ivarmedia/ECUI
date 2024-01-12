export function getHeader() {
    var header = { 
        area: "header", 
        id: "header-panel", 
        components: [
            { 
                id: "header",
                componentId: "header",
                style: "fixed",
                blur: "3",
                components: [
                  {
                    id: "header-left-unit",
                    componentId: "unit",
                    components: [
                      {
                        id: "header-logo",
                        componentId: "logo",
                        url: "./Example/Images/Fexillon.svg",
                        text: "Fexillon"
                      }
                    ]
                  },
                  {
                    id: "header-center-unit",
                    componentId: "unit",
                    components: [
                      {
                        id: "header-sustainability-button",
                        componentId: "button",
                        icon: "sustainability",
                        name: "Sustainability"
                      },
                      {
                        id: "header-search-container",
                        componentId: "inputWithButtons",
                        components: [
                          {
                            id: "header-setings-button",
                            componentId: "button",
                            icon: "settings",
                            colours: {
                              background: "#7a7ff8",
                              border: "#50539d",
                              icon: "#ffffff",
                              text: "#ffffff",
                              backgroundHover: "#6e72dc"
                            }
                          },
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
                              background: "#7a7ff8",
                              border: "#50539d",
                              icon: "#ffffff",
                              text: "#ffffff",
                              backgroundHover: "#6e72dc"
                            }
                          }
                        ]
                      }, 
                      {
                        id: "header-about-button",
                        componentId: "button",
                        name: "About"
                      },
                    ]
                  },
                  {
                    id: "header-right-unit",
                    componentId: "unit",
                    components: [
                      {
                        id: "header-profile-button",
                        componentId: "profile",
                      }
                    ]
                  }
                ]
            }
        ] 
    }

    return header;
}