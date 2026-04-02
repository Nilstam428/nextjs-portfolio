import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        title: "GenAI Chat-Bot",
        slug: "genai-chat-bot",
        description: "An AI-powered chatbot using NLP and Amazon Bedrock capable of answering user queries using a knowledge base.",
        longDescription: "Developed an AI-powered chatbot using NLP and Amazon Bedrock capable of answering user queries using a knowledge base. Improved conversational accuracy and user engagement by optimizing prompt flow and response handling.",
        tags: ["Python", "Streamlit", "Amazon Bedrock", "S3", "NLP"],
        featured: true,
    },
    {
        title: "Heart Disease Predictor",
        slug: "heart-disease-predictor",
        description: "A machine learning model predicting heart disease likelihood using patient health data.",
        longDescription: "Built a machine learning model predicting heart disease likelihood using patient health data. Performed preprocessing, feature engineering and hyperparameter tuning to improve model performance.",
        tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
        featured: true,
    },
    {
        title: "File Manager Tool",
        slug: "file-manager-tool",
        description: "A command-line file management tool for organizing directories, renaming files and searching file types.",
        longDescription: "Created a command-line file management tool for organizing directories, renaming files and searching file types. Automated repetitive file operations to streamline system file management.",
        tags: ["Python", "OS Module"],
        featured: true,
    },
    {
        title: "Text Summarizer",
        slug: "text-summarizer",
        description: "A text summarization tool using NLP techniques such as keyword extraction and sentence ranking.",
        longDescription: "Developed a text summarization tool using NLP techniques such as keyword extraction and sentence ranking. Generated concise summaries while maintaining contextual meaning of original documents.",
        tags: ["Python", "NLTK", "NLP"],
        featured: false,
    },
    {
        title: "Library Management System",
        slug: "library-management-system",
        description: "A database-driven system for managing books, users and loan records.",
        longDescription: "Built a database-driven system for managing books, users and loan records. Designed SQL queries for efficient data storage, retrieval and management.",
        tags: ["Python", "SQL", "Database Design"],
        featured: false,
    },
];
