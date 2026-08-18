const ProfessionalGuides = ({ size = 40, fill = "#dba765" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="20" r="7" stroke={fill} stroke-width="2.5" />
    <path
      d="M20 46C20 37.716 25.373 32 32 32C38.627 32 44 37.716 44 46"
      stroke={fill}
      stroke-width="2.5"
      stroke-linecap="round"
    />
    <path
      d="M23 18C24.5 13.5 28 11 32 11C36 11 39.5 13.5 41 18"
      stroke={fill}
      stroke-width="2.5"
      stroke-linecap="round"
    />
    <path
      d="M23 18H41"
      stroke={fill}
      stroke-width="2.5"
      stroke-linecap="round"
    />
    <circle cx="39" cy="36" r="3" stroke={fill} stroke-width="2" />
    <path
      d="M48 30L52 50"
      stroke={fill}
      stroke-width="2.5"
      stroke-linecap="round"
    />

    <path
      d="M46 30H50"
      stroke={fill}
      stroke-width="2.5"
      stroke-linecap="round"
    />
  </svg>
);

export default ProfessionalGuides;
