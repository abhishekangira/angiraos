import useStateActions from "../hooks/useStateActions";
import Window from "./Window";

export default function WindowsCollection() {
  const { apps } = useStateActions();

  return (
    <>
      <div
        id="boundary"
        style={{
          position: "fixed",
          top: 0,
          left: -2500,
          width: "5000px",
          height: "5000px",
          zIndex: -10,
        }}
      ></div>
      {Object.values(apps).map((app) => app.isOpen && <Window key={app.id} id={app.id} />)}
    </>
  );
}
