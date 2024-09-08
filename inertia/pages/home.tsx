import { Head } from '@inertiajs/react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import AppLayout from '~/layouts/AppLayout'

export default function Home(props: { apps: any }) {
  console.log(props.apps)
  return (
    <AppLayout>
      <Head title="Homepage" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {
          props.apps.map((app: any) => {
            return (
              <Card className="max-w-lg" key={app.pm_id}>
                <Card.Header className='flex justify-between flex-row'>
                  <Card.Title>{app.name}</Card.Title>
                  <Badge>Running</Badge>
                </Card.Header>
                <Card.Content>
                  <p>Memory Usage: {Math.round(app.monit.memory/1024/1024)} MB</p>
                  <p>Cpu Usage: {Math.round(app.monit.cpu/1024/1024)} MB</p>
                </Card.Content>
              </Card>
            )
          })
        }
      </div>
    </AppLayout>
  )
}