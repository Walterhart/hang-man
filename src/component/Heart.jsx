// src/components/Heart.jsx
export default function Heart({ broken }) {
  return (
    <div className="heart">
      <img
        src="/images/16x16 Heart Health Red.png"
        alt={broken ? "broken heart" : "heart"}
      />
    </div>
  );
}
