import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function About() {
    const sectionBgUrl="https://res.cloudinary.com/db439dn7s/image/upload/v1735019375/samples/bike.jpg"
    const phoneNumber = 254790070100 // Replace with your phone number
    const message = "Hello, kindly guide me on steps to become a member of SNAKU!"; // Predefined message
    const encodedMessage = encodeURIComponent(message); // Encode the message to be URL-safe  
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    const callToActionImgUrl="https://res.cloudinary.com/db439dn7s/image/upload/v1735030404/fun-img_r2fioy.png"
    
    return (
            <div>
                <section   className="flex items-center justify-center bg-cover h-72 md:h-96 center" 
                        style={{ backgroundImage: `url(${sectionBgUrl})` }} >
                    <h1 className='pt-6 text-4xl font-bold leading-relaxed text-center text-white md:w-1/2'>
                        Transforming Lives Through Professional Nursing Care.
                    </h1> 
                </section>
                <section className='flex flex-col items-center justify-center '>
                    <h2 className='py-2 text-2xl font-semibold md:py-6'>
                        About Snaku
                    </h2>
                    <p className='px-4 leading-6'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit mollitia velit ipsa quo ad incidunt sed itaque non voluptatem vitae quas reiciendis maiores molestias, eius delectus nam soluta. Recusandae, quasi.
                        
                        Voluptas facilis est, voluptatibus officia ipsum accusantium repudiandae! Modi vitae qui, architecto recusandae autem nulla unde doloremque commodi reiciendis eos fuga aliquid quam cum id incidunt cumque facere? Perspiciatis, distinctio?
                    </p>
                    <hr />
                </section>
                <section className='flex flex-col justify-center px-4 pl-2 mt-8 md:flex-row'>
                    <div className=''>
                        <h2 className='py-1 text-2xl font-semibold md:py-3'>
                            Mission
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium laudantium ea similique aperiam, cum alias quis saepe? Quos, ad!
                        </p>
                    </div>
                    <div className='md:px-2'>
                        <h2 className='py-1 text-2xl font-semibold md:py-3'>
                            Vision
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vero. At omnis in fugit nemo, expedita facere nulla magni exercitationem ipsam. Doloribus ex 
                        </p>
 
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold md:py-3'>
                            Purpose
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dignissimos dolores! Quae odio ipsa maxime ut tempora blanditiis quos modi, saepe nisi quas, eaque laborum iusto deleniti a consequuntur repellendus.
                        </p>
                        
                    </div>
                </section>
                <section className='flex flex-col items-center justify-center px-4 pl-2 mt-8 '>
                    <h2 className='text-3xl font-semibold text-center'>
                        Our Activities
                    </h2>
                    <div className='flex flex-col justify-center mt-4 gap-y-4 md:flex-row'>
                        <div>
                            <h2 className='text-2xl font-semibold md:py-3'>
                                Charity Drives
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium est nemo quidem reprehenderit expedita molestiae natus dolorem repudiandae totam aliquam perspiciatis nihil placeat eaque, quaerat fugiat necessitatibus magni quasi!
                            </p>
                        </div>
                        <div className='md:px-2'>
                            <h2 className='text-2xl font-semibold md:py-3'>
                                Medical Camp
                            </h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim repudiandae illo placeat beatae laudantium omnis quia nihil praesentium obcaecati nemo voluptates sit quibusdam cupiditate consequuntur, tenetur quasi commodi reiciendis maxime?
                            </p>
                        </div>
                        <div >
                            <h2 className='text-2xl font-semibold md:py-3'>
                                Fun Events
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestias, sunt, ullam pariatur totam eos, voluptate maiores ex quidem temporibus provident recusandae alias facilis? Eligendi sed culpa accusamus ratione soluta.
                            </p>
                        </div>
                    </div>
                    <div className='my-8'>
                        <NavLink to="/events"  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-400" activeClassName="bg-blue-700" aria-label="See more events">
                            See More Events
                        </NavLink>
                    </div>
                </section> 
                <section className='justify-between px-8 py-4 bg-blue-600 md:flex'>
                    <div>
                    <div>
                        <h2 className='text-3xl font-semibold text-white '>
                            Learn and Have Fun
                        </h2>
                        <p className='text-white '> 
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus aut eos rem, repellat at ipsa? Minus a qui iste! Delectus.
                        </p>
                    </div>
                    <div className='py-6 md:w-1/2'> 
                            <a
                href={whatsappURL} 
                target="_blank" 
                rel="noopener noreferrer" className="px-4 py-2 font-extrabold text-white bg-black rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Chat with us on WhatsApp" >
                    Join Us Now
                </a>
            
                    </div> 
                    </div>
                    <div className='md:w-1/2'>
                        <img src={callToActionImgUrl} alt="Image of serene exciting scene" className='hidden w-screen md:block'/>
                    </div>
                                  
                </section>    
            </div>
           
    )
}

