import { Head } from '@inertiajs/react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import AppLayout from '~/layouts/AppLayout'

export default function Home(props: { containers: any }) {
  console.log(props.containers)
  return (
    <AppLayout>
      <Head title="Homepage" />
      <div> 
        {
          props.containers.map((container: any) => {
            return (
              <Card className="max-w-lg" key={container.Id}>
                <Card.Header>
                  <Card.Title>{container.Names[0].split('/')[1]}</Card.Title>
                  <Card.Description>{container.Status}</Card.Description>
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