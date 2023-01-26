import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "Luis fereira",
    email: "luis@spartandevs.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffect called");
  }, []);

  useEffect(() => {
    // console.log("Change form State");
  }, [formState]);

  useEffect(() => {
    // console.log("useEffect called");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-1"
        placeholder="luis@spartandevs.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        (username === 'Luis fereira') && <Message/>
      }
    </>
  );
};
