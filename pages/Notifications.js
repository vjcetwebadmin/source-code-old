import React from 'react';
import ImageOne from '../Components/Images/ImageOne';

export default function NotiPage(){
    const ImageData = {
        instanceID: "NotifPage",
        image: "NewBranch.jpg",
        width: "100%"
    }
    return(
        <ImageOne data={ImageData}/>
    )
}