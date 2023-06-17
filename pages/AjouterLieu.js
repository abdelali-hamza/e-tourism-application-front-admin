import React, { useState, useEffect } from 'react';
import wilayas from '../wilaya.json';
import categories from '../categorie.json';
import themes from '../thème.json';
import dynamic from "next/dynamic";
import { findLocation } from "../Components/Map/commune_lag_lng";
import Image from 'next/image';



const LocationPicker2 = dynamic(
    () =>
        import(
            "../Components/Map/LocationPicker"
        ),
    {
        ssr: false,
    }
);

/*export async function getServerSideProps() {
    const res = await fetch("http://localhost:3001/lieu/All")
    const lieux = await res.json()
    return{
        props:{
            initialLieux : lieux
        }
    }
}*/



const AjouterLieu = () => {

    const [titre, setTitre] = useState('');
    const handleTitreChange = (event) => {
        setTitre(event.target.value);
    };

    const [heureOuv, setHeureOuv] = useState('toujours');
    const handleHeureOuvChange = (event) => {
        setHeureOuv(event.target.value);
    };

    const [heureFer, setHeureFer] = useState('toujours');
    const handleHeureFerChange = (event) => {
        setHeureFer(event.target.value);
    };

    const [longitude, setLongitude] = useState("36.7681618");
    const handleLongitudeChange = (event) => {
        setLongitude(event.target.value);
    };

    const [latitude, setLatitude] = useState("3.0404258");
    const handleLatitudeChange = (event) => {
        setLatitude(event.target.value);
    };

    const [prix, setPrix] = useState('0');
    const handlePrixChange = (event) => {
        setPrix(event.target.value);
    };

    const [selectedWilaya, setSelectedWilaya] = useState('');
    const handleWilayaChange = (event) => {
        const selectedWilaya = event.target.value;
        setSelectedWilaya(selectedWilaya);
        setPosition(findLocation(selectedWilaya));
    };

    const [selectedCategorie, setSelectedCategorie] = useState('');
    const handleCategorieChange = (event) => {
        const selectedCategorie = event.target.value;
        setSelectedCategorie(selectedCategorie);
    };

    const [selectedTheme, setSelectedTheme] = useState('');
    const handleThemeChange = (event) => {
        const selectedTheme = event.target.value;
        setSelectedTheme(selectedTheme);
    };

    const [position, setPosition] = useState({
        lat: "36.7681618",
        lng: "3.0404258",
    });

    const [description, setDescription] = useState('Aucune');
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    // File upload state and handlers

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [dragOver, setDragOver] = useState(false);

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => {
        setDragOver(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const files = Array.from(event.dataTransfer.files);
        setSelectedFiles((prevSelectedFiles) => [
            ...prevSelectedFiles,
            ...files,
        ]);
        setDragOver(false);
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles((prevSelectedFiles) => [
            ...prevSelectedFiles,
            ...files,
        ]);
    };

    const handleDeleteFile = (fileUrl) => {
        setSelectedFiles((prevSelectedFiles) =>
            prevSelectedFiles.filter((url) => url !== fileUrl)
        );
    };

    function findIdByWilaya(wilaya) {
        const foundItem = wilayas.find(item => item.wilaya === wilaya);
        return foundItem ? foundItem.id : null;
    }

    const [error, setError] = useState(false)

    const handleAddLieu = async () => {
        try {
            const formData = new FormData();
            formData.append("nom", titre);
            formData.append("theme", selectedTheme);
            formData.append("categorie", selectedCategorie);
            formData.append("description", description);
            formData.append("tarif", parseInt(prix));
            formData.append("documentation", null); // Replace with the actual documentation value
            formData.append("tempsouverture", heureOuv);
            formData.append("tempsfermeture", heureFer);
            formData.append("lat", parseFloat(latitude));
            formData.append("long", parseFloat(longitude));
            formData.append("wilaya", findIdByWilaya(selectedWilaya));
            console.log(formData)

            for (let i = 0; i < selectedFiles.length; i++) {
                formData.append("pictures", selectedFiles[i]);
            }

            const response = await fetch("http://localhost:3001/lieu/add/1", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log("Lieu created successfully");
                setTimeout(() => {
                    setError(false)
                    // Code to be executed after the delay
                }, 3000); // Delay of 3000 milliseconds (3 seconds)
                setError(true)
                // Handle success scenario
            } else {
                console.error("Failed to create lieu");
                // Handle failure scenario
            }
        } catch (error) {
            console.error("Failed to create lieu:", error);
            // Handle error scenario
        }
    };

    return (
        <div className="justify-center items-center">
            <div className="text-3xl font-bold flex flex-col my-5 mt-2">Ajouter un lieu</div>
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border flex-row md:mt-0  dark:bg-gray-800 dark:border-gray-700 sm:p-8 m-auto">
                <h1 className="mb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Ajouter un <span className="text-orange-500">Lieu</span>
                </h1>
                <div className="flex flex-col sm:flex-row w-full justify-between">
                    <div className="sm:w-1/2 w-full  mr-4">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="email"
                                name="titre"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={handleTitreChange}
                            />
                            <label
                                htmlFor="titre"
                                className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Titre
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <select
                                value={selectedTheme}
                                onChange={handleThemeChange}
                                name="categorie"
                                className="block py-2.5 px-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            >
                                <option value="" >Thème</option>
                                {themes.map((theme, index) => (
                                    <option key={index} value={theme}>
                                        {theme}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <select
                                value={selectedCategorie}
                                onChange={handleCategorieChange}
                                name="categorie"
                                className="block py-2.5 px-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            >
                                <option value="" >Catégorie</option>
                                {categories.map((categorie, index) => (
                                    <option key={index} value={categorie}>
                                        {categorie}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6 mt-8">
                            <div className="relative z-0 w-full mb-4 group">
                                <input
                                    type="time"
                                    name="HeureOuv"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleHeureOuvChange}
                                />
                                <label
                                    htmlFor="HeureOuv"
                                    className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Heure d'ouverture
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="time"
                                    name="HeureFem"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleHeureFerChange}
                                />
                                <label
                                    htmlFor="HeureFem"
                                    className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Heure fermeture
                                </label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-8 group">
                            <select
                                value={selectedWilaya}
                                onChange={handleWilayaChange}
                                className="block py-2.5 px-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            >
                                <option value="" className=''>Wilaya</option>
                                {wilayas.map((wilaya, index) => (
                                    <option key={index} value={wilaya.wilaya}>
                                        {wilaya.wilaya}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6 mb-2 mt-2">
                            <div className="relative z-0 w-full mb-2 group">
                                <input
                                    type="float"
                                    name="Longuitude"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    value={position.lng}
                                    onChange={handleLongitudeChange}
                                />
                                <label
                                    htmlFor="Longuitude"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Longuitude
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-2 group">
                                <input
                                    type="float"
                                    name="Latitude"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    value={position.lat}
                                    onChange={handleLatitudeChange}
                                />
                                <label
                                    htmlFor="Latitude"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Latitude
                                </label>
                            </div>
                        </div>

                        <div className="relative z-0 w-full mb-4 group">
                            <input
                                type="number"
                                name="floating_password"
                                id="floating_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                min="0"
                                onChange={handlePrixChange}
                            />
                            <label
                                htmlFor="floating_password"
                                className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Prix
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <textarea
                                onChange={handleDescriptionChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_description"
                                className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Description
                            </label>
                        </div>
                        <div className=" w-full">
                            <p className=" mb-1 text-sm">photos et videos</p>
                            <div
                                className={`border-2 p-8 text-center items-center border-dashed border-gray-300  rounded-md cursor-pointer transition duration-300 ${dragOver ? 'bg-gray-200' : ''
                                    }`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <label
                                    htmlFor="file-upload"
                                    className="px-5 py-3 flex flex-col items-center text-gray-500 rounded-md cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out"
                                >
                                    <svg
                                        htmlFor="file-upload"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                        />
                                    </svg>
                                </label>
                                <input
                                    type="file"
                                    multiple
                                    className="hidden"
                                    id="file-upload"
                                    onChange={handleFileChange}
                                />
                                <p className="mt-2 ml-2 text-gray-500 text-sm">or drag and drop</p>
                                {selectedFiles.length > 0 && (
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
                                        {selectedFiles.map((fileUrl, index) => (
                                            <div key={index} className="relative ">
                                                <button
                                                    className="text-red-500"
                                                    onClick={() => handleDeleteFile(fileUrl)}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                                <div className="w-full h-16">
                                                    <Image
                                                        src={URL.createObjectURL(fileUrl)}
                                                        alt={"NumidiaDz"}
                                                        width="20"
                                                        height="20"
                                                        className="object-cover w-full h-full rounded-md"
                                                        onError={(e) =>
                                                        (e.target.src =
                                                            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg")
                                                        }
                                                    >
                                                    </Image>
                                                </div>
                                            </div>
                                        ))}


                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="text-white mt-16 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:w-full px-5 py-2.5 text-center"
                                onClick={handleAddLieu}
                            >
                                Submit
                            </button>

                        </div>
                    </div>
                    <div className='w-full h-64 sm:h-full sm:ml-8 mb-2'>
                        <label
                            className="label"
                            htmlFor="image"
                        >
                            <span className="label-text  text-lg">
                                Position sur la carte
                            </span>
                        </label>
                        <LocationPicker2
                            position={position}
                            onChangedPosition={setPosition}
                        />
                    </div>
                </div>
                {error && <div
                    className="text-black bg-opacity-30 w-1/4 bg-green-400 border-2 border-solid border-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Lieu Ajouté avec succès
                </div>}
            </div>
        </div>
    );
};

export default AjouterLieu;
