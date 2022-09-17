import React from "react";

const Char = ({name,status,species,imageUrl,setImage}) => {
    return (
        <div className="subimagenes" onClick={() => setImage(imageUrl)}>
            <img src={imageUrl} alt="" />
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
        </div>
    )
}

export default Char;