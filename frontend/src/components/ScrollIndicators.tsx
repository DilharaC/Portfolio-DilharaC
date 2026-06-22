interface ScrollIndicatorsProps {
  progressPct: number;
  trackFillPct: number;
}

export default function ScrollIndicators({
  progressPct,
  trackFillPct,
}: ScrollIndicatorsProps) {
  return (
    <>
      <div className="progress-bar" style={{ width: `${progressPct}%` }}></div>

      <div className="scroll-track">
        <span className="scroll-track-label">scroll</span>
        <div className="scroll-track-line">
          <div
            className="scroll-track-fill"
            style={{ height: `${trackFillPct}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}
