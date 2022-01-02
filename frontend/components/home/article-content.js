
import React from "react"
import { resolverDynamicComponent, resolverDynamicExtract } from "../../lib/component-resolver";

const PageBody = ({ data }) => {
    console.log("PageBody")
    console.log(data)

    if(!data) return <section id="content" class="services-area pt-120 age-content">
        No content
    </section>
   
    // return (<section id="content" class="services-area pt-120 age-content">
    //             {
    //                 resolverDynamicComponent(data, "content")
    //             }
    //         </section>)

    return (<section id="content" class="services-area pt-120 age-content">
    {
        data.map(dynamicContent => {
                return  resolverDynamicExtract(dynamicContent);
        })
    }
    </section>)
}

export default PageBody

