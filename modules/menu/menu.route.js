'use-strict';

const menuController    = new (require('./business/menuController'));
const path              = '/menu';

module.exports = (router) => {
    router.route(path)
        .get(menuController.getMenus)
        .post(menuController.createOrUpdateMenu)
        .delete(menuController.deleteMenu)
}