! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    var t = function() {
        function t() {
            var t = this,
                n = function() {
                    var n = [t.options.wrapperClass];
                    "" !== t.options.theme && n.push("br-theme-" + t.options.theme), t.$elem.wrap(e("<div />", {
                        "class": n.join(" ")
                    }))
                },
                r = function() {
                    t.$elem.unwrap()
                },
                a = function() {
                    var n;
                    return n = t.options.initialRating ? e('option[value="' + t.options.initialRating + '"]', t.$elem) : e("option:selected", t.$elem)
                },
                i = function(e) {
                    var n = t.$elem.data("barrating");
                    return "undefined" != typeof e ? n[e] : n
                },
                o = function(e, n) {
                    null !== n && "object" == typeof n ? t.$elem.data("barrating", n) : t.$elem.data("barrating")[e] = n
                },
                s = function() {
                    var e = a();
                    o(null, {
                        userOptions: t.options,
                        ratingValue: e.val(),
                        ratingText: e.data("html") ? e.data("html") : e.text(),
                        originalRatingValue: e.val(),
                        originalRatingText: e.data("html") ? e.data("html") : e.text(),
                        readOnly: t.options.readonly,
                        deselectable: t.$elem.find("option:first").val() ? !1 : !0
                    })
                },
                l = function() {
                    t.$elem.removeData("barrating")
                },
                u = function() {
                    return i("ratingText")
                },
                d = function() {
                    return i("ratingValue")
                },
                c = function() {
                    var n = e("<div />", {
                        "class": "br-widget"
                    });
                    return t.$elem.find("option").each(function() {
                        var r, a, i, o;
                        r = e(this).val(), r && (a = e(this).text(), i = e(this).data("html"), i && (a = i), o = e("<a />", {
                            href: "#",
                            "data-rating-value": r,
                            "data-rating-text": a,
                            html: '<i class="fas fa-star"></i>'//t.options.showValues ? a : ""
                        }), n.append(o))
                    }), t.options.showSelectedRating && n.append(e("<div />", {
                        text: "",
                        "class": "br-current-rating"
                    })), t.options.reverse && n.addClass("br-reverse"), t.options.readonly && n.addClass("br-readonly"), n
                },
                f = function() {
                    return t.options.reverse ? "nextAll" : "prevAll"
                },
                g = function(e) {
                    t.$elem.find('option[value="' + e + '"]').prop("selected", !0), t.$elem.change()
                },
                p = function(e) {
                    e = e ? e : u(), t.options.showSelectedRating && t.$elem.parent().find(".br-current-rating").text(e)
                },
                h = function() {
                    t.$widget.find("a").removeClass("br-selected br-current"), t.$widget.find('a[data-rating-value="' + d() + '"]').addClass("br-selected br-current")[f()]().addClass("br-selected")
                },
                v = function(e) {
                    return e.hasClass("br-current") && i("deselectable")
                },
                b = function(n) {
                    n.on("click.barrating", function(r) {
                        var a, i, s = e(this);
                        return r.preventDefault(), n.removeClass("br-active br-selected"), s.addClass("br-selected")[f()]().addClass("br-selected"), a = s.attr("data-rating-value"), i = s.attr("data-rating-text"), v(s) ? (s.removeClass("br-selected br-current")[f()]().removeClass("br-selected br-current"), a = "", i = "") : (n.removeClass("br-current"), s.addClass("br-current")), o("ratingValue", a), o("ratingText", i), g(a), p(i), t.options.onSelect.call(t, d(), u(), r), !1
                    })
                },
                m = function(t) {
                    t.on("mouseenter.barrating", function() {
                        var n = e(this);
                        t.removeClass("br-active br-selected"), n.addClass("br-active")[f()]().addClass("br-active"), p(n.attr("data-rating-text"))
                    })
                },
                $ = function(e) {
                    t.$widget.on("mouseleave.barrating", function() {
                        e.removeClass("br-active"), p(), h()
                    })
                },
                w = function(t) {
                    t.on("touchstart.barrating", function(t) {
                        t.preventDefault(), t.stopPropagation(), e(this).click()
                    })
                },
                y = function(e) {
                    e.on("click.barrating", function(e) {
                        e.preventDefault()
                    })
                },
                C = function(e) {
                    b(e), t.options.hoverState && (m(e), $(e))
                },
                x = function(e) {
                    e.off(".barrating")
                },
                R = function(e) {
                    $elements = t.$widget.find("a"), w && w($elements), e ? (x($elements), y($elements)) : C($elements)
                };
            this.show = function() {
                i() || (n(), s(), t.$widget = c(), t.$widget.insertAfter(t.$elem), h(), p(), R(t.options.readonly), t.$elem.hide())
            }, this.readonly = function(e) {
                "boolean" == typeof e && i("readOnly") != e && (R(e), o("readOnly", e), t.$widget.toggleClass("br-readonly"))
            }, this.set = function(e) {
                var n = i("userOptions");
                t.$elem.find('option[value="' + e + '"]').val() && (o("ratingValue", e), o("ratingText", t.$elem.find('option[value="' + e + '"]').text()), g(d()), p(u()), h(), n.silent || n.onSelect.call(this, d(), u()))
            }, this.clear = function() {
                var e = i("userOptions");
                o("ratingValue", i("originalRatingValue")), o("ratingText", i("originalRatingText")), g(d()), p(u()), h(), e.onClear.call(this, d(), u())
            }, this.destroy = function() {
                var e = d(),
                    n = u(),
                    a = i("userOptions");
                x(t.$widget.find("a")), t.$widget.remove(), l(), r(), t.$elem.show(), a.onDestroy.call(this, e, n)
            }
        }
        return t.prototype.init = function(t, n) {
            return this.$elem = e(n), this.options = e.extend({}, e.fn.barrating.defaults, t), this.options
        }, t
    }();
    e.fn.barrating = function(n, r) {
        return this.each(function() {
            var a = new t;
            if (e(this).is("select") || e.error("Sorry, this plugin only works with select fields."), a.hasOwnProperty(n)) {
                if (a.init(r, this), "show" === n) return a.show(r);
                if (a.$elem.data("barrating")) return a.$widget = e(this).next(".br-widget"), a[n](r)
            } else {
                if ("object" == typeof n || !n) return r = n, a.init(r, this), a.show();
                e.error("Method " + n + " does not exist on jQuery.barrating")
            }
        })
    }, e.fn.barrating.defaults = {
        theme: "",
        initialRating: null,
        showValues: !1,
        showSelectedRating: !0,
        reverse: !1,
        readonly: !1,
        fastClicks: !0,
        hoverState: !0,
        silent: !1,
        wrapperClass: "br-wrapper",
        onSelect: function(e, t, n) {},
        onClear: function(e, t) {},
        onDestroy: function(e, t) {}
    }, e.fn.barrating.BarRating = t
});