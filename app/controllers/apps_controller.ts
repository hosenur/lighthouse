import type { HttpContext } from '@adonisjs/core/http'
import pm2 from 'pm2'
import dockerode from 'dockerode'
export default class AppsController {
    async index({ inertia }: HttpContext) {
        const docker = new dockerode()
        const PM2Apps = await pm2.list((e) => {
            console.log(e)
        })
        const DockerApps = docker.listContainers()
        console.log(PM2Apps)
        console.log(DockerApps)
        return inertia.render('home')

    }
}