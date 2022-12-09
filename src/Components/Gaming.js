import React, { useEffect, useState }  from 'react';

function Gaming(){
    const [artObj ,setArtObj] =useState([]);

    useEffect(() => {
        fetch("/articles")
          .then((r) => r.json())
          .then((dataObj) => setArtObj(dataObj))
      },[setArtObj])

    const article = artObj.map((aobj)=>{
        if(aobj.category_id === 3){
            return(
                <>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={aobj.img} alt="Article-realated " />
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
                <div className="album py-5">
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

export default Gaming;