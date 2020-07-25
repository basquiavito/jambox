import Head from 'next/head'
import HyvorTalk from 'hyvor-talk-react'
const hesi = () => {
 
    return <>

    
    hesitation

    <div>
        <h1>Article Title</h1>
 <p>LAKE BUENA VISTA, Fla. — “It’s a Whole New Game” is about change, of course, the tying of all that is different around you, at home, because of the pandemic, to all that’s new in the NBA.

That’s why the league picked the slogan for its bubble season at Disney, and the Celtics and Raptors felt it in their scrimmage games Friday.

In the hush of the Visa Center, Celtics coach Brad Stevens was blown away by the commanding voice of Oklahoma City’s Chris Paul, whose constant chatter, especially on defense, changed that game.

“The best thing we take away from this is we all heard Chris Paul dominate the game with his voice,” Stevens said. “If we would’ve played the whole game they would’ve won because he was dominating the game with his voice.”

The Celtics lost anyway, but he was saying they would have lost even if they’d kept their starters in there past halftime, because Paul was creating momentum for his team. And the Bostons were too quiet, again, especially on defense.

Nick Nurse’s Raptors won their practice game over the Rockets, but when I asked the Toronto coach what was something big or small that stood out to him, telling him just how different this was, playing basketball (against an opponent) in the bubble, and he said “it is a communication thing.

“My first play I called out I was like, ‘Whoa,’” Nurse said. “I was really trying to give some instruction on some free throws, defensively, because they kind of run this quick break thing, and I finally found myself not even doing it, because it was like, ‘Well, everybody in the whole place is going to hear this thing.”

Little did Nurse probably realize that the music pumped in for the Raptors-Rockets was probably the loudest and most frequent of any of the practice games played at Disney so far, certainly of any of the seven games I’ve been to in three days.</p>
        <div className="comment-count-view">
 
          { /* Comment Counts */ }
          <HyvorTalk.CommentCount 
           websiteId='1313'
           id='1313'
          />
 
        </div>
        
        <content>Your Article Here</content>
 
        { /* Load Comments now */ }
        <HyvorTalk.Embed 
          websiteId='1313'
          id='1313'
        />
      </div>

    </>

}
export default hesi