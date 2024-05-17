package main

import (
	"github.com/Abdulkader-Safi/Go-Auth-jwt-Fiber/database"
	"github.com/Abdulkader-Safi/Go-Auth-jwt-Fiber/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()

	app := fiber.New()

	routes.Setup(app)

	app.Listen(":3030")
}
