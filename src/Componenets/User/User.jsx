import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="bg-gray-300 rounded-lg p-10 m-6">
      <h3 className="text-xl font-medium">{id}</h3>
      <h1 className="text-2xl font-bold">{name}</h1>
      <h2>{email}</h2>
      <p className=" text-sky-900">{phone}</p>
      <Link className="text-blue-600 font-medium text-2xl" to={`/user/${id}`}>
        <button className="bg-gray-200 rounded-lg p-2">Click me</button>
      </Link>
    </div>
  );
};

export default User;
