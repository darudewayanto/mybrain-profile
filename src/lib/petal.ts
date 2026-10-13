// Geometry for the quadrant "petal" charts: a wedge from the centre whose length scales with the score.
const rad = (d: number) => (d * Math.PI) / 180;

export const petal = (angle: number, len: number, half = 30) => {
  const p1 = [Math.cos(rad(angle - half)) * len, Math.sin(rad(angle - half)) * len];
  const p2 = [Math.cos(rad(angle + half)) * len, Math.sin(rad(angle + half)) * len];
  return `M0 0 L${p1[0].toFixed(1)} ${p1[1].toFixed(1)} A${len} ${len} 0 0 1 ${p2[0].toFixed(1)} ${p2[1].toFixed(1)} Z`;
};

export const polar = (angle: number, d: number) => [Math.cos(rad(angle)) * d, Math.sin(rad(angle)) * d];

// Angles follow the official artwork: Reasoning top-left, Spontaneous top-right, Feeling bottom-right, Specific bottom-left.
export const quadAngles = { reasoning: -135, spontaneous: -45, feeling: 45, specific: 135 } as const;
