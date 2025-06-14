import { useState } from "react";
import Button from "../../components/Button/Button";

const FormHandling = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    pswd: "",
    phone: "",
    date: "",
    color: "#000000",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="formHandling section">
        <h2 className="title">Form</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-data">
            <label htmlFor="name">Full Name </label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleDataChange}
              id="name"
              placeholder="John Smith"
              required
            />
          </div>

          <div className="form-data">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleDataChange}
              id="email"
              placeholder="johnsmith@gmail.com"
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="pswd">Pswd </label>
            <input
              type="password"
              name="pswd"
              value={formdata.pswd}
              onChange={handleDataChange}
              id="pswd"
              minLength={8}
              maxLength={8}
              placeholder="8 digits"
              title="Enter your password"
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="number">Phone </label>
            <input
              type="number"
              name="phone"
              value={formdata.phone}
              onChange={handleDataChange}
              id="phone"
              placeholder="XXXXXXXXXX"
              title="Enter valid 10 digit number"
              minLength={10}
              maxLength={10}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="date">Birthday </label>
            <input
              type="date"
              name="date"
              value={formdata.date}
              onChange={handleDataChange}
              id="date"
              title="Enter your Birthday"
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="color">Fav Color </label>

            <input
              type="color"
              name="color"
              value={formdata.color}
              onChange={handleDataChange}
              id="color"
            />
          </div>
          <div className="form-data">
            <Button type="submit">Submit</Button>
          </div>
        </form>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Submitted Data</h3>
              <ul>
                <li>
                  <strong>Name:</strong> {formdata.name}
                </li>
                <li>
                  <strong>Email:</strong> {formdata.email}
                </li>
                <li>
                  <strong>Password:</strong> {formdata.pswd}
                </li>
                <li>
                  <strong>Phone:</strong> {formdata.phone}
                </li>
                <li>
                  <strong>Date:</strong> {formdata.date}
                </li>
                <li>
                  <strong>Color:</strong>
                  <span
                    style={{
                      backgroundColor: formdata.color,
                      padding: "2px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    {formdata.color}
                  </span>
                </li>
              </ul>
              <Button
                size="small"
                onClick={() => {
                  setIsModalOpen(false);
                  setFormData({
                    name: "",
                    email: "",
                    pswd: "",
                    phone: "",
                    date: "",
                    color: "#000000",
                  });
                }}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FormHandling;
