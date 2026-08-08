const mongoose = require('mongoose');
require('dotenv').config();
const Project = require('./models/Project');

const myProjects = [
  {
    title: "MERN Stack Login & Registration System",
    description: "A full-stack user authentication platform featuring secure login and registration functionalities built with the MERN stack.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "CSS", "Vercel", "Render"],
    imageUrl: "/project1.jpg",
    frontendLink: "https://github.com/kulsumshaik24-cmyk/login_Registration_frontend01.git",
    backendLink: "https://github.com/kulsumshaik24-cmyk/login_Registration_backend01.git",
    liveLink: "https://login-registration-frontend01.vercel.app/"
  },
  {
    title: "Cognévance Movie Recommendation System",
    description: "An intelligent movie recommendation system developed during my internship, providing personalized movie suggestions based on user preferences and data analysis.",
    technologies: ["Python", "Machine Learning", "Streamlit", "Pandas", "Scikit-Learn"],
    imageUrl: "/project1.jpg",
    frontendLink: "",
    backendLink: "https://github.com/kulsumshaik24-cmyk/cognevance_MovieRecommendationSystem.git",
    liveLink: ""
  },
  {
    title: "Cognévance AI Chatbot Using NLP",
    description: "An intelligent conversational chatbot developed during my internship using Natural Language Processing (NLP) techniques to understand user queries and provide automated responses.",
    technologies: ["Python", "NLP", "Machine Learning", "NLTK", "Flask"],
    imageUrl: "/project1.jpg",
    frontendLink: "",
    backendLink: "https://github.com/kulsumshaik24-cmyk/cognevance_AIChatbotUsingNLP.git",
    liveLink: ""
  },
  {
    title: "Cognévance Predictive Analytics",
    description: "A predictive analytics system developed during my internship utilizing data analysis and machine learning models to forecast trends and generate predictive insights.",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Data Analysis"],
    imageUrl: "/project1.jpg",
    frontendLink: "",
    backendLink: "https://github.com/kulsumshaik24-cmyk/cognevance_PredictiveAnalytics.git",
    liveLink: ""
  },
  {
    title: "GenAI Google Colab Workshop Project",
    description: "An interactive Generative AI workshop project implemented and tested in Google Colab, showcasing prompt engineering and model exploration.",
    technologies: ["Python", "Generative AI", "Google Colab", "Machine Learning"],
    imageUrl: "/project1.jpg",
    frontendLink: "",
    backendLink: "https://colab.research.google.com/drive/1QRSxLBsXwBQFJPeqSW_wRRq2qa9kDPnG?usp=sharing",
    liveLink: "https://drive.google.com/file/d/1BqfHKAiTTyiBJXLnWm4NWLWrp47lyG1D/view?usp=sharing"
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Project.deleteMany({}); // Clears out old documents
    await Project.insertMany(myProjects); // Inserts your specific projects
    console.log('Your projects seeded successfully into MongoDB!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seedDB();
