import Link from 'next/link'

export default function parrafo(props){
    return<>
    <div>
<p>
The Chainsmokers performed at a concert in the   Hamptons that is now under state and local investigation. Organizers of the event, ironically titled Safe &amp; Sound, promoted the drive-in concert as following safety protocols—but video footage appeared to tell a different story.
</p><br/>

<p>
In response, New York Governor Andrew Cuomo posted a tweet criticizing “egregious social distancing violations” and promised that the Department of Health would conduct an investigation:
</p><br/>

<p>
<a href="https://www.syracuse.com/entertainment/2020/07/new-york-state-investigating-the-chainsmokers-concert-over-coronavirus-concerns.html"><em>Syracuse.com</em></a>
reports that the New York Department of Health sent a letter to Southampton Town Supervisor Jay Schneiderman on Monday night. Demanding a response within 24 hours, Health Commissioner Dr. Howard Zucker wrote:<br/>
</p><br/>

<blockquote><p>I am greatly disturbed by reports concerning the ‘drive-in’ concert held in your town this past weekend, which apparently involved thousands of people in close proximity, out of their vehicles, a VIP area where there was no pretense of a vehicle, and generally not adhering to social distancing guidance. I am at a loss as to how the Town of Southampton could have issued a permit for such an event, how they believed it was legal and not an obvious public health threat.</p></blockquote><br/>


<p>
Schneiderman told <a href="https://www.thedailybeast.com/the-chainsmokers-are-in-deep-sht-over-their-packed-hamptons-concert"><em> The Daily Beast</em></a>  that the concert violated the terms of its local permit. Schneiderman, who opened the show with his band, claimed the crowd followed guidelines while he was on stage.
 
</p>

<p>{props.p5}</p>

<p>{props.p6}</p>

<p>{props.p7}</p>

<p>{props.p8}</p>
</div>
<style jsx>
    {
        `
        blockquote {
            display: block;
            padding-left: 2.25rem;
            position: relative;
        }
        div {
            margin: 2.25rem auto;
    max-width: 100%;

        }
        
        
        `
    }
</style>
    </>

}