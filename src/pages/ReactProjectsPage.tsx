import RPS from '@/components/common/react/RockPaperScissors/RPS'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ReactProjectsPage = () => {
  return (
    <div>
      <div>
          <Card className="w-[50rem]">
            <CardHeader>
              <CardTitle>Rock Paper Scissors Game</CardTitle>
              <CardDescription>A simple react project for rock, paper and scissors</CardDescription>
            </CardHeader>
            <CardContent>
              <RPS />
            </CardContent>
          </Card>
      </div>
    </div>
  )
}

export default ReactProjectsPage