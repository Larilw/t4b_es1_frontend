"use client";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Fab,
  Typography,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

export default function Page() {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ backgroundColor: "white" }}
      xs={12}
    >
      <Card sx={{ width: "70rem", margin: "1rem" }}>
        <CardContent>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="h4">
              Lançamento de Transação - Conta Bancária
            </Typography>
          </Grid>
          <Grid container item spacing={1} padding={2}>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Cliente"
                variant="standard"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="CPF/CNPJ"
                variant="standard"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Nro. Conta"
                variant="standard"
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Nome Conta"
                variant="standard"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Saldo Atual"
                variant="standard"
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Data Lançamento"
                variant="standard"
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Motivo da Transação"
                variant="standard"
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Nro. Documento"
                variant="standard"
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Valor do Lançamento R$"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Fab variant="extended" color="secondary" aria-label="add">
            <SaveIcon sx={{ mr: 1 }} />
            Registrar
          </Fab>
        </CardContent>
      </Card>
    </Grid>
  );
}
