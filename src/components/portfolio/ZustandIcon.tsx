import type { IconBaseProps } from "react-icons";

export function ZustandIcon(props: IconBaseProps) {
  const { size = "1em", color = "#ED8936", ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      role="img"
      aria-hidden
      {...rest}
    >
      <path d="M12 2.5c-2.2 0-4.2 1-5.5 2.6C4.9 4.4 3.5 4 2 4 0.9 4 0 4.9 0 6s0.9 2 2 2c0.2 0 .4 0 .6-0.1C1.6 9.5 0.5 11.6 0.5 14c0 3.6 2.9 6.5 6.5 6.5 1.1 0 2.1-0.3 3-0.8 0.9 1.2 2.3 2 3.9 2s3-0.8 3.9-2c0.9 0.5 1.9 0.8 3 0.8 3.6 0 6.5-2.9 6.5-6.5 0-2.4-1.1-4.5-2.8-5.9 0.2 0 0.4 0.1 0.6 0.1 1.1 0 2-0.9 2-2s-0.9-2-2-2c-1.5 0-2.9 0.4-4.1 1.1C16.2 3.5 14.2 2.5 12 2.5z" />
    </svg>
  );
}
