"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{backgroundColor: "#1e1e1e"}}>
      <Toolbar>
        <Typography variant="h6" ml={6}>
          Projeto TMDB API de Filmes
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
