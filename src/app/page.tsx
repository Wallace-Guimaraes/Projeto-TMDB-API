"use client";

import { Container, Snackbar } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { getPopularMovies } from "@/src/services/tmdb";
import MovieCard from "@/src/components/MovieCard";
import MovieModal from "@/src/components/MovieModal";
import Loading from "@/src/components/Loading";
import { Pagination, Stack } from "@mui/material";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleOpenModal = (movie: any) => {
    setSelectedMovie(movie);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedMovie(null);
  };
  

  useEffect(() => {
  setLoading(true);

  getPopularMovies(page)
    .then(res => {
      setMovies(res.data.results);
      setTotalPages(Math.min(res.data.total_pages, 50));
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false));
  }, [page]);


  if (loading) return <Loading />;

  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        {movies.map(movie => (
          <Grid 
            item
            xs={12}
            sm={6}
            md={4}
            key={movie.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <MovieCard
              movie={movie}
              onClick={() => handleOpenModal(movie)}
            />
          </Grid>
        ))}
      </Grid>

      <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
        />
      </Stack>

      <MovieModal
        open={openModal}
        onClose={handleCloseModal}
        movie={selectedMovie}
      />

      <Snackbar
        open={error}
        message="Erro ao carregar filmes"
        autoHideDuration={3000}
      />
    </Container>
  );
}
