"use client";

import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 3,
        textAlign: "center",
        backgroundColor: theme => theme.palette.grey[900],
        color: "#fff",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Projeto de Wallace Guimarães | TMDB API de Filmes
      </Typography>

      <Typography variant="body2">
        Dados fornecidos por{" "}
        <Link
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener"
          color="inherit"
          underline="hover"
        >
          TMDB
        </Link>
      </Typography>
    </Box>
  );
}
