import React from 'react'
import Link from 'next/link'
export default function PostCard({postData}) {
    return (
        //breadcrumb area start
        <section className="breadcrumb_area breadcrumb_overlay !bg-cover !bg-no-repeat" 
        // style={{"background":"url(/img/bg/breadcrum_bg_2.jpg)"}}
         style={{"background":`url(${postData?.image?.url})`}}
        
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb_section">
                            <ul className="breadcrumb-list volunteer_breadcrumb">
                                <li className="bhas_border"><Link legacyBehavior href="/"><a>
                                    الرئيسية
                                    </a></Link></li>
                                <li><span className="active">
                                    البوست
                                    </span></li>
                            </ul>
                            <div className="breadcrumb_title mt-2">
                                <h2>{postData?.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    )
}
