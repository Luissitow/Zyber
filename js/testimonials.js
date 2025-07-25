!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 0)
}([function(e, t) {
    class n extends zyberModules.frontend.handlers.Base {
        getDefaultSettings() {
            return {
                selectors: {
                    wrapper: ".jeg-zyber-kit.jkit-testimonials",
                    items: ".testimonials-track"
                }
            }
        }
        getDefaultElements() {
            const e = this.getSettings("selectors");
            return {
                $wrapper: this.$element.find(e.wrapper),
                $items: this.$element.find(e.items)
            }
        }
        bindEvents() {
            this.onLoadElement()
        }
        onLoadElement() {
            this.loadCarousel()
        }
        loadCarousel() {
            const e = this.elements.$wrapper.data("id")
              , t = this.getSettings("selectors")
              , n = this.elements.$wrapper.data("settings")
              , r = n.responsive
              , o = {
                0: {
                    items: 1,
                    gutter: 0
                },
                768: {
                    items: 2,
                    gutter: 0
                },
                1025: {
                    items: 3,
                    gutter: 10
                }
            }
              , i = {};
            Object.entries(r).forEach(( ([e,t]) => {
                i[t.breakpoint] = {},
                "" !== t.items ? i[t.breakpoint].items = t.items : o[t.breakpoint] && (i[t.breakpoint].items = o[t.breakpoint].items),
                "" !== t.margin ? i[t.breakpoint].gutter = t.margin : o[t.breakpoint] && (i[t.breakpoint].gutter = o[t.breakpoint].gutter)
            }
            ));
            const a = {
                container: t.wrapper + '[data-id="' + e + '"] ' + t.items,
                loop: !0,
                mouseDrag: !0,
                autoplay: n.autoplay,
                autoplayTimeout: n.autoplay_speed,
                autoplayHoverPause: n.autoplay_hover_pause,
                navPosition: "bottom",
                controlsPosition: n.arrow_position,
                controlsText: [n.navigation_left, n.navigation_right],
                responsiveClass: !0,
                responsive: i
            };
            tns(a),
            this.elements.$wrapper.find("button[data-action]").remove(),
            n.show_navigation || this.elements.$wrapper.find(".tns-controls").remove(),
            n.show_dots || this.elements.$wrapper.find(".tns-nav").remove(),
            n.show_navigation && (a.nav = !0,
            a.navText = ['<i class="' + n.navigation_left + '" aria-hidden="true"></i>', '<i class="' + n.navigation_right + '" aria-hidden="true"></i>'])
        }
    }
    jQuery(window).on("zyber/frontend/init", ( () => {
        zyberFrontend.hooks.addAction("frontend/element_ready/jkit_testimonials.default", (e => {
            zyberFrontend.elementsHandler.addHandler(n, {
                $element: e
            })
        }
        ))
    }
    ))
}
]);
