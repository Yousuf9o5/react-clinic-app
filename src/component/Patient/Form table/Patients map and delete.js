import React, { useContext } from "react";
import themeContext from "../../Context/theme";

const PatientsMapping = (props) => {
  const context = useContext(themeContext);
  //delete patients
  const delItem = (id) => {
    let temp = props.list.findIndex((item) => item.id === id);
    let temp1 = props.list.splice(temp, 1);
    console.log(temp1);
    props.setList([...props.list]);
  };

  return props.list.map((item, index) => {
    return (
      <tr
        key={index}
        className={
          index % 2 === 0
            ? `${context.theme.formRow1} shadow-md`
            : `${context.theme.formRow2} shadow-md`
        }
      >
        <td className="">{index + 1}</td>
        <td className="">{item.fullName}</td>
        <td className="">{item.birthDate}</td>
        <td className="">{item.gender}</td>
        <td className="">{item.phoneNumber}</td>
        <td className="text-center">
          <button
            className=" bg-red-600 text-white rounded px-3"
            onClick={() => {
              delItem(item.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
};

export default PatientsMapping;
