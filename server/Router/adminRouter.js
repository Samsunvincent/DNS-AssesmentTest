const express = require('express');
const Router = express.Router();

const adminController = require('../controller/adminController');

Router.post('/addCategory', adminController.addCategory);
Router.get('/getCategory', adminController.getCategories);

Router.post('/addItem', adminController.addItem);
Router.get('/getItems', adminController.getItems);
Router.get('/getCategoriesAndItems', adminController.getCategoriesAndItems);

Router.post('/addMenu', adminController.addMenu);  
Router.get('/getMenu', adminController.getMenu);
Router.get('/getMenuByCategory/:id', adminController.getMenusByCategory);


module.exports = Router;
