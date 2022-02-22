import { useRouter } from 'next/router';
import ProductThumb2 from "./product-thumb-2";

var defaultgroupIds = {};
var featureProductWrapTmp = {}
var productsFiltered = {};

defaultgroupIds["0"] = "";
featureProductWrapTmp["0"] = "";
productsFiltered["0"] = "";
const ProductGrid2Thumb = ({ featureProductWrap , categories = [], colClass="w-full lg:w-1/2", name = "ProductGrid2Thumb" }) => {
    console.log(name)
    if(!featureProductWrap || Array.from(featureProductWrap).length == 0) return <></>
    featureProductWrapTmp[name] = featureProductWrap;
    defaultgroupIds[name] = defaultgroupIds[name] ?? featureProductWrap[0].id;
    productsFiltered[name] = productsFiltered[name] ?? featureProductWrapTmp[name].filter(t=> t.id == defaultgroupIds[name])[0].Items;
    const router = useRouter();

    const ChangeFilter = (a) => {
    defaultgroupIds[name] = a.id;
    productsFiltered[name] = a.Items;
    router.replace(router.asPath.replace(/\#.+/, '') + "#" + a.id)
  }
  
  return (
      <div class="container">
    <section id="services" class="services section-padding ">
        <div class="container">
        <div class="row justify-center">
            <div class="col-12">
            <ul class="nav nav-tabs flex" id="myTab" role="tablist">
                                    {featureProductWrap.map((item, index) => (
                                    <li key={index} id={"#" + item.id} class="nav-product-grid-horizontal" onClick={(e) =>ChangeFilter(item)}> 
                                        <a class="nav-link" id="thursday-tab" data-toggle="tab" href={"#" + item.id} role="tab" aria-controls="thursday" aria-selected="false">
                                            <div class="item-text">
                                            <h4> {item.GroupName}</h4>
                                            <h5></h5>
                                </div>
                            </a>
                    </li>))}
                </ul>
            </div>
        </div>
      <div class="row services-wrapper">
                            { productsFiltered[name]?.map((_product) => (
                                  (_product?.detail) ?
                                  <div key={_product.id} class={colClass}>
                                      <ProductThumb2 key={_product.id} productThumb={_product.detail.data} />
                                  </div>
                                  : <div key={_product.id}/>
                            ))}
                     </div>
                </div>
          </section>
          </div>
  )
}

export default ProductGrid2Thumb
