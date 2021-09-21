import react from 'react';
import isackAvatar from '../images/isackAvatar.png';
function Mainhero(){
    return(
        <div>
        <div>
            
 
    



      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={isackAvatar} class="d-block mx-lg-auto img-fluid" alt="An avitar of me"
                    width="700" height="500" loading="lazy"></img>
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3 ">Hey there, im Isack!</h1>
                <p class="lead">Im an aspiring full-stack developer from downtown San Antonio, here you can find links
                    to my projects, social media,
                    or email me!</p>

            </div>
        </div>
    </div>
    
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"></script>
        </div>
        
    )
}

export default Mainhero;