import { useContext } from "react";
import UserContext from "../content/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please Log In</div>;
  }

  return <div>Welcome {user.username}</div>;
}

export default Profile;
