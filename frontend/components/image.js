import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"
import { getStrapiURL } from "../lib/api";

const CustomImage = ({ image, style, imageClass = null }) => {

  if(!image) {
    return   
      <img class="blank" src="blank" alt="blank image" />
   
  }

  if(image?.data?.attributes == null) {
    return   
      <img class="blank" src="blank" alt="blank image" />
   
  }
  const { url, alternativeText, width, height } = image.data.attributes;
 
  const srcUrl = getStrapiURL() + url;
  return (
     
        <img class={imageClass} src={srcUrl} alt="Logo" />
    
   
    // <NextImage
    //   // loader={loader}
    //   layout="responsive"
    //   width={100}
    //   height={200}
    //   objectFit="contain"
    //   src={ srcUrl}
    //   // alt={alternativeText || ""}
    // />
  )
}

export default CustomImage
