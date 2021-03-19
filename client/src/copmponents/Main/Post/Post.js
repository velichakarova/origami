import style from './Post.module.css'

const Post = ({
    content,
    author
})=>{
    return(
        <div className={style.post}>
            <img className={style.postImg} src='/blue-origami-bird.png' alt='origami'/>
            <p className={style.description}>{content}</p>
            
        <div className={style.postDiv}>
            <span className={style.postSpan}>
                <small>Author:</small>{author}
            </span>
        </div>
        </div>
    )

}
export default Post;