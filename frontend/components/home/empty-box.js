
import React from "react" 

const EmptyBox = ({ message }) => {
 
    if(!message) 
    message  = "The content is empty";

  return (
    <section  class=" pt-120">
    <div class="container">
        <div class="justify-center row">
            <div class="w-full lg:w-2/3">
                <div class="pb-10 text-center section-title">
                    <div class="m-auto line"></div>
                    {message }
                </div>  
            </div>
        </div>  
         
    </div>  
</section>
  )
}

export default EmptyBox 

