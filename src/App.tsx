import logo from '@/assets/icons/logo.png'
import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <div>
        <Button as={'a'}>Hello</Button>
      </div>
      <img alt={'#'} src={logo} />
    </div>
  )
}
