package database

import (
	"os"

	"github.com/Abdulkader-Safi/Go-Auth-jwt-Fiber/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	dbURL := os.Getenv("DB_URL")
	connection, err := gorm.Open(postgres.Open(dbURL), &gorm.Config{})
	if err != nil {
		panic("Could not connect to database")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
