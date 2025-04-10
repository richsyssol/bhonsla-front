import React, { useState } from "react";

const StudentApplicationForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    surname: "",
    fatherName: "",
    dob: "",
    dobWords: "",
    aadharNo: "",
    permanentAddress: "",
    phone: "",
    mobile: "",
    email: "",
    religion: "",
    placeOfBirth: "",
    state: "",
    nationality: "",
    caste: "",
    subCaste: "",
    motherTongue: "",
    lastYearMarks: "",
    lastYearOutOf: "",
    currentYearMarks: "",
    currentYearOutOf: "",
    fatherProfession: "",
    fatherEducation: "",
    fatherIncome: "",
    motherName: "",
    motherProfession: "",
    motherEducation: "",
    motherIncome: "",
    stdApplyingFor: "",
    yearApplyingFor: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div
      id="admission-form"
      className="w-full md:w-350 mx-auto md:m-20 items-center justify-center min-h-screen p-4 md:p-6 bg-[#E6EFF8] shadow-md"
    >
      <h2 className="text-2xl md:text-4xl font-extrabold text-blue-600 mb-4">
        Bhonsala Military School Application
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-blue-500 text-xl md:text-2xl">
            Applicant's Information
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="font-semibold">Student Name</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                placeholder="Enter Student Name"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Surname</label>
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Date of Birth</label>
              <input
                type="date"
                name="dob"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Blood Group</label>
              <input
                type="text"
                name="bloodgroup"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Date of Birth (Words)</label>
              <input
                type="text"
                name="dobWords"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Place Of Birth</label>
              <input
                type="text"
                name="birth_place"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Aadhar No</label>
              <input
                type="text"
                name="adhar_no"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        {/* Address Fields */}
        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-blue-500 text-xl md:text-2xl">
            Permanent Address
          </legend>

          <label className="font-semibold">Address</label>
          <input
            type="text"
            name="address"
            required
            className="p-2 border rounded w-full"
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="font-semibold">State</label>
              <input
                type="text"
                name="state"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Pincode</label>
              <input
                type="text"
                name="pincode"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        {/* Contact Details */}
        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-blue-500 text-xl md:text-2xl">
            Contact Details
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Phone</label>
              <input
                type="text"
                name="phone"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Mobile</label>
              <input
                type="text"
                name="mobile"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-semibold">E-Mail</label>
              <input
                type="text"
                name="email"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        {/* Other Information */}
        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-blue-500 text-xl md:text-2xl">
            Other Information
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Medium</label>
              <select
                name="medium"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              >
                <option value="">Select Medium</option>
                <option value="english">Hindi</option>
                <option value="marathi">Marathi</option>
                <option value="hindi">English</option>
              </select>
            </div>
            <div>
              <label className="font-semibold">Nationality</label>
              <input
                type="text"
                name="nationality"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Cast</label>
              <input
                type="text"
                name="cast"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Sub-Cast</label>
              <input
                type="text"
                name="subcast"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Religion</label>
              <input
                type="text"
                name="subcast"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Category</label>
              <input
                type="text"
                name="subcast"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-semibold">Mother Tongue</label>
              <input
                type="text"
                name="mothertounge"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        {/* Academic Details */}
        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-blue-500 text-xl md:text-2xl">
            Academic Information
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Applying for Std</label>
              <input
                type="text"
                name="stdApplyingFor"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Year</label>
              <input
                type="text"
                name="yearApplyingFor"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Last Year Marks</label>
              <input
                type="text"
                name="lastYearMarks"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Current Year Marks</label>
              <input
                type="text"
                name="currentYearMarks"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        {/* Last Year Marks */}
        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-blue-500 text-xl md:text-2xl">
            Last Year Final Exam (Mention Class)
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Marks</label>
              <input
                type="text"
                name="Marks"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Out Of</label>
              <input
                type="text"
                name="outof"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-semibold">% Obtained</label>
              <input
                type="text"
                name="obtained"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        {/* Current Year Marks */}
        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-blue-500 text-xl md:text-2xl">
            Current Year Mid-Term Exam
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Marks</label>
              <input
                type="text"
                name="Marks"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Out Of</label>
              <input
                type="text"
                name="outof"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-semibold">% Obtained</label>
              <input
                type="text"
                name="obtained"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-blue-500 text-xl md:text-2xl">
            Parent / Guardian Information
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Father's Profession</label>
              <input
                type="text"
                name="fatherProfession"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">
                Father's Education Qualification
              </label>
              <input
                type="text"
                name="fatherEducation"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">
                Father's Annual Income (Approx) in Rs.
              </label>
              <input
                type="text"
                name="fatherIncome"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Mother's Name</label>
              <input
                type="text"
                name="motherName"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">
                Mother's Education Qualification
              </label>
              <input
                type="text"
                name="motherEducation"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Mother's Profession</label>
              <input
                type="text"
                name="motherProfession"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-semibold">
                Mother's Annual Income (Approx)
              </label>
              <input
                type="text"
                name="motherIncome"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        {/* Checklist for Required Documents */}
        <fieldset className="border p-4 rounded-md mt-4">
          <legend className="font-semibold text-blue-500 text-xl md:text-2xl">
            Required Documents Checklist
          </legend>
          {[
            "Bank Transfer Receipt (1100/- HDFC Bank)",
            "Progress Report - Last Year Annual Exam",
            "Progress Report - Current Year Mid-Term Exam (True Copy)",
            "Birth Certificate (Village/Municipal/Nursing Home/Doctor)",
            "Caste Certificate (Xerox Copy)",
            "Aadhar Card (Xerox Copy)",
          ].map((item, index) => (
            <div key={index} className="flex items-center mt-2">
              <input
                type="checkbox"
                id={`check-${index}`}
                name={`check-${index}`}
                className="mr-2"
              />
              <label htmlFor={`check-${index}`} className="font-medium">
                {item}
              </label>
            </div>
          ))}
        </fieldset>

        {/* Local Gaurdian */}
        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-blue-500 text-xl md:text-2xl">
            Local Guardian Information
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Name Of Local Guardian</label>
              <input
                type="text"
                name="nameofguardian"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Mobile No</label>
              <input
                type="text"
                name="mobileno"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Address</label>
              <input
                type="text"
                name="guardian_address"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Relationship with Ward</label>
              <input
                type="text"
                name="relationshipwithward"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Date</label>
              <input
                type="text"
                name="date"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Place</label>
              <input
                type="text"
                name="place"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Witness Name</label>
              <input
                type="text"
                name="witnessname"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Witness Address</label>
              <input
                type="text"
                name="witness_address"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">Witness Mobile No</label>
              <input
                type="text"
                name="witness_mobileno"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold">E-Mail</label>
              <input
                type="text"
                name="email"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-blue-500 text-xl md:text-2xl">
            Declarations
          </legend>
          <p>
            I hereby declare that I have read the rules and regulations of the
            school and agree to abide by them.
          </p>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              name="agreement"
              required
              className="mr-2"
              onChange={handleChange}
            />
            <label>I accept the terms and conditions.</label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentApplicationForm;
