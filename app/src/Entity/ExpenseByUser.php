<?php

namespace App\Entity;

class ExpenseByUser extends BaseEntity
{
    private int $userId;
    private int $ExpenseByUserId;
    private int $expenseId;
    private int $payed;

    /**
     * @return int
     */
    public function getUserId(): int
    {
        return $this->userId;
    }

    /**
     * @param int $userId
     * @return ExpenseByUser
     */
    public function setUserId(int $userId): ExpenseByUser
    {
        $this->userId = $userId;
        return $this;
    }

    /**
     * @return int
     */
    public function getExpenseByUserId(): int
    {
        return $this->ExpenseByUserId;
    }

    /**
     * @param int $ExpenseByUserId
     * @return ExpenseByUser
     */
    public function setExpenseByUserId(int $ExpenseByUserId): ExpenseByUser
    {
        $this->ExpenseByUserId = $ExpenseByUserId;
        return $this;
    }

    /**
     * @return int
     */
    public function getExpenseId(): int
    {
        return $this->expenseId;
    }

    /**
     * @param int $expenseId
     * @return ExpenseByUser
     */
    public function setExpenseId(int $expenseId): ExpenseByUser
    {
        $this->expenseId = $expenseId;
        return $this;
    }

    /**
     * @return int
     */
    public function getPayed(): int
    {
        return $this->payed;
    }

    /**
     * @param int $payed
     * @return ExpenseByUser
     */
    public function setPayed(int $payed): ExpenseByUser
    {
        $this->payed = $payed;
        return $this;
    }
}