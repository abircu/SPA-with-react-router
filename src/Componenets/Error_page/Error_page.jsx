import { useRouteError } from "react-router-dom";

const Error_page = () => {
  const error = useRouteError();
  return (
    <div>
      <h4>Oops!!</h4>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page not found</h3>
        </div>
      )}
    </div>
  );
};

export default Error_page;
