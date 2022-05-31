import { useEffect, useState } from "react";
import "../../stylesheets/ordering.css";

const Product = () => {


    const img1 = "https://cdn.shopify.com/s/files/1/2980/5140/products/panel10_500x.jpg?v=1618827654"
    const img2 = "https://cdn.shopify.com/s/files/1/2980/5140/products/04_500x.jpg?v=1610514082";
    const img3 = "https://cdn.shopify.com/s/files/1/2980/5140/products/Technical10wp_700x.jpg?v=1618906199";
    const img4 = "https://cdn.shopify.com/s/files/1/2980/5140/products/comparisonchart10_500x.jpg?v=1618827770";

    const [mainImg, setMainImg] = useState(img1);

    const productData = {
        // name: 'APPLE iPhone 12 (Red, 128 GB)',
        // ratings: 5903,
        // reviews: 476,
        // price: 82900,
        imgurl: 'https://cdn.shopify.com/s/files/1/2980/5140/products/panel10_500x.jpg?v=1618827654'
    }

    useEffect(() => {

        setMainImg(img3);

    }, [])

    let count = 1;

    const [qty, setQty] = useState(1);

    const increment = () => {
        console.log('clicked!!');
        console.log(count);
        count++;
        setQty(qty + 1);
    }


    return (
        <div>

            <div className="all">
                <h1>Product Details Page</h1>
                <div className="row">
                    <div className="col-md-5">
                        <div>
                            <img src={mainImg} style={{ display: 'block', margin: 'auto' }} />
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <img onClick={e => setMainImg(img1)} src={img1} style={{ height: '7rem' }} />
                            </div>
                            <div className="col">
                                <img onClick={e => setMainImg(img2)} src={img2} style={{ height: '7rem' }} />
                            </div>
                            <div className="col">
                                <img onClick={e => setMainImg(img3)} src={img3} style={{ height: '7rem' }} />
                            </div>
                            <div className="col">
                                <img onClick={e => setMainImg(img4)} src={img4} style={{ height: '7rem' }} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <button className="btn btn-warning w-100"><i class="fa fa-cart-plus" aria-hidden="true"></i>ADD TO CART</button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-danger w-100"><i class="fa fa-bolt" aria-hidden="true"></i>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                    {/* <div class="wrapper">
          <div class="header"> */}
            {/* <img
              class="solarimg"
              src="https://cdn.shopify.com/s/files/1/2980/5140/collections/loom_solar_banner_1200x.jpg?v=1641970493"
            ></img> */}

                    <div className="col-md-7">
                        {/* <h1>{productData.name}</h1> */}
                        {/* <h1>{productData['name']}</h1> */}
                        <div class="page-title-wrapper product">
    <h1 class="page-title">
        <span class="base" data-ui-id="page-title-wrapper" itemprop="name">Solar Panel 330W / 24V Poly</span>    </h1>
    </div>
                        <p className="text-muted"><b>{productData.ratings} Ratings & {productData.reviews} Reviews</b></p>
                        <div class="value" itemprop="description"><p class="long-data"></p><ul><li>Poly crystalline Cells type Panel</li><li>Capacity - 330 W, 24V</li><li>Voltage: Voltage at Max Power (Vmax) - 38.03V, Open Circuit Voltage (Voc) - 45.53V</li><li>Current: Current at Max Power (imax) - 8.68A, Short Circuit Current (isc) - 9.22A</li><li>25 years performance warranty.</li><li>Compliance to IEC standards</li><li>Best in Class conversion efficiency</li><li>Anti-reflective coating and back surface (BSF) for more light absorption</li><li>Advanced EVA (ethyl vinyl acetate) encapsulation to give better protection to modules</li><li>High strength light-weight aluminum frame design for high torsion resistance against winds and snow loads</li><li>PID resistance Technology (Potential-Induced Degradation) for safety against substantial power loss due to stray currents triggered by certain climate conditions</li><li>Excellent Low light performance in low visibility in clouds, evening, and morning. 


<p></p>




</li></ul></div>
                        {/* <h3>Quantity : {count}</h3> */}
                        <h3 className="qua">Quantity : {qty}</h3>
                        <button className="btn btn-secondary qua" onClick={increment}> <i class="fa fa-chevron-up" aria-hidden="true"></i> </button>
                    </div>
                </div>
            </div>
        </div>
 
    )
}

export default Product;