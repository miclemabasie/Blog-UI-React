import './Post.css'
import PostImage from '../../assets/images/profile.jpg'
import { Link } from 'react-router-dom'

function Post() {
  return (
    <div className='post'>
      <img className="post-image" src={PostImage} alt="post" />
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Music</span>          
          <span className="post-category">Life</span>          
        </div>
        <span className="post-title">
          <Link className="link-title" to="/post/343">Lorem ipsum dolor</Link>
          
        </span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>

      <p className="post-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum debitis sed sit natus odit, maxime nesciunt ex omnis veritatis amet animi consequatur sunt suscipit accusamus corrupti, asperiores velit nemo!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae iusto cumque necessitatibus, corporis aliquam harum recusandae, odit, eligendi quo iure accusamus dicta? Eius ullam quis quasi rem, delectus eaque quos alias corporis nobis, facilis veniam, nesciunt libero optio quae.
      </p>
    </div>
  )
}

export default Post