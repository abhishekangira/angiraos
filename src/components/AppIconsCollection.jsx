import useStateActions from "../hooks/useStateActions";
import AppIcon from "./AppIcon";

export default function AppIconsCollection({ forTaskbar }) {
  const { apps } = useStateActions();
  console.log("AppIcon")
  return (
    <>
      {Object.values(apps).map((app) => {
        return forTaskbar ? (
          app.isOpen && <AppIcon key={app.id} id={app.id} forTaskbar />
        ) : (
          <AppIcon key={app.id} id={app.id} />
        );
      })}
    </>
  );
}
