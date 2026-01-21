"use client";

import { Dialog, DialogContent, DialogTitle,Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface MovieModalProps {
  open: boolean;
  onClose: () => void;
  movie: any | null;
}

export default function MovieModal({ open, onClose, movie }: MovieModalProps) {
  if (!movie) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ pr: 5 }}>
        {movie.title}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {movie.original_title}
        </Typography>

        <Typography variant="body1">
          {movie.overview || "Sinopse não disponível."}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
