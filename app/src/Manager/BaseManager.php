<?php

namespace App\Manager;

use App\Framework\Interfaces\Database;
use PDO;

abstract class BaseManager
{
    protected PDO $pdo;

    public function __construct(Database $database)
    {
        $this->pdo = $database->getMySqlPDO();
    }
}
