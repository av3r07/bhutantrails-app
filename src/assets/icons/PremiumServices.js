const PremiumServices = ({ size = 40, fill = "#dba765" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 10L51 29L32 54L13 29L32 10Z"
      stroke={fill}
      stroke-width="2.5"
      stroke-linejoin="round"
    />
    <path
      d="M32 10L24 29L32 54L40 29L32 10Z"
      stroke={fill}
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path d="M13 29H51" stroke={fill} stroke-width="2" stroke-linecap="round" />
    <path
      d="M48 11V19M44 15H52"
      stroke={fill}
      stroke-width="2.5"
      stroke-linecap="round"
    />
  </svg>
);

export default PremiumServices;
