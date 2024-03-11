const smoothScrollIntoView = element => {
  return new Promise(resolve => {
    const scrollOptions = { behavior: 'smooth' };
    const onScroll = () => {
      const scrollPosition = Math.trunc(element.getBoundingClientRect().top);
      if (scrollPosition === 0) {
        resolve();
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);

    requestAnimationFrame(() => {
      element.scrollIntoView(scrollOptions);
    });
  });
};

export const introToView = async href => {
  const section = document.getElementById(href);

  if (section) {
    await smoothScrollIntoView(section);
    section.focus();
  }
};
