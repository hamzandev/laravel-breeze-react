<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index( Request $req)
    {
        $data = [
            [
                "id"=> 1,
                "name" => 'Hamzan Wahyudi',
                "email" => 'hamzan@dev.com',
            ],
            [
                "id"=> 2,
                "name" => 'Fikro Najiah',
                "email" => 'fikro@gg.com',
            ],
            [
                "id"=> 3,
                "name" => 'Muhammad Helmi',
                "email" => 'mhd@helmi.com',
            ],
        ];
        return Inertia::render('Test', [
            "users" => $data,
            "data" => json_encode(($req))
        ]);
    }
    
}
