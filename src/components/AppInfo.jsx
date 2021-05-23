import EcomInfo from "./apps/ecom/EcomInfo";
import MyflixInfo from "./apps/myflix/MyflixInfo";

export default function AppInfo({ id }) {
  switch (id) {
    case "ecom":
      return <EcomInfo />;
    case "myflix":
      return <MyflixInfo />;
    default:
      return <MyflixInfo />;
  }
}
