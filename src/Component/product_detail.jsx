import React from "react";
import { useParams } from "react-router-dom";
import { product_data } from "../Data/product_data";
import { Grid } from "@mui/material";

const Product_detail = () => {
  const param = useParams();
  const data = product_data.filter((elem) => {
    return elem.id == param.id;
  });
  console.log(data);
  return (
    <div>
      {data.map((pro, index) => {
       const {
        title,
        price,
        id,
        description,
        image,
        category,
        rating: { rate, count },
      } = pro;

        return( 
        <Grid container key={index}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}  style={{ marginLeft:"20px",marginTop:"60px",fontFamily:"Arial",marginInline:"60px"}}>
          <div>
          <img  style={{ width: "450px" }} src={image} />
          </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3} style={{marginTop:"130px",
          fontFamily:"Arial", marginInline:"60px"}}>
          <div>
            <h2>
              {title}
            </h2>
            <p>
              {description}
            </p>
            <h3 style={{display:"inline-block",marginInline:"10px", backgroundColor:"gray",padding:"5px"}}>
              Rate:{rate}
            </h3>
            <h3 style={{display:"inline-block",marginInline:"10px" }}>
              {count}
            </h3>
            <h1 style={{color:"orange"}}>
             $:{price}
            </h1>
            <h3>
             {category}
            </h3>

          </div>
          </Grid>
   
        </Grid>
        )
      })}
    </div>
  );
};

export default Product_detail;
