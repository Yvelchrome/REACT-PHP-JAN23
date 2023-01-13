<?php

namespace App\Manager;

use App\Entity\Roommates;
use PDO;

class RoommatesManager extends BaseManager
{
    /**
     * @return array
     */

    public function getAllRoommates(): array
    {
        $query = $this->pdo->query("select * from Roommates");

        $roommates = [];

        while ($data = $query->fetch(PDO::FETCH_ASSOC)) {
            $roommates[] = new Roommates($data);
        }

        return $roommates;
    }

    public function addRoommate(Roommates $roommate): ?Roommates
    {
        $insert = $this->pdo->prepare("INSERT INTO Roommates (userId, roommateName) VALUES(:userId, :roommateName)");
        $insert->bindValue("userId", $roommate->getUserId());
        $insert->bindValue("roommateName", $roommate->getRoommateName());
        $insert->execute();

        return $roommate;
    }

    public function deleteRoommate(Roommates $roommateId): void
    {
        $delete = $this->pdo->prepare("DELETE FROM Roommates WHERE roommateId = :roommateId");
        $delete->bindValue("roommateId", $roommateId->getRoommateid());
        $delete->execute();
    }

    public function addUserToRoommate(Roommates $roommate): void
    {
        $select = $this->pdo->prepare("SELECT roommateId, roommateName FROM Roommates WHERE roommateName = :roommateName");
        $select->bindValue("roommateName", $roommate->getRoommateName());
        $select->execute();
        $roommateData = $select->fetch(PDO::FETCH_ASSOC);

        $insert = $this->pdo->prepare("INSERT INTO Roommates (roommateId,roommateName, userId) VALUES(:roommateId, :roommatename, :userId)");
        $insert->bindValue("userId", $roommate->getUserId());
        $insert->bindValue("roommateId", $roommateData);
        $insert->bindValue("roommateName", $roommateData);
        $insert->execute();
    }
}