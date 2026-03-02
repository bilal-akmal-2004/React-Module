import { useForm } from "../hooks/useForm";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Home() {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });


  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!values.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (values.password.length < 6) {
      newErrors.password = "At least 6+ characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsOpen(true);
    }
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit} className="home-form">
        <h2>Login</h2>

        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Submit</button>
      </form>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3>Form Submitted Successfully</h3>
        <p>Email: {values.email}</p>
      </Modal>
    </div>
  );
}