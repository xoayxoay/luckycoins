var Friends = {
    fix: function() {
        $("#friendsContent .sidebarListWrapper").mCustomScrollbar("destroy");
        $("#friendsContent .sidebarListWrapper").mCustomScrollbar({
            scrollbarPosition: "outside",
            theme: "sidebar",
            scrollInertia: 1e3
        })
    },
    resize: function() {
        var e = window.innerHeight - 74;
        $("#friendsContent .sidebarListWrapper").css("height", e + "px")
    }
};

var Pms = {
    companionID: !1,
    companionUsername: !1,
    sendbusy: !1,
    openDialogue: function(e) {
        if (!$("#pmsList .sidebarListItem[data-id=" + e + "]").length) return !1;
        $("#dialogueBody").html(""), Pms.companionID = !1, Pms.companionUsername = !1, $.ajax({
            url: "/ajx/",
            type: "POST",
            dataType: "html",
            async: !0,
            data: {
                action: "openDialogue",
                id: e,
                hash: user.hash
            },
            success: function(s) {
                if (1 == (s = JSON.parse(s)).result) {
                    $("#dialogueBody").html("");
                    var t = $("#pmsList .sidebarListItem[data-id=" + e + "]");
                    t.hasClass("new") && (t.removeClass("new"), t.find(".unread").length > 0 && ($("#pmsUnread").text(1 * $("#pmsUnread").text() - 1 * t.find(".unread").html()), 1 * $("#pmsUnread").text() < 1 && $("#pmsUnread").text("0").removeClass("show"), t.find(".unread").remove())), Sidebar.open("dialogueContent"), Pms.companionID = s.user_id, Pms.companionUsername = s.username, $("#dialogueContent .sidebarTitle").html('<b class="binduser" data-username="' + s.username + '">' + s.username + "</b>"), actions[s.action](s.params), Pms.markRead(e)
                }
            },
            error: function() {
                $.notification.error({
                    title: "Error",
                    message: "No connection to the server, please try again"
                })
            }
        })
    },
    fix: function() {
        $("#pmsList").mCustomScrollbar("destroy"), $("#pmsList").mCustomScrollbar({
            scrollbarPosition: "outside",
            theme: "sidebar",
            scrollInertia: 1e3
        })
    },
    resize: function() {
        var e = window.innerHeight - 74;
        $("#pmsList").css("height", e + "px")
    },
    dialogueFix: function() {
        $("#dialogueLog").mCustomScrollbar("destroy"), $("#dialogueLog").mCustomScrollbar({
            scrollbarPosition: "outside",
            theme: "sidebar",
            scrollInertia: 1e3,
            callbacks: {
                onTotalScroll: function() {
                    $("#dialogueNewMessagesBtn").fadeOut(200)
                }
            }
        })
    },
    dialogueResize: function() {
        var e = window.innerHeight - $("#dialogueContent .chatForm").height() - 75;
        $("#dialogueLog").css("height", e + "px")
    },
    dialogueScroll: function(e, s, t, i) {
        setTimeout(function() {
            var a = $("#dialogueLog .mCSB_dragger").height();
            if (parseInt($("#dialogueLog .mCSB_dragger").css("max-height"), 10) - parseInt($("#dialogueLog .mCSB_dragger").css("top"), 10) > 1.5 * a && 1 != i) return $("#dialogueNewMessagesBtn").fadeIn(0), !1;
            $("#dialogueLog").mCustomScrollbar("scrollTo", e, {
                scrollInertia: s,
                timeout: t
            })
        }, 20)
    },
    send: function() {
        if (1 == Pms.sendbusy) return !1;
        Pms.sendbusy = !0, $.ajax({
            url: "/ajx/",
            type: "post",
            dataType: "html",
            data: {
                action: "pmSubmit",
                username: Pms.companionUsername,
                message: $.trim($("#dialogueTextarea").html()),
                hash: user.hash
            },
            success: function(e) {
                Pms.sendbusy = !1, 1 == (e = JSON.parse(e)).result ? ($("#dialogueTextarea").empty(), Pms.dialogueResize()) : $.notification.error({
                    title: "Error",
                    message: e.msg
                })
            },
            error: function() {
                Pms.sendbusy = !1, $.notification.error({
                    title: "Error",
                    message: "No connection to the server, please try again"
                })
            }
        })
    },
    delete: function(e) {
        var s = $("#pmsList .sidebarListItem[data-id=" + e + "]"),
            t = $("#pmsList .sidebarListItem[data-id=" + e + "]").find(".user").html();
        confirm("ru" == user.lang ? "Вы уверены, что хотите удалить диалог с " + t + "?" : "Are you sure to delete conversation with " + t + "?") && s.length > 0 && (s.remove(), s.find(".unread").length > 0 && ($("#pmsUnread").text(1 * $("#pmsUnread").text() - 1 * s.find(".unread").html()), 1 * $("#pmsUnread").text() < 1 && $("#pmsUnread").text("0").removeClass("show")), $("#pmsList .counter").html($("#pmsList .sidebarListItem").length), $("#pmsList .sidebarListItem").length || ($("#pmsList").removeClass("show"), $("#pmsList .list").html('<div class="sidebarListItemNothing">' + ("ru" == user.lang ? "Диалоги не найдены" : "No conversations found") + "</div>")), $.ajax({
            url: "/ajx/",
            type: "post",
            dataType: "html",
            data: {
                action: "deleteDialogue",
                id: e,
                hash: user.hash
            }
        }))
    },
    markRead: function(e) {
        setTimeout(function() {
            e == Pms.companionID && $("#dialogueContent").is(":visible") && $("#dialogueLog .msg.new").removeClass("new")
        }, 2e3)
    },
};