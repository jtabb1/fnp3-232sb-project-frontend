import React from "react";

export default function Product({ product }) {

  // const imgPath = "https://replit.com/@jtabb1/2021-08-15-Bootstrap-Catagory-List-Page#assets/";
  const imgPath = "/assets/";
  const img_filename = product.photo_filename;
  // const img_filename = 'maguro.png';
  const imgUrl = `${imgPath}${img_filename}`;
  console.log(imgUrl);

  return (

    <div className="row p-2 bg-white border rounded">

      <div className="col-md-3 mt-1">

        <img className="img-fluid img-responsive rounded product-image" src={imgUrl} alt={product.name}/>

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

              <h4 className="mr-1">{product.price}</h4><span>&nbsp;</span><span className="strike-text">{product.msrp}</span>
              
          </div>
          <h6 className="text-success">Free shipping</h6>
      </div>

    </div>

  );
}
