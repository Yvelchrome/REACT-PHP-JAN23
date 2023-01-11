<?php

namespace App\Interfaces;

use PDO;

interface Database
{
    public function getMySqlPDO(): PDO;
}
