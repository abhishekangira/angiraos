import { useSpring } from "@react-spring/web";

const useSpringAnimation = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });
  return { fade };
};

export default useSpringAnimation;
