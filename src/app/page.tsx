import React from 'react';
import Card from '../app/components/Card';
import CardGrid from '../app/components/CardGrid';
import { Varela_Round } from "next/font/google";

const varela = Varela_Round({ weight: ["400"], subsets: ["latin"] });

const HomePage: React.FC = () => {
    return (
        <>
            <header className="bg-primary text-onPrimary">
                <div className="px-3 md:px-6 lg:px-12 flex justify-between items-center">
                    <div>
                        <p  className="text-2xl">Hi, I'm</p>
                        <h1 className={`${varela.className} text-7xl font-bold text-onPrimary`}>Kaue Lima</h1>
                    </div>
                    <div className="w-1/2 h-60 relative">
                        <img 
                            src="/images/kauelima.webp" 
                            alt="Kaue Lima" 
                            className="absolute w-full h-full object-cover object-center mix-blend-multiply" 
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        />
                    </div>
                </div>
            </header>
            <div className="px-3 md:px-6 lg:px-12 my-4">
                <h2 className="text-2xl font-bold mb-4 text-onBackground">Some of my work</h2>
                <CardGrid>
                  <Card
                    title="Field App Redesign"
                    image="/images/fieldy.jpg"
                    text="Fieldy was developed in partnership with MBLabs, a software-house in Campinas, Brazil for Fieldy. Fieldy is a company inside of Ativy group focused on developing mobility solutions for sales representative in the field."
                    
                  />
                  <Card
                    title="ConectaPay"
                    image="/images/conectapay.jpg"
                    text="In partnership with British American Tobacco, Conecta Pay was developed with the goal of straightening the relationship between the industry and retail. The project uses a smart payment terminal to capture transactions, but also gather important information about the sales for the industry partner. "
                    
                  />
                  <Card
                    title="Expedição - Movile"
                    image="/images/delivery-center.jpg"
                    text="Delivery Center, at the time one of Movile's companies, had a specific need in their operation to manage both the dispatch but also the pickup of orders from their multiple kitchens going to the dispatch area. We developed an app with both this functionality in mind, gathering information on the whole process and enabling a fluid dispatch operation on that complex environment."
                    
                  />
                  <Card
                    title="App restaurante"
                    image="/images/restaurante.jpg"
                    text="Clube da Entrega's Restaurant App helps restaurants to organize their delivery orders effectively to optimize their operation, even with the busiest of the kitchens. Monitoring the entire lifecycle of an order, since it is received until the delivery, Restaurant App gives essential information to keep your operation running."
                    
                  />
                  <Card
                    title="App expedição"
                    image="/images/expedicao.jpg"
                    text="Clube da Entrega's Restaurant App helps restaurants to organize their delivery orders effectively to optimize their operation, even with the busiest of the kitchens. Monitoring the entire lifecycle of an order, since it is received until the delivery, Restaurant App gives essential information to keep your operation running."
                    
                  />
                  <Card
                    title="Maplink Driver"
                    image="/images/entregador.jpg"
                    text="Clube da Entrega's Restaurant App helps restaurants to organize their delivery orders effectively to optimize their operation, even with the busiest of the kitchens. Monitoring the entire lifecycle of an order, since it is received until the delivery, Restaurant App gives essential information to keep your operation running."
                    
                  />
                </CardGrid>
            </div>
        </>
    );
};

export default HomePage;