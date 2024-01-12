export function getSideNav() {
    var sideNav = { 
        area: "sideNav", 
        id: "side-nav-panel", 
        components: [
            { 
                id: "side-nav-component",
                componentId: "sideNav",
                blur: "4",
                components: [
                  {
                    id: "side-nav-top-unit",
                    componentId: "unit",
                    components: [
                        {
                            id: "side-nav-companies-button",
                            componentId: "button",
                            icon: "companies",
                            name: "Select a Company"
                        },
                        {
                            id: "side-nav-create-company-button",
                            componentId: "button",
                            icon: "createCompany",
                            name: "Create a Company"
                        },
                        {
                            id: "side-nav-company-user-management-button",
                            componentId: "button",
                            icon: "users",
                            name: "User Management"
                        }
                    ],
                    options: {
                        progressive: true,
                        alternate: false,
                        hueVariation: 30
                    }
                  },
                  {
                    id: "sideNav-center-unit",
                    componentId: "unit",
                    components: [
                        {
                            id: "side-nav-company-button",
                            componentId: "button",
                            icon: "company",
                            name: "Company",
                            components: [
                                { 
                                    id: "side-nav-company-button-company-details-option",
                                    componentId: "button",
                                    icon: "companyDetails",
                                    name: "Company Details",
                                },
                                { 
                                    id: "side-nav-company-button-company-management-option",
                                    componentId: "button",
                                    icon: "companyDetails",
                                    name: "Company Details",
                                },
                                { 
                                    id: "side-nav-company-button-company-details-option",
                                    componentId: "button",
                                    icon: "companyDetails",
                                    name: "Company Details",
                                },
                                { 
                                    id: "side-nav-company-button-company-details-option",
                                    componentId: "button",
                                    icon: "companyDetails",
                                    name: "Company Details",
                                },
                                
                            ],
                            options: {
                                progressive: true,
                                alternate: false,
                                hueVariation: 30
                            }
                        },
                        {
                            id: "side-nav-project-button",
                            componentId: "button",
                            icon: "project",
                            name: "Project"
                        },
                        {
                            id: "side-nav-layer-button",
                            componentId: "button",
                            icon: "layer",
                            name: "Layer"
                        },
                        {
                            id: "side-nav-bim-button",
                            componentId: "button",
                            icon: "bim",
                            name: "BIM"
                        },
                        {
                            id: "side-nav-building-button",
                            componentId: "button",
                            icon: "building",
                            name: "Building"
                        },
                        {
                            id: "side-nav-sensor-button",
                            componentId: "button",
                            icon: "sensor",
                            name: "Sensor"
                        },
                        {
                            id: "side-nav-analytics-button",
                            componentId: "button",
                            icon: "analytics",
                            name: "Analytics"
                        },
                        {
                            id: "side-nav-preferences-button",
                            componentId: "button",
                            icon: "preferences",
                            name: "Preferences"
                        },
                        {
                            id: "side-nav-help-button",
                            componentId: "button",
                            icon: "help",
                            name: "Help"
                        }
                    ],
                    options: {
                        progressive: false,
                        alternate: true,
                        hueVariation: 200
                    }
                  },
                  {
                    id: "sideNav-bottom-unit",
                    componentId: "unit",
                    components: [
                        {
                            id: "side-nav-start-button",
                            componentId: "button",
                            icon: "start",
                            name: "How to Install"
                        },
                        {
                            id: "side-nav-theme-button",
                            componentId: "button",
                            icon: "theme",
                            name: "Build a theme"
                        },
                        {
                            id: "side-nav-panel-button",
                            componentId: "button",
                            icon: "addPanel",
                            name: "Load a Panel"
                        },
                        {
                            id: "side-nav-components-button",
                            componentId: "button",
                            icon: "component",
                            name: "Components"
                        },
                        {
                            id: "side-nav-console-button",
                            componentId: "button",
                            icon: "console",
                            name: "Console"
                        }
                    ],
                    options: {
                        progressive: false,
                        alternate: false,
                        hueVariation: 200
                    }
                  }
                ]
            }
        ] 
    }
    return sideNav;
}