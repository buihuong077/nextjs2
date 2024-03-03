"use client";
import React from "react";

function Tablepet(props: any) {
  const handleEditPet = (index: any) => {
    props.setShowAddPet(true);
    // console.log("index", index);
    const pet1 = props.listPets[index]; // lay pet thong qua vi tri index
    // console.log("pet1", pet1, pet1._id);
    props.setPetEdit(pet1);
  };

  return (
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
            {props.listPets?.map((item: any, index: any) => {
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
                    <button
                      onClick={() => {
                        handleEditPet(index);
                      }}
                      // href="http://localhost:3000/edit"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tablepet;
