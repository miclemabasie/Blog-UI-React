import './Header.css'
import BgImage from '../../assets/images/cat.jpg'

function Header() {
  return (
    <div className='header'>
        <div className="header-titles">
            <span className="header-title-sm">React & Django</span>
            <span className="header-title-lg">Blog</span>
        </div>
        <img src={BgImage} alt="" className="header-image" />
    </div>
  )
}

export default Header