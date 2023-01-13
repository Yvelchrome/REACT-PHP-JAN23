<?php

namespace App\Controller;

use App\Framework\Factory\PDOFactory;
use App\Framework\Route\Route;
use App\Framework\Entity\BaseController;

use App\Entity\Roommates;

use App\Manager\RoommatesManager;

class RoommateController extends BaseController
{
    #[Route('/roommate/add', name: "addRoommate", methods: ["POST"])]
    public function addRoommate()
    {
        $apiInput = json_decode(file_get_contents('php://input'), true);

        $name = $apiInput['name'];
        $id = $_SESSION["User"]["id"];

        $roommate = (new Roommates())->setUserId($id)->setRoommateName($name);

        $manager = new RoommatesManager(new PDOFactory());
        $manager->addRoommate($roommate);
    }

    #[Route('/roommate/delete', name: "deleteRoommate", methods: ["POST"])]
    public function deleteRoommate()
    {
        $apiInput = json_decode(file_get_contents('php://input'), true);

        $id = $apiInput['id'];

        $roommate = (new Roommates())->setRoommateId($id);

        $manager = new RoommatesManager(new PDOFactory());
        $manager->deleteRoommate($roommate);
    }

    #[Route('/roommate/addUser', name: "addUserToRoommate", methods: ["POST"])]
    public function addUserToRoommate()
    {
        $apiInput = json_decode(file_get_contents('php://input'), true);

        $name = $apiInput['name'];
        $id = $_SESSION["User"]["id"];

        $roommate = (new Roommates())->setUserId($id)->setRoommateName($name);

        $manager = new RoommatesManager(new PDOFactory());
        $manager->addUserToRoommate($roommate);
    }
}