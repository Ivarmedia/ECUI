var ECUI;

import('./ECUI.js').then((ECUIModule) => {

    var element = document.querySelector(".here");
    ECUI = new ECUIModule.ECUI(element, null);
  }).catch((error) => {
    console.error('Module import failed:', error);
  });

  setTimeout(() => {
    ECUI.loadPanels([
      { 
          area: "header", 
          id: "header", 
          components: [
              { 
                  id: "header",
                  component: "header",
                  logo: "",
              }
          ] 
      }, 
      { 
          area: "nav", 
          id: "nav",
          components: [
              {
                  id: "nav",
                  component: "nav",
                  components: [
                      {
                          id: "left",
                          component: "navUnit",
                          components: [
                              { 
                                  id: "returnNavButton",
                                  component: "navButton",
                                  icon: "return",
                              },
                              { 
                                  id: "companyNavDropdown",
                                  component: "navDropdown",
                                  icon: "company",
                                  text: "Company",
                                  options: [
                                    {
                                        id: "addCompanyOption",
                                        component: "navOption",
                                        icon: "addCompany",
                                        text: "Create New Company",
                                        disabled: true
                                    },
                                    {
                                      id: "addCompanyrxOption",
                                      component: "navOption",
                                      icon: "addCompanywrg",
                                      text: "Create New Company",
                                  },
                                    {
                                        id: "selectCompanyOption",
                                        component: "navOption",
                                        icon: "company",
                                        text: "Select Company",
                                        options: [
                                            {
                                                id: "fexillonNavCompanyOption",
                                                component: "navOption",
                                                text: "Fexillon",
                                            },
                                            {
                                                id: "snclNavCompanyOption",
                                                component: "navOption",
                                                text: "SNCL",
                                            },
                                        ]
                                    }
                                ]
                              },
                              { 
                                  id: "projectNavDropdown",
                                  component: "navDropdown",
                                  icon: "project",
                                  text: "Project",
                                  options: [
                                    {
                                        id: "addCompanyOption",
                                        component: "navOption",
                                        icon: "addCompany",
                                        text: "Create New Company",
                                        disabled: true
                                    },
                                    {
                                        id: "selectCompanyOption",
                                        component: "navOption",
                                        icon: "company",
                                        text: "Select Company",
                                        options: [
                                            {
                                                id: "fexillonNavCompanyOption",
                                                component: "navOption",
                                                text: "Fexillon",
                                            },
                                            {
                                                id: "snclNavCompanyOption",
                                                component: "navOption",
                                                text: "SNCL",
                                            }
                                        ]
                                    }
                                ]
                              },
                              { 
                                  id: "buildingNavDropdown",
                                  component: "navDropdown",
                                  icon: "company",
                                  text: "Company",
                                  options: [
                                    {
                                        id: "addCompanyOption",
                                        component: "navOption",
                                        icon: "addCompany",
                                        text: "Create New Company",
                                        disabled: true
                                    },
                                    {
                                        id: "selectCompanyOption",
                                        component: "navOption",
                                        icon: "company",
                                        text: "Select Company",
                                        options: [
                                            {
                                                id: "fexillonNavCompanyOption",
                                                component: "navOption",
                                                text: "Fexillon",
                                            },
                                            {
                                                id: "snclNavCompanyOption",
                                                component: "navOption",
                                                text: "SNCL",
                                            }
                                        ]
                                    }
                                ]
                              },
                              { 
                                  id: "windowNavDropdown",
                                  component: "navDropdown",
                                  icon: "window",
                                  text: "Window",
                              },
                              { 
                                  id: "helpNavDropdown",
                                  component: "navDropdown",
                                  icon: "help",
                                  text: "Help",
                              }
                          ]
                      },
                      {
                          id: "center",
                          component: "navUnit",
                          components: [
                              {
                                  id: "searchNavDropdown",
                                  component: "navSearch",
                              }
                          ]
                      },
                      {
                          id: "right",
                          component: "navUnit",
                          components: [
                              { 
                                  id: "profileNavButton",
                                  component: "navButton",
                                  img: "https://i.guim.co.uk/img/media/93414e218a749b0d0edd7c64630e3c86214735fd/0_597_1324_794/master/1324.jpg?width=700&quality=85&auto=format&fit=max&s=44cd46feb1efb452fb88c0f5a7a6db00",
                                  text: "Alvaro Gestoso",
                                  reversed: true
                              },
                              { 
                                  id: "accesibilityNavButton",
                                  component: "navButton",
                                  icon: "accesibility",
                                  reversed: true
                              }
                          ]
                      }
                  ]
              }
          ]
      },
      {
        area: "actionBar",
        id: "actionBar",
        components: [
          {
              id: "actionBar",
              component: "actionBar",
              components: [
                {
                  id: "companyActionBar",
                  component: "actionBarUnit",
                  components: [
                      { 
                          id: "addCompanyActionBar",
                          component: "actionBarButton",
                          icon: "addCompany",
                          text: "Create a New Company"
                      },
                      { 
                          id: "selectCompanyActionBar",
                          component: "actionBarButton",
                          icon: "companies",
                          text: "Select a Company"
                      }
                  ]
                },
                {
                  id: "companyActionBar",
                  component: "actionBarUnit",
                  components: [
                      { 
                          id: "addCompanyActionBar",
                          component: "actionBarButton",
                          icon: "addCompany",
                          text: "Create a New Company"
                      },
                      { 
                          id: "selectCompanyActionBar",
                          component: "actionBarButton",
                          icon: "companies",
                          text: "Select a Company"
                      }
                  ]
                }
              ]
          }
        ]
      },
      {
        area: "centerTop",
        id: "center",
        components: [
          {
              id: "center",
              component: "cardSelector",
              components: [

              ]
          }
        ]
      }
  ]) 

    ECUI.removeLoader();
  }, 2000);

  

