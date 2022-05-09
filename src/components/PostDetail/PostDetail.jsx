import './PostDetail.css'
import PostImage from '../../assets/images/bgwoman.jpg'

function PostDetail() {
  return (
    <div className='post-detail'>
        <div className="post-detail-wrapper">
            <img className='post-detail-image' src={PostImage} alt="" />
            <h1 className="post-detail-title">
                Lorem ipsum dolor sit amet.
                <div className="post-detail-edit">
                    <i className="post-detail-icon far fa-edit"></i>
                    <i className="post-detail-icon far fa-trash-alt"></i>
                </div>
            </h1>

            <div className="post-detail-info">
                <span className='post-detail-author'>Author: <b>Miclem</b></span>
                <span className='post-detail-date'>1 hour ago.</span>
            </div>
            <p className='post-detail-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolor facere saepe sequi reprehenderit distinctio? Aspernatur excepturi esse voluptate id vitae quaerat ut amet voluptas reiciendis nemo praesentium fugit, molestias rerum iusto nesciunt cupiditate nihil eveniet alias similique recusandae. Sunt officia culpa corrupti totam impedit excepturi hic iste dicta ullam molestias modi harum deserunt tempore, consectetur necessitatibus officiis voluptate explicabo cupiditate dolorum incidunt repellat commodi sed quis voluptatem. Neque numquam reprehenderit, nemo natus repudiandae assumenda dolor eius sapiente. Sapiente totam consequuntur odit aperiam sint iste nulla facere consectetur aspernatur corrupti incidunt cum accusamus aut at dolores, recusandae delectus expedita! Ipsum sint minima reiciendis officiis. Facilis iusto aspernatur dolorum! Ipsam illo sit consequatur, molestias nam quam ex dolores accusamus! Consequuntur sunt eum commodi delectus dolore? Expedita quod nihil necessitatibus iste animi pariatur iure sapiente consequatur deleniti quae totam, porro illo quaerat ullam voluptatibus nobis tempore culpa nisi sint sunt velit consequuntur.
            </p>
        </div>        
    </div>
  )
}

export default PostDetail