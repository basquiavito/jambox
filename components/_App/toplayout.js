import { Menu, Container, Image, Icon } from 'semantic-ui-react'
import Link from 'next/link';
import Router, { useRouter } from 'next/router'
import 'semantic-ui-css/semantic.min.css'
 
 
 
 
 
 
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();
 
 
 
function Header() {
 const router = useRouter()
 const user = true;
 
 function isActive(route) {
return route === router.pathname;
 }
 return (
  <Menu stackable fluid id="menu" inverted>
 <Container   text>
 <Link href="/">
  <Menu.Item header active={isActive('/')}>
    <Image
    size="mini"
    src="/static/logo.svg"
    style={{marginRight: '1em' }}
    />
    HOOPER OS
  </Menu.Item>
 </Link>
  
  
 <Link href="/featured">
 <Menu.Item header active={isActive('/featured')}>
 <Icon
 name="newspaper"
 size="large"
 />
 FEATURED
 </Menu.Item>
 </Link>
  
 <Link href="/videos">
 <Menu.Item header active={isActive('/videos')}>
 <Icon
 name="play"
 size="large"
 />
 VIDEOS
 </Menu.Item>
 </Link>
 <Link href="/profiles">
<Menu.Item header active={isActive('/profiles')}>
<Icon
name="star"
size="large"
/>
PROFILES
</Menu.Item>
</Link>
 
 
{user && <Link href="/hoopcodes">
<Menu.Item header active={isActive('/hoopcodes')}>
<Icon
name="code"
size="large"
/>
HOOPCODES
</Menu.Item>
</Link>}
 
{ user ? (<>
<Link href="/account">
<Menu.Item header active={isActive('/account')}>
<Icon
name="user"
size="large"
/>
Account
</Menu.Item>
</Link>
 
<Menu.Item header >
<Icon
name="sign out"
size="large"
/>
Logout
</Menu.Item>
 
 
 
 
 
 
 
 
 
 
 
<Link href="/cart">
<Menu.Item header active={isActive('/')}>
<Icon
name="cart"
size="large"
/>
Cart
</Menu.Item>
</Link>
 
</>
 
 
 
 
 
 
 
 
)
:
(<>
<Link href="/login" active={isActive('/login')}>
<Menu.Item header>
<Icon
name="sign in"
size="large"
/>
Login
</Menu.Item>
</Link>
 
 
<Link href="/signup">
<Menu.Item header active={isActive('/')}>
<Icon
name="signup"
size="large"
/>
Signup
</Menu.Item>
</Link>
 
 
 
 
</>)}
</Container>
 </Menu>)
}
 
export default Header;


