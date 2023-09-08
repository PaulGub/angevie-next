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
                    Actualité : week-end à Brocéliande du 29 septembre au 1er octobre 2023.{' '}
                    <a target="blank" href="https://www.facebook.com/events/304204702171842/?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_tab_event%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D" className="text-blue-500">
                        Cliquez sur le lien pour plus d’informations.
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Home