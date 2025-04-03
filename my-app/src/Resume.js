import React from 'react';

function Resume() {
  const resumeData = {
    name: 'Muhammad Akbar Azizi',
    title: 'Accountant | AI Enthusiast | Digital Marketing Specialist',
    contact: {
      saudiArabiaPhone: '+966 581164121',
      pakistanPhone: '+92 317 5440110',
      email: 'infolmakbar@gmail.com',
    },
    summary: `I am eager to leverage my analytical skills and passion for technology to transition into a new career in Artificial Intelligence (AI). With a Master’s degree in AI in progress, I am gaining expertise in AI-driven tools, data analysis, and digital marketing strategies. My goal is to combine my financial acumen with AI knowledge to contribute to innovative solutions in the tech industry.`,
    coreSkills: [
      'General Accounting', 'Financial Statement Preparation', 'Accounts Payable & Receivable',
      'Bookkeeping', 'Budgeting and Forecasting', 'Payroll Processing', 'Tax Preparation and Filing',
      'Financial Reporting', 'AI Tools for Financial Automation', 'Digital Marketing Strategies',
    ],
    experience: [
      {
        company: 'Distinguished Sponge Trading Est',
        role: 'Account’s Manager',
        duration: '01-07-2024 - Present',
        responsibilities: [
          'Overseeing daily financial operations, ensuring proper tracking and reconciliation of transactions.',
          'Managing accounts payable and receivable, vendor payments, customer invoicing, and collections.',
          'Optimizing cost-efficiency strategies and preparing financial reports for decision-making.',
        ],
      },
      {
        company: 'Azla Travels & Tourism',
        role: 'Account’s Manager',
        duration: '16-02-2024 - 28-06-2024',
        responsibilities: [
          'Tracking and reconciling tickets, managing airline bookings, and maintaining accurate financial records.',
          'Monitoring office expenses and collaborating with internal teams and travel agents.',
        ],
      },
    ],
    education: [
      { degree: 'Master’s in Generative AI Future', institution: 'Google' },
      { degree: 'MBA', institution: 'University of Karachi' },
      { degree: 'Bachelor of Commerce', institution: 'University of Karachi' },
    ],
    certifications: [
      'Certification in Business Communications', 'Certification in Inventory Management', 'Certification in IT for Business Success', 'Certification in Social Media Marketing', 
      'Certification in AI for Beginners', 'Certification in Introduction to Digital Business Skills',
    ],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/muhammad-akbar-45752470/',
      github: 'https://github.com/A581164121/My-Resume',
      portfolio: 'Portfolio Website Link',
    },
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file
    link.download = 'Muhammad_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <header className="text-4xl font-bold mb-8">{resumeData.name}</header>
        <h3 className="text-2xl font-semibold mb-4">{resumeData.title}</h3>
        <p className="mb-6 text-lg">{resumeData.summary}</p>
        
        <div className="mb-12">
          <p className="text-xl font-bold">Contact Information</p>
          <p>Email: {resumeData.contact.email}</p>
          <p>Saudi Arabia: {resumeData.contact.saudiArabiaPhone}</p>
          <p>Pakistan: {resumeData.contact.pakistanPhone}</p>
        </div>

        <div className="mt-10 text-left">
          <h4 className="text-2xl font-bold mb-6">Core Accounting & AI Skills</h4>
          <ul className="list-disc pl-6">
            {resumeData.coreSkills.map((skill, index) => (
              <li key={index} className="text-lg">{skill}</li>
            ))}
          </ul>

          <h4 className="text-2xl font-bold mt-8 mb-4">Work Experience</h4>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-8">
              <p className="font-semibold">{job.company} - {job.role}</p>
              <p>{job.duration}</p>
              <ul className="pl-6">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-lg">{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}

          <h4 className="text-2xl font-bold mt-8 mb-4">Education</h4>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{edu.degree} - {edu.institution}</p>
            </div>
          ))}

          <h4 className="text-2xl font-bold mt-8 mb-4">Certifications</h4>
          <ul className="list-disc pl-6">
            {resumeData.certifications.map((cert, index) => (
              <li key={index} className="text-lg">{cert}</li>
            ))}
          </ul>

          <div className="mt-10">
            <button
              onClick={downloadResume}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400"
            >
              Download Resume
            </button>
          </div>
        </div>
        
        <footer className="mt-20 text-center">
          <p>Let's Connect:</p>
          <div>
            <a href={resumeData.socialLinks.linkedin} className="mr-4">LinkedIn</a>
            <a href={resumeData.socialLinks.github} className="mr-4">GitHub</a>
            <a href={resumeData.socialLinks.portfolio} className="mr-4">Portfolio</a>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Resume;
