"use strict";

function ajaxPreload() {
    bindLinks();
    $("select").niceSelect();
    $("#header .header-menu").unbind("mouseleave");
    $("#header .header-menu").bind("mouseleave", function() {
        $("#header .header-menuHover").stop().fadeOut(50)
    });
    $("#header .header-menu li").unbind("mouseover");
    $("#header .header-menu li").bind("mouseover", function() {
        var e = $("#header .wrapper").offset().left,
            t = $(this).find("span").offset().left - e,
            a = $(this).width();
        $("#header .header-menuHover").is(":visible") ? ($("#header .header-menuHover").stop().fadeIn(50).animate({
            left: t
        }, {
            duration: 100,
            easing: "linear"
        }), $("#header .header-menuHover div").stop().fadeIn(50).animate({
            width: a
        }, {
            duration: 100,
            easing: "linear"
        })) : ($("#header .header-menuHover div").css("width", a), $("#header .header-menuHover").stop().css("left", t).fadeIn(50))
    });
    $(".page-content.box .slideup").unbind("click"), $(".page-content.box .slideup").bind("click", function() {
        $(this).closest(".page-content.box").find(".box-body").is(":visible")
            ? ($(this).closest(".page-content.box").find(".box-body").stop().fadeOut(100, function() {
                $(this).closest(".page-content.box").find(".timeleft").removeClass("hide")
            }), $(this).find("a").html("+")) : ($(this).closest(".page-content.box").find(".box-body").stop().fadeIn(100), $(this).find("a").html("&ndash;"), $(this).closest(".page-content.box").find(".timeleft").addClass("hide"))
    });
    $("#listContainer .menu a").unbind("click"), $("#listContainer .menu a").bind("click", function() {
        return AjaxContent({
            url: $(this).attr("href"),
            container: "#listContainer",
            content: "#listContainer",
            active: $(this),
            activeRemove: "#listContainer .menu a",
            busy: !1
        }), !1
    });
    $("form.ajax-form").unbind("submit");
    $("form.ajax-form").bind("submit", function() {
        var e = $(this);
        return !e.hasClass("busy") && (e.addClass("busy"), jQuery.ajax({
            url: "/ajx/",
            type: "POST",
            dataType: "html",
            async: !0,
            data: $(this).serialize() + "&hash=" + user.hash,
            success: function(t) {
                if (t = JSON.parse(t), e.removeClass("busy"), void 0 !== t.autohide && 1 == t.autohide && $(".popup").popupClose(), e.find(".g-recaptcha").length > 0 && 0 == t.result) {
                    var a = e.closest(".popup").attr("id");
                    void 0 !== recaptcha[a] && grecaptcha.reset(recaptcha[a])
                }
                void 0 !== t.redirect && (window.location.href = t.redirect), void 0 !== t.reload && location.reload(), void 0 !== t.popupshow && $("#" + t.popupshow).popupShow(), void 0 !== e.attr("data-onupdate") && 1 == t.result && AjaxContent({
                    url: window.location.href,
                    container: e.attr("data-onupdate"),
                    content: e.attr("data-onupdate"),
                    active: !1,
                    activeRemove: !1,
                    busy: !1
                }), 0 == t.result ? $.notification.error({
                    title: "Error",
                    message: t.msg
                }) : 1 == t.result && $.notification.notice({
                    title: "Success",
                    message: t.msg
                })
            },
            error: function() {
                if ($.notification.error({
                        title: "Error",
                        message: "No connection to the server, please try again"
                    }), e.find(".g-recaptcha").length > 0) {
                    var t = e.closest(".popup").attr("id");
                    void 0 !== recaptcha[t] && grecaptcha.reset(recaptcha[t])
                }
            }
        }), !1)
    });

    $(".toggle-item .toggle-title").unbind("click");
    $(".toggle-item .toggle-title").bind("click", function() {
        $(this).parent().hasClass("active") ? $(this).parent().removeClass("active").find(".toggle-text").fadeOut(0) : $(this).parent().addClass("active").find(".toggle-text").fadeIn(0)
    });

    $(".popup-close").unbind("click"), $(".popup-close").bind("click", function() {
        $(".popup").popupClose()
    });
    $(".popup-show").unbind("click"), $(".popup-show").bind("click", function() {
        var e = $(this).attr("data-popup"),
            t = $(this).attr("data-value");
        $("#" + e).popupShow({
            data: t
        })
    });
    $(".popup .popup-body").mCustomScrollbar({
        scrollbarPosition: "outside",
        theme: "sidebar",
        scrollInertia: 1e3
    });

    $("input[name=amount]").numberMask({
        type: "float",
        afterPoint: 8,
        defaultValueInput: "0.00001",
        decimalMark: "."
    });
    $("input.amount").numberMask({
        type: "float",
        afterPoint: 8,
        defaultValueInput: "0.00001",
        decimalMark: "."
    });

    $("input").iCheck("destroy"), $("input").iCheck({
        checkboxClass: "icheckbox",
        radioClass: "iradio",
        aria: !0
    });

    $(".iradio input[type=radio]").each(function() {
        void 0 !== $(this).attr("checked") && !1 !== $(this).attr("checked") && $(this).iCheck("check")
    });
    $(".iradio input[type=radio]").on("ifChecked", function() {
        $(this).attr("checked", "")
    });
    $(".iradio input[type=radio]").on("ifUnchecked", function() {
        $(this).removeAttr("checked")
    });

    $("#pmTextarea").unbind("keydown"), $("#pmTextarea").bind("keydown", function(e) {
        if ((13 == e.keyCode || 10 == e.keyCode) && e.ctrlKey) return $("#pm form").submit(), !1
    });

    $("#pm .smilesList").mCustomScrollbar({
        scrollbarPosition: "inside",
        scrollInertia: 1e3
    });
    $("#pm .smilesList span.smile").unbind("click");
    $("#pm .smilesList span.smile").bind("click", function() {
        $("#pmTextarea").html($("#pmTextarea").html() + '<img src="' + $(this).find("img").attr("src") + '"/>');
        $("#pm input[name=message]").val($("#pmTextarea").html());
        placeFocus("pmTextarea");
    });

    $("#pmTextarea").on("propertychange change click keyup input paste", function() {
        $("#pm input[name=message]").val($("#pmTextarea").html());
    });
    $("#changeAvatar button").unbind("click");
    $("#changeAvatar button").bind("click", function() {
        $("#avatarField").croppie("result", {
            type: "canvas",
            size: "viewport"
        }).then(function(e) {
            $("#changeAvatar input[name=image]").val(e)
        });
    });

    $("#upload").unbind("change");
    $("#upload").bind("change", function() {
        var e = this;
        if (e.files && e.files[0]) {
            $("#avatarField .uploadMessage").fadeOut(0);
            $("#avatarField input[type=file]").fadeOut(0);
            $("#avatarField .imageOptions").fadeIn(0), $("#avatarField").croppie({
                enableExif: !0,
                enableOrientation: !0,
                viewport: {
                    width: 250,
                    height: 250,
                    type: "circle"
                },
                boundary: {
                    width: 460,
                    height: 300
                }
            });

            var t = new FileReader;
            t.onload = function(e) {
                $("#avatarField").addClass("ready");
                $("#avatarField").croppie("bind", {
                    url: e.target.result
                });
            }, t.readAsDataURL(e.files[0]);
        }
    });

    $("#avatarField .deleteImage").unbind("click");
    $("#avatarField .deleteImage").bind("click", function() {
        $("#avatarField").croppie("destroy");
        $("#avatarField .imageOptions").fadeOut(0);
        $("#avatarField .uploadMessage").fadeIn(0);
        $("#avatarField input[type=file]").val("").fadeIn(0);
    });
    $("#avatarField .rotateImage").unbind("click");
    $("#avatarField .rotateImage").bind("click", function() {
        $("#avatarField").croppie("rotate", 90);
    });

    $(".luckySelect .option").unbind("click");
    $(".luckySelect .option").bind("click", function() {
        $(this).parent().find(".active").removeClass("active"), $(this).addClass("active");
        var obj = $(this);
        $(this).each(function() {
            $.each(this.attributes, function(e, t) {
                var a = t.name,
                    i = t.value,
                    n = obj.parent().parent().parent().find("[" + a + "-id]");
                void 0 !== n.attr("type") ? n.val(i) : n.html(i), n.hasClass("hideSelect") && n.removeClass("hideSelect"), n.parent().hasClass("hideSelect") && n.parent().removeClass("hideSelect")
            })
        });
        var func = obj.attr("data-function");
        void 0 !== func && eval(func)
    });

    $("#resetStats").unbind("click");
    $("#resetStats").bind("click", function() {
        updateStats(!1);
    });
    1 * $("#overallProfit").text() < 0 ? $("#overallProfit").parent().addClass("red") : 1 * $("#overallProfit").text() > 0 && $("#overallProfit").parent().addClass("green");

    $("a.ajax").unbind("click");
    $("a.ajax").bind("click", function() {
        if (1 == queue["#main"]) return !1;
        if (window.location.href == $(this).attr("href")) return !1;
        if ($(this).hasClass("home")) {
            if (void 0 === Game || void 0 === Game.html) return window.location.href = obj.getAttribute("href"), !1;
            if (!1 === Game.html) return window.location.href = obj.getAttribute("href"), !1;
            if (history.pushState("home", null, $(this).attr("href")), $("#main").remove(), $("#mainhide").fadeIn(0).attr("id", "main"), Game.html = !1, $("#controlContainer .coinContainer").mCustomScrollbar("destroy"), $("#controlContainer .coinContainer").mCustomScrollbar({
                    scrollbarPosition: "outside",
                    scrollInertia: 1e3,
                    alwaysShowScrollbar: 1
                }), $("#controlContainer .coinContainer a.active").hasClass("active")) {
                var e = $("#controlContainer .coinContainer a.active").position().top;
                0 != e && (e -= 16), $("#controlContainer .coinContainer").mCustomScrollbar("scrollTo", e, {
                    scrollInertia: 0
                });
            }
            return !1
        }
        return !1 !== Game.html || "main" != user.module || $("#mainhide").length || (Game.html = !0, $("#main").attr("id", "mainhide").fadeOut(0), $("#mainhide").before('<div id="main"></div>')), AjaxContent({
            url: $(this).attr("href"),
            container: "#main",
            content: "#main",
            active: !1,
            activeRemove: !1,
            busy: !1,
            history: !0,
            scrollTop: !0
        }), !1
    });

    $(".tooltip").each(function() {
        var e = $(this);
        $(this).tooltipster({
            animationDuration: 200,
            animation: "fade",
            delay: 20,
            trigger: "hover",
            theme: "luckytip",
            trackerInterval: 15,
            trackOrigin: !0,
            side: "top",
            functionInit: function(t, a) {
                e.removeClass("tooltip")
            }
        })
    });

    $("#faucetTimeleft").length > 0 && $("#faucetTab .icon").removeClass("faucet").addClass("faucet-empty");
}

function bindLinks() {
    $("b[rel=user]").each(function() {
        var e = $(this).html();
        e == user.name ? $(this).replaceWith('<a class="binduser me underline" data-username="' + e + '"><span class="icon user"></span> ' + e + "</a>") : $(this).replaceWith('<a class="binduser underline" data-username="' + e + '"><span class="icon user"></span> ' + e + "</a>")
    });
    $("b[rel=bet]").each(function() {
        var e = $(this).html();
        $(this).replaceWith('<a href="/bet/' + e + '/" class="underline" onclick="ajax(this); return false;"><span class="icon bet"></span> ' + e + "</a>")
    });

    $(".binduser").each(function() {
        var e = $(this),
            t = e.attr("data-username");
        if (t && "" != t && " " != t) {
            var a = "";
            a = $("#ignoreList .sidebarListItem[data-username=" + t + "]").length > 0 ? "<li><a onclick=\"Chat.friends('" + t + "', 'unignore'); return false;\">" + ("en" == user.lang ? "Stop Ignoring" : "Убрать из игнора") + "</a></li>" : "<li><a onclick=\"Chat.friends('" + t + "', 'ignore'); return false;\">" + ("en" == user.lang ? "Add to Ignore" : "Добавить в игнор") + "</a></li>";
            var i = "";
            3 != user.group && 7 != user.group || (i += "<li><a onclick=\"Chat.easyBan('" + t + "'); return false;\">" + ("en" == user.lang ? "Ban Player" : "Забанить игрока") + "</a></li>");
            var n = "",
                o = "";
            $("#friendsList .sidebarListItem[data-username=" + t + "]").length > 0 ? o = "<li><span>" + ("en" == user.lang ? "Your Friend" : "Ваш друг") + "</span></li>" : n = "<li><a onclick=\"Chat.friends('" + t + "', 'request'); return false;\">" + ("en" == user.lang ? "Add to Friends" : "Добавить в друзья") + "</a></li>";
            var s = "<ul>" + o + '<li><a href="/user/' + t + '/" onclick="ajax(this); return false;">' + ("en" == user.lang ? "Profile" : "Профиль") + "</a></li>" + n + "<li><a onclick=\"Chat.easyMessage('" + t + "'); return false;\">" + ("en" == user.lang ? "Message" : "Сообщение") + "</a></li><li><a onclick=\"Chat.easyPM('" + t + "'); return false;\">" + ("en" == user.lang ? "Private Message" : "Личное сообщение") + "</a></li><li><a onclick=\"Chat.easyTip('" + t + "'); return false;\">" + ("en" == user.lang ? "Send Tip" : "Отправить чаевые") + "</a></li>" + a + i + "</ul>";
            t == user.name && (s = "<ul><li><span>" + ("en" == user.lang ? "It's you :)" : "Это вы :)") + '</span></li><li><a href="/user/' + t + '/" onclick="ajax(this); return false;">' + ("en" == user.lang ? "Profile" : "Профиль") + "</a></li></ul>"), $(this).tooltipster({
                animationDuration: 200,
                animation: "grow",
                trigger: "click",
                delay: 200,
                trackerInterval: 15,
                trackOrigin: !0,
                content: s,
                multiple: !0,
                side: "right",
                contentAsHTML: !0,
                interactive: !0,
                functionInit: function(t, a) {
                    e.removeClass("binduser")
                }
            })
        }
    })
}

function ajax(e, t) {
    if (1 == queue["#main"]) return !1;
    if (window.location.href == e.getAttribute("href")) return !1;
    if (1 == t) {
        if (void 0 === Game || void 0 === Game.html) return window.location.href = e.getAttribute("href"), !1;
        if (!1 === Game.html) return window.location.href = e.getAttribute("href"), !1;
        if (history.pushState("home", null, e.getAttribute("href")), $("#main").remove(), $("#mainhide").fadeIn(0).attr("id", "main"), Game.html = !1, $("#controlContainer .coinContainer").mCustomScrollbar("destroy"), $("#controlContainer .coinContainer").mCustomScrollbar({
                scrollbarPosition: "outside",
                scrollInertia: 1e3,
                alwaysShowScrollbar: 1
            }), $("#controlContainer .coinContainer a.active").hasClass("active")) {
            var a = $("#controlContainer .coinContainer a.active").position().top;
            0 != a && (a -= 16), $("#controlContainer .coinContainer").mCustomScrollbar("scrollTo", a, {
                scrollInertia: 0
            })
        }
        return !1
    }
    return !1 !== Game.html || "main" != user.module || $("#mainhide").length || (Game.html = !0, $("#main").before($("#main").clone()).attr("id", "mainhide").fadeOut(0)), AjaxContent({
        url: e.getAttribute("href"),
        container: "#main",
        content: "#main",
        active: !1,
        activeRemove: !1,
        busy: !1,
        history: !0,
        scrollTop: !0
    }), !1
}

function trxChangeCoin(e) {
    return AjaxContent({
        url: e,
        container: "#main",
        content: "#main",
        active: !1,
        activeRemove: !1,
        busy: !1,
        history: !0,
        scrollTop: !0
    }), !1
}

function exchangeRates(e) {
    var t = $("#exchanger input[name=coinFrom]").val(),
        a = $("#exchanger input[name=coinTo]").val(),
        i = $("#exchanger input[name=amountFrom]").val(),
        n = $("#exchanger input[name=amountTo]").val();
    "coin" == e && "" != t && "" != a && $("#exchanger button span").html(t.toUpperCase() + ("en" == user.lang ? " TO " : " НА ") + a.toUpperCase()), jQuery.ajax({
        url: "/ajx/",
        type: "POST",
        dataType: "html",
        async: !0,
        data: {
            action: "exchangeRates",
            flag: e,
            coinFrom: t,
            coinTo: a,
            amountFrom: i,
            amountTo: n,
            hash: user.hash
        },
        success: function(i) {
            1 == (i = JSON.parse(i)).result && (t == i.coinFrom && a == i.coinTo && ("to" == e ? $("#exchanger input[name=amountFrom]").val(i.amountFrom) : $("#exchanger input[name=amountTo]").val(i.amountTo)), $("#exchanger button").removeAttr("disabled")), 0 == i.result && ("to" == e ? $("#exchanger input[name=amountFrom]").val("0.00000000") : $("#exchanger input[name=amountTo]").val("0.00000000"), $("#exchanger button").attr("disabled", "disabled"))
        },
        error: function() {
            $.notification.error({
                title: "Error",
                message: "No connection to the server, please try again."
            })
        }
    })
}

function exchangeReverse() {
    var e = $("#exchanger input[name=coinFrom]").val(),
        t = $("#exchanger input[name=coinTo]").val();
    if (!e || !t) return !1;

    $("#exchanger .columnLeft .luckySelect .option[data-coin=" + t + "]").click();
    $("#exchanger .columnRight .luckySelect .option[data-coin=" + e + "]").click()
}

function randomizeSeed() {
    jQuery.ajax({
        url: "/ajx/",
        type: "POST",
        dataType: "html",
        async: !0,
        data: {
            action: "randomizeSeed",
            hash: user.hash
        },
        success: function(e) {
            1 == (e = JSON.parse(e)).result && ($("#serverSeedHash").html(e.serverSeedHash), $("#clientSeed").val(e.clientSeed))
        },
        error: function() {
            $.notification.error({
                title: "Error",
                message: "No connection to the server, please try again."
            })
        }
    })
}

function popupShow(e, t) {
    $("#" + e).popupShow({
        data: t
    })
}

function updateStats(e, t, a) {
    if (!1 === e) {
        $("#currentWagered").html("0.00000000");
        $("#currentProfit").html("0.00000000");
        $("#currentBets").html("0");
        $("#currentWins").html("0");
        $("#currentLosses").html("0");
        $("#currentLuck").html("0.00");
        $("#currentMessages").html("0");
        $("#currentMaxBet").html("0.00000000");
        $("#currentMaxProfit").html("0.00000000");
        $("#currentProfit").parent().removeClass("red").removeClass("green");
    } else {
        e = parseFloat(e), t = parseFloat(t);
        var i = 1 * $("#currentWagered").html() + e;
        i = i.toFixed(8), $("#currentWagered").html(i);

        var n = 1 * $("#currentProfit").html() + t;
        n = n.toFixed(8), $("#currentProfit").html(n);
        $("#currentBets").html(1 * $("#currentBets").html() + 1);

        var o = 1 * $("#overallWagered").html() + e;
        o = o.toFixed(8);
        $("#overallWagered").html(o);

        var s = 1 * $("#overallProfit").html() + t;
        s = s.toFixed(8);
        $("#overallProfit").html(s);
        $("#overallBets").html(1 * $("#overallBets").html() + 1), "win" == a ? ($("#currentWins").html(1 * $("#currentWins").html() + 1), $("#overallWins").html(1 * $("#overallWins").html() + 1)) : ($("#currentLosses").text(1 * $("#currentLosses").text() + 1), $("#overallLosses").text(1 * $("#overallLosses").text() + 1));

        var r = 1 * i + 1 * n;
        r = (r = r / i * 100).toFixed(2), $("#currentLuck").html(r);

        var l = 1 * o + 1 * s;
        l = (l = l / o * 100).toFixed(2), $("#overallLuck").html(l);

        var c = 1 * $("#currentMaxBet").html();
        (e = e.toFixed(8)) > c && $("#currentMaxBet").html(e);

        var d = 1 * $("#currentMaxProfit").html();
        (t = t.toFixed(8)) > d && $("#currentMaxProfit").html(t), $("#currentProfit").parent().removeClass("red").removeClass("green"), 1 * $("#currentProfit").text() < 0 ? $("#currentProfit").parent().addClass("red") : 1 * $("#currentProfit").text() > 0 && $("#currentProfit").parent().addClass("green"), $("#overallProfit").parent().removeClass("red").removeClass("green"), 1 * $("#overallProfit").text() < 0 ? $("#overallProfit").parent().addClass("red") : 1 * $("#overallProfit").text() > 0 && $("#overallProfit").parent().addClass("green")
    }
}

function AjaxContent(e) {
    $(".tooltipster-base").remove();
    var t = e.url,
        a = e.container;
    e.content;
    if (1 == queue[a]) return !1;
    queue[a] = 1;
    var i = void 0 !== e.active && e.active,
        n = void 0 !== e.activeRemove && e.activeRemove,
        o = void 0 !== e.busy && e.busy,
        s = void 0 !== e.scrollTop && e.scrollTop;
    !1 !== o && $(o).addClass("busy"), jQuery.ajax({
        url: t,
        type: "GET",
        dataType: "html",
        async: !0,
        data: {
            action: "AjaxContent"
        },
        success: function(t) {
            queue[a] = 0, -1 != a.indexOf(",") ? (a = a.split(","), $.each(a, function(e, a) {
                $(a).html($(t).find(a).html())
            })) : $(a).html($(t).find(a).html()), !1 !== n && $(n).removeClass("active"), !1 !== i && i.addClass("active"), !1 !== o && $(o).removeClass("busy"), ajaxPreload(), void 0 !== e.callback && "function" == typeof e.callback && e.callback(), !1 !== s && $("html, body").scrollTop(0)
        },
        error: function() {
            $.notification.error({
                title: "Error",
                message: "No connection to the server, please try again."
            }), queue[a] = 0
        }
    }), void 0 !== e.history && !0 === e.history && history.pushState(e, null, t)
}

function has_history_api() {
    return !(!window.history || !history.pushState)
}

function successFaucet() {
    $("#faucet form").submit()
}

function successCaptcha() {
    $("#captcha form").submit()
}

function placeFocus(e) {
    var t = document.getElementById(e);
    if (t.focus(), void 0 !== window.getSelection && void 0 !== document.createRange) {
        var a = document.createRange();
        a.selectNodeContents(t), a.collapse(!1);
        var i = window.getSelection();
        i.removeAllRanges(), i.addRange(a)
    } else if (void 0 !== document.body.createTextRange) {
        var n = document.body.createTextRange();
        n.moveToElementText(t);
        n.collapse(!1);
        n.select();
    }
}

function toFixedFloor(e, t) {
    var a = t || 0;
    return a = Math.pow(10, a), (Math.floor(e * a) / a).toFixed(t)
}

function randomInt(e, t) {
    var a = e + Math.random() * (t - e);
    return a = Math.round(a)
}

function stripslashes(e) {
    return e = e.replace(/\\'/g, "'"), e = e.replace(/\\"/g, '"'), e = e.replace(/\\0/g, "\0"), e = e.replace(/\\\\/g, "\\")
}

function number_format(e, t, a, i) {
    var n, o, s, r, l;
    return isNaN(t = Math.abs(t)) && (t = 2), void 0 == a && (a = ","), void 0 == i && (i = "."), n = parseInt(e = (+e || 0).toFixed(t)) + "", (o = n.length) > 3 ? o %= 3 : o = 0, l = o ? n.substr(0, o) + i : "", s = n.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + i), r = t ? a + Math.abs(e - n).toFixed(t).replace(/-/, 0).slice(2) : "", l + s + r
}

function setCookie(e, t, a) {
    if (a) {
        var i = new Date;
        i.setTime(i.getTime() + 24 * a * 60 * 60 * 1e3);
        n = "; expires=" + i.toUTCString()
    } else var n = "";
    document.cookie = e + "=" + t + n + "; path=/; secure=true; domain=coinmain"
}

function getCookie(e) {
    for (var t = e + "=", a = document.cookie.split(";"), i = 0; i < a.length; i++) {
        for (var n = a[i];
             " " == n.charAt(0);) n = n.substring(1, n.length);
        if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
    }
    return null
}

function LSAmount(action, id, inputID, minAmountID, maxAmountID, balanceID, func) {
    if (void 0 != minAmountID && 0 != minAmountID) {
        var minAmount = $(id).find("[" + minAmountID + "]").html();
        minAmount = minAmount.split(" ");
        minAmount = 1 * minAmount[0];
    }

    if (void 0 != maxAmountID && 0 != maxAmountID) {
        var maxAmount = $(id).find("[" + maxAmountID + "]").html();
        maxAmount = maxAmount.split(" ");
        maxAmount = 1 * maxAmount[0];
    }

    if (void 0 != balanceID && 0 != balanceID) {
        var balance = $(id).find("[" + balanceID + "]").html();
        balance = balance.split(" ");
        balance = 1 * balance[0];
    }
    var amount = 1 * $(id + " " + inputID).val();
    "max" == action && (void 0 != balanceID && 0 != balanceID && maxAmount > balance && (maxAmount = balance), maxAmount = maxAmount.toFixed(8), $(id + " " + inputID).val(maxAmount)), "min" == action && (amount = minAmount, void 0 != balanceID && 0 != balanceID && amount > balance && (amount = balance), amount = amount.toFixed(8), $(id + " " + inputID).val(amount)), "multiply" == action && (amount *= 2, void 0 != minAmountID && 0 != minAmountID && amount < minAmount && (amount = minAmount), void 0 != balanceID && 0 != balanceID && amount > balance && (amount = balance), amount = amount.toFixed(8), $(id + " " + inputID).val(amount)), "devide" == action && (amount /= 2, void 0 != minAmountID && 0 != minAmountID && amount < minAmount && (amount = minAmount), void 0 != balanceID && 0 != balanceID && amount > balance && (amount = balance), amount = amount.toFixed(8), $(id + " " + inputID).val(amount)), void 0 != func && 0 != func && eval(func)
}

function LSMultiplyAmount(e, t) {
    var a = 2 * $(e + " " + t).val();
    a = a.toFixed(8), $(e + " " + t).val(a)
}

function LSDevideAmount(e, t) {
    var a = $(e + " " + t).val() / 2;
    a = a.toFixed(8);
    $(e + " " + t).val(a);
}

function uLight() {
    $("body").hasClass("light") ? ($("#light .icon").removeClass("off").removeClass("on").addClass("off"), $("body").removeClass("light"), setCookie("uLIGHT", "off", 365)) : ($("#light .icon").removeClass("off").removeClass("on").addClass("on"), $("body").addClass("light"), setCookie("uLIGHT", "on", 365));
    var e = $("#light .text").html(),
        t = $("#light").attr("data-text");
    $("#light .text").html(t);
    $("#light").attr("data-text", e);
}

function uEco() {
    $("#eco .icon").hasClass("on") ? ($("#eco .icon").removeClass("off").removeClass("on").addClass("off"), setCookie("uECO", "off", 365)) : ($("#eco .icon").removeClass("off").removeClass("on").addClass("on"), setCookie("uECO", "on", 365));
    var e = $("#eco .text").html(),
        t = $("#eco").attr("data-text");
    $("#eco .text").html(t);
    $("#eco").attr("data-text", e);
}

$(function() {
    function e() {
        $("#cleanMessageSearch").fadeOut(0);
        $("#messageSearch").val("");
        $("#messagesContent .sidebarListItem").each(function() {
            $(this).css("display", "block");
        });
        $("#messagesNotFound").remove();
        $("#pmsList .sidebarListTitle").html(("ru" == user.lang ? "Мои диалоги" : "My conversations") + ' (<span class="counter">' + $("#messagesContent .sidebarListItem:visible").length + "</span>)");
    }

    function t(e) {
        $("#cleanSearch").fadeIn(0);
        $("#friendsMainBody").fadeOut(0);
        $("#friendsContent .sidebarListWrapper").addClass("busy");

        jQuery.ajax({
            url: "/ajx/",
            type: "POST",
            dataType: "html",
            async: !0,
            data: {
                action: "friendSearch",
                value: e,
                hash: user.hash
            },
            success: function(e) {
                e = JSON.parse(e);
                $("#searchHint").fadeOut(0);
                $("#searchList").fadeIn(0);
                $("#friendsContent .sidebarListWrapper").removeClass("busy");
                $("#searchList .counter").html(e.counter);
                $("#searchList .list").html(e.list);
                bindLinks();
            }
        })
    }

    function a() {
        if ($("#cleanSearch").fadeOut(0), $("#userSearch").is(":focus")) return $("#searchHint").fadeIn(0), $("#friendsMainBody").fadeOut(0), $("#searchList").fadeOut(0), !1;
        $("#userSearch").val("");
        $("#friendsMainBody").fadeIn(0);
        $("#searchList").fadeOut(0);
        $("#friendsContent .sidebarListWrapper").removeClass("busy");
    }

    function i() {
        $("#coinSearch").val("");
        $("#coinLensSearch").show(0);
        $("#coinCleanSearch").hide(0);
        $(".coinContainer a").each(function() {
            $(this).css("display", "block")
        });
        $(".coinContainer .nothingFound").hide();
    }

    new Array;
    console.log("%c", "color:red;font-size:30px;font-weight:bold");
    console.log("%cWARNING! DO NOT COPY AND PASTE ANYTHING HERE!\nIF SOMEONE ASKED YOU TO PASTE SOMETHING HERE, THEY ARE TRYING TO HACK YOUR LUCKYGAMES ACCOUNT AND TAKE YOUR FUNDS.", "color:red;font-size:26px;font-weight:bold");
    console.log("%c", "color:red;font-size:30px;font-weight:bold");
    $(window).load(function() {
        $("#loadingOverlay").length > 0 ? setTimeout(function() {
            $("#loadingOverlay .loader-gif").fadeOut(0);
            $("#loadingOverlay .loader-star").addClass("loaded");
            $("#loadingOverlay .loader-logo").addClass("loaded");
            $("#sidebar .sidebarNav").css("margin-top", $("#sidebar .sidebarNav").height() / 2 * -1).fadeIn(0), setTimeout(function() {
                $("#loadingOverlay").addClass("loaded");
                $("#body").removeClass("hidden");
            }, 500);

            setTimeout(function() {
                $("#loadingOverlay").remove()
            }, 1e3);
        }, 1e3) : ($("#body").removeClass("hidden"), $("#sidebar .sidebarNav").css("margin-top", $("#sidebar .sidebarNav").height() / 2 * -1).fadeIn(0))
    }), window.onerror = function() {
        $("#loadingOverlay").length > 0 ? setTimeout(function() {
            $("#loadingOverlay .loader-gif").fadeOut(0);
            $("#loadingOverlay .loader-star").addClass("loaded");
            $("#loadingOverlay .loader-logo").addClass("loaded");
            $("#sidebar .sidebarNav").css("margin-top", $("#sidebar .sidebarNav").height() / 2 * -1).fadeIn(0);

            setTimeout(function() {
                $("#loadingOverlay").addClass("loaded");
                $("#body").removeClass("hidden");
            }, 500);

            setTimeout(function() {
                $("#loadingOverlay").remove()
            }, 1e3);
        }, 1e3) : ($("#body").removeClass("hidden"), $("#sidebar .sidebarNav").css("margin-top", $("#sidebar .sidebarNav").height() / 2 * -1).fadeIn(0))
    };

    $("#sidebar .tab-show").bind("click", function() {
        var e = $(this).attr("data-id"),
            t = Sidebar.activeID;
        if (void 0 == e) return !1;
        $(this).hasClass("tab") && $("#sidebar .sidebarNav .tab").removeClass("active"), t == e && $(this).hasClass("tab") || 0 == t ? $("#" + e).is(":visible") ? ($("#" + e).animate({
            "margin-left": "-300"
        }, 150, "linear", function() {
            $(this).hide()
        }), $("#body").animate({
            "margin-left": 0
        }, {
            duration: 150,
            easing: "linear"
        }), Sidebar.activeID = !1) : ($("#" + e).fadeIn(0).animate({
            "margin-left": 0
        }, {
            duration: 350,
            easing: "easeOutQuint"
        }), $(this).hasClass("tab") && $(this).addClass("active"), $("#body").animate({
            "margin-left": 250
        }, {
            duration: 350,
            easing: "easeOutQuint"
        }), "chatContent" == e && (Chat.resize(), Chat.fix(), $("#chatUnread").removeClass("show").empty(), Chat.markRead(), Chat.scroll("bottom", 0, 100, 1)), "friendsContent" == e && (Friends.resize(), Friends.fix()), "messagesContent" == e && (Pms.resize(), Pms.fix()), Sidebar.activeID = e) : ($("#" + t).css({
            "margin-left": "-300"
        }).fadeOut(0), $("#" + e).fadeIn(0).css({
            "margin-left": 0
        }), $(this).hasClass("tab") && $(this).addClass("active"), "chatContent" == e && (Chat.resize(), Chat.fix(), $("#chatUnread").removeClass("show").empty(), Chat.markRead(), Chat.scroll("bottom", 0, 100, 1)), "friendsContent" == e && (Friends.resize(), Friends.fix()), "messagesContent" == e && (Pms.resize(), Pms.fix()), Sidebar.activeID = e)
    });

    Friends.resize();
    Pms.resize();
    $(window).resize(function() {
        Chat.resize();
        Pms.dialogueResize();
        Friends.resize();
        Pms.resize();
    });

    $("#chatContent .textarea").on("blur keyup paste input", function() {
        Chat.resize();
    });

    $("#dialogueContent .textarea").on("blur keyup paste input", function() {
        Pms.dialogueResize();
    });

    $("#chatContent button").click(function() {
        Chat.send()
    });

    $("#chatTextarea").keydown(function(e) {
        if ((13 == e.keyCode || 10 == e.keyCode) && e.ctrlKey) return Chat.send(), !1
    });

    $("#dialogueContent button").click(function() {
        Pms.send();
    });

    $("#dialogueTextarea").keydown(function(e) {
        if ((13 == e.keyCode || 10 == e.keyCode) && e.ctrlKey) return Pms.send(), !1
    });

    $("#chatNewMessagesBtn").click(function() {
        Chat.scroll("bottom", 150, 150, 1), $(this).fadeOut(300);
    });

    $("#dialogueNewMessagesBtn").click(function() {
        Pms.dialogueScroll("bottom", 150, 150, 1), $(this).fadeOut(300);
    });

    $("#rooms .room").click(function() {
        if ($(this).hasClass("active")) return $("#roomsContent .sidebarClose").click(), !1;
        $("#rooms .room.active").removeClass("active");
        $(this).addClass("active");
        $("#roomCode").html($(this).attr("data-id"));
        $("#roomsContent .sidebarClose").click();
        Chat.changeRoom($(this).attr("data-id"));
    });

    $("#chatContent .chatForm .icon").click(function() {
        var e = $(this).attr("data-id");
        if (void 0 === e) return !1;
        $("#" + e).is(":visible") ? ($("#" + e).fadeOut(0), $(this).removeClass("active")) : ($("#" + e).fadeIn(0), $(this).addClass("active"));
        Chat.resize();
    });

    $("#dialogueContent .chatForm .icon").click(function() {
        var e = $(this).attr("data-id");
        if (void 0 === e) return !1;
        $("#" + e).is(":visible") ? ($("#" + e).fadeOut(0), $(this).removeClass("active")) : ($("#" + e).fadeIn(0), $(this).addClass("active"));
        Pms.dialogueResize()
    });

    $("#chatContent .chatForm .smilesList span.smile").click(function() {
        $("#chatTextarea").html($("#chatTextarea").html() + '<img src="' + $(this).find("img").attr("src") + '"/>');
        Chat.resize();
        placeFocus("chatTextarea");
    });

    $("#dialogueContent .chatForm .smilesList span.smile").click(function() {
        $("#dialogueTextarea").html($("#dialogueTextarea").html() + '<img src="' + $(this).find("img").attr("src") + '"/>');
        Pms.dialogueResize();
        placeFocus("dialogueTextarea");
    });

    $(".smilesList").mCustomScrollbar({
        scrollbarPosition: "inside",
        scrollInertia: 1e3
    });

    $("#controlContainer .coinContainer").mCustomScrollbar({
        scrollbarPosition: "outside",
        scrollInertia: 1e3,
        alwaysShowScrollbar: 1
    });

    setTimeout(function() {
        if ($("#controlContainer .coinContainer a.active").hasClass("active")) {
            var e = $("#controlContainer .coinContainer a.active").position().top;
            0 != e && (e -= 16);

            $("#controlContainer .coinContainer").mCustomScrollbar("scrollTo", e, {
                scrollInertia: 500
            });
        }
    }, 2e3);

    $(document).keyup(function(e) {
        27 === e.keyCode && $(".popup").popupClose("esc")
    });

    window.addEventListener("popstate", function(e) {
        return null !== e.state && (1 != queue["#main"] && ("home" != e.state || !0 !== Game.html || $("#mainhide").is(":visible") ? (e.state.history = !1, "home" == e.state && !1 === Game.html ? (window.location.href = "/", !1) : (!1 === Game.html && "main" == user.module && (Game.html = !0, $("#main").attr("id", "mainhide").fadeOut(0), $("#mainhide").before('<div id="main"></div>')), void AjaxContent(e.state))) : (Game.html = !1, $("#main").remove(), $("#mainhide").fadeIn(0).attr("id", "main"), !1)))
    });

    $(window).resize(function() {
        $(".popup.show").length > 0 && $(".popup.show").alignCenter()
    });

    $(window).scroll(function() {
        $(".popup.show").length > 0 && $(".popup.show").alignCenter()
    });

    "on" == getCookie("uECO") && uEco();

    $("#messageSearch").on("keyup paste", function(t) {
        var a = $(this).val();
        if (a) {
            $("#cleanMessageSearch").fadeIn(0);
            var i = new RegExp(a, "i");
            $("#messagesNotFound").remove();

            $("#messagesContent .sidebarListItem").each(function() {
                $(this).find(".username span").html().match(i) ? $(this).css("display", "block") : $(this).css("display", "none");
            });

            $("#messagesContent .sidebarListItem:visible").length || $("#pmsList .list").append('<div id="messagesNotFound">' + ("ru" == user.lang ? "Ничего не найдено" : "Nothing Found") + "</div>");
            $("#pmsList .sidebarListTitle").html(("ru" == user.lang ? "Найденные результаты" : "Search Results") + ' (<span class="counter">' + $("#messagesContent .sidebarListItem:visible").length + "</span>)");
        } else e();
    });

    $("#cleanMessageSearch").click(function() {
        e();
    });

    $("#userSearch").focus(function(e) {
        $(this).val() || ($("#searchList").fadeOut(0), $("#searchHint").fadeIn(0), $("#friendsMainBody").fadeOut(0))
    });
    $("#userSearch").blur(function() {
        $(this).val() || ($("#searchHint").fadeOut(0), $("#friendsMainBody").fadeIn(0))
    });
    $("#userSearch").on("keyup paste", function(e) {
        var i = $(this).val();
        i ? t(i) : a()
    });
    $("#cleanSearch").click(function() {
        a();
    });
    $("#coinSearch").focus(function(e) {
        $("#coinLensSearch").addClass("active");
        $("#coinCleanSearch").addClass("active");
    });
    $("#coinSearch").blur(function() {
        $("#coinLensSearch").removeClass("active");
        $("#coinCleanSearch").removeClass("active");
    });
    $("#coinLensSearch").click(function() {
        $("#coinSearch").focus()
    });

    $("#coinSearch").on("keyup paste", function(e) {
        var t = $(this).val();
        if (t) {
            $("#coinLensSearch").hide(0);
            $("#coinCleanSearch").show(0);
            var a = new RegExp(t, "i");
            $(".coinContainer .nothingFound").hide(0);
            $(".coinContainer a").each(function() {
                var e = $(this).find(".coin span").html(),
                    t = $(this).attr("data-coin");
                e.match(a) || t.match(a) ? $(this).css("display", "block") : $(this).css("display", "none")
            }), $(".coinContainer a:visible").length || $(".coinContainer .nothingFound").show(0)
        } else i()
    });

    $("#coinCleanSearch").click(function() {
        i();
    });

    setInterval(function() {
        if ($("#faucetTimeleft").length > 0 && ($("#faucetTab .icon").removeClass("faucet").addClass("faucet-empty"), (e = (e = $("#faucetTimeleft").text()).split(":"))[1] = e[1] - 1, e[1] >= 0 && e[1] < 10 && (e[1] = "0" + 1 * e[1]), e[1] < 0 && (e[1] = 59, e[0] = e[0] - 1), e[0] >= 0 && e[0] < 10 && (e[0] = "0" + 1 * e[0]), 0 == e[0] && 0 == e[1] ? ($("#faucetTimeleft").replaceWith("ru" == user.lang ? "Кран" : "Faucet"), $("#faucetTab .icon").removeClass("faucet-empty").addClass("faucet")) : $("#faucetTimeleft").text(e[0] + ":" + e[1])), $("#tokenTimeleft").length > 0) {
            var e = $("#tokenTimeleft").text();
            (e = e.split(":"))[1] = e[1] - 1, e[1] >= 0 && e[1] < 10 && (e[1] = "0" + 1 * e[1]), e[1] < 0 && (e[1] = 59, e[0] = e[0] - 1), e[0] >= 0 && e[0] < 10 && (e[0] = "0" + 1 * e[0]), 0 == e[0] && 0 == e[1] ? $("#tokenTimeleft").replaceWith("ru" == user.lang ? "Токен" : "Token") : $("#tokenTimeleft").text(e[0] + ":" + e[1])
        }
    }, 1e3);

    ajaxPreload();
});

var Sidebar = {
    activeID: !1,
    open: function(e) {
        $("#" + Sidebar.activeID).css({
            "margin-left": "-300"
        }).fadeOut(0);

        $("#" + e).fadeIn(0).css({
            "margin-left": 0
        });

        "dialogueContent" == e && (
            Pms.dialogueResize(), Pms.dialogueFix(), Pms.dialogueScroll("bottom", 0, 100, 1)), "chatContent" == e && (Chat.resize(), Chat.fix(), $("#chatUnread").removeClass("show").empty(), Chat.markRead(), Chat.scroll("bottom", 0, 100, 1)), "friendsContent" == e && (Friends.resize(), Friends.fix()), "messagesContent" == e && (Pms.resize(), Pms.fix()), Sidebar.activeID = e
    }
};

$.fn.popupShow = function(e) {
    if (this.length > 0 && "true" != this.attr("data-ajax")) $(".popup").popupClose(), $("#" + t).hasClass("nobg") || $(".popup-bg").fadeIn(150), void 0 !== e && void 0 !== e.callback && "function" == typeof e.callback && e.callback(), $("#" + t + " .g-recaptcha").length > 0 && $("#" + t + " .g-recaptcha").each(function(e, a) {
        recaptcha[t] = grecaptcha.render(a, {
            sitekey: $(this).data("sitekey")
        })
    }), $(".tooltipster-base").remove(), this.alignCenter().addClass("show").removeClass("scale").addClass("normal");
    else {
        var t = this.selector;
        $(t).remove(), t = t.replace("#", "");
        var a;
        try {
            a = e.data
        } catch (e) {
            a = !1
        }

        $(".tooltipster-base").remove();

        jQuery.ajax({
            url: "/ajx/",
            type: "POST",
            dataType: "html",
            async: !0,
            data: {
                action: "popup",
                id: t,
                coin: $("#coin").val(),
                game: user.game,
                data: a
            },
            success: function(a) {
                1 == (a = JSON.parse(a)).result && ($("body").append(a.content), ajaxPreload(), void 0 !== e && void 0 !== e.callback && "function" == typeof e.callback && e.callback(), $("#" + t + " .g-recaptcha").length > 0 && $("#" + t + " .g-recaptcha").each(function(e, a) {
                    recaptcha[t] = grecaptcha.render(a, {
                        sitekey: $(this).data("sitekey")
                    })
                }), $("#" + t).attr("data-ajax", "true"), $(".popup").popupClose(), $("#" + t).hasClass("nobg") || $(".popup-bg").fadeIn(150), $("#" + t).alignCenter().addClass("show").removeClass("scale").addClass("normal"))
            },
            error: function() {
                $.notification.error({
                    title: "Error",
                    message: "No connection to the server, please try again."
                })
            }
        })
    }
    return this
};

$.fn.popupClose = function(e) {
    this.each(function() {
        if ($(this).hasClass("normal"))
            if ($(this).find(".popup-close").length) {
                if ($(this).removeClass("normal").addClass("scale").removeClass("show"), void 0 != $(".popup.show").length && $(".popup.show").length || $(".popup-bg").hide(0), "true" == $(this).attr("data-ajax")) {
                    var e = $(this).attr("id");
                    void 0 !== recaptcha[e] && grecaptcha.reset(recaptcha[e]), $(this).remove()
                }
            } else;
    })
};

$.fn.alignCenter = function() {
    if ($(window).height() < this.height()) {
        e = $(window).height() - $(".popup-header").height() - $(".popup-footer").height() - 100;
        this.find(".popup-body").css("max-height", e);
    } else if ($(window).height() > this.height()) {
        var e = $(window).height() - $(".popup-header").height() - $(".popup-footer").height() - 100;
        this.find(".popup-body").css("max-height", e);
    }
    return this.css("position", "fixed"), this.css("top", ($(window).height() - this.outerHeight()) / 2 + "px"), this
};

var queue = new Array;
$.fn.animateBalance = function(e) {
    var t, a, i, n = this;
    return t = "text" == this.attr("type") ? this.val() : this.html(), e = e.replace(/\,/g, ""), t = t.replace(/\,/g, ""), a = e - t, a > 0 ? i = "green" : a < 0 && (i = "red"), "text" == n.attr("type") ? n.val(e) : n.html(e), a = number_format(a, 8, ".", ""), n.after('<div class="animateBalance ' + i + '">' + a + "</div>"), $(".balanceContainer .animateBalance").delay(100).queue(function() {
        $(this).addClass("animation");
    }), $(".balanceContainer .animateBalance").each(function() {
        0 == $(this).css("opacity") && $(this).remove()
    }), this
};

$.fn.animateAmount = function(e, t, a, i, n) {
    if ("on" == getCookie("uECO")) return e = number_format(e, t, a, i), "text" == this.attr("type") ? this.val(e) : this.html(e), this;
    var o, e, s = this;
    return o = "text" == this.attr("type") ? this.val() : this.html(), e = e.replace(/\,/g, ""), o = o.replace(/\,/g, "");

    $({
        val: o
    }).stop().animate({
        val: e
    }, {
        duration: 1500,
        easing: "linear",
        step: function(e) {
            e = number_format(e, t, a, i), "text" == s.attr("type") ? s.val(e) : s.html(e)
        }
    }), this
};

var growl = {
        style: "notice",
        notice: function(e) {
            growl.style = "notice", growl.show(e)
        },
        show: function(e) {
            if ($("#growls").length || $("body").append($('<div id="growls"/>')), $("#growl" + e.id).length > 0) return !1;
            $("#growls .hider").length || ($("#growls").append('<div class="hider incoming active"><span>' + ("en" == user.lang ? "Hide Notifications" : "Скрыть уведомления") + '</span><div class="newMessages">0</div><div class="closeAll">&#215;</div></div>'), $("#growls .hider").bind("click", function() {
                $(this).hasClass("active") ? ($(this).removeClass("active"), $("#growls .growl").addClass("incoming"), $("#growls .growl").fadeOut(0), $(this).find("span").html("en" == user.lang ? "Show Notifications" : "Показать уведомления"), $("#growls .growl").length > 1 && $("#growls .hider .closeAll").addClass("incoming").removeClass("show"), setCookie("uNOTIFY", "off", 365)) : ($(this).addClass("active"), $("#growls .growl").fadeIn(0), $("#growls .growl").removeClass("incoming"), $(this).find("span").html("en" == user.lang ? "Hide Notifications" : "Скрыть уведомления"), $("#growls .hider .newMessages").removeClass("show").html("0"), $("#growls .growl").length > 1 && $("#growls .hider .closeAll").removeClass("incoming").addClass("show"), setCookie("uNOTIFY", "on", 365))
            }), "off" == getCookie("uNOTIFY") && $("#growls .hider").click(), setTimeout(function() {
                $("#growls .hider").removeClass("incoming");
            }, 20));

            $("#growls").append('<div class="growl incoming ' + growl.style + '" id="growl' + e.id + '"/>');
            $("#growl" + e.id).append('<div class="options"><a class="minimize">–</a><a class="close">&#215;</a></div>');
            $("#growl" + e.id).append('<div class="title">' + e.title + "</div>");
            $("#growl" + e.id).append('<div class="message">' + e.msg + "</div>");
            void 0 !== e.date && $("#growl" + e.id).append('<div class="date">' + e.date + "</div>");
            e.user_id > 0 && ($("#growl" + e.id).attr("data-userID", e.user_id), $("#growl" + e.id).attr("data-username", e.username)), $("#growl" + e.id + " .close").bind("click", function() {
                jQuery.ajax({
                    url: "/ajx/",
                    type: "POST",
                    async: !0,
                    data: "action=readGrowl&id=" + e.id + "&hash=" + user.hash,
                    success: function(t) {
                        1 == $("#growls .growl").length && $("#growls .hider").addClass("outgoing"), $("#growl" + e.id).addClass("outgoing"), setTimeout(function() {
                            $("#growl" + e.id).remove(), $("#growls .growl").length || $("#growls").remove(), $("#growls .growl").length < 2 && $("#growls .hider .closeAll").removeClass("show")
                        }, 300)
                    }
                })
            });

            $("#growl" + e.id + " .minimize").bind("click", function() {
                $(this).hasClass("active") ? ($(this).html("–"), $(this).parent().parent().find(".message").fadeIn(0), $(this).removeClass("active")) : ($(this).html("+"), $(this).parent().parent().find(".message").fadeOut(0), $(this).addClass("active"))
            });

            void 0 === e.history && Chat.newmessage.play();
            $("#growls .hider").hasClass("active") ? (setTimeout(function() {
                $("#growl" + e.id).removeClass("incoming");
            }, 20), $("#growls .growl").length > 1 && $("#growls .hider .closeAll").addClass("show")) : ($("#growls .hider .newMessages").addClass("show").html(1 * $("#growls .hider .newMessages").html() + 1), $("#growls .growl").fadeOut(0)), $("#growls .growl").length > 1 && $("#growls .hider .closeAll").bind("click", function() {
                $("#growls .hider").addClass("outgoing"), $("#growls .growl .close").each(function() {
                    $(this).click()
                })
            })
        }
    },
    Roulette = {
        timeout: new Array,
        wheelStops: {
            0: 0,
            32: -10,
            15: -19.5,
            19: -29.5,
            4: -39,
            21: -49,
            2: -59,
            25: -68.7,
            17: -78.4,
            34: -88.1,
            6: -97.8,
            27: -107.7,
            13: -117.5,
            36: -127.2,
            11: -136.9,
            30: -146.7,
            8: -156.5,
            23: -166.2,
            10: -175.9,
            5: 174.5,
            24: 164.9,
            16: 155.3,
            33: 145.4,
            1: 135.8,
            20: 126.1,
            14: 116.5,
            31: 106.9,
            9: 97,
            22: 87.4,
            18: 77.7,
            29: 68,
            7: 58.2,
            28: 48.6,
            12: 38.9,
            35: 29.1,
            3: 19.3,
            26: 9.7
        },
        snapShot: function(e) {
            jQuery.ajax({
                url: "/ajx/",
                type: "POST",
                dataType: "html",
                async: !0,
                data: {
                    game: "roulette",
                    action: "snapShot",
                    id: e
                },
                success: function(t) {
                    if (1 == (t = JSON.parse(t)).result) {
                        t.betAmount;
                        var a = t.clientChoice,
                            i = t.resultNumber,
                            n = t.chipsArray;
                        clearTimeout(Roulette.timeout[0]), clearTimeout(Roulette.timeout[1]), clearTimeout(Roulette.timeout[2]), $("#content").append(t.tml), ajaxPreload(), $("#snapShot .betID").html(e), $.each(n, function(e, t) {
                            $('#snapShot .cell-bet[data-type="' + e + '"] .chip-cont').html(stripslashes(t))
                        }), $("#snapShot").popupShow(), $("#snapShot").attr("data-ajax", "true"), $("#snapShot .ball").fadeIn(0);
                        var o = randomInt(-50, 50),
                            s = Roulette.wheelStops[i] + 720 + o,
                            r = -720 + o;
                        Roulette.move($("#snapShot .wheel"), s, "2s"), Roulette.move($("#snapShot .ball"), r, "2s"), Roulette.timeout[0] = setTimeout(function() {
                            $('#snapShot .roulette-cell[data-cells="' + i + '"] .chip-cont').append('<div class="winning-ball">' + i + "</div>")
                        }, 2e3), Roulette.timeout[1] = setTimeout(function() {
                            s += 360, r += 360, Roulette.move($("#snapShot .wheel"), s, "1s"), Roulette.move($("#snapShot .ball"), r, "1s"), $("#playBtn").removeClass("active")
                        }, 2500), Roulette.timeout[2] = setTimeout(function() {
                            !1 !== a.winArr && $.each(a.winArr, function(e, t) {
                                $('#snapShot .cell-bet[data-type="' + e + '"] .chip-cont .chip').each(function() {
                                    $(this);
                                    var e = $(this).find(".nominal"),
                                        a = e.html() * t;
                                    $({
                                        val: e.html()
                                    }).animate({
                                        val: a
                                    }, {
                                        duration: 1e3,
                                        easing: "linear",
                                        step: function(t) {
                                            t = parseInt(t) != t ? t.toFixed(1) : t.toFixed(0), e.html(t)
                                        }
                                    })
                                })
                            }), !1 !== a.loseArr && $.each(a.loseArr, function(e, t) {
                                $('#snapShot .cell-bet[data-type="' + e + '"] .chip').remove()
                            })
                        }, 4e3), $("#snapShot .roulette-field .roulette-cell, .roulette-field .cell").hover(function() {
                            for (var e = $(this).attr("data-cells").split(","), t = 0; t < e.length; t++) "" != e[t] && $("#snapShot .roulette-cell[data-cells=" + e[t] + "]").addClass("hover")
                        }, function() {
                            for (var e = $(this).attr("data-cells").split(","), t = 0; t < e.length; t++) "" != e[t] && $("#snapShot .roulette-cell[data-cells=" + e[t] + "]").removeClass("hover")
                        })
                    } else $.notification.error({
                        message: t.msg
                    })
                }
            })
        },
        move: function(e, t, a) {
            e.css({
                WebkitTransform: "rotate(" + t + "deg)",
                "-moz-transform": "rotate(" + t + "deg)",
                transform: "rotate(" + t + "deg)",
                WebkitTransition: "all " + a + " ease-out",
                MozTransition: "all " + a + " ease-out",
                MsTransition: "all " + a + " ease-out",
                OTransition: "all " + a + " ease-out",
                transition: "all " + a + " ease-out"
            })
        }
    };