import React,{useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../../src/App.css"
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination';

export default function HomeContent(){
      return(
        <>
       <Carousel style={{margin:'70px'}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://nobero.com/cdn/shop/files/67_3.webp?v=1707987705"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://nobero.com/cdn/shop/files/Homepage_Banner_4.png?v=1708003939"
      alt="Second slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://nobero.com/cdn/shop/files/69.webp?v=1707987706"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<div >
  <div style={{textAlign:'center',fontWeight:"bold"}}>
<h3 style={{fontWeight:"bold"}}>New Launch</h3>
<h6 style={{color:'darkgray'}}>Explore New Drops</h6>
</div>
<div className="newLaunch">
    <div className="part"><img src="https://nobero.com/cdn/shop/files/Just_Landed_11.png?v=1708003938&width=2000"/></div>
    <div className="part"><img src="https://nobero.com/cdn/shop/files/Just_Landed_10.png?v=1708003939&width=2000"/></div>
    <div className="part"><img src="https://nobero.com/cdn/shop/files/Just_Landed_12.png?v=1708003938&width=2000"/></div>
    <div className="part"><img src="https://nobero.com/cdn/shop/files/Just_Landed_13.png?v=1708003938&width=2000"/></div>

   </div></div>

   <div className="shopForMen">
   <h3 style={{textAlign:'center',fontWeight:"bold",marginBottom:'50px'}}>Shop For Men</h3>
<div className='men-1'>
  <div className='cloths' ><img src='https://nobero.com/cdn/shop/collections/hoodie.png?v=1696572983'/><h5 >Hoodies</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/Untitled_design.png?v=1692213488'/><h5>Oversized T-shirt</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/7.jpg?v=1679916489'/><h5>T-shirt</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/9.jpg?v=1679917418'/><h5>Co-ord sets</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/Collectio_Icon_copy.png?v=1708004377'/><h5>Joggers</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/8.jpg?v=1679917719'/><h5>Shorts</h5></div>
 </div>
     
   </div>

   <div className="shopForWomen">
   <h3 style={{textAlign:'center',fontWeight:"bold",marginBottom:'50px'}}>Shop For Women</h3>
<div className='men-1'>
<div className='cloths' ><img src='https://nobero.com/cdn/shop/collections/1.jpg?v=1679984145'/><h5 >T-shirt</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/Untitled_design_3_3cdc79b2-d950-40e5-9a35-47a983b79c3f.jpg?v=1679997310'/><h5>Co-ord sets</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/3_7.jpg?v=1681740357'/><h5>Joggers</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/5.jpg?v=1679983950'/><h5>Luxury co-ord</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/2-5.jpg?v=1679997455'/><h5> Shorts</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/files/Hoodies_2.png?v=1697449881&width=360'/><h5>Sweaters</h5></div>
 </div>
     
   </div>
   
<div className="ourStory">
  <img src="https://nobero.com/cdn/shop/files/BRAND_STORY_2000_x_521_px_5.webp?v=1704521067&width=2000"/>
</div>

<div className="seeTheLatest">
  <h4 style={{fontWeight:'bold',textAlign:'center',margin:'30px'}}>See Our Latest</h4>
  <p style={{color:'darkgray',textAlign:'center'}}>Hand Pick For You</p>
<Carousel>
<Carousel.Item>
  <div className="col">
        <div className="shirt">
            <img src="https://nobero.com/cdn/shop/products/wander-soul_c8ceb89a-eac6-4ce3-91e4-bd2f01b19a65.jpg?v=1676697848&width=360"/>
            <p>Wander Soul Classic Fit</p>
            <div style={{display:"flex", gap:'5px'}}>
              <p>&#8377; 499</p>
              <p style={{textDecoration:"line-through",color:'darkgray'}}>&#8377; 999</p>
              <p style={{color:"green",fontFamily:'bold'}}>50% OFF</p>

            </div>
        </div>
        <div className="shirt">
            <img src="https://nobero.com/cdn/shop/files/WhatsAppImage2024-02-01at5.36.47PM.jpg?v=1706944702&width=360"/>
            <p>Life Goes On Classic Fit</p>
            <div style={{display:"flex", gap:'5px'}}>
              <p>&#8377; 699</p>
              <p style={{textDecoration:"line-through",color:'darkgray'}}>&#8377; 999</p>
              <p style={{color:"green",fontFamily:'bold'}}>50% OFF</p>

            </div>
        </div>
        <div className="shirt">
            <img src="https://cdn.shopify.com/s/files/1/0337/9413/0052/files/Lunarecho_751f48f3-a67d-4bbb-9d42-aed8a72abbe0.jpg?v=1745473019?w=360"/>
            <p>Dream Classic Fit</p>
            <div style={{display:"flex", gap:'5px'}}>
              <p>&#8377; 499</p>
              <p style={{textDecoration:"line-through",color:'darkgray'}}>&#8377; 999</p>
              <p style={{color:"green",fontFamily:'bold'}}>50% OFF</p>

            </div>
        </div>
        <div className="shirt">
            <img src="https://nobero.com/cdn/shop/products/WhatsAppImage2023-02-22at6.52.23PM_ae7ed12b-db4a-4052-a03a-384f58378932.jpg?v=1677747944&width=360"/>
            <p>Wander Soul Classic Fit</p>
            <div style={{display:"flex", gap:'5px'}}>
              <p>&#8377; 499</p>
              <p style={{textDecoration:"line-through",color:'darkgray'}}>&#8377; 999</p>
              <p style={{color:"green",fontFamily:'bold'}}>50% OFF</p>

            </div>
        </div>
  </div>

  </Carousel.Item>

  <Carousel.Item>
  <div className="col">
        <div className="shirt">
            <img src="https://cdn.shopify.com/s/files/1/0337/9413/0052/files/7_8ec5e047-9784-4b8a-90ef-d9b49c8f24ec.jpg?v=1741759235?w=360"/>
            <p>Oversized Cargo Joggers</p>
            <div style={{display:"flex", gap:'5px'}}>
              <p>&#8377; 499</p>
              <p style={{textDecoration:"line-through",color:'darkgray'}}>&#8377; 999</p>
              <p style={{color:"green",fontFamily:'bold'}}>50% OFF</p>

            </div>
        </div>
        <div className="shirt">
            <img src="https://nobero.com/cdn/shop/products/take-a-break.jpg?v=1678964479&width=360"/>
            <p>Take a Break Classic Fit</p>
            <div style={{display:"flex", gap:'5px'}}>
              <p>&#8377; 499</p>
              <p style={{textDecoration:"line-through",color:'darkgray'}}>&#8377; 999</p>
              <p style={{color:"green",fontFamily:'bold'}}>50% OFF</p>

            </div>
        </div>
        <div className="shirt">
            <img src="https://nobero.com/cdn/shop/files/be-fearlessly-authentic_94b5aff7-e936-4295-a75b-8198e966309d_1.jpg?v=1704111146&width=360"/>
            <p>Wander Soul Classic Fit</p>
            <div style={{display:"flex", gap:'5px'}}>
              <p>&#8377; 499</p>
              <p style={{textDecoration:"line-through",color:'darkgray'}}>&#8377; 999</p>
              <p style={{color:"green",fontFamily:'bold'}}>50% OFF</p>

            </div>
        </div>
        <div className="shirt">
            <img src="https://nobero.com/cdn/shop/products/wander-soul_c8ceb89a-eac6-4ce3-91e4-bd2f01b19a65.jpg?v=1676697848&width=360"/>
            <p>Authentic Classic Fit</p>
            <div style={{display:"flex", gap:'5px'}}>
              <p>&#8377; 499</p>
              <p style={{textDecoration:"line-through",color:'darkgray'}}>&#8377; 999</p>
              <p style={{color:"green",fontFamily:'bold'}}>50% OFF</p>

            </div>
        </div>
  </div>

  </Carousel.Item>
</Carousel>
<div style={{textAlign:"center",margin:'30px'}}>
<button style={{width:'300px',height:"40px",borderRadius:'30px',color:'darkblue',borderColor:'darkblue',textAlign:'center',background:'#f8f9fa'}}>Shop All Products</button>
</div>
<div className="travelHoodie">
  <img src="https://nobero.com/cdn/shop/files/TRAVEL_HOODIE_2000_x_521_px.jpg?v=1679922010&width=2000"/>
  <div className="uniqueFeatures">
<img src="https://nobero.com/cdn/shop/files/MicrosoftTeams-image_10.png?v=1678178328"/>
<button style={{height:'48px',width:'300px',background:'darkblue',borderRadius:'30px',color:'white',fontWeight:'bold'}}>Explore More</button>
</div>
</div>
</div>

<div className="blogs">

  <div style={{textAlign:'center',margin:'70px'}}><h3 style={{fontWeight:'bolder'}}>Join our 200k+ Nobero Community</h3>
  <p style={{color:'darkgray'}}>Ready, jet-Set, Go.</p>
  </div>
  <Swiper
          slidesPerView={4}
  pagination={{
    clickable: true,
    loop:true,
  }}
  navigation={true} 
  style={{ margin: '70px' }}
  className="mySwiper"
        >
          <SwiperSlide><img src='https://nobero.com/cdn/shop/files/z_Influencer_Images_0005___adnk.jpg?v=1684489098&width=2000'/></SwiperSlide>
          <SwiperSlide><img src='https://nobero.com/cdn/shop/files/1_440963f3-768f-4852-b3de-a71a130b034a.jpg?v=1680170347&width=2000'/></SwiperSlide>
          <SwiperSlide><img src='https://nobero.com/cdn/shop/files/gill_1897_ccd7582e-efd0-4120-a962-a62b791d4c32.jpg?v=1684484942&width=2000'/></SwiperSlide>
          <SwiperSlide><img src='https://nobero.com/cdn/shop/files/z_Influencer_Images_0009__kaizervaghela.jpg?v=1684487790&width=2000'/></SwiperSlide>
          <SwiperSlide><img src='https://nobero.com/cdn/shop/files/4_8a689581-cff6-461f-a96d-f5de8310d870.jpg?v=1680170347&width=2000'/></SwiperSlide>
          <SwiperSlide><img src='https://nobero.com/cdn/shop/files/5_96a1de6b-43f7-4806-9ff6-7df0946ba541.jpg?v=1680170348&width=2000'/></SwiperSlide>
          <SwiperSlide><img src='https://nobero.com/cdn/shop/files/z_Influencer_Images_0008__mancsharmaa_5.jpg?v=1684488056&width=2000'/></SwiperSlide>
          <SwiperSlide><img src='https://nobero.com/cdn/shop/files/z_Influencer_Images_0003__dhruvikx.jpg?v=1684488683&width=2000'/></SwiperSlide>
        </Swiper>

 

</div>

        </>
      )
}
