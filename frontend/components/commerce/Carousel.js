
import Link from "next/link" 
import CustomImage from "../image"
import  {useEffect} from "react";
const Carousel = ({ ListItem }) => {
     
  if(!ListItem) {
    ListItem = [];
  }
 
  useEffect(() => {
    helper();
  }, [])

  return (
    <div id="main-slide" class=" carousel slide " data-ride="carousel">
        <main class="pt-32" id="carousel">
        { ListItem.data.map((item, index) => (
            <div key={index} class="item"> 
              <CustomImage image={item} imageClass={"image-fit d-block w-100"} />
            </div>
        ))}
    </ main>
    <div id="carousel-nav" class="row justify-center ">
        {ListItem.data.map((item, index) => (
             <input defaultChecked={index == 0 ? true: false} data-carousel={index + 1} key={index} class="carousel-item-radio" type="radio" name="position" />
        ))}
    </div>
    </div>
  )
}

function helper() {
  Array.from(document.getElementsByClassName("carousel-item-radio")).forEach(ele => {
    ele.onclick = function (item) {
        console.log(ele.getAttribute("data-carousel"));
        var position = ele.getAttribute("data-carousel");
        document.getElementById("carousel").setAttribute("style", "--position:" + position) ;
    }
  });

 

  setInterval(() => {
    var totalCheckboxes = document.getElementsByClassName("carousel-item-radio");
    Array.from(totalCheckboxes).forEach(element => {
      element.removeAttribute("checked") ;
    });
   
    var maxCarouselCount = Array.from(totalCheckboxes).length;
    var ele = document.getElementById("carousel");
    var currentPosition = ele.style.getPropertyValue("--position");
    if(currentPosition >= maxCarouselCount) {currentPosition = 1;} else {currentPosition++;}
    document.getElementById("carousel").setAttribute("style", "--position:" + currentPosition) ;
    totalCheckboxes[currentPosition-1].setAttribute("checked", true) ;
   
  }, 3000);
}

export default Carousel
