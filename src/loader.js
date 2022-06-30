import design from "./loader.module.css"
const Loader =() =>{
    return(
        <>
        <div className={design.contain}>
            <div className={design.filler1}></div>
            <div className={design.filler2}></div>
            <div className={design.filler3}></div>
        </div>
        </>

    )
}

export default Loader