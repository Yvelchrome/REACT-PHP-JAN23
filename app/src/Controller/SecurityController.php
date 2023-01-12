<?php

namespace App\Controller;

use App\Entity\User;
use App\Framework\Entity\BaseController;
use App\Framework\Factory\PDOFactory;
use App\Framework\Route\Route;
use App\Manager\UserManager;
use JetBrains\PhpStorm\NoReturn;

class SecurityController extends BaseController
{
    /*#[NoReturn] #[Route("/login", name: "app_login", methods: ["POST"])]
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

    #[NoReturn] #[Route("/register", name: "app_register", methods: ["POST"])]
    public function register()
    {
        $apiInput = json_decode(file_get_contents('php://input'), true);

        $name = $apiInput['name'];
        $surname = $apiInput['surname'];
        $email = $apiInput['mail'];
        $plainPassword = $apiInput['password'];

        $user = (new User())->setUserName($name)->setUserSurname($surname)->setUserMail($email)->setPassword($plainPassword);

        $manager = new UserManager(new PDOFactory());
        $manager->addUser($user);
    }

    #[NoReturn] #[Route("/login", name: "app_login", methods: ["POST"])]
    public function login()
    {
        $apiInput = json_decode(file_get_contents('php://input'), true);

        $email = $apiInput['mail'];
        $plainPassword = $apiInput['password'];
        $user = (new User())->setUserMail($email)->setPassword($plainPassword);

        $manager = new UserManager(new PDOFactory());
        $check = $manager->checkUser($user);

        if (!$check) {
            $this->render("login.php", ['error' => 'Le mail ou le mot de passe est incorrect'], "invalid mail or pw");
        }
        header('Location: /');
    }
}