/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ContainersController from '#controllers/containers_controller'
import router from '@adonisjs/core/services/router'
router.get('/', [ContainersController, 'index'])

