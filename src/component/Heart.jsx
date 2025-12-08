export default function Heart({ broken, justBroken }) {
  return (
    <div className={`heart ${broken ? 'broken' : ''} ${justBroken ? 'taking-damage' : ''}`}>
      <img
        src="/images/16x16 Heart Health Red.png"
        alt={broken ? "broken heart" : "heart"}
      />
    </div>
  );
}