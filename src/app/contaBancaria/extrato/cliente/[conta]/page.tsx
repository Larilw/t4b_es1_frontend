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
  const [transacoes, setTransacoes] = useState<any[]>([]);
  const [transacaoSelecionada, setTransacaoSelecionada] = useState("");

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
        clienteCompleto.dadosCLiente.enderecoPrincipal.endereco.bairro.bairro
      );
      setLogradouro(
        clienteCompleto.dadosCLiente.enderecoPrincipal.endereco.logradouro
          .logradouro
      );
      setTipoLogradouro(
        clienteCompleto.dadosCLiente.enderecoPrincipal.endereco.logradouro
          .tipoLogradouro.tipoLogradouro
      );
      setNumeroEndereco(
        clienteCompleto.dadosCLiente.enderecoPrincipal.numeroEndereco
      );
      if (clienteCompleto.clienteDono.pessoaFisica) {
        setCpfCliente(clienteCompleto.clienteDono.dadosCliente.cpf);
      } else setCpfCliente(clienteCompleto.clienteDono.dadosCLiente.cnpj);
    };
    fetchData();
  }, [router]);

  /*
  const cardsTransacoes = transacoes.map((transacao) => (
    <Card
      sx={{ margin: "1rem", height: "10rem", backgroundColor: "lavenderblush" }}
    >
      <CardActionArea
        onClick={() => {
          setTransacaoSelecionada(transacao.idLancamentoTransacao);
          dadosTeste.transacao = transacao.idLancamentoTransacao;
          const jsonString = JSON.stringify(dadosTeste);
          const decodedString = decodeURIComponent(jsonString);
          router.push("/contaBancaria/transacao/consultar/" + decodedString);
        }}
      >
        <CardContent>
          <Typography variant="h6">
            Data da Transação: {transacao.dataLancamento}
          </Typography>
          <Typography variant="h6">
            Código: {transacao.idLancamentoTransacao}
          </Typography>
          <Typography variant="h6">
            Motivo da Transação: {transacao.motivoTransacao.nomeMotivoTransacao}
          </Typography>
          <Typography variant="h6">
            Valor da Transação: R$ {transacao.valor}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
  */
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
                fullWidth
                id="standard-basic"
                label="Sexo do Cliente"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={sexo}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Atividade Comercial"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={atividadeComercial}
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
            <Grid item xs={12}>
              <Typography variant="h5">Transações</Typography>
              {/*{cardsTransacoes}*/}
            </Grid>
          </Grid>
          <Grid item sx={{ margin: "1rem" }}></Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
