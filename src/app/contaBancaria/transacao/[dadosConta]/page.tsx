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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import InputMask from "react-input-mask";

export default function Page({ params }: { params: { dadosConta: string } }) {
  const dados = JSON.parse(decodeURIComponent(params.dadosConta));
  const router = useRouter();
  const [dataLancamento, setDataLancamento] = useState("");
  const [motivo, setMotivo] = useState("");
  const [nroDocumento, setNroDocumento] = useState("");
  const [valorLancamento, setValorLancamento] = useState("");

  return (
    <Grid
      container
      sx={{
        backgroundColor: "white",
        paddingTop: "6.1rem",
        paddingBottom: "6.1rem",
      }}
    >
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
                  value={dados.cliente}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="CPF/CNPJ"
                  variant="standard"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={dados.cpfCnpj}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Nro. Conta"
                  variant="standard"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={dados.nroConta}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Saldo Atual"
                  variant="standard"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={"R$ " + dados.saldo}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Data Lançamento"
                  variant="standard"
                  helperText="DD/MM/AAAA"
                  InputLabelProps={{ shrink: true }}
                  value={dataLancamento}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setDataLancamento(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Motivo da Transação"
                  variant="standard"
                  InputLabelProps={{ shrink: true }}
                  value={motivo}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setMotivo(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Nro. Documento"
                  variant="standard"
                  InputLabelProps={{ shrink: true }}
                  value={nroDocumento}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setNroDocumento(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Valor do Lançamento"
                  variant="standard"
                  InputLabelProps={{ shrink: true }}
                  value={valorLancamento}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValorLancamento(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Fab
              variant="extended"
              color="secondary"
              aria-label="add"
              onClick={() =>
                router.push("/contaBancaria/extrato/" + dados.nroConta)
              }
            >
              <SaveIcon sx={{ mr: 1 }} />
              Registrar
            </Fab>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
