import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import { Backdrop, CircularProgress } from '@mui/material';
import React from "react";
import appConfig from "../config.json";
import { useRouter } from "next/router"
import {ButtonSendSticker} from "../src/components/ButtonSendSticker"
import { createClient } from '@supabase/supabase-js'

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzU2NDMzNSwiZXhwIjoxOTU5MTQwMzM1fQ.IkzH1xC7smVNoD-HeuCl8H4H2yvGl9kBkNxP6n8eZYU'
const SUPABASE_URL = 'https://vdxbonxyqcnlsnexuonn.supabase.co'

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

function EscutaMensagemEmTempoReal(){
  return supabaseClient
    .from('mensagens')
    .on('INSERT', (oqueVeio) =>{
      console.log("O que ve",oqueVeio)
    })
    .subscribe();
}

export default function ChatPage() {
  // Sua lógica vai aqui
  const [mensagem, setMensagem] = React.useState("");
  const roteamento = useRouter()
  const usuarioLogado = roteamento.query.username
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]);
  const [backdrop, setBackdrop] = React.useState(true);
  // ./Sua lógica vai aqui

    React.useEffect(() =>{
      supabaseClient
      .from('mensagens')
      .select('*')
      .order('id', { ascending: false})
      .then(({ data }) =>{
        console.log('Dados da consulta')
        setListaDeMensagens(data)
        setBackdrop(false);

      })

      EscutaMensagemEmTempoReal()
    }, [])


  function handleNovaMensagem(novaMensagem) {

    if (novaMensagem.length == 0)
    return;


    const mensagem = {
      //id: listaDeMensagens.length + 1,
      de: usuarioLogado,
      texto: novaMensagem,
    };

    supabaseClient
    .from('mensagens')
    .insert([
      mensagem
    ])
    .then( ({data}) =>{
      setListaDeMensagens([data[0], ...listaDeMensagens]);
      setMensagem("");
    })

  }


  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100vh",
          padding: "20px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",

            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList mensagens={listaDeMensagens} setMensagens={setListaDeMensagens} setBackdrop={setBackdrop}/>
          {/*{listaDeMensagens.map((mensagemAtual) =>{
                        return (
                        <li key={mensagemAtual.id}>
                            {mensagemAtual.de}:{mensagemAtual.texto}
                        </li>
                        )
                    })}*/}

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
              
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const value = event.target.value;
                setMensagem(value);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />

          <ButtonSendSticker onStickerClick={(sticker) => {
              console.log('[Usando o component]', sticker)
              handleNovaMensagem(':sticker:' + sticker)
          }}/>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={backdrop}
              >
                <CircularProgress color='inherit' />
              </Backdrop>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          href="/"
          iconName= "FaArrowRight"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  console.log(props);
  var {mensagens, setMensagens, setBackdrop} = props;

  function handleApagaMensagem(id) {

    setBackdrop(true);

    supabaseClient
      .from('mensagens')
      .delete()
      .match({ id: id })
      .then(() => {
        var newMsgs = mensagens.filter((msg) => msg.id != id);
        setMensagens(newMsgs);

        setBackdrop(false);
      });
  }

  return (
    <Box
      tag="ul"
      styleSheet={{
        overflowY: "scroll",
        scrollBehavior: 'smooth',
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
    }
    }
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                position: 'relative',
                marginBottom: "8px",
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <a href={`https://github.com/${mensagem.de}`}>
              <Image alt="pessoa"
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                  'hover':{
                    transform: 'scale(1.1)'
                  }
                }}
                src={`https://github.com/${mensagem.de}.png`}/>
              </a>
              <Text tag="strong">{mensagem.de}</Text>
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
              <Button
              label='&#x2718;'
              onClick={() => handleApagaMensagem(mensagem.id)}
              styleSheet={{
                position: 'absolute',
                right: '0',
                marginRight: '10px',
                width: '10px',
                height: '10px'
              }} />
            </Box>

              {mensagem.texto.startsWith(':sticker:') 
                  ?(
                    <Image alt="sticker" src={mensagem.texto.replace(':sticker:', '')} 
                    styleSheet={
                      {
                        width: {
                          xs: '200px',
                          sm: '290px',
                        }                        
                      }}/>
                    )
                  :(
                    mensagem.texto
                  )}
          </Text>

        );
      })}
    </Box>
  );
}
