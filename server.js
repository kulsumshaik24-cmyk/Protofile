const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Project details array
const projectsData = [
  {
    "title": "AI Campus Help Desk",
    "category": "AI / Web Scraping",
    "description": "Built a retrieval-augmented system that scrapes campus web pages to provide real-time, context-aware answers to student and faculty queries.",
    "techStack": ["RAG & Web Scraping", "Python", "Google Colab", "RAG", "Web Scraping"],
    "githubUrl": "https://colab.research.google.com/drive/19QOALV4DAmxs3izKw-VCwwsmYo4mlb-f?usp=sharing",
    "frontendUrl": "",
    "backendUrl": "",
    "liveUrl": "https://colab.research.google.com/drive/19QOALV4DAmxs3izKw-VCwwsmYo4mlb-f?usp=sharing"
  },
  {
    "title": "Predictive Analytics Engine",
    "category": "Machine Learning",
    "description": "Engineered a predictive model trained on historical data patterns to forecast future trends with high accuracy.",
    "techStack": ["Machine Learning", "Python", "ML Models", "Scikit-Learn"],
    "githubUrl": "https://github.com/kusnuthshaik24-collab/cognevance_PredictiveAnalyticsAndAIModelDeployment",
    "frontendUrl": "",
    "backendUrl": "",
    "liveUrl": ""
  },
  {
    "title": "AI Chatbot Application",
    "category": "Generative AI",
    "description": "Developed an intelligent chatbot leveraging Natural Language Processing and Google Gemini API for smooth, contextual user interactions.",
    "techStack": ["GenAI & NLP", "Python", "Gemini API", "NLP"],
    "githubUrl": "https://github.com/kusnuthshaik24-collab/cognevance_AIChatbotUsingNLP",
    "frontendUrl": "",
    "backendUrl": "",
    "liveUrl": ""
  },
  {
    "title": "BMI Calculator",
    "category": "Full-Stack (MERN)",
    "description": "Designed and deployed a full-stack health application featuring a React frontend and Node.js analytics.",
    "techStack": ["Full-Stack Web Dev", "MongoDB", "Express.js", "React.js", "Node.js"],
    "githubUrl": "https://github.com/kusnuthshaik24-collab/BMI-",
    "frontendUrl": "https://github.com/kusnuthshaik24-collab/BMI-",
    "backendUrl": "https://bmif-mu.vercel.app/",
    "liveUrl": "https://bmif-mu.vercel.app/"
  },
  {
    "title": "Movie Recommendation System",
    "category": "Data Science",
    "description": "Implemented an end-to-end recommendation engine utilizing data preprocessing and machine learning algorithms for model matching.",
    "techStack": ["Data Science & ML", "Python", "Data Preprocessing", "Data Viz", "ML"],
    "githubUrl": "https://github.com/kusnuthshaik24-collab/cognevance_MovieRecommendationSystem",
    "frontendUrl": "",
    "backendUrl": "",
    "liveUrl": ""
  },
  {
    "title": "Smart Resource Allocation Platform",
    "category": "Web Application",
    "description": "Co-developed a collaborative web platform designed to seamlessly connect projects with skilled volunteers.",
    "techStack": ["Collaborative Web Prototype", "HTML5", "CSS3", "JavaScript"],
    "githubUrl": "https://github.com/kulsumshaik24-cmyk/volunteer-connect-prolotype.git",
    "frontendUrl": "",
    "backendUrl": "",
    "liveUrl": "https://kulsumshaik24-cmyk.github.io/volunteer-connect-prolotype/"
  }
];

// Root route now directly serves the project details JSON
app.get('/', (req, res) => {
  res.json(projectsData);
});

// Keep /api/projects working as well
app.get('/api/projects', (req, res) => {
  res.json(projectsData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
