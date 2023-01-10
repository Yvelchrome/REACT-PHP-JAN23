<?php

namespace App\Controller;

use App\Entity\User;
use App\Framework\Entity\BaseController;
use App\Framework\Route\Route;
use App\Service\JWTHelper;

class SecurityController extends BaseController
{
    #[Route("/login", name: "app_login", methods: ["POST"])]
    public function login()
    {
        $name = $_SERVER['PHP_AUTH_USER'];
        $plainPassword = $_SERVER['PHP_AUTH_PW'];

        $user = (new User())->setUserName($name);
        $jwt = JWTHelper::buildJWT($user);

        $this->renderJSON([
            "token" => $jwt
        ]);
    }
}