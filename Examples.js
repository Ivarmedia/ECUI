ECUI.buildTheme({
    backgroundImg: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701855980.jpg",
    spinnerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/McDonald%27s_SVG_logo.svg/920px-McDonald%27s_SVG_logo.svg.png"
    
})



ECUI.loadPanels([
    { 
        area: "header", 
        id: "header", 
        components: [
            { 
                id: "header",
                component: "header",
                logo: "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
            }
        ] 
    }
])

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
                                id: "projectNavDropdown",
                                component: "navDropdown",
                                icon: "project",
                                text: "Project",
                            },
                            { 
                                id: "buildingNavDropdown",
                                component: "navDropdown",
                                icon: "company",
                                text: "Company",
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
    }
])
