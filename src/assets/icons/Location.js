const Location = ({ size = 25, fill = "none", stroke = "#dba765" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M52 27C52 40 32 56 32 56S12 40 12 27C12 15.954 20.954 7 32 7C43.046 7 52 15.954 52 27Z"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="32" cy="27" r="7" stroke={stroke} strokeWidth="3" />
  </svg>
);

export default Location;
