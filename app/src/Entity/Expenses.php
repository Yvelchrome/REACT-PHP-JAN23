<?php

namespace App\Entity;

class Expenses extends BaseEntity
{
    private int $expenseId;
    private int $roommateId;
    private string $expenseName;
    private int $expenseSum;
    private int $alreadyPayed;
    private string $expenseDate;

    /**
     * @return int
     */
    public function getExpenseId(): int
    {
        return $this->expenseId;
    }

    /**
     * @param int $expenseId
     * @return Expenses
     */
    public function setExpenseId(int $expenseId): Expenses
    {
        $this->expenseId = $expenseId;
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

    /**
     * @return string
     */
    public function getExpenseDate(): string
    {
        return $this->expenseDate;
    }

    /**
     * @param string $expenseDate
     * @return Expenses
     */
    public function setExpenseDate(string $expenseDate): Expenses
    {
        $this->expenseDate = $expenseDate;
        return $this;
    }
}