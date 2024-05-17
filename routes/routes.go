package routes

import (
	"github.com/Abdulkader-Safi/Go-Auth-jwt-Fiber/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("/", controllers.Hello)
}
