import * as React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2021 {config.author}</div>

      {hasMounted ? (
        <div className={styles.settings}>
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkModeCb}
            title='Tottle dark mode'>
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
        
      ) : null}

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}
      </div>
      <form action="https://mireactapp-miguelgalp.vercel.app/" method="GET">
      <button className={styles.refresh}>↻</button>
      </form>
      <nav role="navigation">
        <div className={styles.menuToggle}>
           <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            <ul className={styles.menu}>
             
             <a href="#"><li> tu color 🌈 </li></a>
             <a href="#"><li>web 3.0 ❓</li></a>
             <a href="mailto:miguel.galperin@gmail.com"><li>contacto 📪</li></a>
             
            </ul>
         </div>
       </nav>
     <div className={styles.titulo}><p><span className={styles.recuadro}>un jardín digital</span>, comunitario ✦ somos una ong tech para otras ongs, organizaciones, proyectos, ideas y expresiones artísticas<span className={styles.estrellas}> ✦</span> cultivamos juntos un laboratorio de <span className={styles.recuadro}>herramientas</span> digitales para tus redes sociales, tu público y tus acciones educativas y de capacitación ✧ <span className={styles.recuadro}>escribinos</span> para una demo ✧ whatsapp ✧ instagram ✦ 2022 copyright atlanticx.org ➠</p></div>

    <div className={styles.tituloMobile}><p>estudio web ✦ el color es tuyo ✦ diseño ✧ procesos ✦ deploy ✦ comunidades ✦ eventos educación ✦ cultura ✦ ux/ui ✦ agência web ✧ el color es tuyo ✦ design ✦ projetos ✦ deploy ✧ comunidades ✦ eventos virtuais ✦ educação ✦ cultura ✦ web studio ✦ el color es tuyo ✧ design ✦</p></div>

   <div className={styles.tituloMobile2}><p>estudio web ✦ el color es tuyo ✦ diseño ✧ procesos ✦ deploy ✦ comunidades ✦ eventos educación ✦ cultura ✦ ux/ui ✦ agência web ✧ el color es tuyo ✦ design ✦ projetos ✦ deploy ✧ comunidades ✦ eventos virtuais ✦ educação ✦ cultura ✦ web studio ✦ el color es tuyo ✧ design ✦projects ✦ deploy communities ✦ virtual events ✦ education ✧ culture ✧ ux/ui ✦ agência web ✧ el color es tuyo ✦ design ✦ projetos ✦ deploy ✧ comunidades ✦ eventos virtuais educação ✦ cultura ✦ ux/ui ✦ estudio web ✦ el color es tuyo ✦ diseño ✧ procesos ✦ deploy ✦ comunidades ✦ eventos educación ✦ cultura ✦ ux/ui ✦ agência web ✧ el color es tuyo ✦ design ✦ projetos ✦ deploy ✧ comunidades ✦ eventos virtuais ✦ educação ✦ cultura ✦ web studio ✦ el color es tuyo ✧ </p></div>
    </footer>
  )
}
