<?php

namespace App\Manager;

use App\Entity\User;
use PDO;

class UserManager extends BaseManager
{
    /**
     * @return array
     */

    public function getAllUsers(): array
    {
        $query = $this->pdo->query("SELECT * FROM User");

        $users = [];

        while ($data = $query->fetch(PDO::FETCH_ASSOC)) {
            $users[] = new User($data);
        }

        return $users;
    }

    public function addUser(User $user): ?User
    {
        $insert = $this->pdo->prepare("INSERT INTO User (userName, userSurname, userMail, password) VALUES(:userName, :userSurname, :userMail, :password)");
        $insert->bindValue("userName", $user->getUserName());
        $insert->bindValue("userSurname", $user->getUserSurname());
        $insert->bindValue("userMail", $user->getUserMail());
        $insert->bindValue("password", $user->getPassword());
        $insert->execute();

        return $user;
    }

    public function checkUser(User $user): ?User
    {
        $checking = $this->pdo->prepare("SELECT * FROM User WHERE userName = :userName and password = :password");

        $checking->bindValue("userName", $user->getUserName());
        $checking->bindValue("password", $user->getPassword());
        $checking->execute();
        $userFetch = $checking->fetch(PDO::FETCH_ASSOC);
        $_SESSION["User"] = $userFetch;

        if ($userFetch) {
            return $user;
        }
        return null;
    }
}