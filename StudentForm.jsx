import React, { useState } from 'react';
import style from './StudentForm.module.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    gender: "",
    dob: "",
    qualification: "",
    college: "",
    year: "",
    percentage: "",
    area: "",
    state: ""
  });

  const [subject, setSubject] = useState({
    SQL: false,
    Java: false,
    Python: false,
    Webtech: false
  });

  const [submitted, setSubmitted] = useState(false);

  const stateList = [
    { stateName: "Maharashtra", stateVal: "MH" },
    { stateName: "Karnataka", stateVal: "KA" },
    { stateName: "Gujarat", stateVal: "GJ" },
    { stateName: "Andhra Pradesh", stateVal: "AP" },
    { stateName: "Arunachal Pradesh", stateVal: "AR" },
    { stateName: "Assam", stateVal: "AS" },
    { stateName: "Bihar", stateVal: "BR" },
    { stateName: "Chhattisgarh", stateVal: "CG" },
    { stateName: "Goa", stateVal: "GA" },
    { stateName: "Haryana", stateVal: "HR" },
    { stateName: "Himachal Pradesh", stateVal: "HP" },
    { stateName: "Jharkhand", stateVal: "JH" },
    { stateName: "Kerala", stateVal: "KL" },
    { stateName: "Madhya Pradesh", stateVal: "MP" },
    { stateName: "Manipur", stateVal: "MN" },
    { stateName: "Meghalaya", stateVal: "ML" },
    { stateName: "Mizoram", stateVal: "MZ" },
    { stateName: "Nagaland", stateVal: "NL" },
    { stateName: "Odisha", stateVal: "OD" },
    { stateName: "Punjab", stateVal: "PB" },
    { stateName: "Rajasthan", stateVal: "RJ" },
    { stateName: "Sikkim", stateVal: "SK" },
    { stateName: "Tamil Nadu", stateVal: "TN" },
    { stateName: "Telangana", stateVal: "TG" },
    { stateName: "Tripura", stateVal: "TR" },
    { stateName: "Uttar Pradesh", stateVal: "UP" }
  ];

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubject = (event) => {
    setSubject({
      ...subject,
      [event.target.name]: event.target.checked
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    console.log("Submitted Data:", formData, subject);

    // Optional: hide message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);

    // Reset form fields
    setFormData({
      fullName: "",
      contact: "",
      email: "",
      gender: "",
      dob: "",
      qualification: "",
      college: "",
      year: "",
      percentage: "",
      area: "",
      state: ""
    });

    setSubject({
      SQL: false,
      Java: false,
      Python: false,
      Webtech: false
    });
  };

  return (
    <div className={style.container}>
      <h1>Student Form</h1>
      <form onSubmit={handleSubmit} className={style["form-container"]}>
        {submitted && (
          <p style={{ color: "green", fontWeight: "bold" }}>
            ✅ Form Submitted Successfully!
          </p>
        )}
        <div onChange={handleChange}>
        <input type="text" placeholder="Full Name" name="fullName" value={formData.fullName}/><br /><br />
        <input type="text" placeholder="Contact" name="contact" value={formData.contact}/><br /><br />
        <input type="email" placeholder="Email" name="email" value={formData.email}/><br /><br />
        </div>
        <div onChange={handleChange}>
          <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"}/> Female
          <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} /> Male
          <input type="radio" name="gender" value="Others" checked={formData.gender === "Others"} /> Others
        </div><br />
        
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} /><br /><br />
        <input type="text" placeholder="Qualification" name="qualification" value={formData.qualification} onChange={handleChange} /><br /><br />
        <input type="text" placeholder="College Name" name="college" value={formData.college} onChange={handleChange} /><br /><br />
        <input type="text" placeholder="Year of Passing" name="year" value={formData.year} onChange={handleChange} /><br /><br />
        <input type="text" placeholder="Percentage / CGPA" name="percentage" value={formData.percentage} onChange={handleChange} /><br /><br />

        <select name="area" value={formData.area} onChange={handleChange}>
          <option value="">Select Area</option>
          <option value="Pune">Pune</option>
          <option value="Wakad">Wakad</option>
          <option value="Dange Chowk">Dange Chowk</option>
          <option value="QSpiders">Qspiders</option>
        </select><br /><br />

        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select State</option>
          {stateList.map((ele) => (
            <option key={ele.stateName} value={ele.stateVal}>
              {ele.stateName}
            </option>
          ))}
        </select><br /><br />

        <div onChange={handleSubject}>
          <h4>Choose the Skills</h4>
          <input type="checkbox" name="SQL" checked={subject.SQL} /> SQL
          <input type="checkbox" name="Java" checked={subject.Java} /> Java
          <input type="checkbox" name="Python" checked={subject.Python} /> Python
          <input type="checkbox" name="Webtech" checked={subject.Webtech} /> Webtech
        </div><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;


