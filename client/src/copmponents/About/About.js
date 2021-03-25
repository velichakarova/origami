
import style from '../../App.module.css'
const About =({
    match,
    location,
    history
})=>{
    console.log(match);
    return (
        <div className={style.main}>
            <h1 className={style.mainH}>About {match.params.name} page</h1>
        </div>
    )
}
export default About;