import { useState, useEffect } from "react";

export const SimpleForm = () => {
  // dokolku ne specificirame type vo <input> po default e tekstualno pole
  // const initialValues = { username: "", email: "", password: "", captcha: "" };
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  // Izbegavajte da rabotite so undefined

  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");

  let handleChange = (e) => {
    // let value = e.target.value;
    console.log(e);
    console.log(e.target);
    const { name, value } = e.target;
    // destrukturiranje
    console.log(name);
    console.log(value);
    // ...formValue - ova pravi kopija na site propetija vo nov objekt
    // [name] : value - so ova go setirame propertyto(klucot)
    // sto nam ni treba
    // setFormValues({ ...formValues, email: value });
    // setFormValues({ ...formValues, username: value });
    // setFormValues({ ...formValues, password: value });

    console.log(formValues);

    setFormValues({ ...formValues, [name]: value });

    console.log(formValues);

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
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    console.log(values);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 5) {
      errors.password = "Password is less then 5 characters";
    } else if (values.password.length > 16) {
      errors.password = "Password cannot exceed more than 16 characters";
    }

    console.log(errors);
    return errors;
  };

  return (
    <div>
      <form>
        <h1>Login Form</h1>
        {
          // se sto ne e eksplicitno false ili empty e true
        }
        {Object.keys(formErrors).length === 0 && isSubmit && (
          <div>Signed in successfully</div>
        )}
        <hr />
        <div>
          <div>
            <label>Username</label>
            <input
              name="username"
              placeholder="enter username"
              value={formValues.username}
              onChange={handleChange}
            />
            {
              // when we use ?, ova znaci ako postoi formErrors
              // objektot togas pristapi go username preku nego
              // if (formErrors) {
              // formErrors.username
              //}
            }
            <p style={{ color: "red" }}>{formErrors?.username}</p>
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              placeholder="enter email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors?.email}</p>
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              placeholder="enter password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors?.password}</p>
          </div>
          {/* <div>
            <label>Captcha</label>
            <input
              name="captcha"
              placeholder="enter captcha"
              value={formValues.captcha}
              onChange={handleChange}
            />
          </div> */}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

// PAUZA DO 21:05h
