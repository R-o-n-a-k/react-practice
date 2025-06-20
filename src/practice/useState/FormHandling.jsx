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
      <div className="h-screen bg-[slateblue] text-center flex flex-col">
        <h2 className="text-3xl font-bold text-[whitesmoke] mt-8">Form</h2>
        <form
          className="form  self-center bg-[#fefefe] text-center w-fit mt-4 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <div className="form-data flex justify-around p-4">
            <label htmlFor="name">Full Name </label>
            <input
              className="p-[0.2rem] border-2 border-solid border-[cornflowerblue]"
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleDataChange}
              id="name"
              placeholder="John Smith"
              required
            />
          </div>

          <div className="form-data flex justify-around p-4">
            <label htmlFor="email">Email</label>
            <input
              className="p-[0.2rem] border-2 border-solid border-[cornflowerblue]"
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleDataChange}
              id="email"
              placeholder="johnsmith@gmail.com"
              required
            />
          </div>
          <div className="form-data flex justify-around p-4">
            <label htmlFor="pswd">Pswd </label>
            <input
              className="p-[0.2rem] border-2 border-solid border-[cornflowerblue]"
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
          <div className="form-data flex justify-around p-4">
            <label htmlFor="number">Phone </label>
            <input
              className="p-[0.2rem] border-2 border-solid border-[cornflowerblue]"
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
          <div className="form-data flex justify-around p-4">
            <label htmlFor="date">Birthday </label>
            <input
              className="p-[0.2rem] border-2 border-solid border-[cornflowerblue]"
              type="date"
              name="date"
              value={formdata.date}
              onChange={handleDataChange}
              id="date"
              title="Enter your Birthday"
              required
            />
          </div>
          <div className="form-data flex justify-around p-4">
            <label htmlFor="color">Fav Color </label>

            <input
              className="p-[0.2rem] border-2 border-solid border-[cornflowerblue]"
              type="color"
              name="color"
              value={formdata.color}
              onChange={handleDataChange}
              id="color"
            />
          </div>
          <div className="form-data flex justify-around p-4">
            <Button type="submit">Submit</Button>
          </div>
        </form>

        {isModalOpen && (
          <div className="fixed w-full h-full bg-black/60 flex items-center justify-center z-[999] left-0 top-0">
            <div className="bg-white w-[300px] text-left shadow-lg px-[30px] py-5 rounded-lg">
              <h3 className="mt-0 mb-2.5">Submitted Data</h3>
              <ul className="mb-5 pl-5">
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
