const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Form</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          name="name"
          placeholder="type your name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.email}
          name="email"
          placeholder="type your email"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.password}
          name="password"
          placeholder="type your password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
