import React from 'react';

const Home = () => {
    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-center px-4" 
            style={{ backgroundImage: 'url(/background.jpg)' }}
        >
            <div className="text-center mb-8">
                <img src="/logo.png" alt="Logo Ange & Vie" className="w-64 h-64 mx-auto" />
            </div>

            <div className="max-w-2xl p-8 bg-white bg-opacity-80 rounded-lg shadow-xl backdrop-blur-lg lg:flex lg:items-center lg:space-x-8">
                
                <img 
                    src="/angelique.jpg" 
                    alt="Angélique Spaziani" 
                    className="w-48 h-48 rounded-full shadow-md object-cover mx-auto mb-6 lg:mb-0 lg:mx-0"
                />

                <div className="space-y-4 text-gray-800 lg:text-left">
                    <p className="text-lg">
                        Je me présente, Angélique Spaziani, énergéticienne basée à Eysines. Mon objectif est de vous aider à retrouver équilibre et bien-être.
                    </p>

                    <p className="text-lg">
                        Vous pouvez me contacter pour toute prise de rendez-vous ou demande de renseignements.
                    </p>
                    
                    <div className="text-lg font-semibold">
                        <a 
                            href="mailto:AngeEtVie@laposte.net" 
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            AngeEtVie@laposte.net
                        </a>
                        &nbsp;–&nbsp;
                        <a 
                            href="tel:0767055790" 
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                        >
                            07 67 05 57 90
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;