export default function AttributionCard({ data }) {
  if (!data) return null;

  return (
    <div className="card">
      <h3>Attribution</h3>
      <p>Offender: {data.offender}</p>
      <p>Repeat: {data.repeat ? "Yes" : "No"}</p>
    </div>
  );
}
