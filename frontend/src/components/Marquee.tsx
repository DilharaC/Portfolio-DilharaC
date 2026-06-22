import { MARQUEE_ITEMS } from "../data/content";

export default function Marquee() {
  // Render the list twice so the looping translateX(-50%) animation is seamless.
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div className="marquee-item" key={`${item.label}-${i}`}>
            <i className={item.icon}></i>
            <strong>{item.label}</strong>
            <span className="marquee-sep">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
