export default function DiscoveryList({ data }) {
  if (!data) return null;

  return (
    <div className="card">
      <h3>Discovery</h3>
      {data.map((d, i) => (
        <p key={i}>
          {d.platform} - {d.engagement}
        </p>
      ))}
    </div>
  );
}
