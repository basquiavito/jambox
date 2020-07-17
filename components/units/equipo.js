import Link from 'next/link'

export default function equipo(props) {
    return<>

 
 <Link href={`${props.href}`}><a className="player">{props.name}</a></Link> 
 
 <style jsx>
     {
         `
         .player {
             margin: 0.3em;
             display: flex;
             color: #000;
             padding: 1.2px;
         }
         
         `
     }
 </style>
 
    </>
}

 equipo