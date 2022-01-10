/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.get('/', 'PagesController.home').as('pages.home');
Route.get('/read-more', 'PagesController.readMore').as('pages.read-more');
Route.get('/apply', 'PagesController.fundApply').as('pages.fund-apply');
Route.get('/contact', 'PagesController.contact').as('pages.contact');
Route.get('/think-tank', 'PagesController.thinkTank').as('pages.think-tank');
Route.get('/network', 'PagesController.network').as('pages.network');
Route.get('/platform', 'PagesController.platform').as('pages.platform');
