import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Homepage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to my e-store!</h1>
			</main>
		</div>
	)
}

export default Homepage
