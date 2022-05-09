import './WriteEditPost.css'
import WriteImage from '../../assets/images/bgwoman.jpg'

function WriteEditPost() {
  return (
    <div className='write'>
        <img className='write-image' src={WriteImage} alt="" />
        <form action="" className="write-form">
            <div className="write-form-group">
                <label htmlFor="file-input">
                    <i className="write-icon fafs fa-plus"></i>
                </label>
                <input type="file" id="file-input" style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='write-input' autoFocus={true}/>
            </div>

            <div className="write-form-group">
                <textarea placeholder='Tell your story'
                    type="text"
                    className='write-input write-text'
                ></textarea>
            </div>

            <button className="write-submit">Publish</button>
        </form>
    </div>
  )
}

export default WriteEditPost