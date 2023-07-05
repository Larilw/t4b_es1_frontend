"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Fab, TextField, Grid } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export default function Home() {
  const router = useRouter();
  const [conta, setConta] = React.useState("");
  //  onClick={() => router.push("/contaBancaria/transacao")}

  return (
    <main className={styles.main}>
      <Grid container xs={10}>
        <Grid item xs={6}>
          <Image src="/banco.png" width={440} height={440} alt="Banco" />
        </Grid>
        <Grid
          container
          item
          xs={4}
          justifyContent={"center"}
          alignItems={"flex-start"}
          sx={{
            backgroundColor: "white",
            borderRadius: "1rem",
            height: "12rem",
            marginTop: "8rem",
          }}
        >
          <Grid item container xs={6}>
            <Typography sx={{ color: "black", marginTop: "1rem" }}>
              Acessar Conta Bancária
            </Typography>
            <Grid
              item
              container
              justifyContent={"center"}
              xs={12}
              sx={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <TextField
                label="Número da Conta"
                variant="outlined"
                value={conta}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setConta(event.target.value);
                }}
              />
            </Grid>
            <Grid item container justifyContent={"center"} xs={12}>
              <Fab
                variant="extended"
                color="secondary"
                onClick={() => router.push("/contaBancaria/extrato/" + conta)}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Acessar
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
