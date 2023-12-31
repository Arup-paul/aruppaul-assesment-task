<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\WithdrawController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::group(['middleware' => ['api','auth:api']], function() {
        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::post('me', [AuthController::class, 'me']);

        //deposit
        Route::get('deposit', [DepositController::class, 'index']);
        Route::post('deposit', [DepositController::class, 'store']);

        //withdraw controller
        Route::get('withdraw', [WithdrawController::class, 'index']);
        Route::post('withdraw', [WithdrawController::class, 'store']);
    });
