const frontparr = (props) => {
    return(
        <div className="persuasiveEx">
            <h3 className="sectionTopic">{props.topic}</h3>
            <p  className="pex">{props.parr}</p>
                  <p className="pex">
                  {props.parr2}
                  </p>





                  <style jsx>
                      {`
                      
                      .persuasiveEx {
               
                   
            
                        padding-top: 30px;
                  
                    width: 300px;
                        display: inline-block;
                        
                        margin-right: 20px;
                        padding-bottom: 40px;
                        -webkit-box-orient: horizontal;
                     
                        -webkit-flex-direction: row;
                        flex: 0 0 33%;
                    }

                    .pex {
                        line-height: 1.7;
                         max-width: 42em;
                         font-size: 16px;
                    }
                  
.sectionTopic{
    margin-bottom: 20px;
    color: #6d6d6d;
    padding-top: 0;
    font-weight: 300;
    font-size: 20px;
 
}

               

                      }
                      
                      
                      
                      
                      `}
                  </style>
        </div>
    )
}

export default frontparr