import type { HttpContext } from '@adonisjs/core/http'
import pm2 from 'pm2'
export default class AppsController {
    async index({ inertia }: HttpContext) {
        const PM2Apps = await pm2.list((e) => {
            console.log(e)
        })
        console.log(PM2Apps)
        return inertia.render('home')

    }
}