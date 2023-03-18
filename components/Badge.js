export default function Badge({ variation }) {
  const arrow = variation > 0 ? '↑' : '↓';
  const badgeColor = variation > 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600';

  return (
    <span className={`${badgeColor} text-md inline-flex items-center gap-1 rounded-full px-2 py-1 font-semibold`}>
      {arrow} {Math.abs(variation)}
    </span>
  );
}