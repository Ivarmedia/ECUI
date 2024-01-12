export function getSideNav() {
    var sideNav = { 
        area: "sideNav", 
        id: "sideNavPanel", 
        components: [
            { 
                id: "sideNavComponent",
                componentId: "sideNav",
                blur: "4",
                components: [
                  {
                    id: "sideNav-top-unit",
                    componentId: "unit",
                    components: [
                      
                    ]
                  },
                  {
                    id: "sideNav-bottom-unit",
                    componentId: "unit",
                    components: [

                    ]
                  }
                ]
            }
        ] 
    }
    return sideNav;
}