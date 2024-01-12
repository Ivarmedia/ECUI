export function getHeader() {
  var header = { 
      area: "header", 
      id: "header-panel", 
      components: [
          { 
              id: "header",
              componentId: "header",
              style: "fixed",
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
                      text: "Teams"
                    }
                  ]
                },
                {
                  id: "header-center-unit",
                  componentId: "unit",
                  components: [
                    {
                      id: "header-search-km-button",
                      componentId: "button",
                      name: "Knowledge Miner"
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
                    }
                  ]
                }
              ]
          }
      ] 
  }

  return header;
}