@extends('master')

@section('content')
    <div id="content" class="balls">
        <section id="gameContainer">
            <div class="wrapper">
                <div class="userInfo">
                    <div class="welcome">Hello,
                        <div class="avatar">
                            <div class="hover popup-show" data-popup="changeAvatar">
                                <img src="imgs/no-avatar.png" alt="Username"/>
                            </div>
                            <span class="usergroup "></span>
                            <span class="userlevel level0">0</span>
                        </div>
                        <a href="#">
                            <span>demo22</span>
                        </a>
                    </div>
                    <ul class="options">
                        <li><a class="popup-show" data-popup="changePassword">Change Password</a></li>
                        <li><a class="popup-show" data-popup="enable2FA">Enable 2FA</a></li>
                        <li><a class="popup-show" data-popup="setEmail">Set E-mail</a></li>
                        <li><a href="#">Transactions</a></li>
                        <li><a href="#">Logout</a></li>
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
                            <span id="sound-toggle" class="icon sound on"></span>
                            <span class="text">SOUND</span>
                        </a>
                    </li>
                    <li class="roundedNone">
                        <a id="eco" onclick="uEco(); return false;" data-text="ECO">
                            <span class="icon eco off"></span>
                            <span class="text">ECO</span>
                        </a>
                    </li>
                    <li class="roundedFull marginLeft">
                        <a class="popup-show" data-popup="jackpot">
                            <span class="icon jackpot"></span>
                            <span class="text">
                                <span id="jackpotValue1">0.00990788</span>BTC
                            </span>
                        </a>
                    </li>
                </ul>

                <ul class="gameROptions">
                    <li><a id="ballsOdd">ODD</a></li>
                    <li><a id="ballsEven">EVEN</a></li>
                    <li><a id="ballsReverse">REV</a></li>
                    <li><a id="ballsClear">CLEAN</a></li>
                </ul>

                <div class="game-balls">
                    <div class="magnet" id="magnet"></div>
                    <div class="ballsRow">
                        <div id="ball0" data-id="0" class="ball icon0"><span></span></div>
                        <div id="ball1" data-id="1" class="ball icon1"><span></span></div>
                        <div id="ball2" data-id="2" class="ball icon2"><span></span></div>
                        <div id="ball3" data-id="3" class="ball icon3"><span></span></div>
                        <div id="ball4" data-id="4" class="ball icon4"><span></span></div>
                        <div id="ball5" data-id="5" class="ball icon5"><span></span></div>
                        <div id="ball6" data-id="6" class="ball icon6"><span></span></div>
                        <div id="ball7" data-id="7" class="ball icon7"><span></span></div>
                        <div id="ball8" data-id="8" class="ball icon8"><span></span></div>
                        <div id="ball9" data-id="9" class="ball icon9"><span></span></div>
                        <div id="ball10" data-id="10" class="ball icon10"><span></span></div>
                    </div>
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
                    <a href="#" class="" data-coin="btc">
                        <div class="coin">
                            <span>Bitcoin</span>
                            <img src="imgs/coinicons/btc.png" alt="Bitcoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="bch">
                        <div class="coin">
                            <span>Bitcoin Cash</span>
                            <img src="imgs/coinicons/bch.png" alt="Bitcoin Cash"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="btg">
                        <div class="coin">
                            <span>Bitcoin Gold</span>
                            <img src="imgs/coinicons/btg.png" alt="Bitcoin Gold"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="blk">
                        <div class="coin">
                            <span>Blackcoin</span>
                            <img src="imgs/coinicons/blk.png" alt="Blackcoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="burst">
                        <div class="coin">
                            <span>BURST</span>
                            <img src="imgs/coinicons/burst.png" alt="BURST"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="bcn">
                        <div class="coin">
                            <span>Bytecoin</span>
                            <img src="imgs/coinicons/bcn.png" alt="Bytecoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="clam">
                        <div class="coin">
                            <span>CLAMs</span>
                            <img src="imgs/coinicons/clam.png" alt="CLAMs"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="dash">
                        <div class="coin">
                            <span>DASH</span>
                            <img src="imgs/coinicons/dash.png" alt="DASH"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="dcr">
                        <div class="coin">
                            <span>Decred</span>
                            <img src="imgs/coinicons/dcr.png" alt="Decred"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="dgb">
                        <div class="coin">
                            <span>Digibyte</span>
                            <img src="imgs/coinicons/dgb.png" alt="Digibyte"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="doge">
                        <div class="coin">
                            <span>Dogecoin</span>
                            <img src="imgs/coinicons/doge.png" alt="Dogecoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="emc2">
                        <div class="coin">
                            <span>Einsteinium</span>
                            <img src="imgs/coinicons/emc2.png" alt="Einsteinium"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="eth">
                        <div class="coin">
                            <span>Ethereum</span>
                            <img src="imgs/coinicons/eth.png" alt="Ethereum"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="etc">
                        <div class="coin">
                            <span>Ethereum Classic</span>
                            <img src="imgs/coinicons/etc.png" alt="Ethereum Classic"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="ftc">
                        <div class="coin">
                            <span>Feathercoin</span>
                            <img src="imgs/coinicons/ftc.png" alt="Feathercoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="game">
                        <div class="coin">
                            <span>Gamecredits</span>
                            <img src="imgs/coinicons/game.png" alt="Gamecredits"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="gas">
                        <div class="coin">
                            <span>GAS</span>
                            <img src="imgs/coinicons/gas.png" alt="GAS"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="nlg">
                        <div class="coin">
                            <span>Gulden</span>
                            <img src="imgs/coinicons/nlg.png" alt="Gulden"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="hsr">
                        <div class="coin">
                            <span>Hshare</span>
                            <img src="imgs/coinicons/hsr.png" alt="Hshare"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="ion">
                        <div class="coin">
                            <span>ION</span>
                            <img src="imgs/coinicons/ion.png" alt="ION"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="kmd">
                        <div class="coin">
                            <span>Komodo</span>
                            <img src="imgs/coinicons/kmd.png" alt="Komodo"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="ltc">
                        <div class="coin">
                            <span>Litecoin</span>
                            <img src="imgs/coinicons/ltc.png" alt="Litecoin"/>
                        </div>
                    </a>
                    <a href="#" class="active" data-coin="lucky">
                        <div class="coin">
                            <span>LUCKY</span>
                            <img src="imgs/coinicons/lucky.png" alt="LUCKY"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="mona">
                        <div class="coin">
                            <span>MonaCoin</span>
                            <img src="imgs/coinicons/mona.png" alt="MonaCoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="xmr">
                        <div class="coin">
                            <span>Monero</span>
                            <img src="imgs/coinicons/xmr.png" alt="Monero"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="nmc">
                        <div class="coin">
                            <span>Namecoin</span>
                            <img src="imgs/coinicons/nmc.png" alt="Namecoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="nav">
                        <div class="coin">
                            <span>NAVcoin</span>
                            <img src="imgs/coinicons/nav.png" alt="NAVcoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="xem">
                        <div class="coin">
                            <span>NEM</span>
                            <img src="imgs/coinicons/xem.png" alt="NEM"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="neo">
                        <div class="coin">
                            <span>NEO</span>
                            <img src="imgs/coinicons/neo.png" alt="NEO"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="nxs">
                        <div class="coin">
                            <span>Nexus</span>
                            <img src="imgs/coinicons/nxs.png" alt="Nexus"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="nvc">
                        <div class="coin">
                            <span>Novacoin</span>
                            <img src="imgs/coinicons/nvc.png" alt="Novacoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="nxt">
                        <div class="coin">
                            <span>NXT</span>
                            <img src="imgs/coinicons/nxt.png" alt="NXT"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="ppc">
                        <div class="coin">
                            <span>Peercoin</span>
                            <img src="imgs/coinicons/ppc.png" alt="Peercoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="pivx">
                        <div class="coin">
                            <span>PIVX</span>
                            <img src="imgs/coinicons/pivx.png" alt="PIVX"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="pot">
                        <div class="coin">
                            <span>Potcoin</span>
                            <img src="imgs/coinicons/pot.png" alt="Potcoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="qtum">
                        <div class="coin">
                            <span>Qtum</span>
                            <img src="imgs/coinicons/qtum.png" alt="Qtum"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="rdd">
                        <div class="coin">
                            <span>Reddcoin</span>
                            <img src="imgs/coinicons/rdd.png" alt="Reddcoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="xrp">
                        <div class="coin">
                            <span>Ripple</span>
                            <img src="imgs/coinicons/xrp.png" alt="Ripple"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="sc">
                        <div class="coin">
                            <span>Siacoin</span>
                            <img src="imgs/coinicons/sc.png" alt="Siacoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="steem">
                        <div class="coin">
                            <span>STEEM</span>
                            <img src="imgs/coinicons/steem.png" alt="STEEM"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="sbd">
                        <div class="coin">
                            <span>Steem Dollars</span>
                            <img src="imgs/coinicons/sbd.png" alt="Steem Dollars"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="strat">
                        <div class="coin">
                            <span>STRATIS</span>
                            <img src="imgs/coinicons/strat.png" alt="STRATIS"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="sys">
                        <div class="coin">
                            <span>SysCoin</span>
                            <img src="imgs/coinicons/sys.png" alt="SysCoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="xvg">
                        <div class="coin">
                            <span>Verge</span>
                            <img src="imgs/coinicons/xvg.png" alt="Verge"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="vrc">
                        <div class="coin">
                            <span>Vericoin</span>
                            <img src="imgs/coinicons/vrc.png" alt="Vericoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="vtc">
                        <div class="coin">
                            <span>Vertcoin</span>
                            <img src="imgs/coinicons/vtc.png" alt="Vertcoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="via">
                        <div class="coin">
                            <span>Viacoin</span>
                            <img src="imgs/coinicons/via.png" alt="Viacoin"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="waves">
                        <div class="coin">
                            <span>WAVES</span>
                            <img src="imgs/coinicons/waves.png" alt="WAVES"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="zec">
                        <div class="coin">
                            <span>Zcash</span>
                            <img src="imgs/coinicons/zec.png" alt="Zcash"/>
                        </div>
                    </a>
                    <a href="#" class="" data-coin="xzc">
                        <div class="coin">
                            <span>Zcoin</span>
                            <img src="imgs/coinicons/xzc.png" alt="Zcoin"/>
                        </div>
                    </a>
                </div>

                <div class="balanceContainer userBalance">
                    <div class="inputBox">
                        <div class="label">
                            LUCKY Balance (
                            <a href="#" class="underline"><span id="ucount">0</span>
                                unconfirmed
                            </a>)
                        </div>
                        <input type="text" id="balance" value="758.02000000" readonly/>
                        <input type="hidden" id="coin" value="lucky"/>
                        <input type="hidden" id="coinID" value="40"/>
                        <input type="hidden" id="maxBetAmount" value="10000000"/>
                    </div>

                    <div class="inputBox">
                        <div class="label">LUCKY Deposit address</div>
                        <input type="text" id="address" class="address" onclick="select( this ); return false;"
                               name="address" value="Wallet Maintenance" readonly/>
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
                        <input type="text" class="amount" id="betAmount" value="0.00000000" placeholder="0.00000000"/>
                    </div>

                    <div class="inputBox last">
                        <div class="label">Win Chance</div>
                        <input type="text" id="winChance" value="0%" readonly/>
                    </div>

                    <div class="inputBox">
                        <div class="label">Profit on Win</div>
                        <input type="text" class="amount" id="profitOnWin" value="0.00000000" readonly/>
                    </div>

                    <div class="inputBox last">
                        <div class="label">Multiplier</div>
                        <input type="text" id="multiplier" value="0x" readonly/>
                    </div>
                    <button class="btn blue" id="playBtn">RUN MAGNET</button>
                </div>

                <div class="clearfix"></div>
            </div>
        </section>

        <section id="listContainer">
            <div class="wrapper">
                <ul class="menu">
                    <li class="" id="myBets"><a href="#">My Bets</a></li>
                    <li class="" id="allBets"><a href="#">All Bets</a></li>
                    <li class="" id="highBets">
                        <a href="#">
                            Rollers
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
                            <div class="th center">COMBINATION / LUCKY BALL</div>
                            <div class="th right">BET</div>
                            <div class="th right">PAYOUT</div>
                        </div>
                    </div>
                    <div class="tbody" id="ball-list">
                        <!-- <div class="tr full">
                            <div class="td center">LOADING BETS...</div>
                        </div> -->

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
        var socket = io.connect('https://localhost:8890'); // Change url when release

        function checkBall(array = [], number) {
            for(var i = 0; i < array.length; i++){
                if (parseInt(array[i]) === number)
                    return 'active';
            }
            return '';
        }

        socket.on('onBall', function (data) {
            var data = JSON.parse(data);
            var time = moment(data.createdAt).fromNow(); // handle time created
            var balls = data.balls || [];

            // repend data when had event
            $('#ball-list').prepend(`
                <div class="tr ${ data.isWin ? 'win' : 'lose'}" id="bet14355541289">
                    <div class="td"><a href="/bet/14355541289/" class="underline" onclick="ajax(this); return false;">${data.id}</a></div>
                    <div class="td">
                        <small>${ time }</small>
                        <a href="/user/nithiphat/" class="underline" onclick="ajax(this); return false;">${data.name}</a>
                    </div>
                    <div class="td center coin"><img src="${data.coinImage}" alt="${data.coinName}"></div>
                    <div class="td center">
                        <div class="ballsRowSmall">
                            <div class="ball ${checkBall(balls, 0)} ${data.luckyNumber === 0 ? 'result': ''} icon0"><span></span></div>
                            <div class="ball ${checkBall(balls, 1)} ${data.luckyNumber === 1 ? 'result': ''} icon1"><span></span></div>
                            <div class="ball ${checkBall(balls, 2)} ${data.luckyNumber === 2 ? 'result': ''} icon2"><span></span></div>
                            <div class="ball ${checkBall(balls, 3)} ${data.luckyNumber === 3 ? 'result': ''} icon3"><span></span></div>
                            <div class="ball ${checkBall(balls, 4)} ${data.luckyNumber === 4 ? 'result': ''} icon4"><span></span></div>
                            <div class="ball ${checkBall(balls, 5)} ${data.luckyNumber === 5 ? 'result': ''} icon5"><span></span></div>
                            <div class="ball ${checkBall(balls, 6)} ${data.luckyNumber === 6 ? 'result': ''} icon6"><span></span></div>
                            <div class="ball ${checkBall(balls, 7)} ${data.luckyNumber === 7 ? 'result': ''} icon7"><span></span></div>
                            <div class="ball ${checkBall(balls, 8)} ${data.luckyNumber === 8 ? 'result': ''} icon8"><span></span></div>
                            <div class="ball ${checkBall(balls, 9)} ${data.luckyNumber === 9 ? 'result': ''} icon9"><span></span></div>
                            <div class="ball ${checkBall(balls, 10)} ${data.luckyNumber === 10 ? 'result': ''} icon10"><span></span></div>
                        </div>
                    </div>
                    <div class="td right"><small>${data.betRate}%</small><span class="amount">${data.bet}<span class="mhide"> ${data.char}</span></span></div>
                    <div class="td right"><small>${data.payoutRate}x</small><span class="amount">${data.payout}<span class="mhide"> ${data.char}</span></span></div>
                </div>
            `);
            var number = $('#ball-list').children(); // count number record display
            if (number.length > 20) // limit 20 record
                $('#ball-list').children().last().remove(); // remove last record when over 20 record
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
            var sound = true;

            // on/off sound
            $('#sound').click(function() {
                sound = !sound;
                var status = 'on';
                if (!sound)
                    status = 'off';
                $('#sound-toggle').removeClass('on');
                $('#sound-toggle').removeClass('off');
                $('#sound-toggle').addClass(status);
            });

            function getMargin(number) {
                number = number.toString();
                switch(number){
                    case '0':
                        return '0px';
                        break;
                    case '1':
                        return '90px';
                        break;
                    case '2':
                        return '180px';
                        break;
                    case '3':
                        return '270px';
                        break;
                    case '4':
                        return '360px';
                        break;
                    case '5':
                        return '450px';
                        break;
                    case '6':
                        return '540px';
                        break;
                    case '7':
                        return '630px';
                        break;
                    case '8':
                        return '720px';
                        break;
                    case '9':
                        return '810px';
                        break;
                    case '10':
                        return '900px';
                        break;
                    default:
                        return '0px';
                }
            }

            // handle when play game
            $('#playBtn').click(function(){
                var ball = $('.ball.active');

                var arrBall = [];
                ball.each(function() {
                    var numberBall = $(this).attr('data-id');
                    if (numberBall) arrBall.push(numberBall);
                });

                $('#magnet').css({
                    'background-position-y': '0'
                });

                if (arrBall.length === 0) {
                    // validation here ...
                    $.notification.error({
                        title: "Error",
                        message: "Choose balls, please!!!"
                    });
                } else if ($('#betAmount').val() == 0) {
                    $.notification.error({
                        title: "Error",
                        message: "Put money, please!!!"
                    });
                } else if ($('#balance').val() < $('#betAmount').val()) {
                    $('#betAmount').val($('#balance').val());
                    $.notification.error({
                        title: "Error",
                        message: 'Not enough money!!'
                    });
                } else {
                    $.ajax({
                        url: '/api/ball',
                        type: 'POST',
                        dataType: 'json',
                        data: { // tranfer data to server need to handle game
                            'coin': $('#coin').val(),
                            'betAmount': $("#betAmount").val(),
                            'winChance': $("#winChance").val().replace(/\%/g, ''),
                            'multiplier': $("#multiplier").val().replace(/\x/g, ''),
                            'profitOnWin': $("#profitOnWin").val(),
                            'balls': arrBall
                        }
                    })
                        .done(function(data) {
                            var res = data && data.data;

                            var marNumber = getMargin(res.luckyNumber);

                            $('#magnet').css({
                                'background-position-y': '0'
                            }).animate({
                                marginLeft: marNumber
                            }, 500);

                            // win
                            if(res.isWin === false) {
                                if (sound)
                                    new Audio('/audio/balls-lose.mp3').play();

                                setTimeout(function () {
                                    $('#magnet').css({
                                        'background-position-y': '30.5px'
                                    });
                                }, 500);

                                var result = parseFloat($('#balance').val()) - parseFloat(res.bet); // set +/- coin
                                $('#balance').val(result);
                            } else { // lose
                                if(sound)
                                    new Audio('/audio/balls-win.mp3').play();

                                setTimeout(function () {
                                    $('#magnet').css({
                                        'background-position-y': '30.5px'
                                    });
                                }, 500);

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

            $('.ball').hover(function () {
                $(this).animate({
                    'background-position-y': '120px'
                }, 200);
            }, function () {
                $(this).animate({
                    'background-position-y': '145px'
                });
            });
        })
    </script>
    <script src="{{ url('js/balls-1.5.7.js') }}"></script>

@endsection