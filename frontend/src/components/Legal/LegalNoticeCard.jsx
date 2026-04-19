export default function LegalNoticeCard({ notice }) {
  if (!notice) return null;

  return (
    <div className="card">
      <h3>Legal Notice</h3>
      <pre>{notice}</pre>
    </div>
  );
}
