package database

import (
	cfg "backend/config"
	"backend/models"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectDB() (*gorm.DB, error) {

	dbURL := "host=" + cfg.DbConfig.Host + " port=" + cfg.DbConfig.Port + " user=" + cfg.DbConfig.User + " password=" + cfg.DbConfig.Password + " dbname=" + cfg.DbConfig.Database
	fmt.Println(dbURL + " \n\n\n")
	db, err := gorm.Open(postgres.Open(dbURL), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	return db, nil
}

func CreateDB() error {
	db, err := ConnectDB()
	if err != nil {
		return err
	}
	err2 := db.AutoMigrate(&models.Product{})
	if err2 != nil {
		return err2
	}
	return err
}
