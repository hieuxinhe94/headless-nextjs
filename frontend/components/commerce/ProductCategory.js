import Link from "next/link"
import ProductThumb from "./product-thumb"

const ProductCategory = ({ categories = [], onSelected }) => {
   
  return (
    <section id="schedules" class="schedule section-padding">
        <div class="container">
        <div class="schedule-area  wow fadeInDown" data-wow-delay="0.3s">
          <div class="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
            <div class="table-responsive">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
            { categories.map((category, index) => (
               <li key={index} class="nav-item row">
                <a class="nav-link" id="thursday-tab" data-toggle="tab" href="#thursday" role="tab" aria-controls="thursday" aria-selected="false" 
                 >
                    <div class="item-text">
                    <h4> {category.attributes.name ?? category.attributes.Name}</h4>
                    <h5></h5>
                    </div>
                </a>
               </li>
                ))}
             </ul>
              </div> 
             </div>
          </div>
        </div>
  </section>
  )
}

export default ProductCategory
