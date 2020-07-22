import Head from 'next/head'

export default function(){
    return <>
    <Head>
        <title>Login</title>
    <meta name="referrer" content="origin"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
    <link rel="shortcut icon" href="favicon.ico"/> 
    </Head>
    <div id="loginContainer">
<b>Login</b><br/><br/>
<form method="post" action="login">
<input type="hidden" name="goto" value="news"/>
<table border="0"><tbody><tr><td>username:</td><td>
<input type="text" name="acct" size="20" autocorrect="off" spellcheck="false" autocapitalize="off" autofocus="true"/>
</td></tr>
<tr><td>password:</td>
<td><input type="password" name="pw" size="20"/></td></tr></tbody></table><br/>
<input type="submit" value="login"/>
</form>

<a href="forgot">Forgot your password?</a>
<br/>
<br/>
<b>Create Account</b>
<br/>
<br/>
<form method="post" action="login">
<input type="hidden" name="goto" value="news"/>
<input type="hidden" name="creating" value="t"/>
<table border="0"><tbody><tr><td>username:</td><td>
<input type="text" name="acct" size="20" autocorrect="off" spellcheck="false" autocapitalize="off"/>
</td></tr><tr><td>password:</td><td>
<input type="password" name="pw" size="20"/></td></tr></tbody></table><br/>
<input type="submit" value="create account"/></form> 

<style jsx>
    {`
    #loginContainer{
        display: block;
        margin: 8px;  
    }
    b {
        font-weight: bold;
    }
    form {
        display: block;
        margin-top: 0em;
        margin-block-end: 1em;
    }
    input {
        -webkit-writing-mode: horizontal-tb !important;
        text-rendering: auto;
        color: -internal-light-dark(black, white);
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
      
        text-align: start;
 
        -webkit-rtl-ordering: logical;
 
        margin: 0em;
        font: 400 13.3333px Arial;
         
    }
    input:not([type="image" i]) {
        box-sizing: border-box;
    }
    table {
        display: table;
        border-collapse: separate;
        box-sizing: border-box;
        white-space: normal;
        line-height: normal;
        font-weight: normal;
        font-size: medium;
        font-style: normal;
        color: -internal-quirk-inherit;
        text-align: start;
        border-spacing: 2px;
        border-color: grey;
        border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
        font-variant: normal;
    }
    input[type="hidden" i] {
        display: none;
        appearance: initial;
        background-color: initial;
        cursor: default;
        padding: initial;
        border: initial;
    }
    a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: underline;
    }
    `}
</style>
</div>
    </>
}