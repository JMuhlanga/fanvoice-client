import React, { useState }  from 'react';

function LogIn(){
    const[email,setEmail]=useState("")
    const[password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        fetch("/login",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password            
              })
        })

        }
    
    return(
        <>
        <div className="container">
            <div className="album py-5 bg-light"></div>
                <div className="reg-form">
                    <h3>Kindly user the use the form Below to log in</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div id="emailHelp" className="form-text">We'll not display your Email</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Password</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            {/* <div id="emailHelp" className="form-text">Not Yet a member? <a href={<SignUp />}>Sign-Up</a> </div> */}
                        </div>

                        
                        <button type="submit" className="btn btn-primary">Log-In</button>
                    </form>
                    <div className='album py-5'></div>
                </div>
            </div>

        </>
    )
}

export default LogIn;