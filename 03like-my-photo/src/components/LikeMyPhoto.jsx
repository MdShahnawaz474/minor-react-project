import Title from "./Title"
import { FaFaceSmile } from "react-icons/fa6";
// import { CiHeart } from "react-icons/ci";
// import { FaCommentDots } from "react-icons/fa";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";




const LikeMyPhoto = ()=>{
    
    const [like,setlike ]= useState(false)
    const [count,setCount ]= useState(0)

    const toggleLike=()=>{
        if(!like){
            setlike(true)
            setCount(count + 1)
        }else{
            setlike(false)
            setCount(count - 1)

        }
    }
    return(
        <div className="container text-center">
            <Title text={"Like Photo App"}/>
            <Title classes={"subtitle"} text={`Likes ${count}`}/>
            <div className="card card-dark m-auto shadow-md" style={{width:300, cursor:"pointer"}} onDoubleClick={toggleLike}>
                
        <div className="card-header fs-xl">
        <FaFaceSmile className="mr-2 f" />
            <small >
                Kitty
            </small>
            <img src="https://images.squarespace-cdn.com/content/v1/58961c4a3a041158be07696d/1619550583657-BR8BZKMRSPAFMVIKJLLQ/Toronto-professional-cat-photographer.jpg" onDoubleClick={toggleLike} alt="" style={{
                height:"fit-content"
            }} />

            <div className="card-footer fs-xl d-flex" style={{justifyContent:"space-between"}}>
            
            <AiOutlineComment  /> {""}

            {like ? <AiFillHeart className="text-danger"  onClick={toggleLike}/>: <AiOutlineHeart onClick={toggleLike}/>}

            </div>
        </div>

            </div>
        </div>
    )
}

export default LikeMyPhoto

