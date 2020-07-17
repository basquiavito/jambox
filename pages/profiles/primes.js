import React from 'react'
import axios from 'axios'
import PrimeList from '../../components/Index/PrimeList'
import baseUrl from '../../utils/baseUrl'

function Primes({ primes }) {
 return <PrimeList primes={primes} />
 
}
Primes.getInitialProps = async () => {
const url = `https://hoopscript.vercel.app/api/primes`;
const response = await axios.get(url);
return { primes: response.data }
}
 

 
export default Primes;
