import type { HttpContext } from '@adonisjs/core/http'
import dockerode from 'dockerode'
const docker = new dockerode()
export default class ContainersController {
    async index({ inertia }: HttpContext) {
        const containers = await docker.listContainers()
        console.log(containers[0])
        return inertia.render('home', { containers })
    }
}