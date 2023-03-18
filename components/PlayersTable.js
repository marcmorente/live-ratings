import Badge from "./Badge";

export default function PlayersTable({ players }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 table-auto">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 w-32 text-left">
              Nom
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 w-32 text-center">
              ELO
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 w-40 text-center">
              Variació
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {players.map((player) => {
            const elo = player.elo + player.eloChange;
            const playerName = player.name.split(',')[1];
            const playerSurname = player.name.split(',')[0];
            return (
              <tr key={player.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-700 text-left">{playerName} {playerSurname}</td>
                <td className="px-6 py-4 font-medium text-gray-700 text-center">{elo}</td>
                <td className="px-6 py-4 text-center">
                  <Badge variation={player.eloChange} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}