import React from "react";

export default function Product({ product }) {

  const imgPath = "./assets/";

  return (

    <div className="row p-2 bg-white border rounded">

      <div className="col-md-3 mt-1">

        <img className="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/QpjAiHq.jpg" />

      </div>

      <div className="col-md-6 mt-1">

          <h5>{product.name}</h5>
          
          <div className="mt-1 mb-1 spec-1">
            <span>100% cotton</span><span className="dot"></span><span>Light weight</span>
          </div>

          <div className="mt-1 mb-1 spec-1">
            <span>Unique design</span><span className="dot"></span><span>For men</span>
          </div>

          <br />

      </div>

      <div className="align-items-center align-content-center col-md-3 border-left mt-1">
          <div className="d-flex flex-row align-items-center">

              <h4 className="mr-1">$13.99</h4><span>&nbsp;</span><span className="strike-text">$20.99</span>
              
          </div>
          <h6 className="text-success">Free shipping</h6>
      </div>

    </div>

  );
}
