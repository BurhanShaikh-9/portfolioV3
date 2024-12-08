import Header from './header'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default layout
