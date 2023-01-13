<?php

namespace App\Controller;

use App\Framework\Factory\PDOFactory;
use App\Framework\Route\Route;
use App\Framework\Entity\BaseController;

use App\Entity\Expenses;
use App\Entity\ExpenseByUser;
use App\Entity\Roommates;

use App\Manager\ExpensesManager;
use App\Manager\UserManager;


class HomeController extends BaseController
{
    #[Route('/', name: "home", methods: ["GET"])]
    public function home()
    {
        if (isset($_SESSION["User"])) {
            $expenses = new ExpensesManager(new PDOFactory());
            $user = new UserManager(new PDOFactory());
            $data = [
                "expenses" => $expenses->getAllExpenses(),
                "users" => $user->getAllUsers()
            ];
        } else {
            header("Location: /login");
        }
    }

    #[Route("/expense/add", name: "addExpense", methods: ["POST"])]
    public function addExpense()
    {
        $apiInput = json_decode(file_get_contents('php://input'), true);

        $expenseName = $apiInput['expenseName'];
        $sum = $apiInput['sum'];

        $payed = $apiInput['payed'];

        $roommateName = $apiInput['roommateName'];

        $id = $_SESSION["User"]["id"];

        $roommateId = (new Roommates())->setRoommateName($roommateName);
        $expenses = (new Expenses())->setExpenseName($expenseName)->setExpenseSum($sum);
        $expenseByUser = (new ExpenseByUser())->setUserId($id)->setPayed($payed);

        $manager = new ExpensesManager(new PDOFactory());
        $manager->addExpense($expenses, $expenseByUser, $roommateId);
    }

    #[Route("/expense/addUser", name: "addUserToExpense", methods: ["POST"])]
    public function addUserToExpense()
    {
        $apiInput = json_decode(file_get_contents('php://input'), true);

        $expenseName = $apiInput['expenseName'];
        $userId = $apiInput['userId'];
        $payed = $apiInput['payed'];

        $expenseId = (new Expenses())->setExpenseName($expenseName);
        $expenseByUser = (new ExpenseByUser())->setUserId($userId)->setPayed($payed);

        $manager = new ExpensesManager(new PDOFactory());
        $manager->addUserToExpense($expenseByUser, $expenseId);
    }

    #[Route("/expense/delete", name: "deleteExpense", methods: ["POST"])]
    public function deleteExpense()
    {
        $apiInput = json_decode(file_get_contents('php://input'), true);

        $id = $apiInput['id'];

        $expenses = (new Expenses())->setExpenseId($id);

        $manager = new ExpensesManager(new PDOFactory());
        $manager->deleteExpense($expenses);
    }
}