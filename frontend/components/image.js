import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"
import { getStrapiURL } from "../lib/api";

const CustomImage = ({ image, style, imageClass = null }) => {

  if(image?.data?.attributes == null) {
    return  <a href="#">
      <img class="blank" src="blank" alt="blank image" />
    </a>
  }
  const { url, alternativeText, width, height } = image.data.attributes;
  console.log("image.data.attributes");
  console.log(url);
  const srcUrl = getStrapiURL() + url;
  return (
    <a href="#">
        <img class={imageClass} src={srcUrl} alt="Logo" />
    </a>
   
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
