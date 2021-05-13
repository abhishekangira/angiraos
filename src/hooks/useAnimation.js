import { useSpring } from "@react-spring/web";

const useAnimation = (animation) => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });
  switch (animation) {
    case "fade":
      return fade;
    default:
      throw new Error("Invalid Animation");
  }
};

export default useAnimation;
