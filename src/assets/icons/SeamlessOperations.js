const SeamlessOperations = ({ size = 40, fill = "#dba765" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 32C18 24.268 24.268 18 32 18H42"
      stroke={fill}
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M42 18L37 13M42 18L37 23"
      stroke={fill}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M46 32C46 39.732 39.732 46 32 46H22"
      stroke={fill}
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M22 46L27 41M22 46L27 51"
      stroke={fill}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle cx="18" cy="32" r="4" fill={fill} />
    <circle cx="46" cy="32" r="4" fill={fill} />
  </svg>
);

export default SeamlessOperations;
