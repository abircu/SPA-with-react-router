import { useLoaderData } from "react-router-dom";
import User from "../User/User";

function Users() {
  const Users = useLoaderData();
  return (
    <div>
      <h1>users information:{Users.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-teal-300">
        {Users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
