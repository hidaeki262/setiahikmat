import { Link } from "@mui/material";

export default function BasicLink({ label, href, props }) {
  return (
    <Link href={href} underline="none" color={"black"} {...props}>
      {label}
    </Link>
  );
}
