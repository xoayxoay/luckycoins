<?php

namespace App\Http\Requests\Api;

use Illuminate\Http\Response;

/**
 * Class ApiResponse
 * @package App\Http\Requests\Api
 */
class ApiResponse extends Response
{
    /**
     * ApiResponse constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Return result to json
     *
     * @param mixed $res
     * @param array $message
     * @return mixed
     */
    public static function json($res = [], $message = [])
    {
        if (empty($res)) {
            return ApiResponse::notFound();
        }
        return ApiResponse::success($res, $message);
    }

    /**
     * Return success reponse
     *
     * @param array $data
     * @param array $message
     * @param int $error
     * @return mixed
     */
    public static function success($data = [], $message = [], $error = 0)
    {
        return response()->json([
            'status'    => config('status.success'),
            'data'      => empty($data) ? ['project' => 'realtime-web'] : $data,
            'message'   => empty($message) ? config('message.success') : $message,
            'error'     => empty($error) ? config('error.success') : $error
        ], config('status.success'));
    }

    /**
     * Return create successfuly response
     *
     * @param array $data
     * @return mixed
     */
    public static function createSuccess($data = [], $message = [])
    {
        return response()->json([
            'status'    => config('status.created'),
            'data'      => empty($data) ? ['project' => 'realtime-web'] : $data,
            'message'   => empty($message) ? config('message.create_success') : $message,
            'error'     => config('error.create_success')
        ], config('status.success'));
    }

    /**
     * Return bad request response
     *
     * @param int $status
     * @param array $data
     * @param string $message
     * @param int $error
     * @return mixed
     */
    public static function error($status, $data = [], $message, $error)
    {
        return response()->json([
            'status'    => $status ? $status : config('status.bad_request'),
            'data'      => empty($data) ? ['project' => 'realtime-web'] : $data,
            'message'   => $message ? $message : config('message.bad_request'),
            'error'     => $error ? $error : config('error.bad_request')
        ], config('status.success'));
    }

    /**
     * Return bad reqeuest response
     *
     * @param int $status
     * @param array $data
     * @param string $message
     * @param int $error
     * @return mixed
     */
    public static function badRequest($data = [], $message = '', $status = 400, $error = 0)
    {
        return response()->json([
            'status'    => $status ? $status : config('status.bad_request'),
            'data'      => empty($data) ? ['project' => 'realtime-web'] : $data,
            'message'   => $message ? $message : config('message.bad_request'),
            'error'     => $error ? $error : config('error.bad_request')
        ], config('status.success'));
    }

    /**
     * Return forbidden response
     *
     * @return mixed
     */
    public static function forbidden()
    {
        return response()->json([
            'status'    => config('status.forbidden'),
            'data'      => ['project' => 'realtime-web'],
            'message'   => config('message.forbidden'),
            'error'     => config('error.forbidden')
        ], config('status.success'));
    }

    /**
     * Return invalid request
     *
     * @param string $message
     * @return mixed
     */
    public static function invalidParams($message = '')
    {
        return response()->json([
            'status'    => config('status.bad_request'),
            'data'      => ['project' => 'realtime-web'],
            'message'   => $message ?: config('message.bad_request'),
            'error'     => config('error.bad_request')
        ], config('status.success'));
    }

    /**
     * Return not found request
     *
     * @param string $message
     * @return mixed
     */
    public static function notFound($message = null)
    {
        return response()->json([
            'status'    => config('status.not_found'),
            'data'      => ['project' => 'realtime-web'],
            'message'   => $message ?: config('message.not_found'),
            'error'     => config('error.not_found')
        ], config('status.success'));
    }

    /**
     * Return not method allowed
     *
     * @param string $message
     * @return mixed
     */
    public static function methodNotAllowed($message = null)
    {
        return response()->json([
            'status'    => config('status.bad_request'),
            'data'      => ['project' => 'realtime-web'],
            'message'   => $message ?: config('message.method_not_allow'),
            'error'     => config('error.bad_request')
        ], config('status.success'));
    }
}
