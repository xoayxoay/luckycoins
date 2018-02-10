@extends('master')

@section('content')
    <div id="content">
        <section id="gameContainer">
            <div class="wrapper">
                <div class="userInfo">
                    <div class="welcome">Hello,
                        <div class="avatar">
                            <div class="hover popup-show" data-popup="changeAvatar">
                                <img src="imgs/no-avatar.png" alt="demo22" />
                            </div>
                            <span class="usergroup "></span>
                            <span class="userlevel level0">0</span>
                        </div>
                        <a href="#">
                            <span>Username</span>
                        </a>
                    </div>

                    <ul class="options">
                        <li>
                            <a class="popup-show" data-popup="changePassword">Change Password</a>
                        </li>
                        <li>
                            <a class="popup-show" data-popup="enable2FA">Enable 2FA</a>
                        </li>
                        <li>
                            <a class="popup-show" data-popup="setEmail">Set E-mail</a>
                        </li>
                        <li>
                            <a href="#">Transactions</a>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </div>

                <div class="totalBets">
                    <span class="counter">
                        <span id="totalBets">0</span>
                    </span>

                    <span class="label">BETS MADE</span>
                </div>

                <div class="totalWon">
                    <span class="label">TOTAL WON</span>
                    <span class="counter">
                        <span id="totalWon">0</span>BTC
                    </span>
                </div>

                <ul class="gameLOptions">
                    <li class="roundedLeft">
                        <a id="light" onclick="uLight(); return false;" data-text="DAY">
                            <span class="icon light off"></span>
                            <span class="text">NIGHT</span>
                        </a>
                    </li>
                    <li class="roundedNone">
                        <a id="sound" data-text="SOUND">
                            <span class="icon sound on" id="sound-toggle"></span>
                            <span class="text">SOUND</span>
                        </a>
                    </li>
                    <li class="roundedNone">
                        <a id="eco" onclick="uEco(); return false;" data-text="ECO">
                            <span class="icon eco off"></span>
                            <span class="text">ECO</span>
                        </a>
                    </li>
                    <!-- <li class="roundedNone">
                        <a id="animation" onclick="Game.uAnimation(); return false;" data-text="ANIMATION">
                            <span class="icon animation on"></span>
                            <span class="text">ANIMATION</span>
                        </a>
                    </li> -->
                   <!--  <li class="roundedRight">
                        <a id="hotkeys" onclick="Game.uHotkeys(); return false;" data-text="HOTKEYS">
                            <span class="icon hotkeys off"></span>
                            <span class="text">HOTKEYS</span>
                        </a>
                    </li> -->
                    <li class="roundedFull marginLeft">
                        <a class="popup-show" data-popup="jackpot">
                            <span class="icon jackpot"></span>
                            <span class="text">
                                <span id="jackpotValue1">0.03351875</span>BTC
                            </span>
                        </a>
                    </li>
                </ul>

                <div class="game-dice">
                    <div class="game-box">
                        <div class="number prediction">
                            <input type="text" id="prediction" value="50" autocomplete="off" />
                            <span class="title">PREDICTION</span>
                        </div>
                        <div class="devider"></div>
                        <div class="number result">
                            <span id="resultNumber">00</span>
                            <span class="title">LUCKY NUMBER</span>
                        </div>
                    </div>
                    <div class="direction" id="rollUnder" data-direction="under">ROLL UNDER</div>
                    <div class="direction" id="rollOver" data-direction="over">ROLL OVER</div>
                </div>
            </div>
        </section>

        <div class="clearfix"></div>

        <section id="controlContainer">
            <div class="wrapper">
                <div class="coinContainer">
                    <div class="coinSearch">
                        <input type="text" id="coinSearch" autocomplete="off" placeholder="Search..." value="">
                        <div class="clean" id="coinCleanSearch">✕</div>
                        <div class="lens" id="coinLensSearch"></div>
                    </div>
                    <div class="nothingFound">Nothing found</div>
                    <a class="" data-coin="btc">
                        <div class="coin">
                            <span>Bitcoin</span>
                            <img src="imgs/coinicons/btc.png" alt="Bitcoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="bch">
                        <div class="coin">
                            <span>Bitcoin Cash</span>
                            <img src="imgs/coinicons/bch.png" alt="Bitcoin Cash"/>
                        </div>
                    </a>
                    <a class="" data-coin="btg">
                        <div class="coin">
                            <span>Bitcoin Gold</span>
                            <img src="imgs/coinicons/btg.png" alt="Bitcoin Gold"/>
                        </div>
                    </a>
                    <a class="" data-coin="blk">
                        <div class="coin">
                            <span>Blackcoin</span>
                            <img src="imgs/coinicons/blk.png" alt="Blackcoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="burst">
                        <div class="coin">
                            <span>BURST</span>
                            <img src="imgs/coinicons/burst.png" alt="BURST"/>
                        </div>
                    </a>
                    <a class="" data-coin="bcn">
                        <div class="coin">
                            <span>Bytecoin</span>
                            <img src="imgs/coinicons/bcn.png" alt="Bytecoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="clam">
                        <div class="coin">
                            <span>CLAMs</span>
                            <img src="imgs/coinicons/clam.png" alt="CLAMs"/>
                        </div>
                    </a>
                    <a class="" data-coin="dash">
                        <div class="coin">
                            <span>DASH</span>
                            <img src="imgs/coinicons/dash.png" alt="DASH"/>
                        </div>
                    </a>
                    <a class="" data-coin="dcr">
                        <div class="coin">
                            <span>Decred</span>
                            <img src="imgs/coinicons/dcr.png" alt="Decred"/>
                        </div>
                    </a>
                    <a class="" data-coin="dgb">
                        <div class="coin">
                            <span>Digibyte</span>
                            <img src="imgs/coinicons/dgb.png" alt="Digibyte"/>
                        </div>
                    </a>
                    <a class="" data-coin="doge">
                        <div class="coin">
                            <span>Dogecoin</span>
                            <img src="imgs/coinicons/doge.png" alt="Dogecoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="emc2">
                        <div class="coin">
                            <span>Einsteinium</span>
                            <img src="imgs/coinicons/emc2.png" alt="Einsteinium"/>
                        </div>
                    </a>
                    <a class="" data-coin="eth">
                        <div class="coin">
                            <span>Ethereum</span>
                            <img src="imgs/coinicons/eth.png" alt="Ethereum"/>
                        </div>
                    </a>
                    <a class="" data-coin="etc">
                        <div class="coin">
                            <span>Ethereum Classic</span>
                            <img src="imgs/coinicons/etc.png" alt="Ethereum Classic"/>
                        </div>
                    </a>
                    <a class="" data-coin="ftc">
                        <div class="coin">
                            <span>Feathercoin</span>
                            <img src="imgs/coinicons/ftc.png" alt="Feathercoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="game">
                        <div class="coin">
                            <span>Gamecredits</span>
                            <img src="imgs/coinicons/game.png" alt="Gamecredits"/>
                        </div>
                    </a>
                    <a class="" data-coin="gas">
                        <div class="coin">
                            <span>GAS</span>
                            <img src="imgs/coinicons/gas.png" alt="GAS"/>
                        </div>
                    </a>
                    <a class="" data-coin="nlg">
                        <div class="coin">
                            <span>Gulden</span>
                            <img src="imgs/coinicons/nlg.png" alt="Gulden"/>
                        </div>
                    </a>
                    <a class="" data-coin="hsr">
                        <div class="coin">
                            <span>Hshare</span>
                            <img src="imgs/coinicons/hsr.png" alt="Hshare"/>
                        </div>
                    </a>
                    <a class="" data-coin="ion">
                        <div class="coin">
                            <span>ION</span>
                            <img src="imgs/coinicons/ion.png" alt="ION"/>
                        </div>
                    </a>
                    <a class="" data-coin="kmd">
                        <div class="coin">
                            <span>Komodo</span>
                            <img src="imgs/coinicons/kmd.png" alt="Komodo"/>
                        </div>
                    </a>
                    <a class="" data-coin="ltc">
                        <div class="coin">
                            <span>Litecoin</span>
                            <img src="imgs/coinicons/ltc.png" alt="Litecoin"/>
                        </div>
                    </a>
                    <a class="active" data-coin="lucky">
                        <div class="coin">
                            <span>LUCKY</span>
                            <img src="imgs/coinicons/lucky.png" alt="LUCKY"/>
                        </div>
                    </a>
                    <a class="" data-coin="mona">
                        <div class="coin">
                            <span>MonaCoin</span>
                            <img src="imgs/coinicons/mona.png" alt="MonaCoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="xmr">
                        <div class="coin">
                            <span>Monero</span>
                            <img src="imgs/coinicons/xmr.png" alt="Monero"/>
                        </div>
                    </a>
                    <a class="" data-coin="nmc">
                        <div class="coin">
                            <span>Namecoin</span>
                            <img src="imgs/coinicons/nmc.png" alt="Namecoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="nav">
                        <div class="coin">
                            <span>NAVcoin</span>
                            <img src="imgs/coinicons/nav.png" alt="NAVcoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="xem">
                        <div class="coin">
                            <span>NEM</span>
                            <img src="imgs/coinicons/xem.png" alt="NEM"/>
                        </div>
                    </a>
                    <a class="" data-coin="neo">
                        <div class="coin">
                            <span>NEO</span>
                            <img src="imgs/coinicons/neo.png" alt="NEO"/>
                        </div>
                    </a>
                    <a class="" data-coin="nxs">
                        <div class="coin">
                            <span>Nexus</span>
                            <img src="imgs/coinicons/nxs.png" alt="Nexus"/>
                        </div>
                    </a>
                    <a class="" data-coin="nvc">
                        <div class="coin">
                            <span>Novacoin</span>
                            <img src="imgs/coinicons/nvc.png" alt="Novacoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="nxt">
                        <div class="coin">
                            <span>NXT</span>
                            <img src="imgs/coinicons/nxt.png" alt="NXT"/>
                        </div>
                    </a>
                    <a class="" data-coin="ppc">
                        <div class="coin">
                            <span>Peercoin</span>
                            <img src="imgs/coinicons/ppc.png" alt="Peercoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="pivx">
                        <div class="coin">
                            <span>PIVX</span>
                            <img src="imgs/coinicons/pivx.png" alt="PIVX"/>
                        </div>
                    </a>
                    <a class="" data-coin="pot">
                        <div class="coin">
                            <span>Potcoin</span>
                            <img src="imgs/coinicons/pot.png" alt="Potcoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="qtum">
                        <div class="coin">
                            <span>Qtum</span>
                            <img src="imgs/coinicons/qtum.png" alt="Qtum"/>
                        </div>
                    </a>
                    <a class="" data-coin="rdd">
                        <div class="coin">
                            <span>Reddcoin</span>
                            <img src="imgs/coinicons/rdd.png" alt="Reddcoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="xrp">
                        <div class="coin">
                            <span>Ripple</span>
                            <img src="imgs/coinicons/xrp.png" alt="Ripple"/>
                        </div>
                    </a>
                    <a class="" data-coin="sc">
                        <div class="coin">
                            <span>Siacoin</span>
                            <img src="imgs/coinicons/sc.png" alt="Siacoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="steem">
                        <div class="coin">
                            <span>STEEM</span>
                            <img src="imgs/coinicons/steem.png" alt="STEEM"/>
                        </div>
                    </a>
                    <a class="" data-coin="sbd">
                        <div class="coin">
                            <span>Steem Dollars</span>
                            <img src="imgs/coinicons/sbd.png" alt="Steem Dollars"/>
                        </div>
                    </a>
                    <a class="" data-coin="strat">
                        <div class="coin">
                            <span>STRATIS</span>
                            <img src="imgs/coinicons/strat.png" alt="STRATIS"/>
                        </div>
                    </a>
                    <a class="" data-coin="sys">
                        <div class="coin">
                            <span>SysCoin</span>
                            <img src="imgs/coinicons/sys.png" alt="SysCoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="xvg">
                        <div class="coin">
                            <span>Verge</span>
                            <img src="imgs/coinicons/xvg.png" alt="Verge"/>
                        </div>
                    </a>
                    <a  class="" data-coin="vrc">
                        <div class="coin">
                            <span>Vericoin</span>
                            <img src="imgs/coinicons/vrc.png" alt="Vericoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="vtc">
                        <div class="coin">
                            <span>Vertcoin</span>
                            <img src="imgs/coinicons/vtc.png" alt="Vertcoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="via">
                        <div class="coin">
                            <span>Viacoin</span>
                            <img src="imgs/coinicons/via.png" alt="Viacoin"/>
                        </div>
                    </a>
                    <a class="" data-coin="waves">
                        <div class="coin">
                            <span>WAVES</span>
                            <img src="imgs/coinicons/waves.png" alt="WAVES"/>
                        </div>
                    </a>
                    <a class="" data-coin="zec">
                        <div class="coin">
                            <span>Zcash</span>
                            <img src="imgs/coinicons/zec.png" alt="Zcash"/>
                        </div>
                    </a>
                    <a class="" data-coin="xzc">
                        <div class="coin">
                            <span>Zcoin</span>
                            <img src="imgs/coinicons/xzc.png" alt="Zcoin"/>
                        </div>
                    </a>
                </div>

                <div class="balanceContainer userBalance">
                    <div class="inputBox">
                        <div class="label">LUCKY Balance (
                            <a href="#" onclick="ajax(this); return false;" class="underline">
                                <span id="ucount">0</span> unconfirmed
                            </a>
                            )
                        </div>

                        <input type="text" id="balance" value="755.60000000" readonly />
                        <input type="hidden" id="coin" value="lucky" />
                        <input type="hidden" id="coinID" value="40" />
                        <input type="hidden" id="maxBetAmount" value="10000000" />
                    </div>

                    <div class="inputBox">
                        <div class="label">LUCKY Deposit address</div>
                        <input
                                type="text"
                                id="address"
                                class="address"
                                onclick="select( this ); return false;"
                                name="address"
                                value="Wallet Maintenance" readonly
                        />
                    </div>

                    <button class="btn green popup-show" data-popup="deposit">DEPOSIT</button>
                    <button class="btn red popup-show" data-popup="withdraw">WITHDRAW</button>
                </div>

                <div class="betContainer">
                    <div class="inputBox">
                        <div class="label">
                            Bet Amount
                            <span id="multiplyBet">X2</span>
                            <span id="splitBet">1/2</span>
                            <span id="minBet">MIN</span>
                            <span id="maxBet">MAX</span>
                        </div>

                        <input
                                type="text"
                                class="amount"
                                id="betAmount"
                                value="0.00000000"
                                placeholder="0.00000000"
                        />
                    </div>
                    <div class="inputBox last">
                        <div class="label">Win Chance</div>
                        <input type="text" id="winChance" value="0%" readonly />
                    </div>
                    <div class="inputBox">
                        <div class="label">Profit on Win</div>
                        <input type="text" class="amount" id="profitOnWin" value="0.00000000" readonly />
                    </div>
                    <div class="inputBox last">
                        <div class="label">Multiplier</div>
                        <input type="text" id="multiplier" value="0x" readonly />
                    </div>

                    <button class="btn blue" id="playBtn">ROLL</button>
                </div>

                <div class="clearfix"></div>
            </div>
        </section>

        <section id="listContainer">
            <div class="wrapper">
                <ul class="menu">
                    <li class="" id="myBets">
                        <a href="#">My Bets</a>
                    </li>
                    <li class="" id="allBets">
                        <a href="#">All Bets</a>
                    </li>
                    <li class="" id="highBets">
                        <a href="#">High Rollers
                            <div class="newBets"></div>
                        </a>
                    </li>
                    <li class="" id="rareBets">
                        <a href="#">
                            Rare Wins
                            <div class="newBets"></div>
                        </a>
                    </li>
                </ul>

                <div class="table">
                    <div class="thead">
                        <div class="tr">
                            <div class="th">ID</div>
                            <div class="th">TIME / PLAYER</div>
                            <div class="th center">COIN</div>
                            <div class="th center">PREDICTION / LUCKY NUMBER</div>
                            <div class="th right">BET</div>
                            <div class="th right">PAYOUT</div>
                        </div>
                    </div>

                    <div class="tbody" id="dire-list">
                        <!-- <div class="tr full"> -->
                            <!-- <div class="td center">LOADING BETS...</div> -->
                        <!-- </div> -->

                    </div>
                </div>
            </div>
        </section>
    </div>
    <script src="{{ url('js/jquery-3.3.1.js')}}"></script>
    <script src="{{ url('js/jquery-migrate.min.js') }}"></script>
    <script src="{{ url('js/socket.io.js') }}"></script>
    <script src="{{ url('js/moment.min.js') }}"></script>

    <script>
        // handle listener socket with event: onDire form node server 
        var socket = io.connect('https://localhost:8890'); // Change url when release
        socket.on('onDire', function (data) {
            var data = JSON.parse(data);
            var time = moment(data.createdAt).fromNow(); // handle time created
            // repend data when had event
            $('#dire-list').prepend(`
                <div class="tr ${ data.isWin ? 'win' : 'lose'}" id="bet14227031807">
                    <div class="td"><a href="/bet/14227031807/" class="underline">${data.id}</a></div>
                    <div class="td">
                        <small>${ time }</small>
                        <a href="/user/Funzi/" class="underline">${data.name}</a>
                    </div>
                    <div class="td center coin"><img src="${data.coinImage}" alt="${data.coinName}"></div>
                    <div class="td center top">
                        <small>${data.type==1 ? 'less than' : 'more than'} ${data.prediction}</small>
                        <div class="predictionRow">
                            <div class="predictionBg ${ data.isWin ? 'win' : 'lose'}" style="width: ${data.betRate}%; margin-left: ${ data.type==1 ? 0 : 100 - data.betRate}%; "></div>
                            <div class="luckyNum" style="margin-left: ${data.luckyNumber}%;"><span class="devider"></span><span class="number">${data.luckyNumber}</span></div>
                        </div>
                    </div>
                    <div class="td right"><small>${data.betRate}%</small><span class="amount">${data.bet} <span class="mhide"> ${data.char}</span></span></div>
                    <div class="td right"><small>${data.payoutRate}x</small><span class="amount">${data.payout} <span class="mhide"> ${data.char}</span></span></div>
                </div>
            `);
            var number = $('#dire-list').children(); // count number record display
            if (number.length > 20) // limit 20 record
               $('#dire-list').children().last().remove(); // remove last record when over 20 record
        });

        // Realtime total Bets
        socket.on('onBet', function (data) {
           var totalBets = $('#totalBets').html();
           totalBets = parseFloat(totalBets) + 1;
           $('#totalBets').html(totalBets);
        });

        // Realtime total BTC won
        // socket.on('onWinBet', function (data) {
        //    var totalWon = $('#totalWon').html();
        //    totalWon = parseFloat(totalWon) + parseFloat(data);
        //    $('#totalWon').html(totalWon);
        // });

        $(document).ready(function(){
            var type = 1; // 1: roll under 2: roll over
            var prediction = 50;
            var sound = true;

            // on/off sound
            $( "#sound" ).click(function() {
                sound = !sound;
                var status = 'on';
                if (!sound)
                    status = 'off';
                $('#sound-toggle').removeClass('on');
                $('#sound-toggle').removeClass('off');
                $('#sound-toggle').addClass(status);
            });

            // change roll
            function changeRoll(type) {
                if (type === 1) {
                    $('#rollUnder').addClass('roolChoose');
                    $('#rollOver').removeClass('roolChoose');
                    $('#playBtn').html(`Roll Under ${prediction}`);
                } else {
                    $('#rollOver').addClass('roolChoose');
                    $('#rollUnder').removeClass('roolChoose');
                    $('#playBtn').html(`Roll Over ${prediction}`);
                }
            }

            changeRoll(type);

            // handle choose roll under
            $('#rollUnder').click(function(){
                type = 1;
                changeRoll(type);
                calculate();
            });

            // handle choose roll over
            $('#rollOver').click(function(){
                type = 2;
                changeRoll(type);
                calculate();
            });

            $('#betAmount').on('change keyup keydown', function(){
                calculate();
            });

            // handle change number prediction
            $('#prediction').on('change keyup', function(){
                this.value = this.value.replace(/\D/g, '');

                if ($(this).val() >= 99) {
                    $(this).val(98);
                } else if ($(this).val() < 1) {
                    $(this).val(1);
                }
                prediction = this.value;

                changeRoll(type);
                calculate();
            });

            // hanlde calculate
            function calculate() {
                var a, e, t, o, n, l;
                n = 1 * $("#prediction").val(); 
                l = $(".roolChoose").attr("data-direction");
                n < 1 || n > 98 ? (a = 0, t = 0, e = (0).toFixed(8)) : (t = (99 / (a = "over" == l ? (99 - n) / 100 * 100 : n / 100 * 100)).toFixed(2), e = (e = (o = $("#betAmount").val()) * t - o).toFixed(8), a = a.toFixed(1));
                $("#winChance").val(a + "%");
                $("#multiplier").val(t + "x"); 
                $("#profitOnWin").val(e);
            }

            // handle x2 bet
            $("#multiplyBet").bind("click", function() {
                var a = 1 * $("#betAmount").val(),
                    e = 1 * $("#balance").val(),
                    t = 1 * $("#maxBetAmount").val();
                0 != a && "0.00000000" != a || (a = 1e-8);
                var o = 2 * a;
                o > e && (o = e);
                o > t && (o = t);
                o = o.toFixed(8);
                $("#betAmount").val(o);
                calculate();
            }); 

            // handle choose 1/2 bet 
            $("#splitBet").bind("click", function() {
                var a = 1 * $("#betAmount").val(),
                    e = 1 * $("#balance").val(),
                    t = a / 2;
                t > e && (t = e);
                t = t.toFixed(8);
                $("#betAmount").val(t);
                calculate();
            });

            // handle choose min bet
            $("#minBet").bind("click", function() {
                var a = 1 * $("#balance").val(),
                    e = 1e-8;
                e > a && (e = a);
                e = e.toFixed(8);
                $("#betAmount").val(e);
                calculate();
            });

            // handle choose max value bet
            $("#maxBet").bind("click", function() {
                var a = 1 * $("#balance").val(),
                    e = 1 * $("#maxBetAmount").val(), // this value need get from server and set in this tag
                    t = 1 * $("#betAmount").val();
                return e > a && (e = a), e = e.toFixed(8), 0 == a ? ($("#betAmount").val(e), Game.calculate(), !1) : e != t && void(confirm("You are about to place the maximum bet. Are you sure?") && ($("#betAmount").val(e), calculate()));
            });

            // handle select coin
            $('.coin').click(function(){
                $(this).parent().addClass('active');
                var coin = $(this).parent().attr('data-coin');
                $('#coin').val(coin);
            });

            // handle when play game
            $('#playBtn').click(function() {
                if ($('#betAmount').val() == 0) {
                    $.notification.error({
                        title: "Error",
                        message: 'Put money, please!!!'
                    });
                } else if ($('#balance').val() < $('#betAmount').val()) {
                    $('#betAmount').val($('#balance').val());
                    $.notification.error({
                        title: "Error",
                        message: 'Not enough money!!'
                    });
                } else {
                    $.ajax({
                        url: '/api/dire',
                        type: 'POST',
                        dataType: 'json',
                        data: { // tranfer data to server need to handle game
                            'coin': $('#coin').val(),
                            'betAmount': $("#betAmount").val(),
                            'winChance': $("#winChance").val().replace(/\%/g, ''),
                            'multiplier': $("#multiplier").val().replace(/\x/g, ''),
                            'profitOnWin': $("#profitOnWin").val(),
                            'prediction': $("#prediction").val(),
                            'direction': $(".roolChoose").attr("data-direction")
                        }
                    })
                        .done(function(data) {
                            var res = data && data.data;
                            const crNumb = parseInt($('#resultNumber').html());

                            $('#resultNumber').prop('Counter', crNumb).animate({
                                Counter: res.luckyNumber  // count to lucky number, receive from server
                            }, {
                                duration: 500,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });

                            // win
                            if(res.isWin === false) {
                                $('#resultNumber').parent().addClass('lose');
                                if (sound)
                                    new Audio('/audio/dice-lose.mp3').play();
                                var result = parseFloat($('#balance').val()) - parseFloat(res.bet); // set +/- coin
                                $('#balance').val(result);
                            } else { // lose
                                $('#resultNumber').parent().removeClass('lose');
                                if(sound)
                                    new Audio('/audio/dice-win.mp3').play();
                                var result = parseFloat($('#balance').val()) + parseFloat(res.bet); // set +/- coin
                                $('#balance').val(result);
                            }
                        })
                        .fail(function(error) {
                            // console.log("error");
                        })
                        .always(function() {
                            // console.log("complete");
                        });
                }
            });

            // Handle change coin icon #controlContainer
            $("#controlContainer .coinContainer a").unbind("click");
            $("#controlContainer .coinContainer a").bind("click", function() {
                return !(void 0 !== !1 && !1 !== !1 || void 0 !== !1 && !1) && (AjaxContent({
                    url: $(this).attr("href"),
                    container: ".userBalance, #statsContent",
                    content: ".userBalance, #statsContent",
                    active: $(this),
                    activeRemove: "#controlContainer .coinContainer a",
                    busy: !1
                }), !1)
            });
        });

    </script>
@endsection
