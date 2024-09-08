import type { HttpContext } from '@adonisjs/core/http'
import { execSync } from 'child_process'
export default class AppsController {
    async index({ inertia }: HttpContext) {
        const res = JSON.parse(execSync('pm2 jlist').toString())
        return inertia.render('home', { apps: res })

    }
}