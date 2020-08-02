import { Menu, Container, Image, Icon } from 'semantic-ui-react'
import Link from 'next/link';
import Router, { useRouter } from 'next/router'




 
 
 
function Header() {
 const router = useRouter()
 const user = true;
 
 function isActive(route) {
return route === router.pathname;
 }
 
 return (
 <Menu stackable fluid id="menu"  inverted>
<Container text>
<Link href="/">
 <Menu.Item header active={isActive('/')}>
   <Icon
   size="large"
 
   style={{marginRight: '3em'}}
   color='blue'
 
 
   />
  <span className="logo"><h1>Hoopscript</h1></span> 
 </Menu.Item>
</Link>
 
 
 


{ user && <Link href="/obb/obb">
<Menu.Item header active={isActive('/obb')}>
<Icon
name="code"
size="small"
 
/>
Hoopcodes
</Menu.Item>
</Link>


}
 

 
 

 

 
 
 

  


 

 
 
<Link href="/profiles">
<Menu.Item header active={isActive("/profiles/profiles")}>
<Icon
name="flag outline"
size="small"
 
/>
Profiles
</Menu.Item>
</Link>

<Link href="/blogs">
<Menu.Item header active={isActive("/blogs")}>
<Icon
name="flag outline"
size="small"
 
/>
Blogs
</Menu.Item>
</Link>

<Link href="/profiles">
<Menu.Item header active={isActive("/profiles")}>
<Icon
name="flag outline"
size="small"
 
/>
Archives
</Menu.Item>
</Link>

 
 <>
  <Link href="/login">
  <Menu.Item header active={isActive('/login')}>
  <Icon
  name="sign in"
  size="small"/>Login
  </Menu.Item>
  </Link>
 
 
 
 
 </>

 
</Container>
 </Menu>
 
 
 
 
 )
}
 
export default Header;