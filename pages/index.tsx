import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
            <div className="max-w-xl p-8 space-y-4 bg-white bg-opacity-80">
                <img src="/favicon.svg" alt="Logo" className="mx-auto w-24 h-24" />
                <h1 className="text-2xl font-bold">Bienvenue sur le site de Ange & Vie,</h1>
                <p>
                    Un petit rafraîchissement de mon site est en cours. Vous pouvez me contacter par mail ou téléphone pour toute prise de rendez-vous ou renseignements.
                </p>
                <p>
                    <a href="mailto:AngeEtVie@laposte.net" className="text-blue-500">AngeEtVie@laposte.net</a> – <a href="tel:0767055790" className="text-blue-500">07 67 05 57 90</a>
                </p>
                <p>
                    Actualité : week-end à Brocéliande du 05 au 07 avril 2024.{' '}
                    <a target="blank" href="https://www.facebook.com/profile.php?id=100054545855781" className="text-blue-500">
                        Cliquez sur le lien pour plus d’informations.
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Home
