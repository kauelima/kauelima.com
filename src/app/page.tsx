import React from 'react';
import Card from './components/Card';
import CardGrid from './components/CardGrid';
import { Varela_Round } from "next/font/google";
import Image from 'next/image';
import IconButton from './components/IconButton';

const varela = Varela_Round({ weight: ["400"], subsets: ["latin"] });

const HomePage: React.FC = () => {
    return (
        <>
            <header className="bg-primary text-onPrimary">
                <div className="px-3 md:px-6 lg:px-12 flex justify-between items-center">
                    <div>
                        <p  className="text-2xl">{"Hi, I'm"}</p>
                        <h1 className={`${varela.className} text-7xl font-bold text-onPrimary`}>Kaue Lima</h1>
                    </div>
                    <div className="w-1/2 h-60 relative">
                        <Image
                        src="/images/kauelima.webp" 
                        alt="Kaue Lima" 
                        layout="fill"
                        objectFit="cover"
                        className="absolute w-full h-full object-cover object-center mix-blend-multiply"
                    />
                    </div>
                </div>
            </header>
            <div className="px-3 md:px-6 lg:pxs-12 my-4">
                <div className="mt-[-45px] mb-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <Card
                      richContent={[<span key="bio"><strong>Product Specialist</strong> with over <strong>14 years of experience</strong> in turning design expertise into strategic product success, I&apos;m a problem solver at heart, skilled in navigating complex challenges to create solutions that delight and deliver. I&apos;ve lead cross-functional teams on creating a product from scratch as well as collaborated on products that are a success in their fields.
                      <br/><br/>
                      <strong>Ready to create impact together? Let&apos;s talk!</strong></span>]}
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2 lg:col-span-1 h-f">
                  <Card
                    richContent={[
                      <div key='ContandAndLocation' className='flex flex-col gap-5'>
                        <div key='Location' className='flex flex-col'>
                          <span key="location" className='inline-flex'>
                            <Image src='/icons/location.svg' alt='Location' width={24} height={24} /> 
                            Campinas - Brazil
                          </span>

                          <span key="work" className='inline-flex'>
                            <Image src='/icons/work.svg' alt='Work' width={24} height={24} /> 
                            Remote
                          </span>
                        </div>
                        <div key='Contact' className='flex flex-row gap-2'>
                          <IconButton
                            buttonIcon="/icons/linkedin.svg"
                            buttonLink="https://linkedin.com/in/kauelima"
                            buttonAlt='LinkedIn - Kaue Lima'
                          />
                          <IconButton
                            buttonIcon="/icons/email.svg"
                            buttonLink="mailto:kaue@kauelima.com"
                            buttonAlt='Email - Kaue Lima'
                          />
                        </div>
                      </div>
                    ]}
                  />

                  </div>
                </div>
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