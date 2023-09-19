const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="bg-gray-300 rounded-lg p-10 m-6">
      <h3 className="text-xl font-medium">{id}</h3>
      <h1 className="text-2xl font-bold">{name}</h1>
      <h2>{email}</h2>
      <p className=" text-sky-900">{phone}</p>
    </div>
  );
};

export default User;
