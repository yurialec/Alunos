<?php

namespace App\Http\Controllers;

use App\Models\Aluno as Aluno;
use App\Http\Resources\Aluno as AlunoResource;
use Illuminate\Http\Request;

class AlunoController extends Controller
{
    public function index()
    {
        $alunos = Aluno::paginate(15);
        return AlunoResource::collection($alunos);
    }

    public function show($id)
    {
        return $aluno = Aluno::find($id);
    }

    public function store(Request $request)
    {
        $aluno = new Aluno;
        $aluno->name = $request->input('name');
        $aluno->email = $request->input('email');
        $aluno->active = $request->input('active');
        $aluno->course = $request->input('course');

        if ($aluno->save()) {
            return new AlunoResource($aluno);
        }
    }

    public function update(Request $request)
    {
        $aluno = Aluno::findOrFail($request->id);
        $aluno->name = $request->input('name');
        $aluno->email = $request->input('email');
        $aluno->active = $request->input('active');
        $aluno->course = $request->input('course');

        if ($aluno->save()) {
            return new AlunoResource($aluno);
        }
    }

    public function destroy($id)
    {
        $aluno = Aluno::findOrFail($id);
        if ($aluno->delete()) {
            return new AlunoResource($aluno);
        }
    }
}
