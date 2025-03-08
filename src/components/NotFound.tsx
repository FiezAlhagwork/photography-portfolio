
import { Link } from 'react-router-dom'
import Button from './Button'

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-White text-Black">
    <h1 className="text-6xl font-bold">404</h1>
    <p className="text-xl mt-2"> Page NotFound !</p>
    <Button className="mt-4 bg-Yellow text-White capitalize" aria_label='back to home'>

    <Link to="/"  >back to home</Link>
    </Button>
  </div>
  )
}

export default NotFound