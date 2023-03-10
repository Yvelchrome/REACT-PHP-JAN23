<?php

namespace App\Framework\Factory;

use App\Framework\Interfaces\Database;
use PDO;

class PDOFactory implements Database
{
    private string $driver;
    private string $host;
    private string $dbName;
    private string $userName;
    private string $password;

    public function __construct(string $driver = "mysql", string $host = "db", string $dbName = "data", string $userName = "root", string $password = "password")
    {
        $this->driver = $driver;
        $this->host = $host;
        $this->dbName = $dbName;
        $this->userName = $userName;
        $this->password = $password;
    }

    public function getMySqlPDO(): PDO
    {
        return new PDO($this->driver . ":host=" . $this->host . ";dbname=" . $this->dbName, $this->userName, $this->password);
    }
}
