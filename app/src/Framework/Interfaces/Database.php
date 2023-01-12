<?php

namespace App\Framework\Interfaces;

use PDO;

interface Database
{
    public function getMySqlPDO(): PDO;
}
