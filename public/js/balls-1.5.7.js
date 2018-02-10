"use strict";
! function(a) {
    a.idleTimer = function(e, t) {
        var n;
        "object" == typeof e ? (n = e, e = null) : "number" == typeof e && (n = {
            timeout: e
        }, e = null), t = t || document, n = a.extend({
            idle: !1,
            timeout: 3e4,
            events: "mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove"
        }, n);
        var o = a(t),
            i = o.data("idleTimerObj") || {},
            l = function(e) {
                var n = a.data(t, "idleTimerObj") || {};
                n.idle = !n.idle, n.olddate = +new Date;
                var o = a.Event((n.idle ? "idle" : "active") + ".idleTimer");
                a(t).trigger(o, [t, a.extend({}, n), e])
            },
            s = function(e) {
                var n = a.data(t, "idleTimerObj") || {};
                if (null == n.remaining) {
                    if ("mousemove" === e.type) {
                        if (e.pageX === n.pageX && e.pageY === n.pageY) return;
                        if (void 0 === e.pageX && void 0 === e.pageY) return;
                        if (200 > +new Date - n.olddate) return
                    }
                    clearTimeout(n.tId), n.idle && l(e), n.lastActive = +new Date, n.pageX = e.pageX, n.pageY = e.pageY, n.tId = setTimeout(l, n.timeout)
                }
            },
            r = function() {
                var e = a.data(t, "idleTimerObj") || {};
                e.idle = e.idleBackup, e.olddate = +new Date, e.lastActive = e.olddate, e.remaining = null, clearTimeout(e.tId), e.idle || (e.tId = setTimeout(l, e.timeout))
            };
        if (null === e && void 0 !== i.idle) return r(), o;
        if (null === e);
        else {
            if (null !== e && void 0 === i.idle) return !1;
            if ("destroy" === e) return function() {
                var e = a.data(t, "idleTimerObj") || {};
                clearTimeout(e.tId), o.removeData("idleTimerObj"), o.off("._idleTimer")
            }(), o;
            if ("pause" === e) return function() {
                var e = a.data(t, "idleTimerObj") || {};
                null == e.remaining && (e.remaining = e.timeout - (+new Date - e.olddate), clearTimeout(e.tId))
            }(), o;
            if ("resume" === e) return function() {
                var e = a.data(t, "idleTimerObj") || {};
                null != e.remaining && (e.idle || (e.tId = setTimeout(l, e.remaining)), e.remaining = null)
            }(), o;
            if ("reset" === e) return r(), o;
            if ("getRemainingTime" === e) return function() {
                var e = a.data(t, "idleTimerObj") || {};
                if (e.idle) return 0;
                if (null != e.remaining) return e.remaining;
                var n = e.timeout - (+new Date - e.lastActive);
                return 0 > n && (n = 0), n
            }();
            if ("getElapsedTime" === e) return +new Date - i.olddate;
            if ("getLastActiveTime" === e) return i.lastActive;
            if ("isIdle" === e) return i.idle
        }
        return o.on(a.trim((n.events + " ").split(" ").join("._idleTimer ")), function(a) {
            s(a)
        }), (i = a.extend({}, {
            olddate: +new Date,
            lastActive: +new Date,
            idle: n.idle,
            idleBackup: n.idle,
            timeout: n.timeout,
            remaining: null,
            tId: null,
            pageX: null,
            pageY: null
        })).idle || (i.tId = setTimeout(l, i.timeout)), a.data(t, "idleTimerObj", i), o
    }, a.fn.idleTimer = function(e) {
        return this[0] ? a.idleTimer(e, this[0]) : this
    }
}(jQuery),
    function(a) {
        a.extend(a.fx.step, {
            backgroundPosition: function(e) {
                function t(a) {
                    var e = (a = (a = (a = a.replace(/left|top/g, "0px")).replace(/right|bottom/g, "100%")).replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2")).match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
                    return [parseFloat(e[1], 10), e[2], parseFloat(e[3], 10), e[4]]
                }
                if (0 === e.pos && "string" == typeof e.end) {
                    var n = a.css(e.elem, "backgroundPosition");
                    n = t(n), e.start = [n[0], n[2]];
                    var o = t(e.end);
                    e.end = [o[0], o[2]], e.unit = [o[1], o[3]]
                }
                var i = [];
                i[0] = (e.end[0] - e.start[0]) * e.pos + e.start[0] + e.unit[0], i[1] = (e.end[1] - e.start[1]) * e.pos + e.start[1] + e.unit[1], e.elem.style.backgroundPosition = i[0] + " " + i[1]
            }
        })
    }(jQuery);
var Game = {
    html: !1,
    activeBalls: 0,
    magnetDirection: "right",
    duration: !1,
    position: !1,
    magnetPosition: !1,
    playFlag: !1,
    autoPlayFlag: !1,
    accelerationFlag: 0,
    autoPlayCount: 0,
    autoPlayLimit: 0,
    autoPlayBase: 0,
    autoPlayOnLossTerm: 0,
    autoPlayOnLossBets: 0,
    autoPlayOnLoss: 0,
    autoPlayOnLossInc: 0,
    autoPlayOnLossDec: 0,
    autoPlayOnLossRev: !1,
    autoPlayOnLossStop: !1,
    autoPlayOnWinTerm: 0,
    autoPlayOnWinBets: 0,
    autoPlayOnWin: 0,
    autoPlayOnWinInc: 0,
    autoPlayOnWinDec: 0,
    autoPlayOnWinRev: !1,
    autoPlayOnWinStop: !1,
    autoPlayBalanceUnder: !1,
    autoPlayBalanceOver: !1,
    autoPlayBetOver: !1,
    winSeries: 0,
    lossSeries: 0,
    sound: "on",
    hotkeys: "off",
    animation: "on",
    errorThreads: 0,
    load: function() {
        "off" == getCookie("uSOUND") && Game.uSound(), "off" == getCookie("uANIMATION") && Game.uAnimation(), $(document).keydown(function(a) {
            var e = !1;
            return ($(".popup.show").length > 0 || $("#mainhide").length > 0) && (e = !0), ($("input").is(":focus") || $("div.textarea").is(":focus")) && (e = !0), $(document.activeElement).is("div.textarea") && (e = !0), 81 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#ballsOdd").click(), !1) : 87 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#ballsEven").click(), !1) : 69 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#ballsReverse").click(), !1) : 82 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#ballsClear").click(), !1) : 65 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#multiplyBet").click(), !1) : 83 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#splitBet").click(), !1) : 68 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#minBet").click(), !1) : 70 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#maxBet").click(), !1) : 32 == a.keyCode && "on" == Game.hotkeys && 0 == e ? (Game.play(), !1) : void 0
        });

        $(document).keydown(function(a) {
            if ($("#pHotkeys").hasClass("show")) {
                if (81 == a.keyCode) return $("#pHotkeys .key[data-id=Q]").parent().addClass("active"), !1;
                if (87 == a.keyCode) return $("#pHotkeys .key[data-id=W]").parent().addClass("active"), !1;
                if (69 == a.keyCode) return $("#pHotkeys .key[data-id=E]").parent().addClass("active"), !1;
                if (82 == a.keyCode) return $("#pHotkeys .key[data-id=R]").parent().addClass("active"), !1;
                if (65 == a.keyCode) return $("#pHotkeys .key[data-id=A]").parent().addClass("active"), !1;
                if (83 == a.keyCode) return $("#pHotkeys .key[data-id=S]").parent().addClass("active"), !1;
                if (68 == a.keyCode) return $("#pHotkeys .key[data-id=D]").parent().addClass("active"), !1;
                if (70 == a.keyCode) return $("#pHotkeys .key[data-id=F]").parent().addClass("active"), !1;
                if (32 == a.keyCode) return $("#pHotkeys .key[data-id=Space]").parent().addClass("active"), !1
            }
        }).keyup(function(a) {
            if ($("#pHotkeys").hasClass("show")) {
                if (81 == a.keyCode) return $("#pHotkeys .key[data-id=Q]").parent().removeClass("active"), !1;
                if (87 == a.keyCode) return $("#pHotkeys .key[data-id=W]").parent().removeClass("active"), !1;
                if (69 == a.keyCode) return $("#pHotkeys .key[data-id=E]").parent().removeClass("active"), !1;
                if (82 == a.keyCode) return $("#pHotkeys .key[data-id=R]").parent().removeClass("active"), !1;
                if (65 == a.keyCode) return $("#pHotkeys .key[data-id=A]").parent().removeClass("active"), !1;
                if (83 == a.keyCode) return $("#pHotkeys .key[data-id=S]").parent().removeClass("active"), !1;
                if (68 == a.keyCode) return $("#pHotkeys .key[data-id=D]").parent().removeClass("active"), !1;
                if (70 == a.keyCode) return $("#pHotkeys .key[data-id=F]").parent().removeClass("active"), !1;
                if (32 == a.keyCode) return $("#pHotkeys .key[data-id=Space]").parent().removeClass("active"), !1
            }
        });

        $("#controlContainer .coinContainer a").unbind("click");
        $("#controlContainer .coinContainer a").bind("click", function() {
            return !(void 0 !== Game.playFlag && !1 !== Game.playFlag || void 0 !== Game.autoPlayFlag && Game.autoPlayFlag) && (AjaxContent({
                url: $(this).attr("href"),
                container: ".userBalance, #statsContent",
                content: ".userBalance, #statsContent",
                active: $(this),
                activeRemove: "#controlContainer .coinContainer a",
                busy: !1
            }), !1)
        });

        $.fn.magnet = function(a) {
            Game.position = 140, this.stop(), this.dequeue(), this.find("span").addClass("hide");
            var e = this.css("background-position");
            if (void 0 == e || "undefined" == e) return !0;
            e = e.split(" ");
            var t = 250;
            if (1 == Game.autoPlayFlag && (1 == Game.accelerationFlag && (t = 125), 2 == Game.accelerationFlag && (t = 100), 3 == Game.accelerationFlag && (t = 50)), "stick" == a) return this.animate({
                backgroundPosition: e[0] + " 0px"
            }, {
                duration: t,
                easing: "linear"
            }), !0;

            $(this).animate({
                backgroundPosition: e[0] + " 40px"
            }, {
                duration: t,
                complete: function() {

                }
            })
        };

        $(".game-balls .ballsRow .ball").each(function() {
            $(this).bind("click", function() {
                if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
                $(this).hasClass("active") ? ($(this).removeClass("active"), Game.activeBalls--) : Game.activeBalls < 9 && ($(this).addClass("active"), Game.activeBalls++), Game.calculate()
            });

            $(this).bind("mouseout", function(a) {
                if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
            })
        });

        $("#betAmount").bind("keyup", function() {
            Game.calculate()
        });

        $("#betAmount").numberMask({
            type: "float",
            afterPoint: 8,
            defaultValueInput: "0.00001",
            decimalMark: "."
        });

        $(".radioBox input[type=text]").each(function() {
            if ($(this).attr("data-decimals") > 0) {
                var a = {
                    type: "float",
                    afterPoint: $(this).attr("data-decimals"),
                    decimalMark: "."
                };
                "true" == $(this).attr("data-allowNegative") && (a.allowNegative = !0), $(this).attr("data-beforePoint") > 0 && (a.beforePoint = $(this).attr("data-beforePoint")), $(this).numberMask(a)
            } else $(this).numberMask({
                type: "int",
                afterPoint: 0
            })
        });

        $("#ballsOdd").bind("click", function() {
            $(".game-balls .ballsRow .ball").each(function() {
                $(this).hasClass("active") && $(this).click()
            });

            $(".game-balls .ballsRow .ball").each(function() {
                1 & $(this).attr("data-id") ? $(this).hasClass("active") || $(this).click() : $(this).hasClass("active") && $(this).click()
            });
        });

        $("#ballsEven").bind("click", function() {
            $(".game-balls .ballsRow .ball").each(function() {
                $(this).hasClass("active") && $(this).click()
            });

            $(".game-balls .ballsRow .ball").each(function() {
                1 & $(this).attr("data-id") ? $(this).hasClass("active") && $(this).click() : $(this).hasClass("active") || $(this).click()
            });
        });

        $("#ballsReverse").bind("click", function() {
            var a = new Array,
                e = 0;
            $(".game-balls .ballsRow .ball").each(function() {
                $(this).hasClass("active") ? $(this).click() : a[e] = $(this).attr("data-id"), e++
            }), $.each(a, function(a, e) {
                $("#ball" + e).click()
            })
        });

        $("#ballsClear").bind("click", function() {
            $(".game-balls .ballsRow .ball").each(function() {
                $(this).hasClass("active") && $(this).click()
            })
        });

        $("#multiplyBet").bind("click", function() {
            if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
            var a = $("#betAmount").val(),
                e = 1 * $("#balance").val(),
                t = 1 * $("#maxBetAmount").val();
            0 != a && "0.00000000" != a || (a = 1e-8);
            var n = 2 * a;
            n > e && (n = e), n > t && (n = t), n = n.toFixed(8);
            $("#betAmount").val(n);
            Game.calculate()
        });

        $("#splitBet").bind("click", function() {
            if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
            var a = 1 * $("#betAmount").val(),
                e = 1 * $("#balance").val(),
                t = a / 2;
            t > e && (t = e), t = t.toFixed(8);
            $("#betAmount").val(t);
            Game.calculate()
        });

        $("#minBet").bind("click", function() {
            if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
            var a = 1 * $("#balance").val(),
                e = 1e-8;
            e > a && (e = a);
            e = e.toFixed(8);
            $("#betAmount").val(e);
            Game.calculate()
        });

        $("#maxBet").bind("click", function() {
            if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
            var a = 1 * $("#balance").val(),
                e = 1 * $("#maxBetAmount").val(),
                t = 1 * $("#betAmount").val();
            return e > a && (e = a), e = e.toFixed(8), 0 == a ? ($("#betAmount").val(e), Game.calculate(), !1) : e != t && void(confirm("You are about to place the maximum bet. Are you sure?") && ($("#betAmount").val(e), Game.calculate()))
        });

        var a;
        $(document).bind("idle.idleTimer", function() {
            if (1 == Game.playFlag) return !1;
            a = setInterval(Game.runMagnet, 1e4)
        });

        $(document).bind("active.idleTimer", function() {
            clearInterval(a)
        });

        $(".slider").jRange({
            from: 0,
            to: 3,
            step: 1,
            format: "%s",
            width: 525,
            showLabels: !1,
            showScale: !1,
            snap: !0
        })
    },

    play: function() {
        if (1 == Game.playFlag) return !1;
        Game.playFlag = !0;
        var a = new Array;
        1 == Game.autoPlayFlag && Game.autoPlayLimit > 0 && Game.autoPlayCount++;
        n = $("#betAmount").val();
        n = number_format(n, 8, ".", "");
        $("#betAmount").val(n);

        var e = 0;
        $("#gameContainer .game-balls .ball.active").each(function() {
            var t = $(this).attr("data-id");
            a[e] = t;
            e++
        });

        var t = $("#clientSeed").val(),
            n = $("#betAmount").val(),
            o = $("#coin").val();
        jQuery.ajax({
            url: "/ajx/",
            type: "POST",
            dataType: "html",
            timeout: 2e4,
            data: {
                game: "balls",
                coin: o,
                betAmount: n,
                ballsArray: a,
                clientSeed: t,
                action: "playBet",
            },
            success: function(a) {
                try {
                    a = JSON.parse(a)
                } catch (a) {
                    return Game.playFlag = !1, Game.errorThreads++, Game.errorThreads > 5 ? (Game.stopAutoplay(), $.notification.error({
                        title: "Error",
                        message: "No connection to the server, please try again"
                    })) : Game.play(), !1
                }
                Game.errorThreads = 0, 1 == a.result ? Game.runMagnet(a.resultBall, a.gameResult, function() {
                    if ($("#serverSeedHash").html(a.serverSeedHash), $("#prevServerSeedHash").html(a.prevServerSeedHash), $("#prevServerSeed").html(a.prevServerSeed), $("#prevClientSeed").html(a.prevClientSeed), $("#balance").animateBalance(a.balance), $("#withdrawBalance").html(a.balance), updateStats(n, a.profit, a.gameResult), $("#myBets").hasClass("active") && !$("#bet" + a.id).length) {
                        var e = $("#listContainer .table .tbody .tr:first-child");
                        if (e.hasClass("full")) e.remove(), $("#listContainer .table .tbody").append(a.betHtml);
                        else {
                            e.before(a.betHtml);
                            var t = $("#listContainer .table .tbody .tr").length;
                            if (t > 50 && (t = 40), t > 40)
                                for (l = 0; l < t - 40; l++) $("#listContainer .table .tbody .tr:last-child").remove()
                        }
                        bindLinks()
                    }
                    if ("on" == Game.sound) {
                        if ("lose" == a.gameResult) o = new Audio("/assets/sounds/balls-lose.mp3");
                        if ("win" == a.gameResult) var o = new Audio("/assets/sounds/balls-win.mp3");
                        o.play()
                    }
                    if (1 == Game.autoPlayFlag) {
                        if (Game.autoPlayLimit > 0 && Game.autoPlayCount == Game.autoPlayLimit) return Game.stopAutoplay(), !1;
                        if (Game.autoPlayBalanceUnder > 0 && a.balance < Game.autoPlayBalanceUnder) return Game.stopAutoplay(), !1;
                        if (Game.autoPlayBalanceOver > 0 && a.balance > Game.autoPlayBalanceOver) return Game.stopAutoplay(), !1;
                        if ("lose" == a.gameResult) {
                            if (Game.lossSeries++, 2 == Game.autoPlayOnWinTerm && (Game.winSeries = 0), 1 == Game.autoPlayOnLossBets || Game.autoPlayOnLossBets > 1 && Game.lossSeries == Game.autoPlayOnLossBets) {
                                if (Game.lossSeries = 0, 1 == Game.autoPlayOnLossStop) return Game.stopAutoplay(), !1;
                                if (0 == Game.autoPlayOnLoss ? $("#betAmount").val(Game.autoPlayBase) : 1 == Game.autoPlayOnLoss ? (n = 1 * n + n * Game.autoPlayOnLossInc / 100, n = n.toFixed(8), $("#betAmount").val(n)) : 2 == Game.autoPlayOnLoss && (n = 1 * n - n * Game.autoPlayOnLossDec / 100, n = n.toFixed(8), $("#betAmount").val(n)), 1 == Game.autoPlayOnLossRev) {
                                    var i = new Array,
                                        l = 0;
                                    $(".game-balls .ballsRow .ball").each(function() {
                                        $(this).hasClass("active") ? ($(this).removeClass("active"), Game.activeBalls--) : (i[l] = $(this).attr("data-id"), l++)
                                    }), $.each(i, function(a, e) {
                                        Game.activeBalls < 9 && ($("#ball" + e).addClass("active"), Game.activeBalls++)
                                    }), Game.calculate()
                                }
                            }
                        } else if ("win" == a.gameResult && (Game.winSeries++, 2 == Game.autoPlayOnLossTerm && (Game.lossSeries = 0), 1 == Game.autoPlayOnWinBets || Game.autoPlayOnWinBets > 1 && Game.winSeries == Game.autoPlayOnWinBets)) {
                            if (Game.winSeries = 0, 1 == Game.autoPlayOnWinStop) return Game.stopAutoplay(), !1;
                            if (0 == Game.autoPlayOnWin ? $("#betAmount").val(Game.autoPlayBase) : 1 == Game.autoPlayOnWin ? (n = 1 * n + n * Game.autoPlayOnWinInc / 100, n = n.toFixed(8), $("#betAmount").val(n)) : 2 == Game.autoPlayOnWin && (n = 1 * n - n * Game.autoPlayOnWinDec / 100, n = n.toFixed(8), $("#betAmount").val(n)), 1 == Game.autoPlayOnWinRev) {
                                var i = new Array,
                                    l = 0;
                                $(".game-balls .ballsRow .ball").each(function() {
                                    $(this).hasClass("active") ? ($(this).removeClass("active"), Game.activeBalls--) : (i[l] = $(this).attr("data-id"), l++)
                                }), $.each(i, function(a, e) {
                                    Game.activeBalls < 9 && ($("#ball" + e).addClass("active"), Game.activeBalls++)
                                }), Game.calculate()
                            }
                        }
                        if (Game.autoPlayBetOver > 0 && n > Game.autoPlayBetOver) return Game.stopAutoplay(), !1;
                        Game.calculate();
                        var s = 300;
                        Game.accelerationFlag > 0 && (1 == Game.accelerationFlag && (s = 250), 2 == Game.accelerationFlag && (s = 180), 3 == Game.accelerationFlag && (s = 50), s = s.toFixed(0)), setTimeout(function() {
                            Game.play()
                        }, s)
                    }
                }) : 0 == a.result && (Game.playFlag = !1, void 0 !== a.popupshow && $("#" + a.popupshow).popupShow(), void 0 !== a.serverHash ? ($("#serverSeedHash").html(a.serverHash), Game.play()) : (Game.stopAutoplay(), void 0 !== a.msg && $.notification.error({
                    title: "Error",
                    message: a.msg
                })))
            },
            error: function(a, e) {
                "timeout" === e ? (Game.playFlag = !1, Game.play()) : (Game.playFlag = !1, Game.stopAutoplay(), $.notification.error({
                    title: "Error",
                    message: "No connection to the server, please try again"
                }))
            }
        })
    },
    runMagnet: function(a, e, t) {
        a >= 0 && ($("#magnet").addClass("active"), $("#playBtn").addClass("active"));
        "off" == Game.animation ? $("#magnet").stop().animate({
            "margin-left": 90 * a
        }, {
            duration: 50,
            easing: "easeOutQuint",
            complete: function() {
                Game.playFlag = !1, "function" == typeof t && t(), 0 == Game.autoPlayFlag && ($("#magnet").removeClass("active"), $("#playBtn").removeClass("active"))
            }
        }) : 1 == Game.autoPlayFlag && 3 == Game.accelerationFlag ? $("#magnet").stop().animate({
            "margin-left": 90 * a
        }, {
            duration: 50,
            easing: "easeOutQuint",
            complete: function() {
                Game.playFlag = !1, "function" == typeof t && t()
            }
        }) : (Game.magnetPosition = parseInt($("#magnet").css("margin-left")), Game.magnetPosition || "left" != Game.magnetDirection || (Game.magnetDirection = "right"), "right" == Game.magnetDirection && (Game.position = 900, Game.duration = Math.ceil(2400 - 2.67 * Game.magnetPosition)), "left" == Game.magnetDirection && (Game.position = 0, Game.duration = Math.ceil(2.67 * Game.magnetPosition)), 1 == Game.autoPlayFlag && (1 == Game.accelerationFlag && (Game.duration = Math.ceil(Game.duration / 4)), 2 == Game.accelerationFlag && (Game.duration = Math.ceil(Game.duration / 8))), $("#magnet").stop().animate({
            "margin-left": Game.position
        }, {
            duration: Game.duration,
            easing: "linear",
            step: function(e, n) {
                if (e = Math.ceil(e), "right" == Game.magnetDirection) var o = e + $("#magnet").width(),
                    i = Math.floor(o / 90);
                if ("left" == Game.magnetDirection) var o = e - 20,
                    i = Math.floor(o / 90);
                $("#ball" + i).hasClass("moved") || (i == a && (Game.duration = 300, 1 == Game.autoPlayFlag && (1 == Game.accelerationFlag && (Game.duration = 125), 2 == Game.accelerationFlag && (Game.duration = 100)), $("#magnet").stop().animate({
                    "margin-left": $("#ball" + i).position().left - 10
                }, {
                    duration: Game.duration,
                    easing: "linear",
                    complete: function() {
                        1 == Game.autoPlayFlag ? Game.accelerationFlag < 2 && $("#ball" + i).magnet("stick") : $("#ball" + i).magnet("stick"), Game.playFlag = !1, $("#magnet").removeClass("active"), $("#playBtn").removeClass("active"), 10 != i && 0 != i || Game.changeMagnetDirection(), "function" == typeof t && t()
                    }
                })), 0 == i && 10 == i || (1 == Game.autoPlayFlag ? Game.accelerationFlag < 2 && $("#ball" + i).addClass("moved").magnet() : $("#ball" + i).addClass("moved").magnet()))
            },
            complete: function() {
                Game.changeMagnetDirection(), a >= 0 ? Game.runMagnet(a, e, t) : "left" == Game.magnetDirection && Game.runMagnet()
            }
        }))
    },
    startAutoplay: function() {
        Game.autoPlayFlag = !0, Game.autoPlayCount = 0, Game.winSeries = 0, Game.lossSeries = 0, Game.autoPlayBase = number_format($("#betAmount").val(), 8, ".", ""), Game.autoPlayOnLoss = $("#autoplay input[name=on-loss]:checked").val(), Game.autoPlayOnLoss || (Game.autoPlayOnLoss = 0), Game.autoPlayOnLossTerm = $("#autoplay select[name=on-loss-term]").val(), Game.autoPlayOnLossTerm || (Game.autoPlayOnLossTerm = 1), Game.autoPlayOnLossBets = $("#autoplay input[name=on-loss-bets]").val(), Game.autoPlayOnLossBets || (Game.autoPlayOnLossBets = 0), Game.autoPlayOnLossInc = $("#autoplay input[name=on-loss-inc]").val(), Game.autoPlayOnLossInc || (Game.autoPlayOnLossInc = 0), Game.autoPlayOnLossDec = $("#autoplay input[name=on-loss-dec]").val(), Game.autoPlayOnLossDec || (Game.autoPlayOnLossDec = 0), 1 == $("#autoplay input[name=on-loss-rev]").prop("checked") ? Game.autoPlayOnLossRev = !0 : Game.autoPlayOnLossRev = !1, 1 == $("#autoplay input[name=on-loss-stop]").prop("checked") ? Game.autoPlayOnLossStop = !0 : Game.autoPlayOnLossStop = !1, Game.autoPlayOnWin = $("#autoplay input[name=on-win]:checked").val(), Game.autoPlayOnWin || (Game.autoPlayOnWin = 0), Game.autoPlayOnWinTerm = $("#autoplay select[name=on-win-term]").val(), Game.autoPlayOnWinTerm || (Game.autoPlayOnWinTerm = 1), Game.autoPlayOnWinBets = $("#autoplay input[name=on-win-bets]").val(), Game.autoPlayOnWinBets || (Game.autoPlayOnWinBets = 0), Game.autoPlayOnWinInc = $("#autoplay input[name=on-win-inc]").val(), Game.autoPlayOnWinInc || (Game.autoPlayOnWinInc = 0), Game.autoPlayOnWinDec = $("#autoplay input[name=on-win-dec]").val(), Game.autoPlayOnWinDec || (Game.autoPlayOnWinDec = 0), 1 == $("#autoplay input[name=on-win-rev]").prop("checked") ? Game.autoPlayOnWinRev = !0 : Game.autoPlayOnWinRev = !1, 1 == $("#autoplay input[name=on-win-stop]").prop("checked") ? Game.autoPlayOnWinStop = !0 : Game.autoPlayOnWinStop = !1, Game.accelerationFlag = 1 * $("#autoplay input[name=acceleration]").val(), Game.accelerationFlag || (Game.accelerationFlag = 0), Game.autoPlayLimit = 1 * $("#autoplay input[name=bets-limit]").val(), Game.autoPlayLimit || (Game.autoPlayLimit = 0), Game.autoPlayBalanceUnder = 1 * $("#autoplay input[name=balance-under-limit]").val(), Game.autoPlayBalanceUnder || (Game.autoPlayBalanceUnder = !1), Game.autoPlayBalanceOver = 1 * $("#autoplay input[name=balance-over-limit]").val(), Game.autoPlayBalanceOver || (Game.autoPlayBalanceOver = !1), Game.autoPlayBetOver = 1 * $("#autoplay input[name=bet-over-limit]").val(), Game.autoPlayBetOver || (Game.autoPlayBetOver = !1), $(".popup").popupClose(), $("#autoPlayBtn").replaceWith('<button class="btn grey active" onclick="Game.stopAutoplay()" id="autoPlayBtn">STOP</button>'), $("#betAmount").attr("readonly", "true"), Game.play()
    },
    stopAutoplay: function() {
        Game.autoPlayFlag = !1, $("#autoPlayBtn").replaceWith('<button class="btn grey popup-show" data-popup="autoplay" id="autoPlayBtn">AUTO</button>'), $("#magnet").removeClass("active"), $("#playBtn").removeClass("active"), $("#betAmount").removeAttr("readonly"), ajaxPreload()
    },
    changeMagnetDirection: function() {
        "right" == Game.magnetDirection ? Game.magnetDirection = "left" : Game.magnetDirection = "right"
    },
    calculate: function() {
        var a, e, t, n;
        Game.activeBalls > 0 ? (t = (99 / (a = Game.activeBalls / 11 * 100)).toFixed(2), e = (e = (n = $("#betAmount").val()) * t - n).toFixed(8), a = a.toFixed(1)) : (a = 0, t = 0, e = (0).toFixed(8)), $("#winChance").val(a + "%"), $("#multiplier").val(t + "x"), $("#profitOnWin").val(e)
    }
};
$(function() {
    Game.load()
});