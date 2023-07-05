"use client";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Fab,
  Typography,
  CardActionArea,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Page() {
  /*
  const [transacoes, setTransacoes] = useState([
    "transacao 1",
    "transacao 2",
    "transacao 3",
    "transacao 4",
  ]);
  */
  const router = useRouter();
  const transacoes = [
    ["22/05/2023", 1025646, "Transferindo para o Alicino", 12.55],
    ["04/08/2022", 102, "Coxinha", 10],
    ["07/12/2023", 1025646, "Comprando chiclete", 45.22],
  ];

  const cardsTransacoes = transacoes.map((transacao) => (
    <Card
      sx={{ margin: "1rem", height: "10rem", backgroundColor: "lavenderblush" }}
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">
            Data da Transação: {transacao[0]}
          </Typography>
          <Typography variant="h6">Código: {transacao[1]}</Typography>
          <Typography variant="h6">
            Motivo da Transação: {transacao[2]}
          </Typography>
          <Typography variant="h6">
            Valor da Transação: {transacao[3]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
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
            <Typography variant="h4">Extrato Bancário</Typography>
          </Grid>
          <Grid container item spacing={1} padding={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Banco"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={"Santander"}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Agência"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="CNPJ da Agência"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Cliente"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                id="standard-basic"
                label="CPF/CNPJ do Cliente"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Nro.Conta Bancária do Cliente"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item>
              <Fab variant="extended" aria-label="add">
                <PersonIcon sx={{ mr: 1 }} />
              </Fab>
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Data de Abertura da Conta"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Transações</Typography>
              <Fab size="small" color="secondary" aria-label="add">
                <AddIcon />
              </Fab>
              {cardsTransacoes}
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Saldo Atual"
              variant="standard"
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{ shrink: true }}
              value={"R$" + " 125,55"}
            />
          </Grid>
          <Grid item sx={{ margin: "1rem" }}>
            <Fab
              variant="extended"
              color="primary"
              aria-label="add"
              onClick={() => router.push("/")}
            >
              <SearchIcon sx={{ mr: 1 }} />
              Voltar
            </Fab>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
