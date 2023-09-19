import { useActionData, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, address, website } = user;
  return (
    <div className="  bg-sky-300 rounded-lg shadow-lg p-6 m-6">
      <h1 className="text-3xl font-bold text-black">{name}</h1>
      <h1 className="text-2xl font-bold text-black">{address.street}</h1>
      <h1 className="text-2xl font-bold text-black">{address.suite}</h1>
      <h1 className="text-2xl font-bold text-black">{address.city}</h1>
      <h1 className="text-xl font-bold text-black">{address.zipcode}</h1>
      <h1 className="text-xl font-bold text-black">{website}</h1>
    </div>
  );
};

export default UserDetails;
