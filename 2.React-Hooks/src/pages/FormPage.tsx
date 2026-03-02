import { useState,useContext  } from "react";

import { ThemeContext } from "../context/ThemeContext";

export default function FormPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const themeContext = useContext(ThemeContext);
if (!themeContext) return null;

const { theme } = themeContext;


  const validate = () => {

    const newErrors: typeof errors = {};

    if (!email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (password.length < 6) {
      newErrors.password = "At least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully!");
      setErrors({});
    }
  };

  return (
   <form
  onSubmit={handleSubmit}
  className={`form ${theme  == "light" ? "form-light" : "form-dark"}`}
>
      <div>
        <input
        placeholder="Enter the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <input
        placeholder="Enter the password"
        type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}