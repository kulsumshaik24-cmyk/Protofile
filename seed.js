const mongoose = require('mongoose');
require('dotenv').config();
const Project = require('./models/Project');

const myProjects = [
  {
    title: 'MERN Stack Workshop Live Project',
    description: 'A full-stack web application built during the MERN stack workshop and successfully deployed live.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/kulsumshaik24-cmyk/mern-workshop-project',
    liveLink: 'https://your-mern-live-demo.com',
    imageUrl: '/project1.jpg'
  },
  {
    title: 'GenAI Google Colab Workshop Project',
    description: 'Generative AI model integration project developed and executed inside Google Colab during the workshop.',
    technologies: ['Python', 'Generative AI', 'Google Colab'],
    githubLink: 'https://github.com/kulsumshaik24-cmyk/genai-colab-project',
    liveLink: '', 
    imageUrl: '/project1.jpg'
  },
  {
    title: 'Internship Project 1',
    description: 'Developed during professional internship. Documented with GitHub commits and verification recordings.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/kulsumshaik24-cmyk/internship-project-1',
    liveLink: '',
    imageUrl: '/project1.jpg'
  },
  {
    title: 'Internship Project 2',
    description: 'Full-stack feature module built during internship with complete code repository structure.',
    technologies: ['JavaScript', 'Express', 'Tailwind CSS'],
    githubLink: 'https://github.com/kulsumshaik24-cmyk/internship-project-2',
    liveLink: '',
    imageUrl: '/project1.jpg'
  },
  {
    title: 'Internship Project 3',
    description: 'Advanced web solution built during internship program, tracked via GitHub and documented interface views.',
    technologies: ['React', 'MERN Stack', 'REST API'],
    githubLink: 'https://github.com/kulsumshaik24-cmyk/internship-project-3',
    liveLink: '',
    imageUrl: '/project1.jpg'
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Project.deleteMany({});
    await Project.insertMany(myProjects);
    console.log('Kulsum\'s projects seeded successfully into MongoDB!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seedDB();