

import Link from 'next/link'

export default function Teams (){
        return <>
        <div className="linkContainer">
<strong>76ers</strong>
 <Link href='/profile?_id=5ebe073dfc39ce7add9941f8'><a>Ben Simmons</a></Link>
 <Link href='/profile?_id=5ec40a4e4f40fc16020d71f1'><a>Joel Embiid</a></Link>
 <Link href='/profile?_id=5ec40bf64f40fc16020d71f3'><a>Tobias Harris</a></Link>
 <Link href='/profile?_id=5ec40ad64f40fc16020d71f2'><a>Al Horford</a></Link>   
 <Link href='/profile?_id=5ec40d1d4f40fc16020d71f4'><a>Josh Richardson</a></Link>
 <Link href='/profile?_id=5ec40dba4f40fc16020d71f5'><a>Alec Burks</a></Link>
 <Link href='/profile?_id=5ec40e534f40fc16020d71f6'><a>Shake Milton</a></Link>
 <Link href='/profile?_id=5ec40ee34f40fc16020d71f7'><a>Furkan Korkmaz</a></Link>   
 <Link href='/profile?_id=5ec40f494f40fc16020d71f8'><a>Mike Scott</a></Link>
 <Link href='/profile?_id=5ec410294f40fc16020d71f9'><a>Matisse Thybulle</a></Link>

        </div>
  <style jsx>{`
  .linkContainer{
      display: flex;
      flex-direction: column;
  }

  
  
  
  `}</style>
       
            </>
      
        
        }
            