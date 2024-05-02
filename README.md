# slip-of-the-hand


## Background

A Slip of the Hand occurs when one attempts to type a word or phrase into a keyboard, but with one or both hands mispositioned, accidentally resulting in a different, but real word or phrase. For example, if you were trying to type the word   ***DEWS*** into the keyboard, but your left hand happened to be mistakenly mispositioned one key to the right, this would result in you typing the word ***FRED***.  In this example, the word requires only one hand to type (all keys are left hand keys), and as such only one hand is mispositioned.  We could have other variations of slips of the hand where only one hand is mispositioned, but the word requires both hands to type, for example ***GRIN*** and ***GRUB***, where the left hand is positioned correctly, thus typing out "GR", but the right hand is mispositioned by one key position to the left.  Or a more eggregious example could be ***GOD*** and ***TIE***, where the left hand is mispositioned one key upwards, and the right hand is mispositioned one key to the left.

Slips of the Hand can be categorized as follows:

Category I: One hand mispositioned   <br>
Category II: Both hands mispositioned, but in the same direction <br>
Category III: Both hands mispositioned, but in different directions


A Slip of the Hand app will allow users to enter a word or a phrase.  It will then search for all possible slips of the hand that could have resulted from typing in this pattern, but with one or boht hands mispositioned.  It will then return to the user all possible slips of the hand for that word.  For example, if the user entered the word "TO", the app will return "GO, DO, SO, , ...etc."

## Functionality & MVPs

In A Slip of the Hand, users will be able to: 
<ul>
  <li>See a demonstration of a slip of the hand on the explanation homepage</li>
  <li>Choose a tab to see a further explanation of Slip of the Hand Rules (e.g. no crossovers, treatment of shift and CAPS LOCK)</li>
  <li>Enter in a word or phrase and have returned all possible resulting Slips of the Hand</li>
  <li>See animated hands on the screen typing the letters in real time as they are entered  on the keyboard</li>
  <li>Order/group the resulting list of Slips of the Hand by category</li>
  <li>See a demonstration of how their original word resulted in the returned Slips of the Hand with the relevant hand mispositioning</li>
</ul>

In addition, this project will also strive to include:
<ul>
  <li>A live update of the current Slips of the Hand as the user enters letters into the form entry</li>
  <li> A README explaining the functions of the app and the implementation of logic in the code</li>
</ul>

## Wireframes

![Wireframe1](https://github.com/cracine79/slip-of-the-hand/blob/main/Index.jpg)

![Wireframe2](https://github.com/cracine79/slip-of-the-hand/blob/main/Result.png)

## Technologies, Libraries, APISs

The project will use the datamuse api available at https://www.datamuse.com/api/ as the source for finding qualifying words.  

If the bonus feature (described below) permitting users to click on returned words to get defintions is activated, this will also require a dictionary API with definitions, such as Free Dictionary API which is available at https://dictionaryapi.dev/

## Implementation Timeline

<ul>
  <li>Thursday:   Setup project.  Figure out how translate a word into key strokes for left and right hands, and devise algorithm to search for all possible Slips of the Hand.  Write scripts to perform tasks & make work with simple dictionary.</li>
  <li>Friday:  Setup interface to accept word/phrase from user, query API & return array of slips of the hand </li>
  <li>Saturday: Introduction Window, Explanation & Animation Slip of the Hand Example</li>
  <li>Sunday:  Organizing results into separate displays according to category.  Formatting & styling of page & background.  
  <li>Monday:  Create function to cycle through automated animations of resulting slips of the hand</li>
  <li>Tuesday: Work on function where animated hands on screen type at same time as user presses keys</li>
  <li>Wednesday: Bonus Feature? Definitions?  Additional styling & formatting?  Bug fix?</li>
</ul>


## Bonus Features
The initial plan is for slips of the hand to only permit single words and return single words with numbers.  If this is all implemented well, the next logical step is to include the possibility for phrases & spaces, and possibly later on the shift, capslock, and numbers button. 

In the unlikely event that all of the above described features are pulled off effortlessly, it could be interesting to add a function where users can click on the returned words and be provided definitions, especially given the possibility that some words may have only very obscure words as viable Slips of the Hand. 

If it turns out that there are actually far fewer slips of the hand than estimated, to the point where this is no longer an interesting app, the function could be expanded to consider simple typos as well, where only one finger hits an adjacent button, thereby creating a real word (A Slip of the Finger, if you will!)






