import ReactMarkdown from "react-markdown"
 

const SubcribeBox = ({ subcribeBox }) => {
  return (
    <div class="px-6 pt-10 pb-20 mb-12 bg-white rounded-lg shadow-xl md:px-12 subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
            <div class="row">
                <div class="w-full lg:w-1/2">
                    <div class="lg:mt-12 subscribe-content">
                        <h2 class="text-xl font-bold sm:text-2xl subscribe-title">
                         {subcribeBox?.Title}
                        </h2>
                        <ReactMarkdown
                                            source={subcribeBox?.Description}
                                            escapeHtml={false}
                                />
                    </div>
                </div>
                
                <div class="w-full lg:w-1/2">
                    <div class="mt-12 ">
                        <form action= { subcribeBox?.POST_URL } class="relative focus:outline-none float-right">
                            {/* <input type="type" placeholder="Enter email/phone number" class="w-full py-4 pl-6 pr-40 duration-300 border-2 rounded focus:border-theme-color focus:outline-none" /> */}
                            <a href={ subcribeBox?.POST_URL } class="main-btn gradient-btn"> { subcribeBox?.SubmitLabel }</a>
                        </form>
                    </div>
                </div>
            </div> 
        </div>  
        )
}

export default SubcribeBox
