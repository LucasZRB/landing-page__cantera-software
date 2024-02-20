import React from 'react';

const Team = () => {
  return (
    <section className="" >
      <h2 className="">Nuestro equipo</h2>
      <p className="">En La Cantera, creemos que el corazón de este proyecto reside en las personas que la hacen posible. Nuestro equipo está compuesto por apasionados profesionales dedicados a la misión de transformar vidas a través de la educación en tecnología. ¡Conócelos!</p>
      <div className="">
        <div className="">
          <a href="#" className="" title="Ir a la página de Fernando" target="_blank" rel="noopener noreferrer">
            <figure className=""><img src="../../../public/images/Nogara.png" alt="Fernando Nogara" aria-label=" "/></figure>
            <div className="">
              <span className="sr-only">Esta persona es Fernando, Coh-Founder de la empresa</span>
              <p className="" aria-hidden="true"><b>Fernando Nogara</b></p>
              <span className="" aria-hidden="true">Co-Founder</span>
            </div>
          </a>
        </div>
        <div className="">
          <a href="#" className="" title="Ir a la página de Lucas" target="_blank" rel="noopener noreferrer">
            <figure className=""><img src="../../../public/images/Lucas.png" alt="Lucas Muñoz" aria-label=" "/></figure>
            <div className="">
              <span className="sr-only">Esta persona es Lucas, Director Ejecutivo, también llamado CEO, y Coh-Founder de la empresa</span>
              <p className="" aria-hidden="true"><b>Lucas Muñoz</b></p>
              <span className="" aria-hidden="true">
                <abbr title="Director Ejecutivo">CEO</abbr> 
                {' '}y Co-Founder
              </span>
            </div>
          </a>
        </div>
        <div className="">
          <a href="#" className="" title="Ir a la página de Carla" target="_blank" rel="noopener noreferrer">
            <figure className=""><img src="../../../public/images/Panelo.png" alt="Carla Panelo" aria-label=" "/></figure>
            <div className="">
              <span className="sr-only">Esta persona es Carla, Posicion de la empresa</span>
              <p className="" aria-hidden="true"><b>Carla Panelo</b></p>
              <span className="" aria-hidden="true">Posicion</span>
            </div>
          </a>
        </div>
        <div className="">
          <a href="#" className="" title="Ir a la página de Paulina" target="_blank" rel="noopener noreferrer">
            <figure className=""><img src="../../../public/images/Paulina.png" alt="Paulina Ibarra" aria-label=" "/></figure>
            <div className="">
              <span className="sr-only">Esta persona es Paulina, Marketing Manayer de la empresa</span>
              <p className="" aria-hidden="true"><b>Paulina Ibarra</b></p>
              <span className="" aria-hidden="true">Marketing Manager</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  ) 
}

export{Team};