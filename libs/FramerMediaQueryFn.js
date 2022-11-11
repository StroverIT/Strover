import { useMediaQuery } from "./FramerMediaQuery";

export const useIsSmall = () => useMediaQuery("(min-width: 350px)");
