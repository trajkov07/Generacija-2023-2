import { useState, useEffect } from "react";

export const SimpleForm = () => {
  // dokolku ne specificirame type vo <input> po default e tekstualno pole
  const initialValues = { username: "", email: "", password: "", captcha: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");

  let handleChange = (e) => {
    // let value = e.target.value;
    console.log(e);
    console.log(e.target);
    const { name, value } = e.target; // destrukturiranje
    // ...formValue - ova pravi kopija na site propetija vo nov objekt
    // [name] : value - so ova go setirame propertyto(klucot)
    // sto nam ni treba
    setFormValues({ ...formValues, [name]: value });

    // Ova dokolku odime peski
    // if(name === 'username') {
    //     // change the username
    // }

    // if(name === 'email') {
    //     // change the email
    // }
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  let handleSubmit = (e) => {
    e.preventDefault(); // prevent the form from default submitting
    // basicaly saying dont submit the form, I know what I am doing
    setIsSubmit(true);
  };

  return (
    <div>
      <form>
        <h1>Login Form</h1>
        <div>
          <div>
            <label>Username</label>
            <input
              name="username"
              placeholder="enter username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              placeholder="enter email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              placeholder="enter password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Captcha</label>
            <input
              name="captcha"
              placeholder="enter captcha"
              value={formValues.captcha}
              onChange={handleChange}
            />
          </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {
        // se sto ne e eksplicitno false ili empty e true
      }
      {isSubmit && <div>Signed in successfully</div>}
    </div>
  );
};
