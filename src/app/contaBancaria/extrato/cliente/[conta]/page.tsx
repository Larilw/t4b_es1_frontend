"use client";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CardActionArea,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { fetchDados } from "@/app/fetch";

export default function Page({ params }: { params: { conta: number } }) {
  const router = useRouter();
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [cep, setCep] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [uf, setUf] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [tipoLogradouro, setTipoLogradouro] = useState("");
  const [numeroEndereco, setNumeroEndereco] = useState("");
  const [complementoEndereco, setComplementoEndereco] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [rgCliente, setRgCliente] = useState("");
  const [sexo, setSexo] = useState("");
  const [atividadeComercial, setAtividadeComercial] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const clienteCompleto = await fetchDados(
        "cliente/buscar/" + params.conta,
        "GET"
      );
      setNomeCompleto(clienteCompleto.dadosCliente.nomeCompleto);
      setCep(clienteCompleto.dadosCliente.enderecoPrincipal.endereco.cep);
      setMunicipio(
        clienteCompleto.dadosCliente.enderecoPrincipal.endereco.municipio
          .municipio
      );
      setUf(
        clienteCompleto.dadosCliente.enderecoPrincipal.endereco.municipio
          .unidadeFederativa.unidadeFederativa
      );
      setBairro(
        clienteCompleto.dadosCliente.enderecoPrincipal.endereco.bairro.bairro
      );
      setLogradouro(
        clienteCompleto.dadosCliente.enderecoPrincipal.endereco.logradouro
          .logradouro
      );
      setTipoLogradouro(
        clienteCompleto.dadosCliente.enderecoPrincipal.endereco.logradouro
          .tipoLogradouro.tipoLogradouro
      );
      setNumeroEndereco(
        clienteCompleto.dadosCliente.enderecoPrincipal.numeroEndereco
      );
      setComplementoEndereco(
        clienteCompleto.dadosCliente.enderecoPrincipal.complemento
      );
      setSexo(clienteCompleto.dadosCliente.sexo);
      setRgCliente(clienteCompleto.dadosCliente.rg.numeroRG);
      if (clienteCompleto.pessoaFisica) {
        setCpfCliente(clienteCompleto.dadosCliente.cpf);
      } else setCpfCliente(clienteCompleto.dadosCliente.cnpj);
    };
    fetchData();
  }, [router]);

  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        backgroundColor: "white",
        paddingTop: "7.5rem",
        paddingBottom: "7.5rem",
      }}
      xs={12}
    >
      <Card sx={{ width: "70rem", margin: "1rem" }}>
        <CardContent>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="h4">Cliente</Typography>
          </Grid>
          <Grid container item spacing={1} padding={2}>
            <Grid item xs={7}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Nome Completo"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={nomeCompleto}
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
                value={cpfCliente}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="standard-basic"
                label="RG"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={rgCliente}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Endereço</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                id="standard-basic"
                label="CEP"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={cep}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Município"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={municipio}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Unidade Federativa"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={uf}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Bairro"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={bairro}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Logradouro"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={logradouro}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Tipo Logradouro"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={tipoLogradouro}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Número Endereço"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={numeroEndereco}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Complemento Endereço"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={complementoEndereco}
              />
            </Grid>
          </Grid>
          <Grid item sx={{ margin: "1rem" }}></Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
