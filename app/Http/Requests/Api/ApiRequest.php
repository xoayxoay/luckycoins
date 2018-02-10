<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use App\Http\Requests\Api\ApiResponse;

abstract class ApiRequest extends FormRequest
{
    /**
     * @var ApiResponse
     */
    protected $res;

    /**
     * Request constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Get the proper failed validation response for the request.
     *
     * @param  array  $errors
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function response(array $errors)
    {
        return ApiResponse::invalidParams($this->convertErrors($errors));
    }

    /**
     * Response forbidden request
     *
     * @return Response|JsonResponse
     */
    public function forbiddenResponse()
    {
        return ApiResponse::forbidden();
    }

    /**
     * Convert errors form array to string
     *
     * @param array $errors
     * @return string
     */
    private function convertErrors(array $errors)
    {
        $res = [];

        foreach ($errors as $cases) {
            foreach ($cases as $e) {
                $res[] = $e;
            }
        }

        return join(' Or ', $res);
    }
}
