import React from 'react';

const AdminProfilePage = () => {
    return (
        <div className=" min-h-screen">
            <div className='text-3xl font-bold flex flex-col my-4'>Admin profile
            </div>
            <div className="max-w-3xl mx-auto px-4 py-8">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex items-center mb-6">
                        <img
                            className=" w-16 h-16 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt="Michael Gough"
                        />
                        <div className="ml-4">
                            <h2 className="text-xl font-bold text-gray-800">Imed Triki</h2>
                            <p className="text-gray-500">Admin</p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Informations    Personelles</h3>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, nisi sed
                            dignissim aliquam, velit nulla ultrices urna, vitae placerat erat ligula ut ante.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
                        <p className="text-gray-500">
                            Email: admin@example.com<br />
                            Tel: +1 123-456-7890
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Adresse</h3>
                        <p className="text-gray-500">
                            Rue des Oliviers, Alger, Algérie
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfilePage;
