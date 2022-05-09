import './Settings.css'
import { SideBar } from '../../components'
import ProfilePicture from '../../assets/images/bgwoman.jpg'

function Settings() {
  return (
    <div className='settings'>
        <div className="settings-wrapper">
            <div className="settings-title">
                <span className="settings-update-title">Update your account</span>
                <span className="settings-delete-title">Delete Account</span>
            </div>
            <form action="" className="settings-form">
                <label >Profile Picture</label>
                <div className="settings-profile-picture">
                    <img src={ProfilePicture} alt="" />
                    <label htmlFor='file-input'><i className="settings-profile-picture-icon far fa-user-circle"></i></label>
                    <input type="file" name="" id="file-input" style={{display:"none"}}/>
                </div>
                <label htmlFor="">Username</label>
                <input type="text" name="" id="" placeholder='Miclem' />
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" placeholder='miclemabasie3@gmail.com' />
                <label htmlFor="">Password</label>
                <input type="password"/>

                <button className="settings-submit">Update</button>
            </form>
        </div>
        <SideBar />
    </div>
  )
}

export default Settings