import React, { useState } from "react";
import { product_data } from "../Data/product_data";
import { Product_Card } from "./Product_Card";
import { Container, Grid, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

const Product = () => {
  const param = useParams();
  const [data, setdata] = useState([...product_data]);

  return (
    <div>
      <Container maxWidth={false}>
        <Stack>
          <Grid container>
            {data.map((elem, ind) => {
              return (
                <Grid  key={ind} item xs={12} sm={6} md={4} lg={3} xl={3}>
                  <Product_Card key={elem.id} data={elem} />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </div>
  );
};

export { Product };
