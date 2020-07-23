export default function footer(){
    return <>
<section>
<table className="footerTable" width="100%" cellspacing="0" cellpadding="1">
    <tbody><tr><td bgcolor="#ff6600"></td></tr></tbody>
</table><br/>
<center><span className="hslinks"><a href="newsguidelines.html">Guidelines</a>
        | <a href="newsfaq.html">FAQ</a>
        | <a href="mailto:hn@ycombinator.com">Support</a>
        | <a href="https://github.com/HackerNews/API">API</a>
        | <a href="security.html">Security</a>
        | <a href="lists">Lists</a>
        | <a href="bookmarklet.html" rel="nofollow">Bookmarklet</a>
        | <a href="http://www.ycombinator.com/legal/">Legal</a>
        | <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
        | <a href="mailto:hn@ycombinator.com">Contact</a></span><br/><br/>
        <form method="get" action="">Search:
          <input type="text" name="q" value="" size="17" autocorrect="off" spellcheck="false" autocapitalize="off" autocomplete="false"/></form>
            </center><br/>
 
</section>

<style jsx>

    {
        `
section {
    position: relattive;
    margin-top: 20rem;
  
}
        .footerTable{
            margin-top: 1rem;
            border-top: 3px solid #0ff;
         
        }
        .hslinks{
            font-family: Verdana, Geneva, sans-serif;
            font-size: 8pt;
            color: #828282; 
        }
        td {
            font-family: Verdana, Geneva, sans-serif;
            font-size: 10pt;
            color: #828282;
        }
        @media only screen and (max-width: 750px) and (min-width: 300px){
input[type='text'], input[type='number'], textarea {
    font-size: 16px;
    width: 90%;
}}
`
    } </style>
    </>
}