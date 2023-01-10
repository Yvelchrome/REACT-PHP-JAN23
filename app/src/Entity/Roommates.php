<?php

namespace App\Entity;

class Roommates extends BaseEntity
{
    private int $userId;
    private int $roommateId;

    /**
     * @return int
     */
    public function getUserId(): int
    {
        return $this->userId;
    }

    /**
     * @param int $userId
     * @return Roommates
     */
    public function setUserId(int $userId): Roommates
    {
        $this->userId = $userId;
        return $this;
    }

    /**
     * @return int
     */
    public function getRoommateId(): int
    {
        return $this->roommateId;
    }

    /**
     * @param int $roommateId
     * @return Roommates
     */
    public function setRoommateId(int $roommateId): Roommates
    {
        $this->roommateId = $roommateId;
        return $this;
    }

}