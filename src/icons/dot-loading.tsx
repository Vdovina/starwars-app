export const DotLoading = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="24" viewBox="0 0 40 24">
    <circle cx="40" cy="12" r="0" fill="currentColor">
      <animate
        attributeName="r"
        begin=".67"
        calcMode="spline"
        dur="1.5s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
        repeatCount="indefinite"
        values="0;6;0;0"
      />
    </circle>
    <circle cx="20" cy="12" r="0" fill="currentColor">
      <animate
        attributeName="r"
        begin=".33"
        calcMode="spline"
        dur="1.5s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
        repeatCount="indefinite"
        values="0;6;0;0"
      />
    </circle>
    <circle cx="0" cy="12" r="0" fill="currentColor">
      <animate
        attributeName="r"
        begin="0"
        calcMode="spline"
        dur="1.5s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
        repeatCount="indefinite"
        values="0;6;0;0"
      />
    </circle>
  </svg>
);
