"use strict";
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 7544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layouts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/utilits.js
// Sticky nav
const stickyNav = (extraClass)=>{
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        const sticky = document.querySelectorAll(extraClass ? `.${extraClass}` : ".mil-animated");
        for(let i = 0; i < sticky.length; i++){
            const stick = sticky[i];
            if (extraClass) {
                if (stick) {
                    if (offset > 10) {
                        stick.classList.add("mil-hide-top");
                    } else {
                        stick.classList.remove("mil-hide-top");
                    }
                }
            } else {
                if (stick) {
                    if (offset > 10) {
                        stick.classList.remove("mil-top-panel-transparent");
                    } else {
                        stick.classList.add("mil-top-panel-transparent");
                    }
                }
            }
        }
    });
};
const milButtonClick = ()=>{
    const milTabButtons = document.querySelectorAll(".mil-tab-buttons a");
    milTabButtons.forEach((a)=>{
        a.addEventListener("click", ()=>{
            milTabButtons.forEach((element)=>{
                element.classList.remove("mil-active");
            });
            a.classList.add("mil-active");
        });
    });
};
const milButtonClick2 = ()=>{
    const milTabButtons = document.querySelectorAll(".mil-tabs-left-nav a");
    milTabButtons.forEach((a)=>{
        a.addEventListener("click", ()=>{
            milTabButtons.forEach((element)=>{
                element.classList.remove("mil-active");
            });
            a.classList.add("mil-active");
        });
    });
};
const accordion = ()=>{
    var acc = document.getElementsByClassName("mil-accordion");
    var i;
    for(i = 0; i < acc.length; i++){
        acc[i].onclick = function() {
            this.classList.toggle("mil-active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        };
    }
};

;// CONCATENATED MODULE: ./src/layouts/footers/DefaultFooter.js

const DefaultFooter = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "mil-dark-bg",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: "img/deco/map.png",
                alt: "background",
                className: "mil-footer-bg"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-footer-content mil-p-120-90",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row justify-content-between align-items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-xl-4 mil-mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "img/logo/logo-light.png",
                                            alt: "logo",
                                            className: "mil-logo mil-mb-30",
                                            style: {
                                                width: 140
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mil-light-soft mil-mb-30",
                                            children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#.",
                                            className: "mil-app-btn mil-mb-5",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fab fa-google-play"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mil-app-text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-accent mil-text-sm",
                                                            children: "Available on the"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "mil-h6",
                                                            children: "Google Play"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#.",
                                            className: "mil-app-btn",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fab fa-apple"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mil-app-text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-accent mil-text-sm",
                                                            children: "Download on the"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "mil-h6",
                                                            children: "App Store"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-7 mil-mt-60-adapt",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "col-lg-7 mil-mb-30",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                                        className: "mil-light mil-up-font mil-mb-30",
                                                        children: [
                                                            "Join The ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "mil-accent",
                                                                children: "ITSulu"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                            "Experience"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "mil-light-soft",
                                                        children: [
                                                            "Lorem ipsum dolor sit amet, consectetuer",
                                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                            " adipiscing elit, sed diam nonummy."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-5 mil-mb-30",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            className: "mil-rounded-input mil-text-center mil-mb-5",
                                                            type: "text",
                                                            placeholder: "Your email address"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            className: "mil-button mil-accent-bg mil-fw",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "Subscribe Now"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-divider mil-light"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mil-footer-links",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "mil-social mil-light",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: "mil-adapt-links",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#.",
                                                children: "Facebook"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#.",
                                                children: "FB"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: "mil-adapt-links",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#.",
                                                children: "Instagram"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#.",
                                                children: "IG"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: "mil-adapt-links",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#.",
                                                children: "LinkedIn"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#.",
                                                children: "IN"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: "mil-adapt-links",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#.",
                                                children: "Twitter"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#.",
                                                children: "TW"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: "mil-adapt-links",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#.",
                                                children: "YouTube"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#.",
                                                children: "YT"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "mil-additional-links mil-light",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "#.",
                                            children: "Terms & Condition"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "#.",
                                            children: "Privacy Policy"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "#.",
                                            children: "Sitemap"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-footer-bottom",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-text-sm mil-light",
                            children: "\xa9 ITSulu 2023."
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-text-sm mil-light",
                            children: "All Rights Reserved."
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const footers_DefaultFooter = (DefaultFooter);

;// CONCATENATED MODULE: ./src/layouts/footers/Footer2.js

const Footer2 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "mil-dark-bg",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: "img/deco/map.png",
                alt: "background",
                className: "mil-footer-bg"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mil-footer-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row align-items-center mil-p-120-60",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-xl-6 mil-mb-60",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                            className: "mil-light mil-mb-15",
                                            children: [
                                                "Join The ",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "mil-accent",
                                                    children: "ITSulu"
                                                }),
                                                " Experience"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mil-light-soft",
                                            children: "Duis autem vel eum iriure dolor in hendrerit in vulputate."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-6 mil-mb-60",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                        className: "mil-subscribe-form",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "text",
                                                placeholder: "Your email address"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                type: "submit",
                                                className: "mil-button mil-accent-bg",
                                                children: "Subscribe Now"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-divider mil-light"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row justify-content-between mil-p-120-60",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-md-3 col-lg-3 col-xl-3 mil-mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "img/logo/logo-light.png",
                                            alt: "logo",
                                            className: "mil-logo mil-mb-60",
                                            style: {
                                                width: 140
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "mil-light mil-light-soft",
                                            style: {
                                                marginBottom: 45
                                            },
                                            children: [
                                                "2307 Beverley Rd Brooklyn, ",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                "New York 11226 USA."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "mil-simple-list mil-mb-15",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    className: "mil-light",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-accent",
                                                            children: "+07"
                                                        }),
                                                        "\xa0",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-light-soft",
                                                            children: "0 002 00 05"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-accent",
                                                            children: "info"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-light mil-light-soft",
                                                            children: "@mydomain.com"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-8 col-lg-7 col-xl-7",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row justify-content-end",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "col-md-4 col-lg-4 mil-mb-60",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        className: "mil-list-title mil-light mil-mb-60",
                                                        children: "Social"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "mil-hover-link-list mil-light",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "Facebook"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "Instagram"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "LinkedIn"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "Twitter"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "YouTube"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "col-md-4 col-lg-4 mil-mb-60",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        className: "mil-list-title mil-light mil-mb-60",
                                                        children: "Support"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "mil-hover-link-list mil-light",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "Documentation"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "Support"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "FAQs"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "Download"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "Sitemap"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "col-md-4 col-lg-4 mil-mb-60",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        className: "mil-list-title mil-light mil-mb-60",
                                                        children: "Links"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "mil-hover-link-list mil-light",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "About Us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "Terms & condition"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "Privacy Policy"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "Partners"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#.",
                                                                    children: "Press"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-footer-bottom",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-text-sm mil-light",
                            children: "\xa9 ITSulu 2023."
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-text-sm mil-light",
                            children: "All Rights Reserved."
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const footers_Footer2 = (Footer2);

;// CONCATENATED MODULE: ./src/layouts/footers/Index.js



const Footer = ({ footer  })=>{
    switch(footer){
        case 1:
            return /*#__PURE__*/ jsx_runtime.jsx(footers_DefaultFooter, {});
        case 2:
            return /*#__PURE__*/ jsx_runtime.jsx(footers_Footer2, {});
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(footers_DefaultFooter, {});
    }
};
/* harmony default export */ const Index = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layouts/headers/DefaultHeader.js



const DefaultHeader = ({ transparent , headerTop , extarClass  })=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `mil-top-position mil-fixed ${extarClass ? extarClass : ""}`,
        children: [
            headerTop && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-additional-panel",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "mil-ap-list",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    children: [
                                        "Phone: ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "mil-accent",
                                            children: "+ 01"
                                        }),
                                        " 800 070 404"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: "Info@mydomain.com"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-ap-call-to-action",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-icon-frame mil-icon-frame-sm",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "img/icons/sm/4.svg",
                                        alt: "icon"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Find out how ITSulu Could save you over 2.400 US$ a year."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "mil-ap-list",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#.",
                                        children: "Accounta"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#.",
                                        children: "English"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `mil-top-panel ${transparent ? "mil-top-panel-transparent mil-animated" : ""}`,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                className: "mil-logo",
                                style: {
                                    width: 140
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `mil-navigation ${toggle ? "mil-active" : ""}`,
                            children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "about",
                                                children: "About us"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/team",
                                                children: "Team"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/careers",
                                                children: "Careers"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "portfolio",
                                                children: "Case Studies"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "service-1",
                                                children: "Services"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "contact",
                                                children: "Contact Us"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `mil-menu-btn ${toggle ? "mil-active" : ""}`,
                            onClick: ()=>setToggle(!toggle),
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const headers_DefaultHeader = (DefaultHeader);

;// CONCATENATED MODULE: ./src/layouts/headers/Header2.js

const Header2 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mil-top-position mil-fixed has-additional-panel",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-additional-panel",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "mil-ap-list",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    children: [
                                        "Phone: ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "mil-accent",
                                            children: "+ 01"
                                        }),
                                        " 800 070 404"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: "Info@mydomain.com"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-ap-call-to-action",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-icon-frame mil-icon-frame-sm",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "img/icons/sm/4.svg",
                                        alt: "icon"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Find out how ITSulu Could save you over 2.400 US$ a year."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "mil-ap-list",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#.",
                                        children: "Accounta"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#.",
                                        children: "English"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-top-panel",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(Link, {
                            href: "/",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                className: "mil-logo",
                                style: {
                                    width: 140
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-navigation",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "mil-has-children",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                        href: "/",
                                                        children: "Enterprise"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "about",
                                                                    children: "About us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "team",
                                                                    children: "Team"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "team-single",
                                                                    children: "Team Member"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "careers.html",
                                                                    children: "Careers"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "prices",
                                                                    children: "Prices"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "faq",
                                                                    children: "FAQ"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "event",
                                                                    children: "Event"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                    href: "portfolio",
                                                    children: "Case Studies"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "mil-has-children",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                        href: "#.",
                                                        children: "Services"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "service-1",
                                                                    children: "Service 1"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "service-2",
                                                                    children: "Service 2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "service-3",
                                                                    children: "Service 3"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "service-4",
                                                                    children: "Service 4"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "mil-has-children",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                        href: "#.",
                                                        children: "Solutions"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "solution-1",
                                                                    children: "Solution 1"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "solution-2",
                                                                    children: "Solution 2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "solution-3",
                                                                    children: "Solution 3"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                    href: "blog",
                                                    children: "Blog"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                    href: "contact",
                                                    children: "Contact Us"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "mil-has-children",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "#.",
                                                        children: "Other"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "coming-soon",
                                                                    children: "Coming Soon"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(Link, {
                                                                    href: "404",
                                                                    children: "404"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-search-icon",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                            width: 21,
                                            height: 20,
                                            viewBox: "0 0 21 20",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-menu-btn",
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const headers_Header2 = (Header2);

;// CONCATENATED MODULE: ./src/layouts/headers/Index.js





const Header = ({ header , transparent , headerTop , extarClass  })=>{
    (0,external_react_.useEffect)(()=>{
        stickyNav(extarClass);
    }, []);
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime.jsx(headers_DefaultHeader, {
                transparent: transparent,
                headerTop: headerTop,
                extarClass: extarClass
            });
        case 2:
            return /*#__PURE__*/ jsx_runtime.jsx(headers_Header2, {
                transparent: transparent
            });
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(headers_DefaultHeader, {
                transparent: transparent,
                headerTop: headerTop,
                extarClass: extarClass
            });
    }
};
/* harmony default export */ const headers_Index = (Header);

;// CONCATENATED MODULE: ./src/layouts/Layouts.js





const Layouts = ({ children , header , footer , noHeader , noFooter , transparent , headerTop , extarClass  })=>{
    (0,external_react_.useEffect)(()=>{
        milButtonClick();
        milButtonClick2();
        accordion();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mil-wrapper",
        children: [
            !noHeader && /*#__PURE__*/ jsx_runtime.jsx(headers_Index, {
                header: header,
                transparent: transparent,
                headerTop: headerTop,
                extarClass: extarClass
            }),
            children,
            !noFooter && /*#__PURE__*/ jsx_runtime.jsx(Index, {
                footer: footer
            })
        ]
    });
};
/* harmony default export */ const layouts_Layouts = (Layouts);


/***/ })

};
;