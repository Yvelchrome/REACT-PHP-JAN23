<?php

namespace App\Entity;

class User extends BaseEntity
{
    private int $userId;
    private string $userName;
    private string $userSurname;
    private string $userMail;
    private string $password;
    private int $admin;

    /**
     * @return int
     */
    public function getUserId(): int
    {
        return $this->userId;
    }

    /**
     * @param int $userId
     * @return User
     */
    public function setUserId(int $userId): User
    {
        $this->userId = $userId;
        return $this;
    }

    /**
     * @return string
     */
    public function getUserName(): string
    {
        return $this->userName;
    }

    /**
     * @param string $userName
     * @return User
     */
    public function setUserName(string $userName): User
    {
        $this->userName = $userName;
        return $this;
    }

    /**
     * @return string
     */
    public function getUserSurname(): string
    {
        return $this->userSurname;
    }

    /**
     * @param string $userSurname
     * @return User
     */
    public function setUserSurname(string $userSurname): User
    {
        $this->userSurname = $userSurname;
        return $this;
    }

    /**
     * @return string
     */
    public function getUserMail(): string
    {
        return $this->userMail;
    }

    /**
     * @param string $userMail
     * @return User
     */
    public function setUserMail(string $userMail): User
    {
        $this->userMail = $userMail;
        return $this;
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @param string $password
     * @return User
     */
    public function setPassword(string $password): User
    {
        $this->password = $password;
        return $this;
    }

    /**
     * @return int
     */
    public function getAdmin(): int
    {
        return $this->admin;
    }

    /**
     * @param int $admin
     * @return User
     */
    public function setAdmin(int $admin): User
    {
        $this->admin = $admin;
        return $this;
    }
}

