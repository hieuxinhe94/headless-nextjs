
import React from "react"
import ReactMarkdown from "react-markdown";
import { resolverDynamicComponent, resolverDynamicExtract, transformImageUriPeform } from "../../lib/component-resolver";

const ProductBodyContent = ({ data }) => {
    console.log("ProductBodyContent")
    console.log(data)

    if(!data) return <section id="content" class=" pt-120 page-content">
        No content
    </section>

    return (<section id="content" class="pt-10 product-content">
        <div class="row">
          <div class="w-full">
            <div class="accordion">
              <div class="card">
                <div class="card-header lg:w-1/2" id="headingOne">
                  <div class="section-title" data-toggle="collapse" data-target="#questionOne" aria-expanded="true" aria-controls="collapseOne">
                    <i class="lni lni-pencil"></i> Mô tả chi tiết
                  </div>
                  <hr/>
                </div>
              
                <div class="card-body">
                  <br/>
                <ReactMarkdown
                      transformImageUri={transformImageUriPeform}
                      source={data}
                      escapeHtml={true}
                  />
                </div>
              </div>
              </div>
              </div>
     </div>
    </section>)
}

export default ProductBodyContent

