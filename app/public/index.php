<?php

use App\Framework\Route\Router;

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Headers: authorization, content-type');
header("Content-Type: application/json");

session_start();
require_once dirname(__DIR__) . "/vendor/autoload.php";

try {
    (new Router())
        ->getRoutesFromAttributes(dirname(__FILE__, 2) . "/src/Controller")
        ->run();
} catch (ReflectionException $e) {
}
