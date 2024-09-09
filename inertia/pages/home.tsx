import { Head } from '@inertiajs/react'
import moment from 'moment'
import { Badge } from '~/components/ui/badge'
import { Card } from '~/components/ui/card'
import Icon from '~/icons'
import AppLayout from '~/layouts/AppLayout'
import { getInterpreter } from '../../lib/utils'
export default function Home(props: { apps: any, platform: string, totalMem: number, freeMem: number }) {
  console.log(props.apps)
  return (
    <AppLayout>
      <Head title="Homepage" />
      <div>
        <div className='border-b h-12 flex items-center px-8 gap-8'>
          <div className='flex items-center gap-2'>
            <Icon name={props.platform} />
            <p>{props.platform}</p>
          </div>
          <p>RAM Usage: {Math.ceil(props.freeMem / 1024 / 1024 / 1024)} / {Math.ceil(props.totalMem / 1024 / 1024 / 1024)} GB</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-8">
          {
            props.apps.map((app: any) => {
              return (
                <Card className="max-w-lg" key={app.pm_id}>
                  <Card.Header className='flex justify-between flex-row'>
                    <Card.Title>{app.name}</Card.Title>
                    <Badge intent='success'>Running</Badge>
                  </Card.Header>
                  <Card.Content>
                    <p>Memory Usage: {Math.round(app.monit.memory / 1024 / 1024)} MB</p>
                    <p>CPU Usage: {Math.round(app.monit.cpu / 1024 / 1024)}</p>
                    <p>Uptime: {moment().startOf('hour').from(moment(app.pm2_env.pm_uptime), true)}</p>
                    <div className='flex flex-row gap-1 items-center'>
                      <Icon name={getInterpreter(app.pm2_env.exec_interpreter)} />
                      <p>{getInterpreter(app.pm2_env.exec_interpreter)}</p>
                    </div>
                  </Card.Content>
                </Card>
              )
            })
          }
        </div>
      </div>
    </AppLayout>
  )
}