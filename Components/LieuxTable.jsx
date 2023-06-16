import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import * as React from "react";
import ElementTable from "./elementTable";

export default function LieuxTable(props) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg text">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="w-1/4 px-6 py-3">
                Lieux touristiques
              </th>
              <th scope="col" className="w-1/8 px-6 py-3">
                Statut
              </th>
              <th scope="col" className="w-1/8 px-6 py-3">
                Créé par
              </th>
              <th scope="col" className="w-1/4 px-6 py-3">
                about
              </th>
              <th scope="col" className="w-1/8 px-6 py-3">
                Modifier
              </th>
              <th scope="col" className="w-1/8 px-6 py-3">
                Supprimer
              </th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((place) => (
              <ElementTable
                key={place.id}
                id={place.id}
                name={place.name}
                createur={place.creator}
                statut={place.status}
                about={place.about}
                onDelete={props.onDeleteItem}
              ></ElementTable>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
