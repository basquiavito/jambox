import {Container, Pagination} from 'semantic-ui-react'
import { useRouter } from 'next/router'



export default function ArticlePagination({totalPages}){
    const router = useRouter()
    return <>
 
 
    <Container fluid textAlign="center" style={{ marginTop: '2em'}}>
<Pagination 
defaultActivePage={1}
totalPages={totalPages}
onPageChange={(event, data) => {
data.activePage === 1
? router.push('/')
: router.push(`/?page=${data.activePage}`)

}}

/></Container>
 
    <style jsx>
        {`
        .pageGrid{

            display: grid;
            -webkit-box-pack: center;
            justify-content: center;
            grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
            grid-row-gap: 30px;}
            
            .gridCenter{
              grid-column: center-start / center-end;
           }
        
        
        `}
    </style>
    
     </>
} 