import Head from 'next/head';
import PlayersTable from '/components/PlayersTable';

import { getSortedPlayersData } from '/lib/players';

export async function getStaticProps() {
  const players = getSortedPlayersData();
  return {
    props: {
      players,
    },
  };
}

export default function Home({players}) {
  return (
    <>
      <Head>
        <title>Live Ratings</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold text-gray-900 text-center p-5">Live Ratings</h1>
        <div className="md:container md:mx-auto">
          <PlayersTable players={players}/>
        </div>
      </main>
    </>
  );
}
