import React, { useState } from "react";
import FormInputs from "./Form Input/info input";
import PatientsTable from "./Form table/Patients Table";
import { p } from "./Patients Information";
import SelectGender from "./Form Input/Select";
import SearchBar from "./Form Input/search";
import { toaster } from "evergreen-ui";
import AddElement from "./Form Input/Add element";

function PatientForm() {
  const [patients, setPatients] = useState(p);
  const [filteredPatients, setFilteredPatients] = useState(p);
  const [fname, setfname] = useState("");
  const [birth, setBirth] = useState(Date());
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");

  //add new patients
  const addNew = () => {
    if (fname === "")
      return toaster.warning("You must Enter Patient full name");

    console.log(birth);

    if (!phone) return toaster.warning("Enter patients phone number");

    let temp = patients;
    temp.push({
      id: temp.length + 1,
      fullName: fname,
      birthDate: birth,
      gender: gender,
      phoneNumber: phone,
    });

    setPatients([...temp]);
    setFilteredPatients([...temp]);
    return toaster.success("Patients add successfully");
  };

  return (
    <form className="" onSubmit={(e) => e.preventDefault()}>
      <div className="">
        <FormInputs val={fname} setVal={setfname} PlaceHolder="Full Name" />
        <FormInputs val={birth} setVal={setBirth} type={"date"} />
        <FormInputs
          val={phone}
          setVal={setPhone}
          PlaceHolder="Phone number"
          type={"number"}
        />
        <SelectGender setVal={setGender} />
        <AddElement method={addNew} />
      </div>
      <SearchBar
        list={patients}
        filteredList={filteredPatients}
        setVal={setFilteredPatients}
      />
      <div className=" border-collapse overflow-y-auto max-h-[600px]">
        <PatientsTable list={filteredPatients} setVal={setPatients} />
      </div>
    </form>
  );
}

export default PatientForm;
