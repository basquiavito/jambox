import {Container, Pagination} from 'semantic-ui-react'
import { useRouter } from 'next/router'



export default function ProfilePagination({totalPages}){
    const router = useRouter()
    return <>
 
    <Container textAlign="center" style={{ margin: '2em'}}>
<Pagination 
defaultActivePage={1}
totalPages={totalPages}
onPageChange={(event, data) => {
data.activePage === 1
? router.push('/profiles/actives')
: router.push(`/profiles/actives/?page=${data.activePage}`)

}}

/></Container>
    
    
     </>
}