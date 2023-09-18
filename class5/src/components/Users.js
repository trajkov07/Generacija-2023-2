import { useState, useEffect } from "react";

export const Users = (props) => {
  const [usersToShow, setUsersToShow] = useState(props.users);
  const [value, setValue] = useState("");

  let changeValue = (event) => {
    let newValue = event.target.value;
    setValue(newValue);
    console.log(value);
  };

  useEffect(() => {
    if (value) {
      const filteredUsers = usersToShow.filter((user) => {
        return user.name.includes(value) || user.username.includes(value);
      });
      console.log(filteredUsers);
      setUsersToShow(filteredUsers);
    } else {
      setUsersToShow(props.users); // call to api
    }
  }, [value]);

  return (
    <div>
      <div>
        <h1>Filter here</h1>
        <input placeholder="Filter here" value={value} onChange={changeValue} />
      </div>
      <div>
        {usersToShow.map((user, i) => {
          return (
            <>
              <div key={i}>
                <p> Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Website: {user.website}</p>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};
