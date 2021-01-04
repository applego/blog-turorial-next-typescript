import { IconButton } from "theme-ui";
import { IoMdSunny } from "react-icons/io";

export function Header() {
  return (
    <div>
      <h1>NextJS blog</h1>
      <IconButton aria-label="Toggle dark mode">
        <IoMdSunny size={28} />
      </IconButton>
    </div>
  );
}
