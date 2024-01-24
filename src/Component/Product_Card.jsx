import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Product_Card({ data }) {
  
  const params = useNavigate()
  const Click_Handle = ()=>{
  //  console.log("param",  params);
    params(`/product/${id}`)
  }
  const {
    title,
    price,
    id,
    description,
    image,
    category,
    rating: { rate, count },
  } = data;

  return (
    <Card
      sx={{
        maxWidth: "100%",
        marginInline: "5px",
        padding: "5px",
        marginBottom: "20px",
      }}
    >
      <CardActionArea onClick={Click_Handle}>
        <CardMedia
          sx={{ height: 400, width: "100%" }}
          component="img"
          image={image}
          alt="green"
        />
        <CardContent>
          <Stack flexDirection="row" gap={2} sx={{ padding: "5px" }}>
            <Typography
              component="div"
              sx={{ bgcolor: "gray", padding: "5px" }}
            >
              Rate:{rate}
            </Typography>
            <Typography component="div">{count}</Typography>
          </Stack>
          <Stack>
            <Typography noWrap gutterBottom variant="h6" component="div">
              {title.substring(0, 19)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.substring(0, 45)}...
            </Typography>
            <Typography
              noWrap
              gutterBottom
              variant="h6"
              color="orange"
              fontSize="30px"
              fontWeight="800"
            >
              $:{price}
            </Typography>
          </Stack>

          <Stack flexDirection="row" alignItems="center" gap={1}>
            <Typography>{category}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
