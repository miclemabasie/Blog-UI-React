import './SideBar.css'
import profile from '../../assets/images/bgwoman.jpg'

function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-item">
            <span className="sidebar-title">About Me</span>
            <img className='sidebar-about-image' src={profile} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni et  .</p>            
        </div>

        <div className="sidebar-item">
            <div className="sidebar-title">Categories</div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">Life</li>
                <li className="sidebar-list-item">Music</li>
                <li className="sidebar-list-item">Style</li>
                <li className="sidebar-list-item">Sport</li>
                <li className="sidebar-list-item">Tech</li>
                <li className="sidebar-list-item">Cinema</li>
            </ul>
        </div>

        <div className="sidebar-item">
            <span className="sidebar-title">Follow Us</span>
            <div className="sidebar-social">
                <i className="sidebar-icon fa-brands fa-facebook-square"></i>
                <i className="sidebar-icon fa-brands fa-instagram-square"></i>
                <i className="sidebar-icon fa-brands fa-twitter-square"></i>
                <i className="sidebar-icon fa-brands fa-pinterest-square"></i>
            </div>
        </div>
    </div>
  )
}

export default SideBar