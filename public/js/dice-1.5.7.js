"use strict";
var Game = {
    html: !1,
    direction: !1,
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
            return ($(".popup.show").length > 0 || $("#mainhide").length > 0) && (e = !0), ($("input").is(":focus") || $("div.textarea").is(":focus")) && (e = !0), $(document.activeElement).is("div.textarea") && (e = !0), 81 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#rollUnder").click(), !1) : 87 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#rollOver").click(), !1) : (69 == a.keyCode && "on" == Game.hotkeys && 0 == e && ($("#prediction").val(1 * $("#prediction").val() + 1), "" == $("#prediction").val() || (0 == $("#prediction").val() ? $("#prediction").val(1) : 99 == $("#prediction").val() && $("#prediction").val(98)), Game.calculate(), $("#playBtn").html($(".game-dice .direction.active").html() + " " + 1 * $("#prediction").val())), 82 == a.keyCode && "on" == Game.hotkeys && 0 == e && ($("#prediction").val(1 * $("#prediction").val() - 1), "" == $("#prediction").val() || (0 == $("#prediction").val() ? $("#prediction").val(1) : 99 == $("#prediction").val() && $("#prediction").val(98)), Game.calculate(), $("#playBtn").html($(".game-dice .direction.active").html() + " " + 1 * $("#prediction").val())), 65 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#multiplyBet").click(), !1) : 83 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#splitBet").click(), !1) : 68 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#minBet").click(), !1) : 70 == a.keyCode && "on" == Game.hotkeys && 0 == e ? ($("#maxBet").click(), !1) : 32 == a.keyCode && "on" == Game.hotkeys && 0 == e ? (Game.play(), !1) : void 0)
        }), $(document).keydown(function(a) {
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
        }), $("#controlContainer .coinContainer a").unbind("click"), $("#controlContainer .coinContainer a").bind("click", function() {
            return !(void 0 !== Game.playFlag && !1 !== Game.playFlag || void 0 !== Game.autoPlayFlag && Game.autoPlayFlag) && (AjaxContent({
                url: $(this).attr("href"),
                container: ".userBalance, #statsContent",
                content: ".userBalance, #statsContent",
                active: $(this),
                activeRemove: "#controlContainer .coinContainer a",
                busy: !1
            }), !1)
        }), $("#prediction").focus(), $(".game-dice .direction").click(function() {
            if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
            $(".game-dice .direction.active").removeClass("active"), $(this).addClass("active"), $("#playBtn").html($(this).html() + " " + 1 * $("#prediction").val()), Game.direction = $(this).attr("data-direction"), Game.calculate()
        }), $("#rollOver").click(), $("#prediction").keyup(function() {
            if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
            "" == $(this).val() || (0 == $(this).val() ? $(this).val(1) : 99 == $(this).val() && $(this).val(98)), Game.calculate(), $("#playBtn").html($(".game-dice .direction.active").html() + " " + 1 * $("#prediction").val())
        }), $("#prediction").numberMask({
            type: "int",
            beforePoint: 2,
            afterPoint: 0,
            defaultValueInput: "50"
        }), $("#betAmount").bind("keyup", function() {
            Game.calculate()
        }), $("#betAmount").numberMask({
            type: "float",
            afterPoint: 8,
            defaultValueInput: "0.00001",
            decimalMark: "."
        }), $(".radioBox input[type=text]").each(function() {
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
        }), $("#multiplyBet").bind("click", function() {
            if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
            var a = 1 * $("#betAmount").val(),
                e = 1 * $("#balance").val(),
                t = 1 * $("#maxBetAmount").val();
            0 != a && "0.00000000" != a || (a = 1e-8);
            var o = 2 * a;
            o > e && (o = e), o > t && (o = t), o = o.toFixed(8), $("#betAmount").val(o), Game.calculate()
        }), $("#splitBet").bind("click", function() {
            if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
            var a = 1 * $("#betAmount").val(),
                e = 1 * $("#balance").val(),
                t = a / 2;
            t > e && (t = e), t = t.toFixed(8), $("#betAmount").val(t), Game.calculate()
        }), $("#minBet").bind("click", function() {
            if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
            var a = 1 * $("#balance").val(),
                e = 1e-8;
            e > a && (e = a), e = e.toFixed(8), $("#betAmount").val(e), Game.calculate()
        }), $("#maxBet").bind("click", function() {
            if (1 == Game.playFlag || 1 == Game.autoPlayFlag) return !1;
            var a = 1 * $("#balance").val(),
                e = 1 * $("#maxBetAmount").val(),
                t = 1 * $("#betAmount").val();
            return e > a && (e = a), e = e.toFixed(8), 0 == a ? ($("#betAmount").val(e), Game.calculate(), !1) : e != t && void(confirm("ru" == user.lang ? "Вы собираетесь сделать максимальную ставку. Вы уверены?" : "You are about to place the maximum bet. Are you sure?") && ($("#betAmount").val(e), Game.calculate()))
        }), $(".slider").jRange({
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
    uSound: function() {
        "off" == Game.sound ? (Game.sound = "on", setCookie("uSOUND", "on", 365), $("#sound .icon").removeClass("off").removeClass("on").addClass("on")) : "on" == Game.sound && (Game.sound = "off", setCookie("uSOUND", "off", 365), $("#sound .icon").removeClass("off").removeClass("on").addClass("off"));
        var a = $("#sound .text").html(),
            e = $("#sound").attr("data-text");
        $("#sound .text").html(e), $("#sound").attr("data-text", a)
    },
    uAnimation: function() {
        "off" == Game.animation ? (Game.animation = "on", setCookie("uANIMATION", "on", 365), $("#animation .icon").removeClass("off").removeClass("on").addClass("on")) : "on" == Game.animation && (Game.animation = "off", setCookie("uANIMATION", "off", 365), $("#animation .icon").removeClass("off").removeClass("on").addClass("off"));
        var a = $("#animation .text").html(),
            e = $("#animation").attr("data-text");
        $("#animation .text").html(e), $("#animation").attr("data-text", a)
    },
    uHotkeys: function() {
        "off" == Game.hotkeys ? (Game.hotkeys = "on", $("#hotkeys .icon").removeClass("off").removeClass("on").addClass("on"), $("#pHotkeys").popupShow()) : "on" == Game.hotkeys && (Game.hotkeys = "off", $("#hotkeys .icon").removeClass("off").removeClass("on").addClass("off"));
        var a = $("#hotkeys .text").html(),
            e = $("#hotkeys").attr("data-text");
        $("#hotkeys .text").html(e), $("#hotkeys").attr("data-text", a)
    },
    play: function() {
        if (1 == Game.playFlag) return !1;
        Game.playFlag = !0, 1 == Game.autoPlayFlag && Game.autoPlayLimit > 0 && Game.autoPlayCount++;
        t = $("#betAmount").val();
        t = number_format(t, 8, ".", ""), $("#betAmount").val(t);
        var a = $("#clientSeed").val(),
            e = $("#serverSeedHash").html(),
            t = $("#betAmount").val(),
            o = $("#prediction").val(),
            n = $("#coin").val();

        // Request to server (Run game)
        jQuery.ajax({
            url: "/api/dire",
            type: "GET",
            dataType: "html",
            timeout: 2e4,
            data: {
                game: "dice",
                coin: n,
                betAmount: t,
                prediction: o,
                direction: Game.direction,
                clientSeed: a,
                serverSeedHash: e,
                action: "playBet",
                hash: user.hash
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
                Game.errorThreads = 0, 1 == a.result ? Game.runDice(a.resultNumber, function() {
                    if ($("#serverSeedHash").html(a.serverSeedHash), $("#prevServerSeedHash").html(a.prevServerSeedHash), $("#prevServerSeed").html(a.prevServerSeed), $("#prevClientSeed").html(a.prevClientSeed), $("#balance").animateBalance(a.balance), $("#withdrawBalance").html(a.balance), updateStats(t, a.profit, a.gameResult), "on" == Game.sound) {
                        if ("lose" == a.gameResult) e = new Audio("/assets/sounds/dice-lose.mp3");
                        if ("win" == a.gameResult) var e = new Audio("/assets/sounds/dice-win.mp3");
                        e.play()
                    }
                    if ($("#myBets").hasClass("active") && !$("#bet" + a.id).length) {
                        var o = $("#listContainer .table .tbody .tr:first-child");
                        if (o.hasClass("full")) o.remove(), $("#listContainer .table .tbody").append(a.betHtml);
                        else {
                            o.before(a.betHtml);
                            var n = $("#listContainer .table .tbody .tr").length;
                            if (n > 50 && (n = 40), n > 40)
                                for (var l = 0; l < n - 40; l++) $("#listContainer .table .tbody .tr:last-child").remove()
                        }
                        bindLinks()
                    }
                    if (1 == Game.autoPlayFlag) {
                        if (Game.autoPlayLimit > 0 && Game.autoPlayCount >= Game.autoPlayLimit) return Game.stopAutoplay(), !1;
                        if (Game.autoPlayBalanceUnder > 0 && a.balance < Game.autoPlayBalanceUnder) return Game.stopAutoplay(), !1;
                        if (Game.autoPlayBalanceOver > 0 && a.balance > Game.autoPlayBalanceOver) return Game.stopAutoplay(), !1;
                        if ("lose" == a.gameResult) {
                            if (Game.lossSeries++, 2 == Game.autoPlayOnWinTerm && (Game.winSeries = 0), 1 == Game.autoPlayOnLossBets || Game.autoPlayOnLossBets > 1 && Game.lossSeries == Game.autoPlayOnLossBets) {
                                if (Game.lossSeries = 0, 1 == Game.autoPlayOnLossStop) return Game.stopAutoplay(), !1;
                                0 == Game.autoPlayOnLoss ? $("#betAmount").val(Game.autoPlayBase) : 1 == Game.autoPlayOnLoss ? (t = 1 * t + t * Game.autoPlayOnLossInc / 100, t = t.toFixed(8), $("#betAmount").val(t)) : 2 == Game.autoPlayOnLoss && (t = 1 * t - t * Game.autoPlayOnLossDec / 100, t = t.toFixed(8), $("#betAmount").val(t)), 1 == Game.autoPlayOnLossRev && ($(".game-dice .direction").each(function() {
                                    $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
                                }), $("#playBtn").html($(".game-dice .direction.active").html() + " " + 1 * $("#prediction").val()), Game.direction = $(".game-dice .direction.active").attr("data-direction"), Game.calculate())
                            }
                        } else if ("win" == a.gameResult && (Game.winSeries++, 2 == Game.autoPlayOnLossTerm && (Game.lossSeries = 0), 1 == Game.autoPlayOnWinBets || Game.autoPlayOnWinBets > 1 && Game.winSeries == Game.autoPlayOnWinBets)) {
                            if (Game.winSeries = 0, 1 == Game.autoPlayOnWinStop) return Game.stopAutoplay(), !1;
                            0 == Game.autoPlayOnWin ? $("#betAmount").val(Game.autoPlayBase) : 1 == Game.autoPlayOnWin ? (t = 1 * t + t * Game.autoPlayOnWinInc / 100, t = t.toFixed(8), $("#betAmount").val(t)) : 2 == Game.autoPlayOnWin && (t = 1 * t - t * Game.autoPlayOnWinDec / 100, t = t.toFixed(8), $("#betAmount").val(t)), 1 == Game.autoPlayOnWinRev && ($(".game-dice .direction").each(function() {
                                $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
                            }), $("#playBtn").html($(".game-dice .direction.active").html() + " " + 1 * $("#prediction").val()), Game.direction = $(".game-dice .direction.active").attr("data-direction"), Game.calculate())
                        }
                        if (Game.autoPlayBetOver > 0 && t > Game.autoPlayBetOver) return Game.stopAutoplay(), !1;
                        Game.calculate();
                        var i = 300;
                        Game.accelerationFlag > 0 && (1 == Game.accelerationFlag && (i = 200), 2 == Game.accelerationFlag && (i = 100), 3 == Game.accelerationFlag && (i = 0), i = i.toFixed(0)), setTimeout(function() {
                            Game.play()
                        }, i)
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
    runDice: function(a, e) {
        $("#playBtn").addClass("active");
        var t = 20,
            o = 1 * $("#prediction").val(),
            n = $(".game-dice .direction.active").attr("data-direction"),
            l = 1 * $("#resultNumber").html();
        if ("off" == Game.animation) return "under" == n && 1 * a < o || "over" == n && 1 * a > o ? $(".number.result").removeClass("lose") : $(".number.result").addClass("lose"), $("#resultNumber").html(a), $("#playBtn").removeClass("active"), Game.playFlag = !1, "function" == typeof e && e(), !0;
        if (1 == Game.autoPlayFlag && (1 == Game.accelerationFlag && (t = 8), 2 == Game.accelerationFlag && (t = 1), 3 == Game.accelerationFlag)) return "under" == n && 1 * a < o || "over" == n && 1 * a > o ? $(".number.result").removeClass("lose") : $(".number.result").addClass("lose"), $("#resultNumber").html(a), $("#playBtn").removeClass("active"), Game.playFlag = !1, "function" == typeof e && e(), !0;
        var i = setInterval(function() {
            var t = 1 * $("#resultNumber").html();
            "99" == t ? t = 0 : t += 1, l += 1, t < 10 && (t = "0" + t), $("#resultNumber").html(t), "under" == n && 1 * t < o || "over" == n && 1 * t > o ? $(".number.result").removeClass("lose") : $(".number.result").addClass("lose"), t == a && (clearInterval(i), $("#playBtn").removeClass("active"), Game.playFlag = !1, "function" == typeof e && e())
        }, t)
    },
    startAutoplay: function() {
        Game.autoPlayFlag = !0, Game.autoPlayCount = 0, Game.winSeries = 0, Game.lossSeries = 0, Game.autoPlayBase = number_format($("#betAmount").val(), 8, ".", ""), Game.autoPlayOnLoss = $("#autoplay input[name=on-loss]:checked").val(), Game.autoPlayOnLoss || (Game.autoPlayOnLoss = 0), Game.autoPlayOnLossTerm = $("#autoplay select[name=on-loss-term]").val(), Game.autoPlayOnLossTerm || (Game.autoPlayOnLossTerm = 1), Game.autoPlayOnLossBets = $("#autoplay input[name=on-loss-bets]").val(), Game.autoPlayOnLossBets || (Game.autoPlayOnLossBets = 0), Game.autoPlayOnLossInc = $("#autoplay input[name=on-loss-inc]").val(), Game.autoPlayOnLossInc || (Game.autoPlayOnLossInc = 0), Game.autoPlayOnLossDec = $("#autoplay input[name=on-loss-dec]").val(), Game.autoPlayOnLossDec || (Game.autoPlayOnLossDec = 0), 1 == $("#autoplay input[name=on-loss-rev]").prop("checked") ? Game.autoPlayOnLossRev = !0 : Game.autoPlayOnLossRev = !1, 1 == $("#autoplay input[name=on-loss-stop]").prop("checked") ? Game.autoPlayOnLossStop = !0 : Game.autoPlayOnLossStop = !1, Game.autoPlayOnWin = $("#autoplay input[name=on-win]:checked").val(), Game.autoPlayOnWin || (Game.autoPlayOnWin = 0), Game.autoPlayOnWinTerm = $("#autoplay select[name=on-win-term]").val(), Game.autoPlayOnWinTerm || (Game.autoPlayOnWinTerm = 1), Game.autoPlayOnWinBets = $("#autoplay input[name=on-win-bets]").val(), Game.autoPlayOnWinBets || (Game.autoPlayOnWinBets = 0), Game.autoPlayOnWinInc = $("#autoplay input[name=on-win-inc]").val(), Game.autoPlayOnWinInc || (Game.autoPlayOnWinInc = 0), Game.autoPlayOnWinDec = $("#autoplay input[name=on-win-dec]").val(), Game.autoPlayOnWinDec || (Game.autoPlayOnWinDec = 0), 1 == $("#autoplay input[name=on-win-rev]").prop("checked") ? Game.autoPlayOnWinRev = !0 : Game.autoPlayOnWinRev = !1, 1 == $("#autoplay input[name=on-win-stop]").prop("checked") ? Game.autoPlayOnWinStop = !0 : Game.autoPlayOnWinStop = !1, Game.accelerationFlag = 1 * $("#autoplay input[name=acceleration]").val(), Game.accelerationFlag || (Game.accelerationFlag = 0), Game.autoPlayLimit = 1 * $("#autoplay input[name=bets-limit]").val(), Game.autoPlayLimit || (Game.autoPlayLimit = 0), Game.autoPlayBalanceUnder = 1 * $("#autoplay input[name=balance-under-limit]").val(), Game.autoPlayBalanceUnder || (Game.autoPlayBalanceUnder = !1), Game.autoPlayBalanceOver = 1 * $("#autoplay input[name=balance-over-limit]").val(), Game.autoPlayBalanceOver || (Game.autoPlayBalanceOver = !1), Game.autoPlayBetOver = 1 * $("#autoplay input[name=bet-over-limit]").val(), Game.autoPlayBetOver || (Game.autoPlayBetOver = !1), $(".popup").popupClose(), $("#autoPlayBtn").replaceWith('<button class="btn grey active" onclick="Game.stopAutoplay()" id="autoPlayBtn">STOP</button>'), $("#betAmount").attr("readonly", "true"), Game.play()
    },
    stopAutoplay: function() {
        Game.autoPlayFlag = !1, $("#autoPlayBtn").replaceWith('<button class="btn grey popup-show" data-popup="autoplay" id="autoPlayBtn">AUTO</button>'), $("#betAmount").removeAttr("readonly"), ajaxPreload()
    },
    calculate: function() {
        var a, e, t, o, n, l;
        n = 1 * $("#prediction").val(), l = $(".game-dice .direction.active").attr("data-direction"), n < 1 || n > 98 ? (a = 0, t = 0, e = (0).toFixed(8)) : (t = (99 / (a = "over" == l ? (99 - n) / 100 * 100 : n / 100 * 100)).toFixed(2), e = (e = (o = $("#betAmount").val()) * t - o).toFixed(8), a = a.toFixed(1)), $("#winChance").val(a + "%"), $("#multiplier").val(t + "x"), $("#profitOnWin").val(e)
    }
};
$(function() {
    Game.load(), "main" == user.module && $("#allBets a").click(), "main" == user.module && history.replaceState("home", null, window.location)
});