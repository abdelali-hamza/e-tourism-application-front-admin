import Head from "next/head";
import wilayas from '../wilaya.json';
import { useState } from "react";
import categories from '../categorie.json';
import themes from '../thème.json';

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3001/lieu/All")
    const lieux = await res.json()
    return {
        props: {
            initialLieux: lieux
        }
    }
}

export default function Home({ initialLieux }) {
    const [places, setPlaces] = useState(initialLieux);

    const deleteItemHandler = (goalId) => {
        setPlaces((prevGoals) => {
            const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
            return updatedGoals;
        });
    };

    function findWilayaById(id) {
        const foundItem = wilayas.find(item => item.id === id.toString());
        return foundItem ? foundItem.wilaya : null;
    }

    const flippedPlaces = [...places].reverse();

    const [editingId, setEditingId] = useState(null);
    const [editedNom, setEditedNom] = useState('');
    const [editedTheme, setEditedTheme] = useState('');
    const [editedCategorie, setEditedCategorie] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [editedTarif, setEditedTarif] = useState('');
    const [editedTempsOuverture, setEditedTempsOuverture] = useState('');
    const [editedTempsFermeture, setEditedTempsFermeture] = useState('');
    const [editedLong, setEditedLong] = useState('');
    const [editedLat, setEditedLat] = useState('');
    const [editedWilaya, setEditedWilaya] = useState('');

    const handleEditClick = (place) => {
        setEditingId(place.idLieux);
        setEditedNom(place.Nom);
        setEditedTheme(place.theme);
        setEditedCategorie(place.categorie);
        setEditedDescription(place.Description);
        setEditedTarif(place.tarif);
        setEditedTempsOuverture(place.tempsOuverture);
        setEditedTempsFermeture(place.tempsFermeture);
        setEditedLong(place.long);
        setEditedLat(place.lat);
        setEditedWilaya(place.idwilaya);
    };

    const handleAttributeChange = (event, attribute) => {
        const value = event.target.value;

        // Update the corresponding state variable based on the attribute being edited
        switch (attribute) {
            case 'Nom':
                setEditedNom(value);
                break;
            case 'Theme':
                setEditedTheme(value);
                break;
            case 'Categorie':
                setEditedCategorie(value);
                break;
            case 'Description':
                setEditedDescription(value);
                break;
            case 'Tarif':
                setEditedTarif(value);
                break;
            case 'TempsOuverture':
                setEditedTempsOuverture(value);
                break;
            case 'TempsFermeture':
                setEditedTempsFermeture(value);
                break;
            case 'Long':
                setEditedLong(value);
                break;
            case 'Lat':
                setEditedLat(value);
                break;
            case 'Wilaya':
                setEditedWilaya(value);
                break;
            default:
                break;
        }
    };

    function findIdByWilaya(wilaya) {
        const foundItem = wilayas.find(item => item.wilaya === wilaya);
        return foundItem ? foundItem.id : null;
    }

    const handleSaveClick = async () => {
        try {
          const formData = new FormData();
          formData.append("idLieu", 87);
          formData.append("nom", editedNom);
          formData.append("theme", editedTheme);
          formData.append("categorie", editedCategorie);
          formData.append("description", editedDescription);
          formData.append("tarif", editedTarif);
          formData.append("documentation", ""); // Replace with the actual documentation value
          formData.append("tempsouverture", editedTempsOuverture);
          formData.append("tempsfermeture", editedTempsFermeture);
          formData.append("lat", editedLat);
          formData.append("long", editedLong);
          formData.append("wilaya", findIdByWilaya(editedWilaya));
          console.log(formData)
      
          const response = await fetch("http://localhost:3001/admin/modlieu/1", {
            method: "POST",
            body: formData,
          });
      
          if (response.ok) {
            console.log("Lieu created successfully");
          } else {
            console.error("Failed to create lieu");
            // Handle failure scenario
          }
        } catch (error) {
          console.error("Failed to create lieu:", error);
          // Handle error scenario
        }
      
        /*setEditingId(null);
        setEditedNom("");
        setEditedTheme("");
        setEditedCategorie("");
        setEditedDescription("");
        setEditedTarif("");
        setEditedTempsOuverture("");
        setEditedTempsFermeture("");
        setEditedLong("");
        setEditedLat("");
        setEditedWilaya("");*/
      };
      

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPlaces = places.filter((place) =>
        place.Nom.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleUpdateClick = () => {
        // Logic to update the edited item
        // This function should handle the update operation based on the edited attributes

        // For example, you can use the setState or dispatch method to update the item in your state or Redux store
        // Make sure to use the appropriate state management approach based on your application setup

        // After updating the item, you can reset the editingId state to exit the editing mode
        setEditingId(null);
    };
    const handleDeleteClick = () => {
        setEditingId(null);
    }
    return (
        <>
            <div className=" items-center justify-center">
                <div className='text-3xl my-5 font-bold flex flex-col'>
                    Lieux touristiques
                </div>
                <>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg text">
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
                                    id="table-search-users"
                                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Rechercher un lieu"
                                    value={searchTerm}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="w-1/8 px-6 py-3">
                                        Lieu
                                    </th>
                                    <th scope="col" className="w-1/8 px-6 py-3">
                                        Thème
                                    </th>
                                    <th scope="col" className="w-1/8 px-6 py-3">
                                        Catégorie
                                    </th>
                                    <th scope="col" className="w-1/8 px-6 py-3">
                                        descreption
                                    </th>
                                    <th scope="col" className="w-1/8 px-6 py-3">
                                        tarif
                                    </th>
                                    <th scope="col" className="w-1/8 px-6 py-3">
                                        Heure Ouverture
                                    </th>
                                    <th scope="col" className="w-1/8 px-6 py-3">
                                        Heure Fermeture
                                    </th>
                                    <th scope="col" className="w-1/8 px-6 py-3">
                                        Wilaya
                                    </th>
                                    <th scope="col" className="w-1/16 px-2 py-3">

                                    </th>
                                    <th scope="col" className="w-1/16 px-2 py-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPlaces.reverse().slice(0, 12).map((place) => (
                                    <tr className="bg-white border-b hover:bg-gray-50" key={place.idLieux}>
                                        <td
                                            className="pl-6 py-4 font-medium text-gray-900"
                                        >
                                            {place.Nom}
                                        </td>
                                        <td className="pl-6 py-4">{place.theme}</td>
                                        <td className="pl-6 py-4">{place.categorie}</td>
                                        <td className="pl-6 py-4">{place.Description}</td>
                                        <td className="pl-6 py-4">{place.tarif}</td>
                                        <td className=" pl-6 py-4">{place.tempsOuverture}</td>
                                        <td className=" pl-6 py-4">{place.tempsFermeture}</td>
                                        <td className=" pl-6 py-4">{findWilayaById(place.idwilaya)}</td>
                                        <td className="pl-6 py-4 ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 stroke-cyan-500 cursor-pointer"
                                                onClick={() => handleEditClick(place)} // Pass the place object to the click handler
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                />
                                            </svg>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <svg
                                                onClick={() => deleteItemHandler(place.id)} // Pass the place ID to the click handler
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 stroke-red-500 cursor-pointer"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.12 1.507H7.96a2.25 2.25 0 01-2.12-1.507L3.25 5.83A2.25 2.25 0 015.37 4.5H18.63a2.25 2.25 0 012.12 1.33zM6 6h12"
                                                />
                                            </svg>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            </div>
            {editingId !== null && (
                <div className="fixed inset-0 z-1 flex items-center justify-center overflow-x-auto overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-3xl mx-auto my-16">
                        <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">

                            <div className="relative p-6 flex-auto">
                                {/* Edit form */}
                                <form>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="edited-nom"
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                        >
                                            Lieu:
                                        </label>
                                        <input
                                            type="text"
                                            id="edited-nom"
                                            className="border rounded-lg px-3 py-2 w-full"
                                            value={editedNom}
                                            onChange={(event) => handleAttributeChange(event, 'Nom')}
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6 mb-2 mt-2">

                                        <div className="">
                                            <label
                                                htmlFor="edited-theme"
                                                className="block text-gray-700 text-sm font-bold mb-2"
                                            >
                                                Theme:
                                            </label>
                                            <select
                                                id="edited-theme"
                                                className="border rounded-lg px-3 py-2 w-full"
                                                value={editedTheme}
                                                onChange={(event) => handleAttributeChange(event, 'Theme')}
                                            >
                                                <option value="">
                                                    {editedTheme}
                                                </option>
                                                {themes.map((theme, index) => (
                                                    <option key={index} value={theme}>
                                                        {theme}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="edited-categorie"
                                                className="block text-gray-700 text-sm font-bold mb-2"
                                            >
                                                Categorie:
                                            </label>
                                            <select
                                                id="edited-categorie"
                                                className="border rounded-lg px-3 py-2 w-full"
                                                value={editedCategorie}
                                                onChange={(event) => handleAttributeChange(event, 'Categorie')}
                                            >
                                                <option value="">
                                                    {editedCategorie}
                                                </option>
                                                {categories.map((categorie, index) => (
                                                    <option key={index} value={categorie}>
                                                        {categorie}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="edited-description"
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                        >
                                            Description:
                                        </label>
                                        <input
                                            type="text"
                                            id="edited-description"
                                            className="border rounded-lg px-3 py-2 w-full"
                                            value={editedDescription}
                                            onChange={(event) => handleAttributeChange(event, 'Description')}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="edited-tarif"
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                        >
                                            Tarif:
                                        </label>
                                        <input
                                            type="text"
                                            id="edited-tarif"
                                            className="border rounded-lg px-3 py-2 w-full"
                                            value={editedTarif}
                                            onChange={(event) => handleAttributeChange(event, 'Tarif')}
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6 mb-2 mt-2">

                                        <div className="mb-4">
                                            <label
                                                htmlFor="edited-temps-ouverture"
                                                className="block text-gray-700 text-sm font-bold mb-2"
                                            >
                                                Heure d'ouverture:
                                            </label>
                                            <input
                                                type="text"
                                                id="edited-temps-ouverture"
                                                className="border rounded-lg px-3 py-2 w-full"
                                                value={editedTempsOuverture}
                                                onChange={(event) => handleAttributeChange(event, 'TempsOuverture')}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="edited-temps-fermeture"
                                                className="block text-gray-700 text-sm font-bold mb-2"
                                            >
                                                Heure de fermeture:
                                            </label>
                                            <input
                                                type="text"
                                                id="edited-temps-fermeture"
                                                className="border rounded-lg px-3 py-2 w-full"
                                                value={editedTempsFermeture}
                                                onChange={(event) => handleAttributeChange(event, 'TempsFermeture')}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6 mb-2 mt-2">

                                        <div className="mb-4">
                                            <label
                                                htmlFor="edited-temps-ouverture"
                                                className="block text-gray-700 text-sm font-bold mb-2"
                                            >
                                                Long
                                            </label>
                                            <input
                                                type="text"
                                                id="edited-Long"
                                                className="border rounded-lg px-3 py-2 w-full"
                                                value={editedLong}
                                                onChange={(event) => handleAttributeChange(event, 'TempsOuverture')}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="edited-Lat"
                                                className="block text-gray-700 text-sm font-bold mb-2"
                                            >
                                                Lat:
                                            </label>
                                            <input
                                                type="text"
                                                id="edited-temps-fermeture"
                                                className="border rounded-lg px-3 py-2 w-full"
                                                value={editedLat}
                                                onChange={(event) => handleAttributeChange(event, 'TempsFermeture')}
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="edited-wilaya"
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                        >
                                            Wilaya:
                                        </label>
                                        <select
                                            id="edited-wilaya"
                                            className="border rounded-lg px-3 py-2 w-full"
                                            value={editedWilaya}
                                            onChange={(event) => handleAttributeChange(event, 'Wilaya')}
                                        >
                                            <option value="" >
                                                {findWilayaById(editedWilaya)}
                                            </option>
                                            {wilayas.map((wilaya) => (
                                                <option key={wilaya.idWilaya} value={wilaya.wilaya}>
                                                    {wilaya.wilaya}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center justify-end p-4 border-t border-solid rounded-b">
                                <button
                                    className="text-red-500 hover:text-red-600 mr-4"
                                    onClick={() => handleDeleteClick(editingId)}
                                >
                                    Annuler
                                </button>
                                <button type="button" className="text-white bg-blue-600 hover:bg-blue-800  focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm sm:px-3  sm:py-2 px-2 py-2  text-center items-center mb-2.5"
                                    onClick={handleSaveClick}
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}