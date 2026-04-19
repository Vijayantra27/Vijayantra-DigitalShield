export default function ComparisonCard({ data }) {
  if (!data) return null;

  return (
    <div className="card">
      <h3>Comparison</h3>
      <p>Confidence: {data.confidence}%</p>
      <p>Transformation: {data.transformation}</p>
    </div>
  );
}
