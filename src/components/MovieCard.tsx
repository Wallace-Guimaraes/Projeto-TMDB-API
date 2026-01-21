"use client";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface MovieCardProps {
  movie: any;
  onClick: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <Card 
      onClick={onClick}
      sx={{
        width: 200,
        cursor: "pointer",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{backgroundColor: "#494949"}}>
        <Typography variant="subtitle2" color="white" noWrap>
          {movie.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
