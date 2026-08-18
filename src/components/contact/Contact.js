import React from "react";

import Phone from "../../assets/icons/Phone";
import Mail from "../../assets/icons/Mail";
import Location from "../../assets/icons/Location";

import "./styles.css";

export const Contact = () => {
  const fields = [
    {
      id: "name",
      label: "Name / Company",
      type: "text",
      placeholder: "Your name or company name",
    },
    {
      id: "email",
      label: "Work Email",
      type: "email",
      placeholder: "your@domain.com",
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "+91 ...",
    },
  ];

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, requirements } = formData;

    const subject = encodeURIComponent("Bhutan Trails - New Enquiry");

    const body = encodeURIComponent(`
                    Name / Company: ${name}
                    Work Email: ${email}
                    Phone Number: ${phone}

                    Requirements:
                    ${requirements}
                        `);

    window.location.href = `mailto:info@bhutantrails.in?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="enquiry">
      <div className="wrapper">
        <div className="content">
          <span className="font-1">FOR TRAVEL PARTNERS</span>

          <h2 className="font-1">Let's build your next Bhutan program.</h2>

          <p className="font-2">
            Share a few details and we'll get back to you with the right person
            for your requirement.
          </p>

          <ul>
            <li>
              <Phone />
              <a className="font-2" href="tel:+918700203218">
                +91 8700203218
              </a>
            </li>

            <li>
              <Mail />
              <a className="font-2" href="mailto:info@bhutantrails.in">
                info@bhutantrails.in
              </a>
            </li>

            <li>
              <Location />
              <span className="font-2">Samteling Zur Lam, Thimphu</span>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs-wrapper">
            {fields.map((field) => (
              <div className="input-wrapper" key={field.id}>
                <label className="font-2" htmlFor={field.id}>
                  {field.label}
                </label>

                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  className="font-2"
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div className="input-wrapper">
            <label className="font-2" htmlFor="requirements">
              Requirements
            </label>

            <textarea
              id="requirements"
              name="requirements"
              className="font-2"
              placeholder="e.g. 12 pax, 6 nights, October, premium hotels..."
              value={formData.requirements}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="font-2">
            Send Enquiry
          </button>

          <p className="font-1">
            *Submitting opens your email app with the enquiry prepared for
            Bhutan Trails.
          </p>
        </form>
      </div>
    </section>
  );
};
