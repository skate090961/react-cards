import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <div>
        <Button>Hello</Button>
      </div>
      <div>
        <Button as={'a'}>Hello</Button>
      </div>
    </div>
  )
}
