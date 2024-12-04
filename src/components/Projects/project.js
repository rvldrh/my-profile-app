import React from 'react';

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
};

export const ProjectPage = () => {
  const projects = [
    {
      title: 'React Storybook',
      description: 'A React component library for building UI components in isolation.',
      link: 'https://github.com/rvldrh/ReactStorybook',
      image: '/image/p5.png',
    },
    {
      title: 'E-commerce Website',
      description: 'An e-commerce website built with React and Redux for managing products and orders.',
      link: 'https://github.com/rvldrh/sportlinev3',
      image: '/image/p3.png',
    },
    {
      title: 'Portfolio Website',
      description: 'A portfolio website to showcase my work and projects. It includes sections for about me, skills, and contact.',
      link: 'https://rvldrh.my.id/',
      image: '/image/p2.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
