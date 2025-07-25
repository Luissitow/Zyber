!function(e) {
    var t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
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
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(o, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return o
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
                    wrapper: ".jeg-zyber-kit.jkit-client-logo",
                    items: ".client-track"
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
              , t = this.elements.$wrapper.data("settings")
              , n = this.getSettings("selectors")
              , o = t.responsive
              , r = {};
            let i;
            Object.entries(o).forEach(( ([e,t]) => {
                "" === t.items && "" === t.margin || (r[t.breakpoint] = {},
                i = t.breakpoint,
                "" !== t.items && (r[t.breakpoint].items = t.items),
                "" !== t.margin && (r[t.breakpoint].gutter = t.margin))
            }
            )),
            void 0 !== i && 0 !== i && (r[0] = r[i],
            delete r[i]);
            const a = {
                container: n.wrapper + '[data-id="' + e + '"] ' + n.items,
                loop: !0,
                mouseDrag: !0,
                autoplay: t.autoplay,
                autoplayTimeout: t.autoplay_speed,
                autoplayHoverPause: t.autoplay_hover_pause,
                navPosition: "bottom",
                controlsPosition: t.arrow_position,
                controlsText: [t.navigation_left, t.navigation_right],
                responsiveClass: !0,
                responsive: r
            };
            tns(a),
            this.elements.$wrapper.find("button[data-action]").remove(),
            t.show_navigation || this.elements.$wrapper.find(".tns-controls").remove(),
            t.show_dots || this.elements.$wrapper.find(".tns-nav").remove()
        }
    }
    jQuery(window).on("zyber/frontend/init", ( () => {
        zyberFrontend.hooks.addAction("frontend/element_ready/jkit_client_logo.default", (e => {
            zyberFrontend.elementsHandler.addHandler(n, {
                $element: e
            })
        }
        ))
    }
    ))
}
]);
