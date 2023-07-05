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
import { fetchDados } from "@/app/fetch";

export default function Page({ params }: { params: { dadosConta: string } }) {
  const dados = JSON.parse(decodeURIComponent(params.dadosConta));
  const router = useRouter();
  const [dataLancamento, setDataLancamento] = useState("");
  const [motivo, setMotivo] = useState("");
  const [nroDocumento, setNroDocumento] = useState("");
  const [valorLancamento, setValorLancamento] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const transacaoCompleta = await fetchDados(
        "lancamentotransacao/buscar/" + dados.transacao,
        "GET"
      );
      console.log(
        "dados da transacao: " +
          transacaoCompleta.motivoTransacao.nomeMotivoTransacao
      );
      setDataLancamento(transacaoCompleta.dataLancamento);
      setMotivo(transacaoCompleta.motivoTransacao.nomeMotivoTransacao);
      setNroDocumento(transacaoCompleta.nroDocumento);
      setValorLancamento(transacaoCompleta.valor);
    };
    fetchData();
  }, [router]);

  return (
    <Grid
      container
      sx={{
        backgroundColor: "white",
        paddingTop: "7.5rem",
        paddingBottom: "7.5rem",
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
                Consulta de Transação - Conta Bancária
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
                  InputLabelProps={{ shrink: true }}
                  value={dataLancamento}
                  InputProps={{
                    readOnly: true,
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
                  InputProps={{
                    readOnly: true,
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
                  InputProps={{
                    readOnly: true,
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
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
