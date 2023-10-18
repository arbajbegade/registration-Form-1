import React from "react";

const data = [
  {
    name: "Amit Patel",
    dob: "1992-03-08",
    mail: "amitpatel@example.com",
    password: "Password1"
  },
  {
    name: "Priya Sharma",
    dob: "1987-12-14",
    mail: "priyasharma@example.com",
    password: "Password2"
  },
  {
    name: "Rajesh Kumar",
    dob: "1980-05-20",
    mail: "rajeshkumar@example.com",
    password: "Password3"
  },
  {
    name: "Neha Gupta",
    dob: "1995-09-27",
    mail: "nehagupta@example.com",
    password: "Password4"
  },
  {
    name: "Deepak Singh",
    dob: "1991-02-10",
    mail: "deepaksingh@example.com",
    password: "Password5"
  },
  {
    name: "Anjali Mehta",
    dob: "1988-07-05",
    mail: "anjalimehta@example.com",
    password: "Password6"
  },
  {
    name: "Rohit Verma",
    dob: "1986-11-18",
    mail: "rohitverma@example.com",
    password: "Password7"
  },
  {
    name: "Sneha Rani",
    dob: "1993-04-22",
    mail: "sneharani@example.com",
    password: "Password8"
  },
  {
    name: "Manish Mishra",
    dob: "1984-10-15",
    mail: "manishmishra@example.com",
    password: "Password9"
  },
  {
    name: "Preeti Tiwari",
    dob: "1990-08-31",
    mail: "preetitiwari@example.com",
    password: "Password10"
  },
];

const Table = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <table className="w-[60rem] border-collapse border shadow-2xl rounded-3xl">
        <thead className="">
          <tr className="bg-[#6c7ae0] text-white ">
            <th className="p-4">Name</th>
            <th className="p-4">DOB</th>
            <th className="p-4">Mail</th>
            <th className="p-4">Password</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {data.map((item, index) => (
            <tr key={index}className={`${index % 2 === 0 ? "bg-gray-100" : "bg-[#f8f6ff]"}`} >
              <td className="p-4 ">{item.name}</td>
              <td className="p-4">{item.dob}</td>
              <td className="p-4">{item.mail}</td>
              <td className="p-4">{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
