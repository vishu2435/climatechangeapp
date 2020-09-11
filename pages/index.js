
import {Component} from 'react'
import Layout from '../Components/Layout/Layout'
import styles from '../styles/Home.module.css'

import Cards from '../Containers/Cards/Cards'
import Head from 'next/head'

class Home extends Component {


  render(){
    return (
        <Layout>
	<Head>
        <title>Everyday Climate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>	
        <div className={styles.main}>
        <Cards/>
        </div>
        </Layout>
        
    )
    }
  
}

export default Home


