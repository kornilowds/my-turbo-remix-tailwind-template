import type { MetaFunction } from '@remix-run/node'
import Button from 'components/button'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to Remix + Tailwind CSS
          </h1>
        </header>

        <div className="flex gap-4">
          <Button>Go to app</Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </div>
  )
}
