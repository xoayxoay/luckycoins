<?php namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use LRedis;
use App\User;
use App\Http\Requests\Api\ApiResponse; // modify
use Illuminate\Http\Request;

class GameController extends Controller {
    public function __construct()
    {
        $this->middleware('guest');
    }

    // get page game dice
    public function getDire()
    {
        return view('dire');
    }

    // post data when play dace match 
    public function postDire(Request $request) {
        // data from client, through by ajax
        $data = $request->all();
        // connect to redis 
        $redis = LRedis::connection(); 

        // handle data from server, store data need
        $prediction = $data['prediction'];
        $isWin = false; // false: lose, true: win
        $type = 1; // 1: roll under, 2: roll over

        // calculate value coin that user received when win
        $payout = number_format($data['profitOnWin'] * $data['multiplier'], 8);

        // example random a lucky number
        $luckyNumber = mt_rand(0,100);
        while (1) {
            if ($luckyNumber === $prediction)
                $luckyNumber = mt_rand(0,100);
            break;
        }

        // hande win or lose
        if ($data['direction'] === 'under') {
            if ($prediction > $luckyNumber) {
                $isWin = true;
                $redis->publish('onWinBet', $payout); // notify amount coin that win bet
            } else {
                $isWin = false;
                $payout = '0.00000000';
            }
            $type = 1;
        } else if($data['direction'] === 'over') {
            if ($prediction < $luckyNumber) {
                $isWin = true;
                $redis->publish('onWinBet', $payout); // notify amount coin that win bet
            } else {
                $isWin = false;
                $payout = '0.00000000';
            }
            $type = 2;
        };

        // code your here, your handle, store db...

        date_default_timezone_set('Asia/Ho_Chi_Minh'); // set timezone

        // data will response to client then server handle data
        $arr = [
            'id' => '1323123123', // User's id
            'name' => 'user01', // Username
            'char' => $data['coin'],
            'bet' => $data['betAmount'],
            'betRate' => $data['winChance'],
            'payout' => $payout,
            'payoutRate' => $data['multiplier'],
            'luckyNumber' => $luckyNumber,
            'type' => $type, // 1: roll under, 2: roll over
            'isWin' => $isWin,
            'createdAt' => date("Y-m-d H:i:s"),
            'coinImage' => '/imgs/coinicons/btc.png', // Coin's image
            'coinName' => $data['coin'],
            'prediction' => $prediction
        ];

        // fire socket
        $redis->publish('onDire', json_encode($arr)); // return data
        $redis->publish('onBet', 'bet'); // notify had new bet
        return ApiResponse::success($arr);
    }

    // get page game ball
    public function getBall()
    {
        return view('ball');
    }

    // post data when play dace match 
    public function postBall(Request $request) {
        // data from client, through by ajax
        $data = $request->all();
        // connect to redis 
        $redis = LRedis::connection();

        // calculate value coin that user received when win
        $payout = '0.00000000';

        // example random a lucky numbe
        $luckyNumber = mt_rand(0,10);

        // handle data win/lose
        $balls = $data['balls'];
        $isWin = false;
        for ($i = 0; $i < count($balls); $i++) {
            $numBall = intval($balls[$i]);
            if ($numBall === $luckyNumber) {
                $isWin = true;
                $payout = number_format($data['profitOnWin'] * $data['multiplier'], 8);
                $redis->publish('onWinBet', $payout); // notify amount coin that win bet
            }
        }

        // code your here, your handle, store db...

        date_default_timezone_set('Asia/Ho_Chi_Minh'); // set timezone

        // data will response to client then server handle data
        $arr = [
            'id' => '1323123123', // User's Id
            'name' => 'user01', // Username
            'char' => $data['coin'],
            'bet' => $data['betAmount'],
            'betRate' => $data['winChance'],
            'payout' => $payout,
            'payoutRate' => $data['multiplier'],
            'isWin' => $isWin,
            'createdAt' => date("Y-m-d H:i:s"),
            'coinImage' => '/imgs/coinicons/btc.png', // Coin's image
            'coinName' => $data['coin'],
            'luckyNumber' => $luckyNumber,
            'balls' => $balls
        ];

        // fire socket
        $redis->publish('onBall', json_encode($arr)); // return data
        $redis->publish('onBet', 'bet'); // notify had new bet
        return ApiResponse::success($arr);
    }

}
