import { useSpring } from "@react-spring/web";

const useAnimation = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });
  return { fade };
};

export default useAnimation;
