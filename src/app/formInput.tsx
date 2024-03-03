import React from "react";
import { BaseUrl } from "@/fetchApi/featchAPI";
import axios from "axios";
import { useEffect, useState } from "react";
import Tablepet from "./table";

export interface Pets {
  name: string;
  age: string;
  weight: string;
  height: string;
  type: string;
}
function FormInput() {
  // pet laf object chua thong tin 1 con pet, setpet la 1 function de dat gia tri moi cho pet
  const [pet, setPet] = useState<Pets>({} as Pets); // as pets
  const [listPets, setListPet] = useState<Pets[]>([]);
  const [showAddPet, setShowAddPet] = useState(false);
  const [petEdit, setPetEdit] = useState();
  const [errorName, setErrorName] = useState("");
  const [errorAge, setErrorAge] = useState("");
  const [errorWeight, setErrorWeight] = useState("");
  const [errorHeight, setErrorHeight] = useState("");
  const [errorType, setErrorType] = useState("");

  useEffect(() => {
    getPet();
  }, []);

  const postPet = async () => {
    const res = await axios.post(`${BaseUrl}/pets`, {
      name: pet.name,
      age: pet.age,
      weight: pet.weight,
      height: pet.height,
      type: pet.type,
    });
    // getPet(); cach nay dung khi nhieu du lieu va phai phan trang thif con pet them moi se hien thi o dau trang
    setListPet((prevPets) => [...prevPets, res.data]); // them pet moi vao danh sach pet
  };

  const getPet = async () => {
    const res = await axios.get(`${BaseUrl}/pets`);
    setListPet(res.data);
  };

  const handleAddPet = () => {
    postPet();
    setPet({} as Pets);
  };

  const handleShowFromAddPet = () => {
    setShowAddPet(!showAddPet);
  };
  console.log("petEdit", petEdit, pet);

  return (
    <div>
      {showAddPet && (
        <div>
          <h2>day la trang chu</h2>

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                First name
              </label>
              <input
                value={pet?.name}
                onChange={(e) => {
                  if (e.target.value.length < 0) {
                    setErrorName("You cannot leave the name field blank");
                    return;
                  } else {
                    const newpet = { ...pet };
                    newpet.name = e.target.value;
                    setPet(newpet);
                  }
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Age
              </label>
              <input
                value={pet?.age}
                onChange={(e) => {
                  if (e.target.value.length < 0) {
                    setErrorAge("You cannot leave the age field blank");
                    return;
                  } else {
                    console.log("pet = ", pet);
                    const newpet = { ...pet };

                    console.log("newPet = ", newpet);
                    newpet.age = e.target.value;

                    console.log("newPpet", newpet);
                    setPet(newpet);
                  }
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                weight
              </label>
              <input
                value={pet?.weight}
                onChange={(e) => {
                  if (e.target.value.length < 0) {
                    setErrorWeight("You cannot leave the weight field blank");
                    return;
                  } else {
                    const newpet = { ...pet };
                    newpet.weight = e.target.value;
                    setPet(newpet);
                  }
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                height
              </label>
              <input
                value={pet?.height}
                onChange={(e) => {
                  if (e.target.value.length < 0) {
                    setErrorHeight("You cannot leave the height field blank");
                    return;
                  } else {
                    const newpet = { ...pet };
                    newpet.height = e.target.value;
                    setPet(newpet);
                  }
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Type
              </span>
              <select
                value={pet?.type}
                onChange={(e) => {
                  if (e.target.value.length < 0) {
                    setErrorType("You cannot leave the type field blank");
                    return;
                  } else {
                    const newpet = { ...pet };
                    newpet.type = e.target.value;
                    setPet(newpet);
                  }
                }}
                className="h-13 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="SelectType">Select Type</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleAddPet}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      )}

      <button
        onClick={handleShowFromAddPet}
        className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        ADD pet
      </button>
      <Tablepet
        listPets={listPets}
        setShowAddPet={setShowAddPet}
        petEdit={petEdit}
        setPetEdit={setPetEdit}
      />
    </div>
  );
}

export default FormInput;
