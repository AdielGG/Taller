package main

import (
	conf "backend/config"
	"backend/database"
	"backend/handler"
	"embed"
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

//go:embed resource
var resource embed.FS

func main() {

	router := gin.New()
	router.Use(gin.Recovery())
	router.Use(cors.Default())

	//Serve img files
	router.StaticFS("/resource", http.FS(resource))
	router.GET("/img/:filename", func(c *gin.Context) {
		file, _ := resource.ReadFile("resource/img/" + c.Param("filename"))
		c.Data(http.StatusOK, "image/jpg", file)
	})

	router.GET("/products", handler.GetAllProducts)
	router.POST("/products", handler.CreateProduct)

	conf.InitDatabaseConfig()
	// conf.InitDatabaseConfig(string(namedb), string(password))
	database.CreateDB()

	//Iniciar Servidor
	router.Run(conf.ServerHost + ":" + conf.ServerPort)
	fmt.Scanln()
}
