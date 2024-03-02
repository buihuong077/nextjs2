"use client";
import { BaseUrl } from "@/fetchApi/featchAPI";
import axios from "axios";
import { useEffect, useState } from "react";

export interface Pets {
  name: string;
  age: string;
  weight: string;
  height: string;
  type: string;
}

export default function Home() {
  const [pet, setPet] = useState<Pets>({} as Pets); // as pets
  const [listPets, setListPet] = useState<Pets[]>([]);

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
    // getPet();
    setListPet((prevPets) => [...prevPets, res.data]); // them pet moi vao danh sach pet
  };

  const getPet = async () => {
    const res = await axios.get(`${BaseUrl}/pets`);
    setListPet(res.data);
  };

  const handleAddPet = () => {
    postPet();
  };

  return (
    <div className="py-5 px-10 w-[900px] m-auto">
      <h2>day la trang chu</h2>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First name
          </label>
          <input
            value={pet.name}
            onChange={(e) => {
              const newpet = { ...pet };
              newpet.name = e.target.value;
              setPet(newpet);
            }}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Age
          </label>
          <input
            value={pet.age}
            onChange={(e) => {
              const newpet = { ...pet };
              newpet.age = e.target.value;
              setPet(newpet);
            }}
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            weight
          </label>
          <input
            value={pet.weight}
            onChange={(e) => {
              const newpet = { ...pet };
              newpet.weight = e.target.value;
            }}
            type="text"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            height
          </label>
          <input
            value={pet.height}
            onChange={(e) => {
              const newpet = { ...pet };
              newpet.height = e.target.value;
              setPet(newpet);
            }}
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Type
          </span>
          <select
            value={pet.type}
            onChange={(e) => {
              const newpet = { ...pet };
              newpet.type = e.target.value;
              setPet(newpet);
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

      <div className="mt-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Weight
                </th>
                <th scope="col" className="px-6 py-3">
                  Height
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {listPets?.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.age}</td>
                    <td className="px-6 py-4">{item.weight}</td>
                    <td className="px-6 py-4">{item.height}</td>
                    <td className="px-6 py-4">{item.type}</td>

                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
