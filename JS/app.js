document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.slider');
    const skills = document.querySelectorAll('.skill img');
    const realizations = document.querySelectorAll('.realisation img');
    const sectionAbout = document.querySelector('.section .boxed');
    const sectionSkills = document.querySelector('.section.dark .boxed');
    const sectionRealizations = document.querySelector('.section .boxed.text-center');
    
    // Fonction de détection de l'entrée dans la vue
    const animateOnScroll = (elements, animationClass) => {
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                }
            });
        }, observerOptions);

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    // Animation pour la section "À propos de moi"
    const slideUpEffect = () => {
        sectionAbout.style.opacity = '0';
        sectionAbout.style.transform = 'translateY(100px)';
        setTimeout(() => {
            sectionAbout.style.transition = 'all 1s ease';
            sectionAbout.style.opacity = '1';
            sectionAbout.style.transform = 'translateY(0)';
        }, 100);
    };

    // Animation pour la section "Compétences"
    const slideInEffect = () => {
        sectionSkills.style.opacity = '0';
        sectionSkills.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            sectionSkills.style.transition = 'all 1s ease';
            sectionSkills.style.opacity = '1';
            sectionSkills.style.transform = 'translateX(0)';
        }, 100);
    };

    // Animation pour la section "Réalisations"
    const fadeInEffect = () => {
        sectionRealizations.style.opacity = '0';
        sectionRealizations.style.transform = 'scale(0.8)';
        setTimeout(() => {
            sectionRealizations.style.transition = 'all 1s ease';
            sectionRealizations.style.opacity = '1';
            sectionRealizations.style.transform = 'scale(1)';
        }, 100);
    };

    // Animation d'apparition des compétences
    const skillHoverEffect = () => {
        skills.forEach(skill => {
            skill.addEventListener('mouseover', () => {
                skill.style.transform = 'scale(1.2)';
                skill.style.transition = 'transform 0.4s ease';
            });

            skill.addEventListener('mouseout', () => {
                skill.style.transform = 'scale(1)';
            });
        });
    };

    // Animation des images de réalisations
    const realizationHoverEffect = () => {
        realizations.forEach(realization => {
            realization.addEventListener('mouseover', () => {
                realization.style.transform = 'scale(1.1)';
                realization.style.transition = 'transform 0.4s ease';
            });

            realization.addEventListener('mouseout', () => {
                realization.style.transform = 'scale(1)';
            });
        });
    };

    // Initialisation des effets
    animateOnScroll(skills, 'visible');
    animateOnScroll(realizations, 'visible');
    slideUpEffect();
    slideInEffect();
    fadeInEffect();
    skillHoverEffect();
    realizationHoverEffect();
});
