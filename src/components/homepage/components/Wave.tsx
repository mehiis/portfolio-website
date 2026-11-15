export function Wave({
  flipped = false,
  waveColor = "#FFF292",
  baseColor = "#FAFAFA",
}: {
  flipped?: boolean;
  waveColor?: string;
  baseColor?: string;
}) {
  return (
    <div
      style={{ backgroundColor: baseColor }}
      className="w-full h-12 sm:h-16 md:h-24 select-none pointer-events-none"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ transform: flipped ? "scaleY(-1)" : undefined }}
        className="block w-full h-full origin-center"
      >
        <path
          d="M0 47L15 47.8C30 48.7 60 50.3 90 52.5C120 54.7 150 57.3 180 55C210 52.7 240 45.3 270 42.2C300 39 330 40 360 44.3C390 48.7 420 56.3 450 56.2C480 56 510 48 540 46C570 44 600 48 630 50.8C660 53.7 690 55.3 720 55.8C750 56.3 780 55.7 810 53.2C840 50.7 870 46.3 900 47.3C930 48.3 960 54.7 990 56.7C1020 58.7 1050 56.3 1080 52C1110 47.7 1140 41.3 1170 40.7C1200 40 1230 45 1260 49.5C1290 54 1320 58 1350 57.7C1380 57.3 1410 52.7 1425 50.3L1440 48L1440 0L1425 0C1410 0 1380 0 1350 0C1320 0 1290 0 1260 0C1230 0 1200 0 1170 0C1140 0 1110 0 1080 0C1050 0 1020 0 990 0C960 0 930 0 900 0C870 0 840 0 810 0C780 0 750 0 720 0C690 0 660 0 630 0C600 0 570 0 540 0C510 0 480 0 450 0C420 0 390 0 360 0C330 0 300 0 270 0C240 0 210 0 180 0C150 0 120 0 90 0C60 0 30 0 15 0L0 0Z"
          fill={waveColor}
        />
      </svg>
    </div>
  );
}

export default Wave;

