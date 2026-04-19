export default function UploadBox({ onDetect }) {
  return (
    <div className="card">
      <h3>Upload Asset</h3>
      <button onClick={onDetect}>Detect</button>
    </div>
  );
}
