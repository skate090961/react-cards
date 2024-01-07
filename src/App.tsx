import { Button } from '@/components/ui/button'
import icon from 'public/icons/log-out.svg'

export function App() {
  return (
    <div>
      <div>
        <Button>
          <img alt={'#'} src={icon} /> Hello
        </Button>
      </div>
      <div>
        <Button as={'a'}>Hello</Button>
      </div>
    </div>
  )
}
