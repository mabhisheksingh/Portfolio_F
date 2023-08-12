const STANDARD_WIDTH_IN_PX="320";
export const noOfCardInScreen =(windowInnerWidth)=>{
    let noOfCardInCarousel = 3;
    let padding = 30;
    if(innerWidth >= 1920){ //larger screen
        noOfCardInCarousel =5;
    }else if(innerWidth >= 1020){ //large screen
        noOfCardInCarousel =4;
    }else if(innerWidth >= 640){ //medium screen
        noOfCardInCarousel =3;
    }else if(innerWidth >= 480){ //small big screen{
        noOfCardInCarousel =2;
    }else { //small big screen{
        noOfCardInCarousel =1;
    }

    return {
        width :(windowInnerWidth/noOfCardInCarousel - padding),
        size:noOfCardInCarousel
    }


} 