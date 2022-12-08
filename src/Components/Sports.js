import React, { useEffect, useState }  from 'react';

function Sports(){
    const [artObj ,setArtObj] =useState([]);

    useEffect(() => {
        fetch("/articles")
          .then((r) => r.json())
          .then((dataObj) => setArtObj(dataObj))
      },[setArtObj])

    const article = artObj.map((aobj)=>{
        if(aobj.category_id === 1){
            return(
                <>
                    <div class="col">
                        <div class="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns={aobj.img} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            <img src=""/>
                            <div className="card-body">
                                <h3>{aobj.title}</h3>
                            <p className="card-text">{aobj.content}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Comment</button>                        
                                </div>
                                <small className="text-muted">{aobj.created_at}</small>
                            </div>
                            </div>
                        </div>
                    </div>
                </>       
            )
        }
    }       
    )
    return(
        <>
            <div className="container">
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {article}
                        </div>
                    </div>
                </div>               
            </div>            
        </>
    )
}

export default Sports;