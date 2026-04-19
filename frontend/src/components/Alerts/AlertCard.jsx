export default function AlertCard({ data }) {
  if (!data) return null;

  return <div className="card alert">🔴 High Risk - {data.confidence}%</div>;
}
