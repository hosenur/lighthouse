import { Head } from '@inertiajs/react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import AppLayout from '~/layouts/AppLayout'

export default function Home(props: { apps: any }) {
  console.log(props.apps)
  return (
    <AppLayout>
      <Head title="Homepage" />

      <div className="grid grid-cols-2">
        {
          props.apps.map((app: any) => {
            return (
              <Card className="max-w-lg" key={app.pm_id}>
                <Card.Header>
                  <Card.Title>{app.name}</Card.Title>
                  <Card.Description>Financial summary for June</Card.Description>
                </Card.Header>
                <Card.Content>
                  The monthly financial report shows a 15% increase in revenue compared to last month.
                </Card.Content>
                <Card.Footer>
                  <Button>View Details</Button>
                </Card.Footer>
              </Card>
            )
          })
        }
      </div>
    </AppLayout>
  )
}