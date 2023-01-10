<?php

namespace App\Entity;

class Expenses extends BaseEntity
{
    private int $userId;
    private int $roommateId;
    private string $expenseName;
    private int $expenseSum;
    private int $alreadyPayed ;

    /**
     * @return int
     */
    public function getUserId(): int
    {
        return $this->userId;
    }

    /**
     * @param int $userId
     * @return Expenses
     */
    public function setUserId(int $userId): Expenses
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
     * @return Expenses
     */
    public function setRoommateId(int $roommateId): Expenses
    {
        $this->roommateId = $roommateId;
        return $this;
    }

    /**
     * @return string
     */
    public function getExpenseName(): string
    {
        return $this->expenseName;
    }

    /**
     * @param string $expenseName
     * @return Expenses
     */
    public function setExpenseName(string $expenseName): Expenses
    {
        $this->expenseName = $expenseName;
        return $this;
    }

    /**
     * @return int
     */
    public function getExpenseSum(): int
    {
        return $this->expenseSum;
    }

    /**
     * @param int $expenseSum
     * @return Expenses
     */
    public function setExpenseSum(int $expenseSum): Expenses
    {
        $this->expenseSum = $expenseSum;
        return $this;
    }

    /**
     * @return int
     */
    public function getAlreadyPayed(): int
    {
        return $this->alreadyPayed;
    }

    /**
     * @param int $alreadyPayed
     * @return Expenses
     */
    public function setAlreadyPayed(int $alreadyPayed): Expenses
    {
        $this->alreadyPayed = $alreadyPayed;
        return $this;
    }
}