package main

import (
	"github.com/Abdulkader-Safi/Go-Auth-jwt-Fiber/database"
	"github.com/Abdulkader-Safi/Go-Auth-jwt-Fiber/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",
		AllowCredentials: true,
	}))

	routes.Setup(app)

	app.Listen(":3030")
}
