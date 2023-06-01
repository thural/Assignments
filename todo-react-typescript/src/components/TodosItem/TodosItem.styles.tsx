import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

export const TodoItemContainer = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: "0",
  margin: "0",
  });

export const ButtonBack = styled(Link)(({ theme }: any) => ({
  fontWeight: theme.typography.fontWeightBold,
  display: "inline-block",
  textDecoration: "none",
  fontSize: "1.2rem",
  textTransform: "uppercase",
  backgroundColor: theme.palette.secondary.dark,
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "100px",
  transition: "0.4s",
  margin: "1.5rem",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export const DetailsBox = styled(Box)({
  padding: "6rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const Text = styled(Typography)(({ theme }: any) => ({
  fontFamily: theme.typography.inherit.fontFamily,
  color: "#495057",
  borderBottom: "1px solid #dee2e6",
  paddingBottom: "2rem",
  fontWeight: "600",
}));
