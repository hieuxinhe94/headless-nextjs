 
import { getStrapiURL } from "../lib/api";

const CustomImage = ({ image, style, imageClass = null }) => {

  // if(!image) {
  //   return   (
  //      <img class="blank" src="blank" alt="blank image" />)
   
  // }

  if(image?.data?.attributes == null && image?.attributes == null) {
    return  ( 
      <img class="blank" src="blank" alt="blank image" />)
   
  }

  if(image?.attributes?.url) {
    const { url, alternativeText, width, height } = image.attributes;
    const srcUrl = getStrapiURL() + url;

    return (
      <img class={imageClass ?? ""} src={srcUrl} alt="Logo" />
    ) ;
  } else {
    const { url, alternativeText, width, height } = image.data.attributes;
    const srcUrl = getStrapiURL() + url;

    return (
      <img class={imageClass ?? ""} src={srcUrl} alt="Logo" />
    );
  }
 
}

export default CustomImage
