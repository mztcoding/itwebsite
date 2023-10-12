"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Contact)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/contact.json
const contact_namespaceObject = JSON.parse('{"T":{"P":"Contact","E":"Us"}}');
;// CONCATENATED MODULE: ./src/components/sections/Contact.jsx


const ContactSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "mil-contact mil-gradient-bg mil-p-120-0",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-deco mil-deco-accent",
                style: {
                    top: 0,
                    right: "10%"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                        className: "mil-light mil-mb-90",
                        children: [
                            contact_namespaceObject.T.P,
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "mil-accent",
                                children: contact_namespaceObject.T.E
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("form", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-lg-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-input-frame mil-mb-30",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-light",
                                                            children: "Name"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-accent",
                                                            children: "Required"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    placeholder: "Enter Your Name Here"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-input-frame mil-mb-30",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-light",
                                                            children: "Email Adress"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-accent",
                                                            children: "Required"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "email",
                                                    id: "email",
                                                    placeholder: "Your Email"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-input-frame mil-mb-60",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-light",
                                                            children: "Phone"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-light-soft",
                                                            children: "Optional"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "number",
                                                    placeholder: "Your Phone"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-attach-frame mil-mb-60",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fas fa-paperclip"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "mil-custom-file-input",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Attach your file"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "file",
                                                            id: "mil-file-input"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "mil-text-sm mil-light-soft",
                                                    children: "up to 20MB"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-lg-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-input-frame mil-mb-30",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-light",
                                                            children: "Email Adress"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-accent",
                                                            children: "Required"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                    placeholder: "Your Message",
                                                    defaultValue: ""
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mil-text-sm mil-light-soft mil-mb-15",
                                            children: "We will process your personal information in accordance with our Privacy Policy."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-checbox-frame mil-mb-60",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    className: "mil-checkbox",
                                                    id: "checkbox-1",
                                                    type: "checkbox",
                                                    defaultValue: "value"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    htmlFor: "checkbox-1",
                                                    className: "mil-text-sm mil-light",
                                                    children: [
                                                        "I would like to be contacted with news and updates about your",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#.",
                                                            className: "mil-accent",
                                                            children: "events and services"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "mil-button mil-accent-bg mil-fw",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "Send Message Now"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Contact = (ContactSection);


/***/ }),

/***/ 9399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Divider = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mil-divider"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);


/***/ }),

/***/ 4927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HowItWorks)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/how-it-works.json
const how_it_works_namespaceObject = JSON.parse('{"TN":{"Ps":"How We","E0":"Collaborate","EA":"With You"},"Oc":"Discover Our Company","ev":[{"name":"Thinking Big","icon":"/img/icons/sm/1.svg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"name":"Starting Small","icon":"/img/icons/sm/2.svg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"name":"Creating Fast","icon":"/img/icons/sm/3.svg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"name":"Innovating Scale","icon":"/img/icons/sm/4.svg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],"xz":{"P":"Learn More","p":"/about"},"NK":{"P":"How We Work","p":"/careers"}}');
;// CONCATENATED MODULE: ./src/components/sections/HowItWorks.jsx


const HowItWorksSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "mil-how-it-works mil-deep-bg mil-p-120-90",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-deco",
                style: {
                    top: 0,
                    right: "20%"
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-deco",
                style: {
                    bottom: 0,
                    left: "30%",
                    transform: "rotate(180deg)"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "mil-suptitle mil-suptitle-2 mil-mb-30",
                        children: how_it_works_namespaceObject.Oc
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                        className: "mil-mb-90",
                        children: [
                            how_it_works_namespaceObject.TN.Ps,
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "mil-accent",
                                children: how_it_works_namespaceObject.TN.E0
                            }),
                            " ",
                            how_it_works_namespaceObject.TN.EA
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: how_it_works_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-md-6 col-xl-3",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mil-mb-60",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-icon-box-head mil-mb-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mil-icon-frame mil-icon-frame-sm",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: item.icon,
                                                        alt: "icon"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    children: item.name
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: item.text
                                        })
                                    ]
                                })
                            }, `how-it-works-i-${key}`))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-md-6 col-xl-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: how_it_works_namespaceObject.xz.p,
                                    className: "mil-link mil-mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: how_it_works_namespaceObject.xz.P
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fas fa-arrow-right"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-md-6 col-xl-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-adaptive-right",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: how_it_works_namespaceObject.NK.p,
                                        className: "mil-button mil-border mil-mb-30",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: how_it_works_namespaceObject.NK.P
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const HowItWorks = (HowItWorksSection);


/***/ }),

/***/ 4759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Partners)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/sections/partners.json
const partners_namespaceObject = JSON.parse('{"e":[{"image":"img/partners/1.png","alt":"partner","link":"#."},{"image":"img/partners/2.png","alt":"partner","link":"#."},{"image":"img/partners/3.png","alt":"partner","link":"#."},{"image":"img/partners/4.png","alt":"partner","link":"#."},{"image":"img/partners/5.png","alt":"partner","link":"#."},{"image":"img/partners/6.png","alt":"partner","link":"#."}]}');
;// CONCATENATED MODULE: ./src/components/sections/Partners.jsx



const PartnersSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mil-partners mil-p-90-60",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-partners-frame",
                children: partners_namespaceObject.e.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: item.link,
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: item.image,
                            alt: item.alt
                        })
                    }, `partners-i-${index}`))
            })
        })
    });
};
/* harmony default export */ const Partners = (PartnersSection);


/***/ }),

/***/ 5081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services.json
const services_namespaceObject = JSON.parse('{"TN":{"P":"How We Can","E":"Help You"},"aC":{"n":"IT Services","e":[{"num":"01","name":"Dedicated Team","icon":"img/icons/md/1.svg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"num":"02","name":"QA and Testing","icon":"img/icons/md/2.svg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"num":"03","name":"SaaS","icon":"img/icons/md/3.svg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]},"wm":{"n":"IT Solutions","e":[{"num":"04","name":"Blockchain","icon":"img/icons/md/4.svg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"num":"05","name":"Artificial Intelligence","icon":"img/icons/md/5.svg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"num":"06","name":"Internet of Things","icon":"img/icons/md/6.svg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]}}');
;// CONCATENATED MODULE: ./src/components/sections/Services.jsx


const ServicesSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "mil-services mil-p-120-90",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-deco",
                style: {
                    top: 0,
                    right: "20%"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                        className: "mil-mb-30",
                        children: [
                            services_namespaceObject.TN.P,
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "mil-accent",
                                children: services_namespaceObject.TN.E
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-lg-6 col-xl-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "mil-mb-60 mil-mt-30",
                                        children: services_namespaceObject.aC.n
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-divider mil-divider-left"
                                    }),
                                    services_namespaceObject.aC.e.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                key > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mil-divider mil-divider-left"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mil-service-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "mil-service-icon",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "mil-icon-frame mil-icon-frame-md",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: item.icon,
                                                                    alt: "icon"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "mil-service-text",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                                                                    className: "mil-mb-30",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            className: "mil-accent",
                                                                            children: item.num
                                                                        }),
                                                                        " ",
                                                                        item.name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: item.text
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, `services-1-i-${key}`))
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-lg-6 col-xl-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "mil-mb-60 mil-mt-30",
                                        children: services_namespaceObject.wm.n
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-divider mil-divider-left"
                                    }),
                                    services_namespaceObject.wm.e.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                key > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mil-divider mil-divider-left"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mil-service-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "mil-service-icon",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "mil-icon-frame mil-icon-frame-md",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: item.icon,
                                                                    alt: "icon"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "mil-service-text",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                                                                    className: "mil-mb-30",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            className: "mil-accent",
                                                                            children: item.num
                                                                        }),
                                                                        " ",
                                                                        item.name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: item.text
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, `services-2-i-${key}`))
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Services = (ServicesSection);


/***/ }),

/***/ 2932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Skills)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/skills.json
const skills_namespaceObject = JSON.parse('{"TN":{"Ps":"Business","E0":"Success","EA":"With <br />Technology"},"Oc":"Our Skill","WL":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here.","ev":[{"label":"Software Development","value":"65"},{"label":"Web Development","value":"90"},{"label":"UX / UI Design","value":"50"},{"label":"App Development","value":"95"},{"label":"Internet of Things","value":"60"},{"label":"Artificial Intelligence","value":"90"},{"label":"Blockchain","value":"80"}],"LI":{"P":"More","p":"/about"}}');
;// CONCATENATED MODULE: ./src/components/sections/Skills.jsx


const SkillsSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "mil-skills mil-p-120-90",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row align-items-end mil-mb-90",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "mil-suptitle mil-suptitle-2 mil-mb-30",
                                    children: skills_namespaceObject.Oc
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    children: [
                                        skills_namespaceObject.TN.Ps,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "mil-accent",
                                            children: skills_namespaceObject.TN.E0
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: skills_namespaceObject.TN.EA
                                            }
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "mil-mt-60-adapt",
                                children: skills_namespaceObject.WL
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        skills_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-md-6 col-xl-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                        className: "mil-mb-30",
                                        children: item.label
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mil-skill-frame mil-mb-60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "mil-skill-track",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mil-skill-prog",
                                                    style: {
                                                        width: item.value + "%"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mil-text-sm",
                                                children: [
                                                    item.value,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, `skills-i-${key}`)),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-md-6 col-xl-3 mil-text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                href: skills_namespaceObject.LI.p,
                                className: "mil-link mil-mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: skills_namespaceObject.LI.P
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "fas fa-arrow-right"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Skills = (SkillsSection);


/***/ }),

/***/ 7374:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ getSortedProjectsData)
/* harmony export */ });
/* unused harmony export getProjectData */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);
([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const projectsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/data/projects");
function getSortedProjectsData() {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(projectsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(projectsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b)=>{
        if (a.id > b.id) {
            return 1;
        } else {
            return -1;
        }
    });
}
async function getProjectData(id) {
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();
    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7544);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var _lib_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7374);
/* harmony import */ var _components_sections_Partners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4759);
/* harmony import */ var _components_sections_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5081);
/* harmony import */ var _components_sections_HowItWorks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4927);
/* harmony import */ var _components_sections_Skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2932);
/* harmony import */ var _components_sections_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(561);
/* harmony import */ var _components_sections_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9399);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_4__, _lib_projects__WEBPACK_IMPORTED_MODULE_5__]);
([_lib_posts__WEBPACK_IMPORTED_MODULE_4__, _lib_projects__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const LatestProjectsSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "../components/sliders/LatestProjects"
        ]
    },
    ssr: false
});
const LatestPostsSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "../components/sliders/LatestPosts"
        ]
    },
    ssr: false
});
const HeroSlideshowSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "../components/sliders/HeroSlideshow"
        ]
    },
    ssr: false
});
const TestimonialSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "../components/sliders/Testimonial"
        ]
    },
    ssr: false
});
const Home1 = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        transparent: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroSlideshowSlider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Partners__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Divider__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Divider__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LatestProjectsSlider, {
                projects: props.projects
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_HowItWorks__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Skills__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Divider__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LatestPostsSlider, {
                posts: props.posts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TestimonialSlider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Contact__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home1);
async function getStaticProps() {
    const allPosts = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_4__/* .getSortedPostsData */ .ld)();
    const allProjects = (0,_lib_projects__WEBPACK_IMPORTED_MODULE_5__/* .getSortedProjectsData */ .E)();
    return {
        props: {
            posts: allPosts,
            projects: allProjects
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,152,544,745], () => (__webpack_exec__(8955)));
module.exports = __webpack_exports__;

})();