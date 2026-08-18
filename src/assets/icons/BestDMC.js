const BestDMC = ({ size = 40, fill = "#dba765" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 54C32 54 47 39.5 47 25C47 16.716 40.284 10 32 10C23.716 10 17 16.716 17 25C17 39.5 32 54 32 54Z"
      stroke={fill}
      stroke-width="2.5"
      stroke-linejoin="round"
    />
    <path
      d="M22 34L29 25L34 31L38 27L44 35"
      stroke={fill}
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29 25L31 28L34 31"
      stroke={fill}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43 9L44.5 12.5L48 14L44.5 15.5L43 19L41.5 15.5L38 14L41.5 12.5L43 9Z"
      fill={fill}
    />
  </svg>
);

export default BestDMC;
