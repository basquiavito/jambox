import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Home sweet Home</h2>
      <p>La NBA esta de regreso. Bienvenido a Jambox</p>

      <h2>Jambox es vida</h2>
      <p>Jambox provee todo lo que necesitas para crecer como baloncetista.
        Ya sea como jugador o como aficionado.
      </p>

      <h2>
        Movimientos
      </h2>

      <p>Los pies y el balon son los elementos principales del dribling. Vamos a familiarizarnos con su contenido.</p>

      <footer>Footer</footer>
    </div>
  )
}
