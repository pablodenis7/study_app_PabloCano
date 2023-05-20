const themes_propertiesController = require('../../controller/themes_properties/themes_properties.controller');
const authMiddleware = require ('../../middleware/auth.controller');

module.exports = function (app){
    
    app.get("/themes_properties/list",  authMiddleware.auth, themes_propertiesController.listar);
    app.get("/themes_properties/:id",  authMiddleware.auth, themes_propertiesController.consultarPorCodigo);
    app.post("/themes_properties/update",  authMiddleware.auth, themes_propertiesController.actualizar);
   app.delete("/themes_properties/delete/:id",  authMiddleware.auth, themes_propertiesController.eliminar);
}
