import React from 'react';

interface SkillItem {
  name: string;
  logo?: string;
  image?: string;
  color: string;
  logoColor?: string;
  style?: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", logo: "python", color: "3776AB", logoColor: "fff", style: "flat" },
        { name: "Dart", logo: "dart", color: "01d2b9", logoColor: "04599c", style: "flat-square" },
        { name: "HTML5", logo: "html5", color: "E34F26", logoColor: "fff", style: "flat-square" },
        { name: "CSS3", logo: "css3", color: "1572B6", logoColor: "fff", style: "flat-square" },
        { name: "JavaScript", logo: "javascript", color: "F7DF1E", logoColor: "000", style: "flat-square" },
        { name: "C", logo: "c", color: "A8B9CC", logoColor: "fff", style: "flat-square" },
        { name: "Markup", logo: "markup", color: "3776AB", logoColor: "000000", style: "flat" }
      ]
    },
    {
      title: "Libraries and Frameworks",
      skills: [
        { name: "NumPy", logo: "numpy", color: "013243", logoColor: "fff", style: "flat-square" },
        { name: "Pandas", logo: "pandas", color: "150458", logoColor: "fff", style: "flat-square" },
        { name: "Plotly", logo: "plotly", color: "3F4F75", logoColor: "fff", style: "flat-square" },
        { name: "SciPy", logo: "scipy", color: "0C55A5", logoColor: "white", style: "flat-square" },
        { name: "scikit-learn", logo: "scikitlearn", color: "F7931E", logoColor: "fff", style: "flat-square" },
        { name: "Keras", logo: "keras", color: "D00000", logoColor: "white", style: "flat-square" },
        { name: "TensorFlow", logo: "tensorflow", color: "FF6F00", logoColor: "fff", style: "flat-square" },
        { name: "PyTorch", logo: "pytorch", color: "EE4C2C", logoColor: "fff", style: "flat-square" },
        { name: "Langchain", logo: "langchain", color: "43B02A", logoColor: "fff", style: "flat-square" },
        { 
          name: "Fast.AI", 
          image: "data:image/png;base64,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", 
          color: "ffffff", 
          logoColor: "000000", 
          style: "flat-square" 
        },
        { name: "Unsloth AI", logo: "unslothai", color: "15b788", logoColor: "fff", style: "flat-square" },
        { name: "Hugging Face", logo: "huggingface", color: "FFD21E", logoColor: "000", style: "flat-square" },
        { name: "OpenAI", logo: "openai", color: "ffffff", logoColor: "000000", style: "flat-square" },
        { name: "Opencv", logo: "opencv", color: "0C55A5", logoColor: "ffff80", style: "flat-square" },
        { name: "ONNX", logo: "onnx", color: "ffffff", logoColor: "000000", style: "flat-square" },
        { name: "Selenium", logo: "selenium", color: "43B02A", logoColor: "fff", style: "flat-square" },
        { name: "Flask", logo: "flask", color: "ffffff", logoColor: "000000", style: "flat-square" },
        { name: "Flutter", logo: "flutter", color: "0CC1F3", logoColor: "white", style: "flat-square" },
        { name: "Bootstrap", logo: "bootstrap", color: "7952B3", logoColor: "fff", style: "flat-square" }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Anaconda", logo: "anaconda", color: "44A833", logoColor: "fff", style: "flat-square" },
        { name: "Jupyter", logo: "jupyter", color: "F37626", logoColor: "fff", style: "flat-square" },
        { name: "Google Colab", logo: "googlecolab", color: "F9AB00", logoColor: "fff", style: "flat-square" },
        { name: "Kaggle", logo: "kaggle", color: "20BEFF", logoColor: "fff", style: "flat-square" },
        { 
          name: "Visual Studio Code", 
          image: "data:image/png;base64,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", 
          color: "ffffff", 
          logoColor: "000000", 
          style: "flat-square" 
        },
        { name: "GitHub", logo: "github", color: "181717", logoColor: "fff", style: "flat-square" },
        { name: "SQLite", logo: "sqlite", color: "003B57", logoColor: "fff", style: "flat-square" },
        { name: "Netlify", logo: "netlify", color: "ffffff", logoColor: "00C7B7", style: "flat-square" },
        { name: "Gradio", logo: "gradio", color: "fab500", logoColor: "fff", style: "flat-square" },
        { name: "Streamlit", logo: "streamlit", color: "20242f", logoColor: "7d343b", style: "flat-square" },
        { name: "Render", logo: "render", color: "ffffff", logoColor: "000000", style: "flat-square" }
      ]
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Tableau", logo: "tableau", color: "E97627", logoColor: "fff", style: "flat-square" },
        { name: "Overleaf", logo: "overleaf", color: "47A141", logoColor: "fff", style: "flat-square" },
        { name: "Figma", logo: "figma", color: "F24E1E", logoColor: "fff", style: "flat-square" },
        { name: "Stack Overflow", logo: "stackoverflow", color: "F58025", logoColor: "fff", style: "flat-square" },
        { name: "Roboflow", logo: "roboflow", color: "6706cf", logoColor: "fff", style: "flat-square" },
        { name: "LabelBox", logo: "labelbox", color: "ffffff", logoColor: "000000", style: "flat-square" }
      ]
    }
  ];

  const generateBadgeUrl = (skill: SkillItem): string => {
    if (skill.image) {
      // If image is provided, use it directly
      return skill.image;
    } else if (skill.logo) {
      // If logo is provided, generate shields.io URL
      const logoParam = skill.logo;
      const colorParam = skill.color;
      const logoColorParam = skill.logoColor || "fff";
      const styleParam = skill.style || "flat-square";
      
      return `https://img.shields.io/badge/${encodeURIComponent(skill.name)}-${colorParam}?logo=${logoParam}&logoColor=${logoColorParam}&style=${styleParam}`;
    }
    
    // Fallback
    return `https://img.shields.io/badge/${encodeURIComponent(skill.name)}-${skill.color}?style=${skill.style || "flat-square"}`;
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <div>Technical Expertise</div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skills-category mb-4">
                <h3 className="category-title">{category.title}:</h3>
                <div className="badges-container">
                  {category.skills.map((skill, skillIndex) => (
                    <img 
                      key={skillIndex}
                      src={generateBadgeUrl(skill)}
                      alt={`${skill.name} Badge`}
                      title={skill.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
