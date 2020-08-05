import React from 'react'
import axios from 'axios'
import PrimeList from '../../components/Index/PrimeList'
import baseUrl from '../../utils/baseUrl'
import Buttonup from '../../components/featured/buttonup'

function Primes({ primes }) {
 return <>
 <PrimeList primes={primes} />
 </>
 
}
Primes.getInitialProps = async () => {
const url = `https://hoopscript.com/api/primes`;
const response = await axios.get(url);
return { primes: response.data }
}
 

 
export default Primes;
