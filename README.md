# 3x3-monte-dapp

<div id="top"></div>


<br />

<h3 align="center">3x3 Monte Dapp</h3>

  <p align="center">
    My Personal Coding Project Mixed with a FinTech Project
    <br />
    <a href="https://github.com/SomexJames/3x3-monte-dapp"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/SomexJames/3x3-monte-dapp/issues">Report Issues</a>
    ·
    <a href="https://github.com/SomexJames/3x3-monte-dapp/issues">Submit Improvements</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#backstory">Backstory</a></li>
        <li><a href="#my-main-focus">My Main Focus</a></li>
      </ul>
    </li>
    <li><a href="#steps-i-took">Steps I Took</a></li>
    <li>
      <a href="#code-explanation">Code Explanation</a>
      <ul>
        <li><a href="#outside-layers">Outside Layers</a></li>
        <li><a href="#error-handling">Error Handling</a></li>
        <li><a href="#start-page">Start Page</a></li>
        <li><a href="#pregame-page">Pregame Page</a></li>
        <li><a href="#game-page">Game Page</a></li>
        <li><a href="#game-logic">Game Logic</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Backstory
While I was working on my BlackJackReact project, my FinTech class posted the prompt for our second project. It involved just writing a smart contract in solidity, but I thought how fun would it be to incorporate the smart contract into a webapp like my blackjack game? In addition, I wanted to experience writing game logic for a different type of game, so I eventually chose my own spin on the classic three-card monte game.

### My Main Focus
It should go without saying, but of course, one of my main focus was to learn what the class project intended, which was to learn how to write a smart contract and how they work. But I also wanted to learn its practical uses for myself. As in, if I can create and deploy my own smart contract, I can learn exactly what a developer can or can’t do with them. This way, I’d be more informed and know what I should look out for as a consumer.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Steps I Took -->
## Steps I Took
<ol>
    <li>Used my BlackJackReact project as a starting point</li>
        <ul><li>I took what I had of my BlackJackReact project at the time, and basically took out all the game code and just kept the front-end code</li></ul>
    <li>Learned about smart contracts and ERC20 tokens</li>
        <ul><li>From what I learned about ERC20 tokens in class, I knew that’s the main concept I wanted to integrate in the app</li></ul>
    <li>Compared how Reactjs achieves the same thing</li>
        <ul><li>Took my customized front-end template and converted it into ReactJS</li></ul>
        <ul><li>First, I had to learn how to create and deploy and ERC20 token</li></ul>
        <ul><li>Then I needed to learn how to configure the contract to do exactly what I needed it to do</li></ul>
        <ul><li>(Details will be in my smart contract documentation)</li></ul>
    <li>Learned how to connect a javascript app to the ethereum blockchain</li>
        <ul><li>I used the "Ethers" library to connect to the Metamask wallet chrome extension</li></ul>
    <li>Planned for file structure and </li>
        <ul><li>File structure follows a similar layout to BlackJackReact’s</li></ul>
        <ul><li>It has a similar game state to BlackJackReact’s, but I only kept the ones needed for a monte card game</li></ul>
        <ul><li>I also added a separate user state to handle the user info from ethereum</li></ul>
    <li>Planned for game script layout</li>
        <ul><li>I started by taking an empty screen and just thinking about what I needed rendered first</li></ul>
        <ul><li>Then I thought about what I needed to get those items rendered</li></ul>
        <ul><li>And then I just kept breaking it down until I could write it in code (“This is the state I need to render this card”, “How will I get that state in this scope?”, “Are there any functions I need to calculate this state?”, etc.)</li></ul>
    <li>Organized files</li>
        <ul><li>Like I did in my blackjack project, I finished by polishing some components and splitting them as much as possible to make debuggin easier</li></ul>
</ol>
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Code Explanation -->
## Code Explanation

### Outside Layers
Similar to my blackjack project's, the app is wrapped in a global context provider, but this time I did try and organize these files more logically. However, it ended up in a weird half-and-half design in which some components are in the main components folder, classified by type, while others are nested within pages

### Error Handling
Although this is one of the last things I worked on, I’ll get it out of the way now since it’s only used in the beginning. Its primary purpose is to handle when a user presses “connect” and then closes out of the pop-up metamask wallet without signing in. Essentially, what happens is on initial startup, the “connect” button will render, and once the user clicks connect for the first time, a metamask sign-in window will pop up. As this is happening, the UpdateUser component will update the accReqPending state to true and store that in the session storage as well. This way, if the user closes the metamask window without signing in (which throws an error from ethers), the app will know to render a page explaining to the user what to do to continue.

### Start Page
The start page has a static header that will always be rendered and remain unchanged throughout the app. It also has a base selector that works with the error handler to know whether to display the welcome message and connect button, retry message and button, or move onto the game page selector. The game page selector will either render the pregame page or the actual game page based on whether there’s a valid current bet or not.

### Pregame Page
The Pregame.js file is just a container for 4 components: Buy(), GetMyBalance(), PlaceBet(), PreBetMessage().  
Buy() handles when the user wants to purchase the ERC20 game tokens (BVJM). It also divides whatever token amount the user inputs by 5000 since the arbitrary exchange rate is 0.1 ETH for 500 BVJM tokens (500/0.1=5000). Also, it's important to note that it uses the “parseEther()” method since smart contracts use the wei denomination.  
GetMyBalance() essentially just updates the balance message any time its parent component is re-rendered or when Buy() executes.  
PlaceBet() is similar to Buy() except for the fact that instead of the user exchanging ETH for tokens, the user exchanges tokens for plays. Once the user “inserts” their tokens for their desired number of plays, it first checks to see if the input value is less than their current token balance and is divisible by 10. And then checks to see if the input was “0” or blank. If it was, then the user can play unlimited games without the chance of winning the jackpot. If not, a metamask window will pop up requesting confirmation for the transaction.  
PreBetMessage() is basically just a container for HTML elements.

### Game Page
The Game() component is kind of just a wrapper for the actual game script that just makes sure that the user wallet address in our user state is indeed the same as the one in the metamask extension.  
GameScript() is in charge of knowing what stage the game is at to know what to render. And is also responsible for sending the payout to the user if they win.  
If the GameScript() is called and the gameOver state is false, it’ll call GameStart(). Gamestart() probably serves more as the actual game script than GameScript() itself because GameStart() is the one that directly calls the GuessCard() component.

### Game Logic
The GuessCard() component is what’s really behind the game’s core logic. Once the user clicks on a card, GuessCard’s local function, checkCard(), is called. checkCard() chooses a random number to be the winning number and matches this number to each of the cards’ indices. Depending on the outcome, there are four types of cards it can display:  
WinningCard - If the user’s selected card matches the winning number  
SelectedCard - If the user’s selected card does not match the winning number  
CorrectCard - The card whose index matched the winning number  
BlankCard - Any card that didn’t fit any of the previous criteria  
Based on the selected card, it also updates the game state for other components to render the correct elements.

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
