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

import { useEffect, useState } from "react";
import { fetchDados } from "@/app/fetch";

export default function Page({ params }: { params: { conta: number } }) {
  const router = useRouter();
  const [banco, setBanco] = useState("");
  const [agencia, setAgencia] = useState("");
  const [cnpjAgencia, setCnpjAgencia] = useState("");
  const [cliente, setCliente] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [nroContaCliente, setNroContaCliente] = useState("");
  const [dataAbertura, setDataAbertura] = useState("");
  const [saldoAtual, setSaldoAtual] = useState("");
  const [transacoes, setTransacoes] = useState<any[]>([]);
  const [transacaoSelecionada, setTransacaoSelecionada] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const extratoCompleto = await fetchDados(
        "contabancaria/buscar/" + params.conta,
        "GET"
      );
      setBanco(extratoCompleto.agenciaResponsavel.banco.nomeCompleto);
      setAgencia(extratoCompleto.agenciaResponsavel.nroAgencia);
      setCnpjAgencia(extratoCompleto.agenciaResponsavel.banco.cnpj);
      setCliente(extratoCompleto.clienteDono.dadosCliente.nomeCompleto);
      if (extratoCompleto.clienteDono.pessoaFisica) {
        setCpfCliente(extratoCompleto.clienteDono.dadosCliente.cpf);
      } else setCpfCliente(extratoCompleto.clienteDono.dadosCLiente.cnpj);
      setNroContaCliente(extratoCompleto.nroContaBancaria);
      setDataAbertura(extratoCompleto.dataAberturaConta);
      setSaldoAtual(extratoCompleto.saldoAtual);
      setTransacoes(extratoCompleto.lancamentos);
    };
    fetchData();
  }, [router]);

  interface DadosConta {
    banco: string;
    agencia: string;
    cnpjAgencia: number;
    cliente: string;
    cpfCnpj: number;
    nroConta: number;
    dataAbertura: string;
    saldo: number;
  }

  interface DadosContaTransacao {
    cliente: string;
    cpfCnpj: string;
    nroConta: string;
    saldo: string;
    transacao: string;
  }

  const dadosTeste: DadosContaTransacao = {
    cliente: cliente,
    cpfCnpj: cpfCliente, // número do CPF ou CNPJ
    nroConta: nroContaCliente, // número da conta
    saldo: saldoAtual, // saldo da conta
    transacao: transacaoSelecionada,
  };

  const jsonString = JSON.stringify(dadosTeste);
  const decodedString = decodeURIComponent(jsonString);

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
                value={banco}
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
                value={agencia}
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
                value={cnpjAgencia}
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
                value={cliente}
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
                value={nroContaCliente}
              />
            </Grid>
            <Grid item>
              <Fab
                variant="extended"
                aria-label="add"
                onClick={() =>
                  router.push(
                    "/contaBancaria/extrato/cliente/" + dadosTeste.nroConta
                  )
                }
              >
                <PersonIcon sx={{ mr: 1 }} />
                Perfil
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
                value={dataAbertura}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Transações</Typography>
              <Fab
                size="small"
                color="secondary"
                aria-label="add"
                onClick={() =>
                  router.push("/contaBancaria/transacao/" + decodedString)
                }
              >
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
              value={"R$" + saldoAtual}
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
