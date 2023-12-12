// swagger.js

const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "title": "Your API",
        "version": "1.0.0"
    },
    "paths": {
        "/api/PostIntraUser": {
            "post": {
                "summary": "Create intra user",
                "parameters": [
                    {
                        "in": "body",
                        "name": "user",
                        "description": "User details",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "role_id": { "type": "integer" },
                                "name": { "type": "string" },
                                "login": { "type": "string" },
                                "password": { "type": "string" },
                                "city": { "type": "string" },
                                "phone": { "type": "string" },
                                "email": { "type": "string" },
                                "photo": { "type": "string" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное создание пользователя"
                    }
                }
            }
        },
        "/api/GetIntraUser/{id}": {
            "get": {
                "summary": "Get intra user by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "User ID to get",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное получение пользователя"
                    }
                }
            }
        },
        "/api/GetAllIntraUser": {
            "get": {
                "summary": "Get all intra users",
                "responses": {
                    "200": {
                        "description": "Успешное получение всех пользователей"
                    }
                }
            }
        },
        "/api/PutIntraUser/{id}": {
            "put": {
                "summary": "Update intra user by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "body",
                        "description": "User ID to update",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" },
                                "role_id": { "type": "integer" },
                                "name": { "type": "string" },
                                "login": { "type": "string" },
                                "password": { "type": "string" },
                                "city": { "type": "string" },
                                "phone": { "type": "string" },
                                "email": { "type": "string" },
                                "photo": { "type": "string" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное обновление пользователя"
                    }
                }
            }
        },
        "/api/DeleteIntraUser/{id}": {
            "delete": {
                "summary": "Delete intra user by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "User ID to delete",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное удаление пользователя"
                    }
                }
            }
        },
        "/api/PostRole": {
            "post": {
                "summary": "Create role",
                "parameters": [
                    {
                        "in": "body",
                        "name": "role",
                        "description": "Role name",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "role_name": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    '200': {
                        "description": "Успешное создание роли"
                    }
                }
            }
        },
        "/api/GetRole/{id}": {
            "get": {
                "summary": "Get role by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",//?
                        "description": "User to get",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }


                ],
                "responses": {
                    '200': {
                        "description": "Успешное получение роли"
                    }
                }
            }
        },
        "/api/GetAllRole": {
            "get": {
                "summary": "Get all roles",
                "responses": {
                    '200': {
                        "description": "Успешное получение всех ролей"
                    }
                }
            }
        },
        "/api/PutRole/{id}": {
            "put": {
                "summary": "Update role by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "body",
                        "description": "User to update",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" },
                                "role_name": { "type": "string" }
                            }
                        }
                    }
                ],
                "responses": {
                    '200': {
                        "description": "Успешное обновление роли"
                    }
                }
            }
        },
        "/api/DeleteRole/{id}": {
            "delete": {
                "summary": "Delete role by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "User to delete",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }

                ],
                "responses": {
                    '200': {
                        "description": "Успешное удаление роли"
                    }
                }
            }
        }, "/api/PostConsultant": {
            "post": {
                "summary": "Create consultant",
                "parameters": [
                    {
                        "in": "body",
                        "name": "consultant",
                        "description": "Consultant details",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": { "type": "string" },
                                "phone": { "type": "string" },
                                "email": { "type": "string" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное создание консультанта"
                    }
                }
            }
        },
        "/api/GetConsultant/{id}": {
            "get": {
                "summary": "Get consultant by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Consultant ID to get",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное получение консультанта"
                    }
                }
            }
        },
        "/api/GetAllConsultant": {
            "get": {
                "summary": "Get all consultants",
                "responses": {
                    "200": {
                        "description": "Успешное получение всех консультантов"
                    }
                }
            }
        },
        "/api/PutConsultant/{id}": {
            "put": {
                "summary": "Update consultant by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "body",
                        "description": "Consultant ID to update",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" },
                                "name": { "type": "string" },
                                "phone": { "type": "string" },
                                "email": { "type": "string" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное обновление консультанта"
                    }
                }
            }
        },
        "/api/DeleteConsultant/{id}": {
            "delete": {
                "summary": "Delete consultant by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Consultant ID to delete",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное удаление консультанта"
                    }
                }
            }
        },
        "/api/PostStyle": {
            "post": {
                "summary": "Create style",
                "parameters": [
                    {
                        "in": "body",
                        "name": "style",
                        "description": "Style name",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "style_name": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное создание стиля"
                    }
                }
            }
        },
        "/api/GetStyle/{id}": {
            "get": {
                "summary": "Get style by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Style ID to get",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное получение стиля"
                    }
                }
            }
        },
        "/api/GetAllStyle": {
            "get": {
                "summary": "Get all styles",
                "responses": {
                    "200": {
                        "description": "Успешное получение всех стилей"
                    }
                }
            }
        },
        "/api/PutStyle/{id}": {
            "put": {
                "summary": "Update style by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "body",
                        "description": "Style ID to update",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" },
                                "style_name": { "type": "string" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное обновление стиля"
                    }
                }
            }
        },
        "/api/DeleteStyle/{id}": {
            "delete": {
                "summary": "Delete style by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Style ID to delete",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное удаление стиля"
                    }
                }
            }
        },
        "/api/PostDesignPhoto": {
            "post": {
                "summary": "Create design photo",
                "parameters": [
                    {
                        "in": "body",
                        "name": "photo",
                        "description": "Photo details",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "photos": { "type": "string" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное добавление фото дизайна"
                    }
                }
            }
        },
        "/api/GetDesignPhoto/{id}": {
            "get": {
                "summary": "Get design photo by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Photo ID to get",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное получение фото дизайна"
                    },
                    "404": {
                        "description": "Фото дизайна не найдено"
                    }
                }
            }
        },
        "/api/GetAllDesignPhoto": {
            "get": {
                "summary": "Get all design photos",
                "responses": {
                    "200": {
                        "description": "Успешное получение всех фото дизайна"
                    },
                    "400": {
                        "description": "Фото дизайна не найдены"
                    }
                }
            }
        },
        "/api/PutDesignPhoto/{id}": {
            "put": {
                "summary": "Update design photo by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "body",
                        "description": "Photo ID to update",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" },
                                "photos": { "type": "string" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное обновление фото дизайна"
                    },
                    "404": {
                        "description": "Фото дизайна не найдено"
                    }
                }
            }
        },
        "/api/DeleteDesignPhoto/{id}": {
            "delete": {
                "summary": "Delete design photo by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Photo ID to delete",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное удаление фото дизайна"
                    },
                    "404": {
                        "description": "Фото дизайна не найдено"
                    }
                }
            }
        },
        "/api/PostRoomType": {
            "post": {
                "summary": "Create room type",
                "parameters": [
                    {
                        "in": "body",
                        "name": "roomType",
                        "description": "Room type details",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "room": { "type": "string" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное создание типа комнаты"
                    }
                }
            }
        },
        "/api/GetRoomType/{id}": {
            "get": {
                "summary": "Get room type by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Room type ID to get",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное получение типа комнаты"
                    },
                    "404": {
                        "description": "Тип комнаты не найден"
                    }
                }
            }
        },
        "/api/GetAllRoomType": {
            "get": {
                "summary": "Get all room types",
                "responses": {
                    "200": {
                        "description": "Успешное получение всех типов комнат"
                    },
                    "400": {
                        "description": "Типы комнат не найдены"
                    }
                }
            }
        },
        "/api/PutRoomType/{id}": {
            "put": {
                "summary": "Update room type by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "body",
                        "description": "Room type ID to update",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" },
                                "room": { "type": "string" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное обновление типа комнаты"
                    },
                    "404": {
                        "description": "Тип комнаты не найден"
                    }
                }
            }
        },
        "/api/DeleteRoomType/{id}": {
            "delete": {
                "summary": "Delete room type by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Room type ID to delete",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное удаление типа комнаты"
                    },
                    "404": {
                        "description": "Тип комнаты не найден"
                    }
                }
            }
        },
        "/api/PostDesign": {
            "post": {
                "summary": "Create design",
                "parameters": [
                    {
                        "in": "body",
                        "name": "design",
                        "description": "Design details",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": { "type": "string" },
                                "designer_id": { "type": "integer" },
                                "year": { "type": "string" },
                                "style_id": { "type": "integer" },
                                "price": { "type": "number" },
                                "photo_id": { "type": "integer" },
                                "consultant_id": { "type": "integer" },
                                "room_id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное создание дизайна"
                    },
                    "400": {
                        "description": "Дизайн не был создан"
                    }
                }
            }
        },
        "/api/GetDesign/{id}": {
            "get": {
                "summary": "Get design by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Design ID to get",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное получение дизайна"
                    },
                    "404": {
                        "description": "Дизайн не найден"
                    }
                }
            }
        },
        "/api/GetDesignByDesignerID/{id}": {
            "get": {
                "summary": "Get designs by designer ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Designer ID to get designs",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "designer_id": { "type": "integer" }//id
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное получение дизайнов данного дизайнера"
                    },
                    "404": {
                        "description": "Дизайны данного дизайнера не найдены"
                    }
                }
            }
        },
        "/api/GetDesignByStyle/{id}": {
            "get": {
                "summary": "Get designs by style ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Style ID to get designs",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "style_id": { "type": "integer" }//id
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное получение дизайнов данного стиля"
                    },
                    "404": {
                        "description": "Дизайны данного стиля не найдены"
                    }
                }
            }
        },
        "/api/GetDesignByRoom/{id}": {
            "get": {
                "summary": "Get designs by room ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Room ID to get designs",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "room_id": { "type": "integer" }//id
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное получение дизайнов для данной комнаты"
                    },
                    "404": {
                        "description": "Дизайны для данной комнаты не найдены"
                    }
                }
            }
        },
        "/api/GetAllDesign": {
            "get": {
                "summary": "Get all designs",
                "responses": {
                    "200": {
                        "description": "Успешное получение всех дизайнов"
                    },
                    "400": {
                        "description": "Дизайны не найдены"
                    }
                }
            }
        },
        "/api/PutDesign/{id}": {
            "put": {
                "summary": "Update design by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "body",
                        "description": "Design ID to update",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" },
                                "name": { "type": "string" },
                                "designer_id": { "type": "integer" },
                                "year": { "type": "string" },
                                "style_id": { "type": "integer" },
                                "price": { "type": "number" },
                                "photo_id": { "type": "integer" },
                                "consultant_id": { "type": "integer" },
                                "room_id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное обновление дизайна"
                    },
                    "404": {
                        "description": "Дизайн не найден"
                    }
                }
            }
        },
        "/api/DeleteDesign/{id}": {
            "delete": {
                "summary": "Delete design by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Design ID to delete",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Успешное удаление дизайна"
                    },
                    "404": {
                        "description": "Дизайн не найден"
                    }
                }
            }
        }, 
        "/api/PostOrders": {
            "post": {
              "summary": "Create order",
              "parameters": [
                {
                  "in": "body",
                  "name": "order",
                  "description": "Order details",
                  "required": true,
                  "schema": {
                    "type": "object",
                    "properties": {
                      "customer_name": { "type": "string" },
                      "customer_phone": { "type": "string" },
                      "customer_email": { "type": "string" },
                      "design_id": { "type": "integer" }
                    }
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Успешное создание заказа"
                }
              }
            }
          },
          "/api/GetOrders/{id}": {
            "get": {
              "summary": "Get order by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "description": "Order ID to get",
                  "required": true,
                  "schema": {
                    "type": "object",
                    "properties": {
                      "id": { "type": "integer" }
                    }
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Успешное получение заказа"
                }
              }
            }
          },
          "/api/GetOrdersByDesignID/{design_id}": {
            "get": {
              "summary": "Get orders by design ID",
              "parameters": [
                {
                  "name": "design_id",
                  "in": "path",
                  "description": "Design ID to get orders",
                  "required": true,
                  "schema": {
                    "type": "object",
                    "properties": {
                      "design_id": { "type": "integer" }
                    }
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Успешное получение заказов по ID дизайна"
                }
              }
            }
          },
          "/api/GetAllOrders": {
            "get": {
              "summary": "Get all orders",
              "responses": {
                "200": {
                  "description": "Успешное получение всех заказов"
                }
              }
            }
          },
          "/api/PutOrders/{id}": {
            "put": {
              "summary": "Update order by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "description": "Order ID to update",
                  "required": true,
                  "schema": {
                    "type": "object",
                    "properties": {
                      "id": { "type": "integer" },
                      "customer_name": { "type": "string" },
                      "customer_phone": { "type": "string" },
                      "customer_email": { "type": "string" },
                      "design_id": { "type": "integer" }
                    }
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Успешное обновление заказа"
                }
              }
            }
          },
          "/api/DeleteOrders/{id}": {
            "delete": {
              "summary": "Delete order by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "description": "Order ID to delete",
                  "required": true,
                  "schema": {
                    "type": "object",
                    "properties": {
                      "id": { "type": "integer" }
                    }
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Успешное удаление заказа"
                }
              }
            }
        }
    }
};

module.exports = swaggerDocument;