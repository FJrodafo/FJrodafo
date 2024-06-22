import React, { useState, useEffect } from 'react';
import './../../../assets/styles/portfolio.css';
import { projectsNav, projectsData } from './Data.jsx';
import { useTheme } from '../../context/theme/Theme.jsx';
import { useTranslation } from '../../context/translation/Translation.jsx';

const Work = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // Get projects based on item
    if (item.name === 'all' || item.name === 'todo') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        // Translate the project category before comparing it
        const translatedCategory = t(`portfolio.data.${project.category}`);
        return translatedCategory.toLowerCase() === item.name;
      });

      setProjects(newProjects);
    }
  }, [item, t]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <section className='work section' id='portfolio'>
      <h2 className='section__title'>{t('portfolio.section.title')}</h2>
      <span className='section__subtitle'>{t('portfolio.section.subtitle')}</span>
      <div>
        {/* projectsNav */}
        <div className='work__filters'>
          {projectsNav.map((item, index) => {
            return (
              <span
                onClick={(e) => { handleClick(e, index); }}
                className={`${active === index ? 'active-work' : ''} work__item`}
                key={index}
              >
                {t(`portfolio.data.${item.name}`)}
              </span>
            );
          })}
        </div>
        {/* projects */}
        <div className='work__container container grid'>
          {projects.map((item) => {
            return (
              <div className='work__card' key={item.id}>
                <a href={item.link} target='_blank' rel='noreferrer'>
                  <img className='work__img' src={theme === 'light' ? item.imageLight : item.imageDark} alt='' />
                </a>
                <h3 className='work__title'>{item.title}</h3>
                <a className='work__button' href={item.repository} target='_blank' rel='noreferrer'>
                  {t('portfolio.repository')}<i className='bx bx-right-arrow-alt work__button-icon' />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
