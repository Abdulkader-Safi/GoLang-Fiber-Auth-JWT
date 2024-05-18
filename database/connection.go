package database

import (
	"github.com/Abdulkader-Safi/Go-Auth-jwt-Fiber/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open("abdulkader:Safi@2020@/goauth"), &gorm.Config{})
	if err != nil {
		panic("Could not connect to database")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
