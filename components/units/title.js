
 



export default function title(props){
 return<>
<div className="editorialTitle">
<h2 >{props.title}</h2>
</div>

<style jsx>{`
.editorialTitle{
    font-size: 1rem;
    margin-top: 1 rem;
    margin-bottom: 0.5rem;
 
 
               }
 
 
.editorialTitle h2{
    display: inline;
                  }
            `}</style>
       
    </>
}
 
 
