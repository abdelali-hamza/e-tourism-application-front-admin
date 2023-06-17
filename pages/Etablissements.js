import React, { useState } from 'react';
import establishmentsData from "../etablissements.json"

const Establishments = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredEstablishments = establishmentsData.filter((establishment) =>
        establishment.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className='text-3xl my-5 font-bold flex flex-col'>
                Liste établissements
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
                    <div>
                        <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            {/* Dropdown menu options */}
                        </div>
                    </div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative m-2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input
                            type="text"
                            id="table-search-establishments"
                            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Rechercher une établissement"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="py-2 px-2">NUM</th>
                            <th className="py-2 px-2">Catégorie</th>
                            <th className="py-2 px-2">Adresse</th>
                            <th className="py-2 px-2">Nom</th>
                            <th className="py-2 px-2">Wilaya</th>
                            <th className="py-2 px-2">Téléphone</th>
                            <th className="py-2 px-2">Email</th>
                            <th className="py-2 px-2">Heure d'ouverture</th>
                            <th className="py-2 px-2">Heure de fermeture</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredEstablishments.slice(0, 12).map((establishment) => (
                            <tr key={establishment.id}>
                                <td className="py-2 px-4">{establishment.id}</td>
                                <td className="py-2 px-4">{establishment.nom}</td>
                                <td className="py-2 px-4">{establishment.categorie}</td>
                                <td className="py-2 px-4">{establishment.adresse}</td>
                                <td className="py-2 px-4">{establishment.wilaya}</td>
                                <td className="py-2 px-4">{establishment.telephone}</td>
                                <td className="py-2 px-4">{establishment.email}</td>
                                <td className="py-2 px-4">{establishment.heureOuverture}</td>
                                <td className="py-2 px-4">{establishment.heureFermeture}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Establishments;
