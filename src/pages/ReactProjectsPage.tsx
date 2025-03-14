import RPS from '@/components/common/react/RockPaperScissors/RPS'
import Stopwatch from '@/components/common/react/Stopwatch/Stopwatch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ReactProjectsPage = () => {
  return (
    <div className='flex gap-4'>
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
      <div>
        <Card className="w-[25rem]">
          <CardHeader>
            <CardTitle>Stopwatch</CardTitle>
            <CardDescription>A simple react project for stopwatch</CardDescription>
          </CardHeader>
          <CardContent>
            <Stopwatch />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ReactProjectsPage