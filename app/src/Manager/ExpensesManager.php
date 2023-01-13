<?php

namespace App\Manager;

use App\Entity\Expenses;
use App\Entity\ExpenseByUser;
use App\Entity\Roommates;
use PDO;

class ExpensesManager extends BaseManager
{
    /**
     * @return array
     */

    public function getAllExpenses(): array
    {
        $query = $this->pdo->query("select * from Expenses");

        $expenses = [];

        while ($data = $query->fetch(PDO::FETCH_ASSOC)) {
            $expenses[] = new Expenses($data);
        }

        return $expenses;
    }

    public function addExpense(Expenses $expenses, ExpenseByUser $expenseByUser, Roommates $roommateId): ?Expenses
    {
        $select = $this->pdo->prepare("SELECT roommateId FROM Roommates WHERE roommateName = :roommateName");
        $select->bindValue("roommateName", $roommateId->getRoommateName());
        $select->execute();
        $roommateId = $select->fetch(PDO::FETCH_ASSOC);

        $select = $this->pdo->prepare("SELECT expenseId FROM Expenses WHERE expenseName = :expenseName");
        $select->bindValue("expenseName", $expenses->getExpenseName());
        $select->execute();
        $expenseId = $select->fetch(PDO::FETCH_ASSOC);

        $insert = $this->pdo->prepare("INSERT INTO Expenses (expenseName, expenseSum, roommateId) VALUES(:expenseName, :expenseSum, :roommateId)");
        $insert->bindValue("expenseName", $expenses->getExpenseName());
        $insert->bindValue("expenseSum", $expenses->getExpenseSum());
        $insert->bindValue("roommateId", $roommateId);
        $insert->execute();

        $insert = $this->pdo->prepare("INSERT INTO ExpenseByUser (expenseId, userId, payed) VALUES(:expenseId, :userId, :payed)");
        $insert->bindValue("expenseId", $expenseId);
        $insert->bindValue("userId", $expenseByUser->getUserId());
        $insert->bindValue("payed", $expenseByUser->getPayed());

        return $expenses;
    }

    public function addUserToExpense(ExpenseByUser $expenseByUser, Expenses $expenseId): ?ExpenseByUser
    {
        $select = $this->pdo->prepare("SELECT expenseId FROM Expenses WHERE expenseName = :expenseName");
        $select->bindValue("expenseName", $expenseId->getExpenseName());
        $select->execute();
        $expenseId = $select->fetch(PDO::FETCH_ASSOC);

        $insert = $this->pdo->prepare("INSERT INTO ExpenseByUser (expenseId, userId, payed) VALUES(:expenseId, :userId, :payed)");
        $insert->bindValue("expenseId", $expenseId);
        $insert->bindValue("userId", $expenseByUser->getUserId());
        $insert->bindValue("payed", $expenseByUser->getPayed());
        $insert->execute();

        return $expenseByUser;
    }

    public function deleteExpense(Expenses $expenseId): void
    {
        $delete = $this->pdo->prepare("DELETE FROM Expenses WHERE expenseId = :expenseId");
        $delete->bindValue("expenseId", $expenseId->getExpenseId());
        $delete->execute();
    }
}