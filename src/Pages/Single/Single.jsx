import './Single.css'
import { SideBar, PostDetail } from '../../components'

function Single() {
  return (
    <div className='single'>
        <PostDetail />
        <SideBar />
    </div>
  )
}

export default Single