<?php

namespace App\Controller;

use App\Entity\User;
use App\Framework\Entity\BaseController;
use App\Framework\Factory\PDOFactory;
use App\Framework\Route\Route;
use App\Manager\UserManager;

class SecurityController extends BaseController
{
    /*#[Route("/login", name: "app_login", methods: ["POST"])]
    public function login()
    {
        $name = $_SERVER['PHP_AUTH_USER'];
        $plainPassword = $_SERVER['PHP_AUTH_PW'];

        $user = (new User())->setUserName($name);
        $jwt = JWTHelper::buildJWT($user);

        $this->renderJSON([
            "token" => $jwt
        ]);
    }*/

    #[Route("/register", name: "app_register", methods: ["POST"])]
    public function register()
    {
        $apiInput = json_decode(file_get_contents('php://input'), true);

        $name = $apiInput['name'];
        $surname = $apiInput['surname'];
        $mail = $apiInput['mail'];
        $password = $apiInput['password'];

        $user = (new User())->setUserName($name)->setUserSurname($surname)->setUserMail($mail)->setPassword($password);

        $manager = new UserManager(new PDOFactory());
        $manager->addUser($user);
    }

    #[Route("/login", name: "app_login", methods: ["POST"])]
    public function login()
    {
        $apiInput = json_decode(file_get_contents('php://input'), true);

        $mail = $apiInput['mail'];
        $password = $apiInput['password'];

        $user = (new User())->setUserMail($mail)->setPassword($password);

        $manager = new UserManager(new PDOFactory());
        $check = $manager->checkUser($user);
    }
}