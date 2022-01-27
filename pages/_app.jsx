function GlobalStyle(){
    return (
        <style global jsx>{
            `
            *{
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                list-style: none;
            }

            body{
                font-family: 'Open sans', sans-serif;
            }

            html, body, #__next{
                min-height: 100vh;
                display: flex;
                flex: 1;
            }

            #__next{
                flex: 1;
            }

            #__next > * {
                flex: 1;
            }
            `
        }
        </style>
    )
}

export default function MyApp({ Component, pageProps}){

    return ( 
        <>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </>
        )
}