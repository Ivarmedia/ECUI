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
                          colours: {
                              primary: "#53be8d",
                              contrast: "#EFEBF1",
                              border: "transparent"
                          },
                          components: [
                              {
                                  id: "side-nav-company-button-company-sub-side-nav",
                                  componentId: "subSideNav",
                                  blur: 4,
                                  background: "./Example/Images/Background.jpg",
                                  components: [
                                      {
                                          id: "side-nav-company-button-company-display-container",
                                          componentId: "title",
                                          name: "Fexillon",
                                          image: "",
                                          background: "",
                                          logo: "./Example/Images/Fexillon.svg"
                                      },
                                      {
                                          id: "side-nav-company-button-company-buttons",
                                          componentId: "buttons",
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
                                              }
                                          ],
                                          options: {
                                              progressive: true,
                                              alternate: false,
                                              hueVariation: 10
                                          }
                                      } 
                                  ]
                              }
                          ]
                      },
                      {
                          id: "side-nav-project-button",
                          componentId: "button",
                          icon: "project",
                          name: "Project",
                          colours: {
                              primary: "#4285f4",
                              contrast: "#EFEBF1",
                              border: "transparent"
                          },
                      },
                      {
                          id: "side-nav-layer-button",
                          componentId: "button",
                          icon: "layer",
                          name: "Layer",
                          colours: {
                              primary: "#b06061",
                              contrast: "#EFEBF1",
                              border: "transparent"
                          },
                      },
                      {
                          id: "side-nav-bim-button",
                          componentId: "button",
                          icon: "bim",
                          name: "BIM",
                          colours: {
                              primary: "#2b9599",
                              contrast: "#EFEBF1",
                              border: "transparent"
                          },
                      },
                      {
                          id: "side-nav-building-button",
                          componentId: "button",
                          icon: "building",
                          name: "Building",
                          colours: {
                              primary: "#914c91",
                              contrast: "#EFEBF1",
                              border: "transparent"
                          },
                      },
                      {
                          id: "side-nav-sensor-button",
                          componentId: "button",
                          icon: "sensor",
                          name: "Sensor",
                          colours: {
                              primary: "#6d93b7",
                              contrast: "#EFEBF1",
                              border: "transparent"
                          },
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
                      alternate: false,
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