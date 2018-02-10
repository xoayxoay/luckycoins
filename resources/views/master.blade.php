<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Luckycoins</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO Meta -->
    <meta content="index,follow" name="robots">
    <meta name="revisit-after" content="1 days">
    <meta http-equiv="content-language" content="vi" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <!-- End SEO Meta -->

    <!-- Social Facebook Meta -->
    <meta property="og:url" content="">
    <meta property="og:type" content="website">
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="">
    <!-- End Social Facebook Meta -->

    <!-- Icon -->
    <link rel="shortcut icon" href="" type="image/x-icon" />

    <!-- Main Style -->
    <link rel="stylesheet" href="{{ url('css/style.css') }}" type="text/css" />
    <!-- css -->
    @yield('css')
</head>
<body class="balls">
    <div id="body" class="hidden">
        <!-- Main content -->
        <main id="main">
            <!-- Navigation -->
            <nav id="header">
                <div class="wrapper">
                    <a href="#">
                        <div class="header-logo"></div>
                    </a>

                    <div class="header-locale">
                        <a href="#">
                            <span class="icon en active"></span>
                        </a>
                        <a href="#">
                            <span class="icon ru "></span>
                        </a>
                    </div>

                    <!-- Main Menu -->
                    <ul class="header-menu clearfix">
                        <!-- Active -->
                        <li class="active">
                            <a class="popup-show" data-popup="login">
                                <span>Change Account</span>
                            </a>
                        </li>
                        <li class="">
                            <a href="#" class="">
                                <span>Affiliates</span>
                            </a>
                        </li>
                        <li class="">
                            <a href="#" class="">
                                <span>Contests</span>
                            </a>
                        </li>
                        <li class="">
                            <a href="#">
                                <span>Store</span>
                            </a>
                        </li>
                        <li class="">
                            <a href="#">
                                <span>Provably Fair</span>
                            </a>
                        </li>
                        <li>
                            <a onclick="Intercom('show'); return false;">
                                <span>Contact Us</span>
                            </a>
                        </li>
                    </ul>
                    <!-- End Main Menu -->

                    <div class="header-menuHover">
                        <div></div>
                    </div>
                </div>
            </nav>
            <!-- End Navigation -->

            <div id="news">
                <div class="wrapper">
                    <span style="background-color: red;">!</span>&nbsp;
                    WARNING! DO NOT use weak passwords (12345678, 123123123, etc). There are lots of scammers trying to hijack your
                    account! Enable 2FA for better security.
                    <br>
                    <span style="background-color: red;">!</span>&nbsp;
                    WARNING! Our moderators and administrators never ask to lend or send them coins! Do not let the scammer to take your money!
                </div>
            </div>

            @yield('content')

            <!-- Text intro -->
            <div id="frontText">
                <div class="wrapper">
                    <h1>The Best LUCKY Dice Gambling Experience</h1>
                    <p>
                        Welcome to Luckygames, the Best LUCKY Dice Gambling Site. The main goal is to bring you the greatest
                        gambling experience ever with all the high-end features. You can play using 49 cryptocurrencies and,
                        if you want, exchange them in a few clicks. The Provably Fair system makes your game 100%
                        manipulation free. Low House Edge (1%) provides a reasonable opportunity to make money. We are
                        always open for your feedbacks and suggestions that may help to improve ourselves and our favourite
                        website. Luckygames will make you feel lucky for real.
                    </p>
                    <h2>LUCKY Dice Game Description</h2>
                    <p>
                        Well known Dice game with the highest multiplier available (99x) and extremely fast automated
                        betting support. The player is available to choose a number from 1 to 98 and a direction of
                        prediction (Under/Over). After choosing and betting, the dice starts moving and choosing the
                        lucky number. You win, if the lucky number hits the predicted range.
                    </p>
                </div>
            </div>
            <!-- End Text intro -->
        </main>
        <!-- End Main content -->

        <!-- Footer -->
        <footer id="footer">
            <div class="wrapper">Luckygames.io &copy;2018
                <ul class="footer-menu">
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                    <li>
                        <a href="#">Wallet Status</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Bitcointalk</a>
                    </li>
                </ul>
            </div>
        </footer>
        <!-- End Footer -->
    </div>

    <!-- Right aside -->
    <aside id="sidebar">
        <!-- Aside list menu -->
        <div class="sidebarNav">
            <div class="tab tab-show" data-id="gamesContent">
                <div class="icon games"></div>
                Games
            </div>
            <div class="tab tab-show" data-id="chatContent">
                <div class="icon chat">
                    <span id="chatUnread" class="unread"></span>
                </div>
                Chat
            </div>
            <div class="tab tab-show" data-id="fairContent">
                <div class="icon fair"></div>
                Fair
            </div>
            <div class="tab tab-show" data-id="statsContent">
                <div class="icon stats"></div>
                Stats
            </div>
            <div class="tab popup-show" data-popup="exchanger">
                <div class="icon exchanger"></div>
                Exc...
            </div>
            <div id="faucetUnload">
                <div class="tab popup-show" id="tokenTab" data-popup="token">
                    <div class="icon token"></div>
                    Token
                </div>
            </div>
        </div>
        <!-- End Aside list menu -->

        <div class="sidebarContent" id="gamesContent">
            <div class="sidebarTitle">Games</div>
            <div class="gamesList">
                <div class="game ">
                    <a href="#" title="Balls Game">
                        <span class="image game-balls en">
                            <span class="online">
                                <span id="online-balls">0</span>
                                user(s)
                            </span>
                        </span>
                    </a>
                </div>
                <!--Active-->
                <div class="game active">
                    <a href="#" title="Dice Game">
                        <span class="image game-dice en">
                            <span class="online">
                                <span id="online-dice">0</span>
                                user(s)
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>

        <div class="sidebarContent" id="chatContent">
            <div class="sidebarTitle hr">Chat</div>
            <div class="sidebarOptions">
                <div class="option">
                    <div class="icon messages tab-show" data-id="messagesContent">
                        <span id="pmsUnread" class="unread">0</span>
                    </div>
                </div>
                <div class="option">
                    <div class="icon friends tab-show" data-id="friendsContent">
                        <span id="friendsUnread" class="unread">0</span>
                    </div>
                </div>
                <div class="option">
                    <div class="icon rooms tab-show" data-id="roomsContent" id="roomCode">en</div>
                </div>
            </div>
            <div class="chatMessages busy" id="chatLog">
                <div id="chatBody"></div>
            </div>
            <div class="chatNewMessagesBtn" id="chatNewMessagesBtn">
                New messages
                <span>▼</span>
            </div>
            <div class="chatForm">
                <div class="textarea" id="chatTextarea" contenteditable="true" placeholder="Type your message..."></div>
                <div class="icon smiles" data-id="smilesList"></div>
                <div class="icon rain popup-show" data-popup="rain"></div>
                <div class="icon question" data-id="helpList"></div>
                <div class="smilesList" id="smilesList">
                    <span class="smile" rel="a1">
                        <img src="{{ url('imgs/emoji/a1.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a2">
                        <img src="{{ url('imgs/emoji/a2.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a3">
                        <img src="{{ url('imgs/emoji/a3.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a4">
                        <img src="{{ url('imgs/emoji/a4.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a5">
                        <img src="{{ url('imgs/emoji/a5.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a6">
                        <img src="{{ url('imgs/emoji/a6.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a7">
                        <img src="{{ url('imgs/emoji/a7.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a8">
                        <img src="{{ url('imgs/emoji/a8.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a9">
                        <img src="{{ url('imgs/emoji/a9.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b1">
                        <img src="{{ url('imgs/emoji/b1.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b2">
                        <img src="{{ url('imgs/emoji/b2.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b3">
                        <img src="{{ url('imgs/emoji/b3.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b4">
                        <img src="{{ url('imgs/emoji/b4.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b6">
                        <img src="{{ url('imgs/emoji/b6.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b7">
                        <img src="{{ url('imgs/emoji/b7.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b8">
                        <img src="{{ url('imgs/emoji/b8.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b9">
                        <img src="{{ url('imgs/emoji/b9.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c1">
                        <img src="{{ url('imgs/emoji/c1.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c2">
                        <img src="{{ url('imgs/emoji/c2.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c3">
                        <img src="{{ url('imgs/emoji/c3.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c4">
                        <img src="{{ url('imgs/emoji/c4.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c5">
                        <img src="{{ url('imgs/emoji/c5.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c6">
                        <img src="{{ url('imgs/emoji/c6.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c7">
                        <img src="{{ url('imgs/emoji/c7.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c8">
                        <img src="{{ url('imgs/emoji/c8.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c9">
                        <img src="{{ url('imgs/emoji/c9.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d1">
                        <img src="{{ url('imgs/emoji/d1.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d2">
                        <img src="{{ url('imgs/emoji/d2.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d3">
                        <img src="{{ url('imgs/emoji/d3.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d4">
                        <img src="{{ url('imgs/emoji/d4.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d5">
                        <img src="{{ url('imgs/emoji/d5.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d6">
                        <img src="{{ url('imgs/emoji/d6.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="e6">
                        <img src="{{ url('imgs/emoji/e6.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="e8">
                        <img src="{{ url('imgs/emoji/e8.png') }}" alt="" />
                    </span>
                </div>

                <div class="helpList" id="helpList">
                    <div class="hotkey">
                        <span class="title">Send message:</span>
                        <span class="key">
                            <span class="mask">Ctrl+Enter</span>
                        </span>
                    </div>

                    <div class="hotkey">
                        <span class="title">Add user`s link:</span>
                        <span class="key">
                            <span class="mask">user:(username)</span>
                            <span class="example">example - user:p1AYER</span>
                        </span>
                    </div>

                    <div class="hotkey">
                        <span class="title">Add bet`s link:</span>
                        <span class="key">
                            <span class="mask">bet:(id)</span>
                            <span class="example">example - bet:123456</span>
                        </span>
                    </div>

                    <div class="hotkey">
                        <span class="title full">Send private message:</span>
                        <span class="key">
                            <span class="mask">/pm (username) (message)</span>
                            <span class="example">example - /pm p1AYER hi :)</span>
                        </span>
                    </div>

                    <div class="hotkey">
                        <span class="title full">Send tips:</span>
                        <span class="key">
                            <span class="mask">/tip (username) (coin) (amount)</span>
                            <span class="example">example - /tip p1AYER btc 0.00000001</span>
                        </span>
                    </div>

                    <div class="hotkey">
                        <span class="title full">Make rain:</span>
                        <span class="key">
                            <span class="mask">/rain (coin) (amount)</span>
                            <span class="example">example - /rain btc 0.00001000</span>
                        </span>
                    </div>

                    <div class="hotkey">
                        <span class="key">
                            <span class="example">
                                (coin) - btc, blk, dash, doge, game, ltc, nmc, ppc, rdd, sdc, strat, zec
                            </span>
                        </span>
                    </div>
                </div>

                <div class="formFooter clearfix">
                    <button class="btn grey">SEND</button>
                    <div class="online">
                        online
                        <span class="usersOnline">0</span>
                        user(s)
                    </div>
                </div>
            </div>
        </div>

        <div class="sidebarContent" id="messagesContent">
            <div class="sidebarTitle hr">Сonversations</div>
            <div class="sidebarClose tab-show" data-id="chatContent">
                <a>✕</a>
            </div>
            <div class="sidebarList pms" id="pmsList">
                <div class="sidebarSearch users">
                    <input
                            type="text"
                            name="username"
                            id="messageSearch"
                            autocomplete="off"
                            placeholder="Type a username..."
                            value=""
                    />
                    <div class="clean" id="cleanMessageSearch">
                        <a>✕</a>
                    </div>
                </div>

                <div class="sidebarListTitle">
                    My conversations (
                    <span class="counter">0</span>
                    )
                </div>

                <div class="list">
                    <div class="sidebarListItemNothing">
                        No conversations found
                    </div>
                </div>
            </div>
        </div>

        <div class="sidebarContent" id="dialogueContent">
            <div class="sidebarTitle hr">Conversation</div>
            <div class="sidebarClose tab-show" data-id="messagesContent">
                <a>✕</a>
            </div>
            <div class="chatMessages" id="dialogueLog">
                <div id="dialogueBody"></div>
            </div>
            <div class="chatNewMessagesBtn" id="dialogueNewMessagesBtn">
                New messages
                <span>▼</span>
            </div>
            <div class="chatForm">
                <div class="textarea" id="dialogueTextarea" contenteditable="true" placeholder="Type your message..."></div>
                <div class="icon smiles" data-id="smilesListDialogue"></div>
                <div class="icon question" data-id="helpListDialogue"></div>
                <div class="smilesList" id="smilesList">
                    <span class="smile" rel="a1">
                        <img src="{{ url('imgs/emoji/a1.png') }} " alt="" />
                    </span>
                    <span class="smile" rel="a2">
                        <img src="{{ url('imgs/emoji/a2.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a3">
                        <img src="{{ url('imgs/emoji/a3.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a4">
                        <img src="{{ url('imgs/emoji/a4.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a5">
                        <img src="{{ url('imgs/emoji/a5.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a6">
                        <img src="{{ url('imgs/emoji/a6.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a7">
                        <img src="{{ url('imgs/emoji/a7.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a8">
                        <img src="{{ url('imgs/emoji/a8.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="a9">
                        <img src="{{ url('imgs/emoji/a9.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b1">
                        <img src="{{ url('imgs/emoji/b1.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b2">
                        <img src="{{ url('imgs/emoji/b2.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b3">
                        <img src="{{ url('imgs/emoji/b3.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b4">
                        <img src="{{ url('imgs/emoji/b4.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b6">
                        <img src="{{ url('imgs/emoji/b6.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b7">
                        <img src="{{ url('imgs/emoji/b7.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b8">
                        <img src="{{ url('imgs/emoji/b8.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="b9">
                        <img src="{{ url('imgs/emoji/b9.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c1">
                        <img src="{{ url('imgs/emoji/c1.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c2">
                        <img src="{{ url('imgs/emoji/c2.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c3">
                        <img src="{{ url('imgs/emoji/c3.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c4">
                        <img src="{{ url('imgs/emoji/c4.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c5">
                        <img src="{{ url('imgs/emoji/c5.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c6">
                        <img src="{{ url('imgs/emoji/c6.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c7">
                        <img src="{{ url('imgs/emoji/c7.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c8">
                        <img src="{{ url('imgs/emoji/c8.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="c9">
                        <img src="{{ url('imgs/emoji/c9.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d1">
                        <img src="{{ url('imgs/emoji/d1.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d2">
                        <img src="{{ url('imgs/emoji/d2.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d3">
                        <img src="{{ url('imgs/emoji/d3.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d4">
                        <img src="{{ url('imgs/emoji/d4.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d5">
                        <img src="{{ url('imgs/emoji/d5.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="d6">
                        <img src="{{ url('imgs/emoji/d6.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="e6">
                        <img src="{{ url('imgs/emoji/e6.png') }}" alt="" />
                    </span>
                    <span class="smile" rel="e8">
                        <img src="{{ url('imgs/emoji/e8.png') }}" alt="" />
                    </span>
                </div>

                <div class="helpList" id="helpListDialogue">
                    <div class="hotkey">
                        <span class="title">Send message:</span>
                        <span class="key">
                            <span class="mask">Ctrl+Enter</span>
                        </span>
                    </div>

                    <div class="hotkey">
                        <span class="title">Add user`s link:</span>
                        <span class="key">
                            <span class="mask">user:(username)</span>
                            <span class="example">example - user:p1AYER</span>
                        </span>
                    </div>

                    <div class="hotkey">
                        <span class="title">Add bet`s link:</span>
                        <span class="key">
                            <span class="mask">bet:(id)</span>
                            <span class="example">example - bet:123456</span>
                        </span>
                    </div>
                </div>

                <div class="formFooter clearfix">
                    <button class="btn grey">SEND</button>
                </div>
            </div>
        </div>

        <div class="sidebarContent" id="roomsContent">
            <div class="sidebarTitle hr">Rooms</div>
            <div class="sidebarClose tab-show" data-id="chatContent">
                <a>✕</a>
            </div>
            <div class="sidebarList rooms" id="rooms">
                <div class="sidebarListTitle">Public Chat Rooms</div>
                <div class="sidebarListItem">
                    <a class="room" data-id="en">
                        <span class="icon en"></span>
                        English
                        <span class="sidebarListItemOptions">
                            <span id="online-en">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
                <div class="sidebarListItem">
                    <a class="room" data-id="ru">
                        <span class="icon ru"></span>
                        Russian
                        <span class="sidebarListItemOptions">
                            <span id="online-ru">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
                <div class="sidebarListItem">
                    <a class="room" data-id="br">
                        <span class="icon br"></span>
                        Brazilian
                        <span class="sidebarListItemOptions">
                            <span id="online-br">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
                <div class="sidebarListItem">
                    <a class="room" data-id="in">
                        <span class="icon in"></span>
                        Indian
                        <span class="sidebarListItemOptions">
                            <span id="online-in">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
                <div class="sidebarListItem">
                    <a class="room" data-id="es">
                        <span class="icon es"></span>
                        Spanish
                        <span class="sidebarListItemOptions">
                            <span id="online-es">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
                <div class="sidebarListItem">
                    <a class="room" data-id="id">
                        <span class="icon id"></span>
                        Indonesian
                        <span class="sidebarListItemOptions">
                            <span id="online-id">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
                <div class="sidebarListItem">
                    <a class="room" data-id="pk">
                        <span class="icon pk"></span>
                        Pakistani
                        <span class="sidebarListItemOptions">
                            <span id="online-pk">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
                <div class="sidebarListItem">
                    <a class="room" data-id="ph">
                        <span class="icon ph"></span>
                        Philippine
                        <span class="sidebarListItemOptions">
                            <span id="online-ph">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
            </div>
            <div class="sidebarList rooms" id="rooms" style="padding-top: 5px;">
                <div class="sidebarListTitle">
                    VIP Chat Rooms
                </div>
                <div class="sidebarListItem">
                    <a class="room" data-id="ven">
                        <span class="icon en"></span>
                        English
                        <span class="sidebarListItemOptions">
                            <span id="online-ven">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
                <div class="sidebarListItem">
                    <a class="room" data-id="vru">
                        <span class="icon ru"></span>
                        Russian
                        <span class="sidebarListItemOptions">
                            <span id="online-vru">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
                <div class="sidebarListItem">
                    <a class="room" data-id="vbr">
                        <span class="icon br"></span>
                        Brazilian
                        <span class="sidebarListItemOptions">
                            <span id="online-vbr">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
                <div class="sidebarListItem">
                    <a class="room" data-id="ves">
                        <span class="icon es"></span>
                        Spanish
                        <span class="sidebarListItemOptions">
                            <span id="online-ves">0</span>
                            user(s)
                        </span>
                    </a>
                </div>
            </div>
        </div>

        <div class="sidebarContent"
             id="friendsContent">
            <div class="sidebarTitle hr">Friends</div>
            <div class="sidebarClose tab-show" data-id="chatContent">
                <a>✕</a>
            </div>
            <div class="sidebarListWrapper">
                <div class="sidebarSearch users">
                    <input
                            type="text"
                            name="username"
                            id="userSearch"
                            autocomplete="off"
                            placeholder="Type a username..."
                            value=""
                    />
                    <div class="clean" id="cleanSearch">
                        <a>✕</a>
                    </div>
                </div>
                <div id="friendsMainBody">
                    <div class="sidebarList users hide" id="friendsRequests">
                        <div class="sidebarListTitle">
                            Friendship Requests (<span class="counter">0</span>)
                        </div>
                        <div class="list">Nobody's here</div>
                    </div>
                    <div class="sidebarList users" id="friendsList">
                        <div class="sidebarListTitle">
                            My Friends (<span class="counter">0</span>)
                        </div>
                        <div class="list">Nobody's here</div>
                    </div>
                    <div class="sidebarList users" id="ignoreList">
                        <div class="sidebarListTitle">
                            Ignored (<span class="counter">0</span>)
                        </div>
                        <div class="list">Nobody's here</div>
                    </div>
                </div>
                <div class="sidebarList users hint hide" id="searchHint">
                    Hint: Type 'mod' to find moderator. Type 'help' to find support operator.
                    Type 'admin' to find administrator.
                </div>
                <div class="sidebarList users hide" id="searchList">
                    <div class="sidebarListTitle">
                        Search Results (<span class="counter">0</span>)
                    </div>
                    <div class="list"></div>
                </div>
            </div>
        </div>

        <div class="sidebarContent" id="pvpContent">
            <div class="sidebarTitle hr">PvP Challenges</div>
            <div class="sidebarClose tab-show" data-id="chatContent">
                <a>✕</a>
            </div>
            <div class="sidebarListWrapper">
                <div class="sidebarList pvp" id="pvpRequests">
                    <div class="sidebarListTitle">
                        Waiting Challenges (<span class="counter">0</span>)
                    </div>
                    <div class="list">
                        <div class="sidebarListItem" data-id="21416">
                            <div class="avatar">
                                <!-- User's avatar -->
                                <img src="" alt="Avatar" class="mCS_img_loaded">
                                <div class="usergroup "></div>
                            </div>
                            <div class="username tooltipstered" data-username="RunCPA">RunCPA</div>
                            <div class="info">
                                <div>Rock Paper Scissors</div>
                                <div>Up to 3 win(s)</div>
                            </div>
                            <div class="amount">0.00001000 BTC</div>
                            <div class="sidebarListItemOptions">
                                <div class="btn green" onclick="Chat.pvp('21416', 'accept'); return false;">Accept</div>
                                <div class="btn red" onclick="Chat.pvp('21416', 'decline'); return false;">Decline</div>
                            </div>
                        </div>
                        <div class="sidebarListItem" data-id="21416">
                            <div class="avatar">
                                <img src="https://luckygames.io/avatars/no-avatar.png" alt="RunCPA" class="mCS_img_loaded">
                                <div class="usergroup"></div>
                            </div>
                            <div class="username" data-username="Geege">Geege</div>
                            <div class="info">
                                <div>Rock Paper Scissors</div>
                                <div>Up to 3 win(s)</div>
                            </div>
                            <div class="amount">0.00001000 BTC</div>
                            <div class="sidebarListItemOptions">
                                <div class="btn red" onclick="Chat.pvp('21416', 'cancel'); return false;">Cancel</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sidebarList pvp" id="pvpChallenges">
                    <div class="sidebarListTitle">
                        Active Challenges (<span class="counter">0</span>)
                    </div>
                    <div class="list">
                        <div class="sidebarListItem" data-id="21416">
                            <div class="avatar">
                                <img src="https://luckygames.io/avatars/4578839_350c0499.png" alt="RunCPA" class="mCS_img_loaded">
                                <div class="usergroup admin">Admin</div>
                            </div>
                            <div class="username tooltipstered" data-username="RunCPA">RunCPA</div>
                            <div class="info">
                                <div>Rock Paper Scissors</div>
                                <div>Up to 1 win(s)</div>
                            </div>
                            <div class="amount">0.00001000 BTC</div>
                            <div class="time">22 hours left</div>
                            <div class="sidebarListItemOptions">
                                <div class="btn green" onclick="Chat.pvp('21416', 'accept'); return false;">Open</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sidebarList pvp" id="pvpArchive">
                    <div class="sidebarListTitle">
                        Last 5 Challenges (<span class="counter">0</span>)
                    </div>
                    <div class="list">
                        <div class="sidebarListItem" data-id="21416">
                            <div class="avatar">
                                <img src="https://luckygames.io/avatars/4578839_350c0499.png" alt="RunCPA" class="mCS_img_loaded">
                                <div class="usergroup admin">Admin</div>
                            </div>
                            <div class="username tooltipstered" data-username="RunCPA">RunCPA</div>
                            <div class="info">
                                <div>Rock Paper Scissors</div>
                                <div>Up to 1 win(s)</div>
                            </div>
                            <div class="amount">0.00001000 BTC</div>
                            <div class="result win"> You Won! </div>
                            <div class="time">1 minute ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sidebarContent" id="fairContent">
            <div class="sidebarTitle">Provably Fair</div>
            <div class="sidebarText">
                To guarantee we don’t manipulate our game, Luckygames is using a provably fair system. Therefore the
                player can verify each played game. To learn more information about our provably fair system, go to our
                <a href="#" class="underline">Provably Fair</a> page.
            </div>
            <div class="sidebarSubTitle">Current Seed Pair</div>
            <div class="inputBox">
                <div class="label">Client Seed</div>
                <input type="text" id="clientSeed" maxlength="32" value="eb2bf504866a882b0bdcdbaa372145ad" />
            </div>
            <div class="textBox">
                <div class="label">Server Seed Hash</div>
                <div class="textarea" id="serverSeedHash">ebb570e4ab2f2b144457ba46fda50b3472997b23d657c8a329044e8f10b7ff93</div>
            </div>
            <div class="sidebarText">
                <button class="btn grey" onclick="randomizeSeed(); return false;">RANDOMIZE</button>
            </div>
            <div class="sidebarSubTitle">Previous Seed Pair</div>
            <div class="textBox">
                <div class="label">Client Seed</div>
                <div class="textarea" id="prevClientSeed"></div>
            </div>
            <div class="textBox"><div class="label">Server Seed</div>
                <div class="textarea" id="prevServerSeed"></div>
            </div>
            <div class="textBox">
                <div class="label">Server Seed Hash</div>
                <div class="textarea" id="prevServerSeedHash"></div>
            </div>
        </div>
        <div class="sidebarContent" id="statsContent">
            <div class="sidebarTitle">LUCKY Statistics</div>
            <div class="sidebarSubTitle no-margin">
                Current Session <a id="resetStats">&#10227; RESET</a>
            </div>
            <div class="infoRow main">
                <div class="infoBox big">
                    <div class="label">Total Wagered</div>
                    <div class="input">
                        <img src="https://luckygames.io/tml/luckygames/images/coins/lucky.png" alt="LUCKY" />
                        <span id="currentWagered">0.00000000</span>
                    </div>
                </div>
            </div>
            <div class="infoRow main">
                <div class="infoBox big">
                    <div class="label">Total Profit</div>
                    <div class="input">
                        <img src="https://luckygames.io/tml/luckygames/images/coins/lucky.png" alt="LUCKY" />
                        <span id="currentProfit">0.00000000</span>
                    </div>
                </div>
            </div>
            <div class="infoRow">
                <div class="infoBox">
                    <div class="input" id="currentBets">0</div>
                    <div class="label">Bets</div>
                </div>
                <div class="infoBox">
                    <div class="input green" id="currentWins">0</div>
                    <div class="label">Wins</div>
                </div>
                <div class="infoBox">
                    <div class="input red" id="currentLosses">0</div>
                    <div class="label">Losses</div>
                </div>
            </div>
            <div class="infoRow">
                <div class="infoBox">
                    <div class="input">
                        <span id="currentLuck">0.00</span>
                        %
                    </div>
                    <div class="label">Luck</div>
                </div>
                <div class="infoBox">
                    <div class="input" id="currentMessages">0</div>
                    <div class="label">Messages</div>
                </div>
            </div>
            <div class="infoRow">
                <div class="infoBox big">
                    <div class="label">Maximum Bet</div>
                    <div class="input">
                        <img src="https://luckygames.io/tml/luckygames/images/coins/lucky.png" alt="LUCKY" />
                        <span id="currentMaxBet">0.00000000</span>
                    </div>
                </div>
            </div>
            <div class="infoRow">
                <div class="infoBox big">
                    <div class="label">Maximum Profit</div>
                    <div class="input">
                        <img src="https://luckygames.io/tml/luckygames/images/coins/lucky.png" alt="LUCKY" />
                        <span id="currentMaxProfit">0.00000000</span>
                    </div>
                </div>
            </div>
            <br/>
            <div class="sidebarSubTitle no-margin">Overall Stats</div>
            <div class="infoRow main">
                <div class="infoBox big">
                    <div class="label">Total Wagered</div>
                    <div class="input">
                        <img src="https://luckygames.io/tml/luckygames/images/coins/lucky.png" alt="LUCKY" />
                        <span id="overallWagered">180.00000000</span>
                    </div>
                </div>
            </div>
            <div class="infoRow main">
                <div class="infoBox big">
                    <div class="label">Total Profit</div>
                    <div class="input">
                        <img src="https://luckygames.io/tml/luckygames/images/coins/lucky.png" alt="LUCKY" />
                        <span id="overallProfit">255.60000000</span>
                    </div>
                </div>
            </div>
            <div class="infoRow">
                <div class="infoBox">
                    <div class="input" id="overallBets">9</div>
                    <div class="label">Bets</div>
                </div>
                <div class="infoBox">
                    <div class="input green" id="overallWins">2</div>
                    <div class="label">Wins</div>
                </div>
                <div class="infoBox">
                    <div class="input red" id="overallLosses">7</div>
                    <div class="label">Losses</div>
                </div>
            </div>
            <div class="infoRow">
                <div class="infoBox">
                    <div class="input">
                        <span id="overallLuck">242.00</span>
                        %
                    </div>
                    <div class="label">Luck</div>
                </div>
                <div class="infoBox">
                    <div class="input" id="overallMessages">0</div>
                    <div class="label">Messages</div>
                </div>
            </div>
        </div>
    </aside>
    <!-- End Right aside -->

    <div class="popup-bg popup-close"></div>
    <div id="loadingOverlay">
        <div class="loader-gif"></div>
        <div class="loader-star"></div>
        <div class="loader-logo"></div>
    </div>

    <script src="{{ url('js/vendors-1.5.0.js') }}"></script>
    <script src="{{ url('js/app-1.5.1.js') }}"></script>
    <script src="{{ url('js/ws-1.5.2.js') }}"></script>
    <!-- Scripts -->
    @yield('scripts')
</body>
</html>
