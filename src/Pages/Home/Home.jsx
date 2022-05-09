import './Home.css'
import { Header, Posts, SideBar } from '../../components'

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  )
}

export default Home