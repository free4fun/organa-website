import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import styles from '../styles/NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Número 404 con efecto de superposición */}
        <div className={styles.titleWrapper}>
          <h1 className={styles.backgroundNumber}>404</h1>
          <h2 className={styles.overlayTitle}>
            Página no encontrada
          </h2>
        </div>

        {/* Mensaje y botón */}
        <div className={styles.messageContainer}>
          <p className={styles.message}>
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>

          <Link to="/" className={styles.homeButton}>
            <FaHome className={styles.homeIcon} />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound