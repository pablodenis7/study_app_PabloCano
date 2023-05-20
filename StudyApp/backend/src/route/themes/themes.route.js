const themesController = require('../../controller/themes/themes.controller');
const authMiddleware = require ('../../middleware/auth.controller');

module.exports = function(app) {

    app.get("/themes/list", authMiddleware.auth,  themesController.listar);
    app.get("/themes/:id",  authMiddleware.auth, themesController.consultarPorCodigo);
    app.post("/themes/update", authMiddleware.auth,  themesController.actualizar);
    app.delete("/themes/delete/:id", authMiddleware.auth,  themesController.eliminar);
}

