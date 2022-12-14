<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AlunoController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('listar_alunos', [AlunoController::class, 'index']);
Route::get('dados_aluno/{id}', [AlunoController::class, 'show']);
Route::post('cadastrar_aluno', [AlunoController::class, 'store']);
Route::put('editar_aluno/{id}', [AlunoController::class, 'update']);
Route::delete('apagar_aluno/{id}', [AlunoController::class,'destroy']);