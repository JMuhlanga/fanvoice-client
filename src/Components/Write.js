
import React, { useState }  from 'react';

function Write(){
    const [formData, setFormData] = useState({
        atitle: "",
        aimg: "",
        acontent:"",
        categoryId:""        
    });

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.atitle,
            img: formData.aimg,
            content:formData.acontent,
            category_id:formData.categoryId 
                
           
          }),
        });
      }
    return(
        <>
        <div className="container">
            <div className="reg-form">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Title</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" value={formData.atitle} onChange={handleChange} />
                                <div id="emailHelp" className="form-text">Write Article Name Here</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Image</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" value={formData.atitle} onChange={handleChange} />
                                <div id="emailHelp" className="form-text">Add your Article Image Here</div>
                        </div>
                        <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Category</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.categoryId} onChange={handleChange} />
                                <div id="emailHelp" className="form-text">For Sports type 1,for Pop-culture type 2, for Gaming type 3 </div>
                        </div>
                        <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Article</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.acontent} onChange={handleChange} />
                                <div id="emailHelp" className="form-text">Kindly add your article here</div>
                        </div>
                                
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
        </div>      
        </>
    )
}

export default Write;