!function(e) {
    var t = {};
    function i(s) {
        if (t[s])
            return t[s].exports;
        var n = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, s) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var s = Object.create(null);
        if (i.r(s),
        Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                i.d(s, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return s
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 0)
}([function(e, t) {
    class i extends zyberModules.frontend.handlers.Base {
        bindEvents() {
            this.$element.data("stickyTop", this.$element.offset().top),
            this.runSticky()
        }
        runSticky() {
            if (!this.$element.hasClass("jkit-sticky-element--enabled"))
                return;
            const e = this
              , t = jQuery
              , i = this.$element
              , s = this.getElementSettings()
              , n = i.hasClass("jkit-sticky-element-on--down") ? "down" : i.hasClass("jkit-sticky-element-on--up") ? "up" : "both"
              , o = i.hasClass("jkit-sticky-position--fixed") ? "fixed" : "sticky";
            let r = i.data("stickyTop")
              , d = 0
              , a = 0;
            e.stickyTop = r,
            e.width = i.outerWidth(),
            e.height = i.outerHeight(),
            e.margin = i.css("margin"),
            "fixed" === o ? (i.wrap('<div class="wrapper-sticky-fixed"></div>'),
            i.parent().css("width", e.width),
            i.parent().css("height", e.height),
            i.parent().css("margin", e.margin),
            i.css("width", e.width),
            i.css("height", e.height),
            i.css("margin", e.margin)) : i.parent().hasClass("wrapper-sticky-fixed") && i.unwrap(),
            t(window).on("load resize scroll", i, (function(c) {
                const h = t("body").attr("data-zyber-device-mode")
                  , l = t(this).scrollTop();
                let p = !0;
                if ("fixed" === o && "resize" === c.type) {
                    if (zyberFrontend.isEditMode()) {
                        if (c.target.innerWidth === a)
                            return;
                        a = c.target.innerWidth
                    } else {
                        if (c.target.outerWidth === a)
                            return;
                        a = c.target.outerWidth
                    }
                    i.parent().hasClass("wrapper-sticky-fixed") && (i.unwrap(),
                    i.css("position", "relative"),
                    i.removeClass("sticky-pinned")),
                    i.css("width", ""),
                    i.css("height", ""),
                    i.css("margin", ""),
                    e.width = i.outerWidth(),
                    e.height = i.outerHeight(),
                    e.margin = i.css("margin"),
                    i.wrap('<div class="wrapper-sticky-fixed"></div>'),
                    i.parent().css("width", e.width),
                    i.parent().css("height", e.height),
                    i.parent().css("margin", e.margin),
                    i.css("width", e.width),
                    i.css("height", e.height),
                    i.css("margin", e.margin)
                }
                if ("string" == typeof s.jkit_sticky_device && (s.jkit_sticky_device = [s.jkit_sticky_device]),
                Object.values(s.jkit_sticky_device).forEach((function(e) {
                    h !== e || (p = !1)
                }
                )),
                p)
                    return i.css("position", "relative"),
                    i.removeClass("sticky-pinned"),
                    void (i.hasClass("zyber-column") || i.css("width", "unset"));
                const u = "down" === n ? l : l + t(this).height()
                  , k = "down" === n ? r : r + i.outerHeight(!0);
                if (!i.hasClass("sticky-pinned") && (r = i.offset().top,
                void 0 !== s)) {
                    if (void 0 !== s.jkit_sticky_top_position) {
                        r -= s.jkit_sticky_top_position.size;
                        const n = t("#wpadminbar");
                        n.length && e.width > 600 ? (r -= n.height(),
                        i.css("--wpadminbar-height", n.height() + "px")) : i.css("--wpadminbar-height", "")
                    }
                    void 0 !== s.jkit_sticky_bottom_position && (r += s.jkit_sticky_bottom_position.size)
                }
                "down" === n && k < u || "up" === n && k > u ? (i.css("position", o),
                i.addClass("sticky-pinned"),
                e.hideOnScroll(l, d, n, c, i)) : "both" === n && "sticky" === o ? (i.css("position", o),
                i.addClass("sticky-pinned")) : (i.css("position", "relative"),
                i.removeClass("hide-sticky"),
                i.removeClass("sticky-pinned")),
                d = l
            }
            ))
        }
        hideOnScroll(e, t, i, s, n) {
            if ("scroll" === s.type) {
                if ("down" === i) {
                    if (this.stickyTop + this.height >= t && n.hasClass("jkit-sticky-element--threshold"))
                        return void n.removeClass("hide-sticky");
                    if (e > t && n.hasClass("jkit-sticky-element--hide-on-scroll"))
                        return void n.addClass("hide-sticky")
                } else if ("up" === i) {
                    if (Math.abs(jQuery(window).height() - this.height - this.stickyTop + this.height) <= t && n.hasClass("jkit-sticky-element--threshold"))
                        return void n.removeClass("hide-sticky");
                    if (e < t && n.hasClass("jkit-sticky-element--hide-on-scroll"))
                        return void n.addClass("hide-sticky")
                }
                n.removeClass("hide-sticky")
            }
        }
        onElementChange(e) {
            -1 !== ["jkit_sticky_section", "jkit_sticky_device", "jkit_sticky_trigger", "jkit_sticky_position"].indexOf(e) && (jQuery(window).off("load resize scroll", this.$element),
            this.runSticky())
        }
    }
    jQuery(window).on("zyber/frontend/init", ( () => {
        const e = e => {
            zyberFrontend.elementsHandler.addHandler(i, {
                $element: e
            })
        }
        ;
        zyberFrontend.hooks.addAction("frontend/element_ready/container", e),
        zyberFrontend.hooks.addAction("frontend/element_ready/section", e),
        zyberFrontend.hooks.addAction("frontend/element_ready/column", e)
    }
    ))
}
]);
