"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Project1 from "../../assets/ventteleph.jpg";
import Project2 from "../../assets/data.jpg";
import Project3 from "../../assets/data2.jpg";
import Project4 from "../../assets/register.png";
import Project5 from "../../assets/todolist.png";
import Project6 from "../../assets/uatmGasa.png";
import Project7 from "../../assets/grayC.png";



import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Données des projets
const ProjetsData = [
    {
        id:1,
        title :"Techstore-Template",
        link: "#",
        desc : "Conception d’une interface moderne et réactive dédiée à la vente d’AirPods, mettant en avant les différents modèles, leurs caractéristiques techniques, ainsi que les offres promotionnelles en cours. Le site est conçu pour offrir une expérience utilisateur fluide et intuitive, facilitant la navigation entre les produits, la comparaison des modèles et la gestion du panier. Il combine un design épuré et attractif à des fonctionnalités performantes telles que le paiement en ligne sécurisé, le suivi des commandes et la gestion du compte client.",
        delay : 1.2,
        img : Project1,
        lien1:"https://vente-airpods.web.app/",
        lien2:"https://github.com/MEDEGNON199"

    },
  
    {
        id:2,
        title :"rapport Analyse cardiarque",
        link: "#",
        desc : "Rapport et structuration d’un dataset médical dédié aux maladies cardiaques, mettant en avant les données cliniques essentielles telles que les antécédents des patients, les paramètres biologiques, les examens cardiologiques et les facteurs de risque. Le dataset est conçu pour garantir une exploitation optimale des données, facilitant l’analyse, la recherche médicale et le développement de modèles de prédiction. Il allie une organisation rigoureuse des informations à des exigences strictes en matière de confidentialité, de sécurité et de conformité aux normes de protection des données de santé.",
        delay : 1.6,
        img : Project2,
        lien1: "https://github.com/MEDEGNON199/Analysecardiaque.git",
        lien2:"https://github.com/MEDEGNON199/Analysecardiaque.git"
    },


    {
        id:3,
        title :"Rapport financier",
        link: "#",
        desc : "Raport et structuration d’un dataset médical dédié aux maladies cardiaques, mettant en avant les données cliniques essentielles telles que les antécédents des patients, les paramètres biologiques, les examens cardiologiques et les facteurs de risque. Le dataset est conçu pour garantir une exploitation optimale des données, facilitant l’analyse, la recherche médicale et le développement de modèles de prédiction. Il allie une organisation rigoureuse des informations à des exigences strictes en matière de confidentialité, de sécurité et de conformité aux normes de protection des données de santé.",
        delay : 2,
        img : Project3,
        lien1:"https://github.com/MEDEGNON199/Rapport-financier.git",
        lien2:"https://github.com/MEDEGNON199/Rapport-financier.git"

        
    },
    {
        id:4,
        title :"Register",
        link: "#",
        desc : "Conception d'un formulaire d'inscription moderne, animé et élégant pour une expérience utilisateur exceptionnelle. Doté de micro-interactions fluides et de transitions subtiles qui guident et engagent l'utilisateur à chaque étape. Le design minimaliste met l'accent sur la simplicité et l'accessibilité, tout en offrant une validation visuelle instantanée. Une solution à la fois esthétique et fonctionnelle pour maximiser le taux de conversion.",
        delay : 2,
        img : Project4,
        lien1:"https://register-seven-delta.vercel.app/",
        lien2:"https://github.com/hippolite-oss"

        
    },
    {
        id:5,
        title :"Todolist",
        link: "#",
        desc : "Ce projet est une application To-Do List réalisée en HTML, CSS et JavaScript. Elle permet à l’utilisateur d’ajouter, de marquer comme terminées et de supprimer des tâches de manière simple et intuitive. L’interface est épurée et responsive, offrant une expérience utilisateur fluide aussi bien sur ordinateur que sur mobile.",
        delay : 2,
        img : Project5,
        lien1:"https://todolist-indol-one-31.vercel.app/",
        lien2:"https://github.com/hippolite-oss"

        
    },
    {
        id:6,
        title :"UATM-GASA",
        link: "#",
        desc : "Le site dynamique de l’UATM-GASA est une plateforme moderne et interactive conçue pour offrir aux étudiants, enseignants, chercheurs et partenaires un accès simplifié à toutes les informations essentielles de l’université.",
        delay : 2,
        img : Project6,
        lien1:"https://gasasite.vercel.app/index.html",
        lien2:"https://github.com/hippolite-oss"

        
    },
    {
        id:7,
        title :"Cauris-PayGray",
        link: "#",
        desc : "Création d'une plateforme financière moderne et intuitive pour CaurisPay, réalisée avec un template gris, centralisant les services de paiement, transfert d'argent et paiement de factures. Conçue pour une expérience utilisateur fluide et sécurisée, elle combine un design épuré à des fonctionnalités robustes comme le portefeuille électronique et le suivi des transactions. L'interface responsive garantit une gestion simplifiée des finances depuis mobile ou ordinateur.",
        delay : 2,
        img : Project7,
        lien1:"https://cauris-pay-gray.vercel.app/",
        lien2:"https://github.com/hippolite-oss"

        
    },
]


// Configuration du slider avec autoplay activé
const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Permet le défilement automatique
    autoplaySpeed: 3000, // Délai entre chaque défilement (en millisecondes)
    responsive: [
        {
            breakpoint: 768, // Pour les mobiles
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const Projects = () => {
    return (
        <section className='bg-black text-white'>
            <div className="container py-20 xl:py-36 space-y-36">
                {/* Titre */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.6, delay: 0.5 }} 
                    className='relative text-center'>
                    <p className='text-3xl lg:text-4xl tracking-widest font-bold uppercase z-20'>Projects</p>
                    <p className='text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-extrabold'>Projects</p>
                </motion.div>

                {/* Section slider */}
                <Slider {...sliderSettings}>
                    {ProjetsData.map((project) => (
                        <motion.div 
                            key={project.id} 
                            whileHover={{ scale: 1.05 }} // Ombre au survol
                            className="p-6 group"
                        >
                            <div className="bg-black hover:red-shadow border-2 border-primary/80 p-4 rounded-xl space-y-5 transition-all duration-300 transform">
                                <Image className='w-full object-cover rounded' src={project.img} alt={project.title} />
                                <div className='space-y-2 p-4'>
                                    <h1 className="text-lg font-bold">{project.title}</h1>
                                    <p className='text-sm line-clamp-5'>{project.desc}</p>
                                </div>
                                <div className='hidden group-hover:flex justify-around items-center duration-300'>
                                    <Link href={project.lien1} target="_blank" >
                                        <button className='border-2 border-white py-2 rounded-lg px-4'target='blilnk'>Live</button>
                                    </Link>
                                    <Link href={project.lien2} target="_blank" >
                                        <button className='btn'>Voir le Code</button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Projects;
