!function(e, t) {
    "use strict";
    window.ElementsKit_Helper = {},
    ElementsKit_Helper.setURLHash = function(t, n, i) {
        if (void 0 === t || !("ekit_hash_change"in t))
            return;
        void 0 === i && (i = "ekit-handler-id");
        let s = "#" + e(n).data(i);
        window.location.hash = s
    }
    ,
    ElementsKit_Helper.ajaxLoading = function(n, i) {
        if (n.hasClass("ekit-template-ajax--yes")) {
            var s = i.find("[data-ajax-post-id]");
            s.hasClass("is--loaded") || e.ajax({
                type: "POST",
                url: ekit_config.ajaxurl,
                data: {
                    action: "ekit_widgetarea_content",
                    nonce: ekit_config.nonce,
                    post_id: s.data("ajax-post-id")
                },
                success: function(n) {
                    s.addClass("is--loaded").html(n),
                    s.find("[data-widget_type]").each((function() {
                        var n = e(this);
                        t.hooks.doAction("frontend/element_ready/" + n.data("widget_type"), n)
                    }
                    ))
                }
            })
        }
    }
    ,
    ElementsKit_Helper.triggerClickOnEvent = function(t, n) {
        "click" !== t && n.on(t, (function() {
            e(this).trigger("click")
        }
        ))
    }
    ,
    ElementsKit_Helper.megaMenuAjaxLoad = function(t) {
        let n = t.find(".elementskit-submenu-indicator, .ekit-submenu-indicator-icon")
          , i = t.find(".megamenu-ajax-load")
          , s = t.closest(".ekit-wid-con").data("responsive-breakpoint")
          , a = n.attr("class")
          , o = "elementskit-submenu-indicator eicon-loading eicon-animation-spin";
        i.length && !t.hasClass("ekit-ajax-loading") && e.ajax({
            url: window.elementskit.resturl + "megamenu/megamenu_content",
            type: "get",
            data: {
                id: i.data("id")
            },
            beforeSend: function() {
                t.addClass("ekit-ajax-loading"),
                n.removeClass(a).addClass(o),
                e(document).width() <= Number(s) ? n.css({
                    border: "none"
                }) : n.css({
                    "padding-right": 0,
                    "margin-right": "5px"
                })
            },
            success: function(s) {
                t.removeClass("ekit-ajax-loading"),
                i.replaceWith(s),
                n.removeClass(o).addClass(a).removeAttr("style"),
                t.find(".zyber-element").each((function() {
                    zyberFrontend.elementsHandler.runReadyTrigger(e(this))
                }
                ))
            }
        })
    }
    ,
    ElementsKit_Helper.swiper = function(e, n) {
        var i = e.get(0);
        if ("function" != typeof Swiper) {
            return new (0,
            t.utils.swiper)(i,n).then((e => e))
        }
        {
            const e = new Swiper(i,n);
            return Promise.resolve(e)
        }
    }
    ,
    ElementsKit_Helper.observeElement = function(e, t, n={
        threshold: 1
    }) {
        new IntersectionObserver(( (e, n) => {
            e.forEach((e => {
                e.isIntersecting && (t(e.target),
                n.unobserve(e.target))
            }
            ))
        }
        ),n).observe(e)
    }
    ;
    let n = {
        init: function() {
            var i = {
                "elementskit-accordion.default": n.Accordion,
                "elementskit-blog-posts.default": n.BlogPosts,
                "elementskit-countdown-timer.default": n.Countdown_Timer,
                "elementskit-client-logo.default": n.Client_Logo,
                "elementskit-testimonial.default": n.Testimonial_Slider,
                "elementskit-image-comparison.default": n.Image_Comparison,
                "elementskit-progressbar.default": n.Progressbar,
                "elementskit-piechart.default": n.Piechart,
                "elementskit-funfact.default": n.Funfact,
                "elementskit-post-tab.default": n.PostTab,
                "elementskit-header-search.default": n.Header_Search,
                "elementskit-header-offcanvas.default": n.Header_Off_Canvas,
                "ekit-nav-menu.default": n.Nav_Menu,
                "elementskit-team.default": n.Team,
                "elementskit-simple-tab.default": n.Tab,
                "elementskit-back-to-top.default": n.Back_To_Top,
                "elementskit-image-accordion.default": n.Image_Accordion,
                "elementskit-video.default": n.Video
            };
            e.each(i, (function(e, n) {
                t.hooks.addAction("frontend/element_ready/" + e, n)
            }
            ))
        },
        Accordion: function(t) {
            t.on("click", ".elementskit-card-header", (function(t) {
                e(this).parent().toggleClass("active"),
                e(this).parent().siblings().removeClass("active")
            }
            ))
        },
        Image_Accordion: function(t) {
            const n = t.find(".elementskit-single-image-accordion");
            let i;
            for (let t = 0; t < n.length; t++) {
                let s = n[t];
                "yes" === e(s).data("active") && (i = n[t])
            }
            t.on("click", ".ekit-image-accordion-item", (function(t) {
                let n = e(this)
                  , s = n.data("link")
                  , a = n.data("behavior")
                  , o = n.find("a, a *")
                  , l = e(t.target).is(o)
                  , d = s?.is_external ? s.is_external : "_self";
                if ("hover" === a || i === this)
                    !l && s?.url && window.open(s.url, d);
                else {
                    if (!n.hasClass("item-opened"))
                        return i = "",
                        e(this).closest(".elementskit-image-accordion-wraper").find(".ekit-image-accordion-item").removeClass("item-opened"),
                        void n.addClass("item-opened");
                    if (n.hasClass("item-opened"))
                        return void (!l && s?.url && window.open(s.url, d))
                }
            }
            ))
        },
        Nav_Menu: function(t) {
            if (t.find(".elementskit-megamenu-has").length > 0) {
                let n = t.find(".ekit-wid-con").data("responsive-breakpoint")
                  , i = t.find(".elementskit-megamenu-has")
                  , s = t.find(".elementskit-menu-container").outerHeight();
                function a(t, n, i) {
                    t.css({
                        width: n
                    }),
                    e(document).width() < Number(i) && t.removeAttr("style")
                }
                e(window).on("resize", (function() {
                    t.find(".elementskit-megamenu-panel").css({
                        top: s
                    })
                }
                )).trigger("resize"),
                i.on("mouseenter", (function() {
                    let t = e(this).data("vertical-menu")
                      , i = e(this).children(".elementskit-megamenu-panel");
                    if (e(this).hasClass("elementskit-dropdown-menu-full_width") && e(this).hasClass("top_position")) {
                        let t = Math.floor(e(this).position().left - e(this).offset().left)
                          , n = e(this);
                        n.find(".elementskit-megamenu-panel").css("max-width", e(window).width()),
                        e(window).on("resize", (function() {
                            n.find(".elementskit-megamenu-panel").css({
                                left: t + "px"
                            })
                        }
                        )).trigger("resize")
                    }
                    !e(this).hasClass("elementskit-dropdown-menu-full_width") && e(this).hasClass("top_position") && e(this).on({
                        mouseenter: function() {
                            0 === e(".default_menu_position").length && e(this).parents(".zyber-section-wrap").addClass("default_menu_position")
                        },
                        mouseleave: function() {
                            0 !== e(".default_menu_position").length && e(this).parents(".zyber-section-wrap").removeClass("default_menu_position")
                        }
                    }),
                    t && t !== undefined ? "string" == typeof t ? (/^[0-9]/.test(t),
                    a(i, t, n)) : i.css({
                        width: t + "px"
                    }) : a(i, t, n)
                }
                )),
                i.trigger("mouseenter")
            }
            if (t.find(".ekit-nav-dropdown-click").length > 0) {
                let o = t.find(".ekit-wid-con").data("responsive-breakpoint");
                t.on("click", ".elementskit-dropdown-has > a", (function(n) {
                    if (n.preventDefault(),
                    e(document).width() < Number(o))
                        return;
                    let i = e(this).parent()
                      , s = e(this).parents(".elementskit-dropdown-has")
                      , a = i.find(">.elementskit-dropdown, >.elementskit-megamenu-panel");
                    t.find(".elementskit-dropdown-has").not(s).find(">.elementskit-dropdown, >.elementskit-megamenu-panel").removeClass("ekit-dropdown-open-onclick"),
                    a.toggleClass("ekit-dropdown-open-onclick")
                }
                )),
                e(window).on("resize", (function() {
                    e(document).width() < Number(o) && t.find(".ekit-dropdown-open-onclick").removeClass("ekit-dropdown-open-onclick")
                }
                )),
                e(document).on("click", (function(n) {
                    e(n.target).closest(".elementskit-dropdown-has").length || t.find(".ekit-dropdown-open-onclick").removeClass("ekit-dropdown-open-onclick")
                }
                )),
                e(window).on("sticky:stick sticky:unstick", (t => {
                    e(t.target).find(".ekit-dropdown-open-onclick").removeClass("ekit-dropdown-open-onclick"),
                    e(t.target).next().find(".ekit-dropdown-open-onclick").removeClass("ekit-dropdown-open-onclick")
                }
                ))
            }
            t.find(".megamenu-ajax-load").length > 0 && (t.find(".ekit-nav-dropdown-hover").on("mouseenter", ".elementskit-megamenu-has", (function(t) {
                ElementsKit_Helper.megaMenuAjaxLoad(e(this))
            }
            )),
            t.find(".ekit-nav-dropdown-click").on("click", ".elementskit-megamenu-has", (function(t) {
                ElementsKit_Helper.megaMenuAjaxLoad(e(this))
            }
            )))
        },
        Progressbar: function(e) {
            var t = e.find(".single-skill-bar")
              , n = t.find(".skill-track")
              , i = t.find(".number-percentage")
              , s = i.data("value")
              , a = i.data("animation-duration") || 300;
            ElementsKit_Helper?.observeElement(t[0], (e => {
                i.animateNumbers(s, !0, a),
                n.animate({
                    width: s + "%"
                }, a)
            }
            ))
        },
        Funfact: function(e) {
            var t = e.find(".elementskit-funfact")
              , n = t.find(".number-percentage")
              , i = n.data("style")
              , s = n.data("value")
              , a = n.data("animation-duration");
            ElementsKit_Helper?.observeElement(t[0], (e => {
                "static" == i ? n.animateNumbers(s, !0, a) : new Odometer({
                    el: n[0],
                    value: 0,
                    duration: a
                }).update(s)
            }
            ))
        },
        BlogPosts: function(e) {
            var t = e.find(".post-items");
            t.data("masonry-config") && t.imagesLoaded((function() {
                t.masonry()
            }
            ))
        },
        Countdown_Timer: function(t) {
            var n = t.find(".ekit-countdown")
              , i = n.data()
              , s = "elementskit-inner-container ekit-countdown-inner"
              , a = "elementskit-inner-container"
              , o = "elementskit-timer-content ekit-countdown-inner";
            for (let e in i)
                i.hasOwnProperty(e) && "string" == typeof i[e] && (i[e] = i[e].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"));
            if (n.length) {
                switch (n[0].classList[0]) {
                case "elementskit-countdown-timer":
                default:
                    i.markup = '<div class="elementskit-timer-container elementskit-days"><div class="' + s + '"><div class="elementskit-timer-content"><span class="elementskit-timer-count">%-D </span><span class="elementskit-timer-title">' + i.dateEkitDay + '</span></div></div></div><div class="elementskit-timer-container elementskit-hours"><div class="' + s + '"><div class="elementskit-timer-content"><span class="elementskit-timer-count">%H </span><span class="elementskit-timer-title">' + i.dateEkitHour + '</span></div></div></div><div class="elementskit-timer-container elementskit-minutes"><div class="' + s + '"><div class="elementskit-timer-content"><span class="elementskit-timer-count">%M </span><span class="elementskit-timer-title">' + i.dateEkitMinute + '</span></div></div></div><div class="elementskit-timer-container elementskit-seconds"><div class="' + s + '"><div class="elementskit-timer-content"><span class="elementskit-timer-count">%S </span><span class="elementskit-timer-title">' + i.dateEkitSecond + "</span></div></div></div>";
                    break;
                case "elementskit-countdown-timer-3":
                    i.markup = '<div class="elementskit-timer-container elementskit-days"><div class="' + o + '"><div class="' + a + '"><span class="elementskit-timer-count">%-D </span><span class="elementskit-timer-title">' + i.dateEkitDay + '</span></div></div></div><div class="elementskit-timer-container elementskit-hours"><div class="' + o + '"><div class="' + a + '"><span class="elementskit-timer-count">%H </span><span class="elementskit-timer-title">' + i.dateEkitHour + '</span></div></div></div><div class="elementskit-timer-container elementskit-minutes"><div class="' + o + '"><div class="' + a + '"><span class="elementskit-timer-count">%M </span><span class="elementskit-timer-title">' + i.dateEkitMinute + '</span></div></div></div><div class="elementskit-timer-container elementskit-seconds"><div class="' + o + '"><div class="' + a + '"><span class="elementskit-timer-count">%S </span><span class="elementskit-timer-title">' + i.dateEkitSecond + "</span></div></div></div>"
                }
                n.theFinalCountdown(i.ekitCountdown, (function(e) {
                    this.innerHTML = e.strftime(i.markup)
                }
                )).on("finish.countdown", (function() {
                    this.innerHTML = i.finishTitle + "<br />" + i.finishContent,
                    "elementskit-countdown-timer-4" === this.classList[0] && e(this).addClass("elementskit-coundown-finish")
                }
                ))
            }
            let l = t.find(".elementskit-flip-clock")
              , d = l.data();
            if (l.length) {
                let e = [d.dateEkitWeek, d.dateEkitDay, d.dateEkitHour, d.dateEkitMinute, d.dateEkitSecond]
                  , t = ["elementskit-wks", "elementskit-days", "elementskit-hrs", "elementskit-mins", "elementskit-secs"]
                  , n = "";
                e.forEach((function(e, i) {
                    n += '<div class="elementskit-time ' + t[i] + ' ekit-countdown-inner"><span class="elementskit-count elementskit-curr elementskit-top"></span><span class="elementskit-count elementskit-next elementskit-top"></span><span class="elementskit-count elementskit-next elementskit-bottom"></span><span class="elementskit-count elementskit-curr elementskit-bottom"></span><span class="elementskit-label">' + e + "</span></div>"
                }
                )),
                l.html(n);
                let i = l.children(".elementskit-mins")
                  , s = l.children(".elementskit-secs")
                  , a = l.children(".elementskit-hrs")
                  , o = l.children(".elementskit-days")
                  , r = l.children(".elementskit-wks")
                  , c = {
                    s: "",
                    m: "",
                    h: "",
                    d: "",
                    w: ""
                }
                  , m = function(e, t, n) {
                    e !== t && (e = 1 === e.toString().length ? "0" + e : e,
                    t = 1 === t.toString().length ? "0" + t : t,
                    n.removeClass("elementskit-flip"),
                    n.children(".elementskit-curr").text(e),
                    n.children(".elementskit-next").text(t),
                    setTimeout((function(e) {
                        e.addClass("elementskit-flip")
                    }
                    ), 50, n))
                };
                l.theFinalCountdown(d.ekitCountdown, (function(e) {
                    m(c.s, e.offset.seconds, s),
                    m(c.m, e.offset.minutes, i),
                    m(c.h, e.offset.hours, a),
                    m(c.d, e.offset.days, o),
                    m(c.w, e.offset.weeks, r),
                    c.s = e.offset.seconds,
                    c.m = e.offset.minutes,
                    c.h = e.offset.hours,
                    c.d = e.offset.days,
                    c.w = e.offset.weeks
                }
                )).on("finish.countdown", (function() {
                    this.innerHTML = d.finishTitle + "<br/>" + d.finishContent
                }
                ))
            }
        },
        Client_Logo: function(e) {
            var n = e.find(".elementskit-clients-slider").data("config");
            n.arrows && (n.navigation = {
                prevEl: e.find(".swiper-button-prev").get(0),
                nextEl: e.find(".swiper-button-next").get(0)
            }),
            n.dots && (n.pagination = {
                el: e.find(".swiper-pagination").get(0),
                type: "bullets",
                clickable: !0
            });
            let i = e.find(`.${t.config.swiperClass}`);
            ElementsKit_Helper.swiper(i, n).then((function(e) {
                n.autoplay && n.pauseOnHover && i.hover((function() {
                    e.autoplay.stop()
                }
                ), (function() {
                    e.autoplay.start()
                }
                ))
            }
            ))
        },
        Testimonial_Slider: function(e) {
            var n = e.find(".elementskit-testimonial-slider").data("config");
            n.arrows && (n.navigation = {
                prevEl: e.find(".swiper-button-prev").get(0),
                nextEl: e.find(".swiper-button-next").get(0)
            }),
            n.dots && (n.pagination = {
                el: e.find(".swiper-pagination").get(0),
                type: "bullets",
                clickable: !0
            });
            let i = e.find(`.${t.config.swiperClass}`);
            ElementsKit_Helper.swiper(i, n).then((function(e) {
                n.autoplay && n.pauseOnHover && i.hover((function() {
                    e.autoplay.stop()
                }
                ), (function() {
                    e.autoplay.start()
                }
                ))
            }
            ))
        },
        Image_Comparison: function(e) {
            var t = e.find(".elementskit-image-comparison");
            t.imagesLoaded((function() {
                var e = {
                    orientation: t.hasClass("image-comparison-container-vertical") ? "vertical" : "horizontal",
                    before_label: t.data("label_before"),
                    after_label: t.data("label_after"),
                    default_offset_pct: t.data("offset"),
                    no_overlay: t.data("overlay"),
                    move_slider_on_hover: t.data("move_slider_on_hover"),
                    click_to_move: t.data("click_to_move")
                };
                t.twentytwenty(e)
            }
            ))
        },
        Piechart: function(t) {
            var n = t.find(".colorful-chart")
              , i = n.data()
              , s = {
                barColor: i.color || undefined,
                lineWidth: i.linewidth || undefined,
                trackColor: i.barbg || undefined,
                gradientChart: !1
            };
            "gradient" === i?.pie_color_style && (s = {
                gradientChart: !0,
                barColor: i.color || undefined,
                gradientColor1: i.gradientcolor2 || undefined,
                gradientColor2: i.gradientcolor1 || undefined,
                lineWidth: i.linewidth || undefined,
                trackColor: i.barbg || undefined
            });
            var a = e.extend({
                barColor: "#666666",
                gradientColor1: "#fad470",
                gradientColor2: "#f96933",
                scaleColor: "transparent",
                lineWidth: 20,
                size: 150,
                trackColor: "#f7f7f7",
                lineCap: "round",
                gradientChart: !1
            }, s);
            ElementsKit_Helper?.observeElement(n[0], (e => {
                n.easyPieChart({
                    barColor: !0 === a.gradientChart ? function(e) {
                        var t = this.renderer.getCtx()
                          , n = this.renderer.getCanvas()
                          , i = t.createLinearGradient(0, 0, n.width, 0);
                        return i.addColorStop(0, a.gradientColor1),
                        i.addColorStop(1, a.gradientColor2),
                        i
                    }
                    : a.barColor,
                    scaleColor: a.scaleColor,
                    trackColor: a.trackColor,
                    lineCap: a.lineCap,
                    size: a.size,
                    lineWidth: a.lineWidth
                })
            }
            ))
        },
        PostTab: function(t) {
            var n = t.hasClass("is-click-yes") ? "click" : "mouseover"
              , i = t.find(".tab__list__item")
              , s = t.find(".tabItem");
            i.on(n, (function() {
                i.removeClass("active"),
                s.removeClass("active"),
                e(this).addClass("active"),
                s.eq(e(this).index()).addClass("active")
            }
            ))
        },
        Header_Search: function(t) {
            var n = t.find(".ekit_navsearch-button")
              , i = e("body");
            n.magnificPopup({
                type: "inline",
                fixedContentPos: !0,
                fixedBgPos: !0,
                overflowY: "auto",
                closeBtnInside: !1,
                prependTo: n.parent(".ekit-wid-con"),
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = "my-mfp-slide-bottom ekit-promo-popup"
                    },
                    open: function() {
                        i.css("overflow", "hidden"),
                        i.find(".mfp-close").addClass("ekit-popup-close")
                    },
                    close: function() {
                        i.css("overflow", "auto"),
                        i.find(".mfp-close").removeClass("ekit-popup-close")
                    }
                }
            })
        },
        Team: function(t) {
            t.find(".ekit-team-popup").magnificPopup({
                type: "inline",
                fixedContentPos: !0,
                fixedBgPos: !0,
                overflowY: "auto",
                closeBtnInside: !0,
                appendTo: t.closest("body"),
                showCloseBtn: !1,
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = "my-mfp-slide-bottom ekit-promo-popup ekit-team-modal"
                    }
                }
            }),
            e("body").off("click").on("click", ".ekit-team-modal-close", (function() {
                e.magnificPopup.close()
            }
            ))
        },
        Tab: function(e) {
            var t = e.find('[data-ekit-toggle="tab"]')
              , n = t.data("ekit-toggle-trigger")
              , i = e.data("settings");
            ElementsKit_Helper.triggerClickOnEvent(n, t),
            t.on("shown.bs.tab", (function() {
                ElementsKit_Helper.setURLHash(i, this, "ekit-handler-id")
            }
            ))
        },
        Header_Off_Canvas: function(t) {
            var n = t.find(".ekit-sidebar-group")
              , i = t.find(".ekit_offcanvas-sidebar, .ekit_close-side-widget, .ekit-overlay")
              , s = t.find(".ekit-sidebar-group").data("settings");
            i.on("click", (function(t) {
                t.preventDefault(),
                n.toggleClass("ekit_isActive"),
                "yes" === s?.disable_bodyscroll && (n.hasClass("ekit_isActive") ? e("body").css("overflow", "hidden") : e("body").css("overflow", ""))
            }
            ))
        },
        Back_To_Top: function(t) {
            const n = t.find(".ekit-btt__button")
              , {offset_top: i, show_after: s, show_scroll: a, style: o, foreground: l, background: d} = t.find(".ekit-btt").data("settings");
            if ("progress_indicator" === o) {
                const e = "#canvas-" + t.find(".progress_indicator .progress_indicator canvas").data("canvas")
                  , n = t.find(e).get(0);
                animateCircle({
                    element: n,
                    size: 100,
                    percentage: 100,
                    onScroll: !0,
                    speed: 50,
                    backgroundClr: d,
                    color: l,
                    strokeWidth: 10
                })
            }
            n.on("click", (e => {
                e.target;
                var t;
                t = i,
                window.scrollTo({
                    left: 0,
                    top: t,
                    behavior: "smooth"
                })
            }
            )),
            "yes" === a && e(document).on("scroll", ( () => {
                (e => {
                    let t = n.hasClass("ekit-tt-show");
                    e && !t && n.addClass("ekit-tt-show"),
                    !e && t && n.removeClass("ekit-tt-show")
                }
                )(Math.ceil(window.pageYOffset) > s + i)
            }
            ))
        },
        Video: function(t) {
            var n = t.find(".video-content")
              , i = n.find(".ekit-video-popup")
              , s = n.data("video-player")
              , a = n.data("video-setting");
            if (i.length > 0) {
                const o = {
                    type: a.videoType,
                    mainClass: a.videoClass,
                    removalDelay: 160,
                    preloader: !0,
                    fixedContentPos: !1,
                    callbacks: {
                        open: function() {
                            e("body").find(".mfp-close").addClass("ekit-popup-close"),
                            window.dispatchEvent(new Event("resize"))
                        },
                        close: function() {
                            e("body").find(".mfp-close").removeClass("ekit-popup-close"),
                            t.find("video").each((function() {
                                this.pause()
                            }
                            ))
                        }
                    }
                };
                "iframe" === a.videoType && (o.iframe = {
                    markup: '<div class="mfp-iframe-scaler"><div class="mfp-close ekit-popup-close"></div><iframe class="mfp-iframe"  frameborder="0" allowfullscreen></iframe></div>',
                    patterns: {
                        youtube: {
                            index: "https://youtube.com/",
                            id: "v=",
                            src: "%id%"
                        }
                    }
                }),
                n.find("video").mediaelementplayer({
                    features: s,
                    videoVolume: a.videoVolume,
                    startVolume: a.startVolume,
                    stretching: "responsive",
                    enableAutosize: !0,
                    videoWidth: "100%",
                    videoHeight: "100%"
                }),
                i.magnificPopup(o)
            }
        },
        rememberTab: function() {
            if (!window.location.hash)
                return;
            let t = '[data-ekit-handler-id="' + window.location.hash.split("?")[0].substring(1) + '"]';
            e(t).tab("show")
        },
        load: function() {
            n.rememberTab()
        },
        hash: function() {
            n.rememberTab()
        }
    };
    e(window).on("zyber/frontend/init", n.init).on("load", n.load).on("hashchange", n.hash)
}(jQuery, window.zyberFrontend),
function(e) {
    "use strict";
    e.fn.animateNumbers = function(t, n, i, s) {
        return this.each((function() {
            var a = e(this)
              , o = parseInt(a.text().replace(/,/g, ""), 10);
            n = n === undefined || n,
            e({
                value: o
            }).animate({
                value: t
            }, {
                duration: i === undefined ? 500 : i,
                easing: s === undefined ? "swing" : s,
                step: function() {
                    a.text(Math.floor(this.value)),
                    n && a.text(a.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                },
                complete: function() {
                    parseInt(a.text(), 10) !== t && (a.text(t),
                    n && a.text(a.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")))
                }
            })
        }
        ))
    }
    ,
    e((function() {
        if (e("#wp-admin-bar-zyber_edit_page-default").length > 0) {
            let t = e("#wp-admin-bar-zyber_edit_page-default").children("li");
            e(t).map((function(t, n) {
                var i = e(n).find(".zyber-edit-link-title");
                -1 !== i.text().indexOf("dynamic-content-") && i.parent().parent().remove()
            }
            ))
        }
    }
    ))
}(jQuery);
