
##Documentation

	**-Abstract & Introduction**
	  
	  The topic we worked on is named The Grid Games,that is, it refers to games that are played inside a grid.
	  
	  The following are the games included on our website;
		Sudoku:
		 The puzzle was introduced in Japan by Maki Kaji (Kaji Maki), president of the Nikoli puzzle company,
		 In the paper Monthly Nikolist in April 1984.
	    TicTacToe:
		 Games played on three-in-a-row boards can be traced back to ancient Egypt, where such game boards have been found on roofing tiles dating from around 1300 BC.

	**-Design**
      First, we made the 2 index webpages containing the game data for TictacToe and Sudoku, then added a navigation bar to switch between games.
	  Then we used 2 files of css for each game containing the game skeleton, designing, themes, etc.
	  Finally, we used individual js files for both games to start functioning. 
    TICTACTOE:
	    1) The game is made by using division tag in the HTML file, where the whole game is included inside the Game container class.
		2) Inside the game container, we used another division as class gameInfo and playerTurn for the live details of the game.Wee used a button tag for a reset button to reset the game.
		3) Finally, inside the game containe,r we usethe d class box as another division for all 9 boxes of the game. 

	**-Application**
	  Basically, you can use this website with your friend to survive any boring lecture or avoid getting bored while travelling, and still you can't use it because you don't have friends, we got you there, we have sudoku which can be played alone.
		 
		 As a puzzle gam,e Sudoku holds a lot of potential, which can assist us inreal-lifee situations such as:
		 1. Sudoku solving algorithms can be used in artificial intelligence.
		 2. Sudoku puzzles are used in data hiding techniques like Steganography. The Sudoku is used like a key to hide data behind images.
		 3. Sudoku grids are sometimes translated to coloring grids, and this links them to solving crucial mathematical complications.

         TicTacToe application/uses:
		 1. Because of the simplicity of tic-tac-toe, it is often used as a pedagogical tool for teaching the concepts of good sportsmanship and the branch of artificial intelligence that deals with the search of game trees.
		 2. Since it is a well-known game to escape boredom, but requires some writing materials, by making it playable on our website, we help save those writing materials.
         
	**-Working** 
	SUDOKU:
		It's a basic, structured Sudoku game. Which has 2 puzzles of Sudoku.
		1)The number row below the main game board contains numbers from 1 to 9. 
		If selected any it will trigger the "function selectNumber (){}" in JS, then the grey background colour appears.
		2) For putting the selected number on the board, I used the "function selectTile" in JS, which will put the selected number into the selected tile in the Sudoku board.
		3)By using if-else statements in the same function, selectTile, I linked it with the error counter.
		If the number is placed in the wrong tile, the error count will increase.
    TICTACTOE:
	    1) We used constant changeTurn, so players can alternately mark X's and 0's on their turn.
	    2) The n using a constant as checkWin, we can trigger the win animation so the players are notified that one of the players won. Inside Checkwin, we made sure all possible combinations are registered for a player to win.
		3) Then, moving on to game logic, we used an array for boxes and used forEach so we can use the click EventListener on all boxes.
		4) Initially, we keep the boxes empty, but using an event listener, we use X's and 0's to be filled by the players. Then, by using the previously defined constant checkWin, we decide the winner of the game.
		5) At last, to  reset the button to function, we use the 'click' event listener, and give instructions to empty all boxes, reset player turn to X, hide the win animation, and gameover to fail; otherwise, the checkwin function will not work properly.

	**-Future vision/Scope**
The game will be updated with tiny changes and add-ons, which will make the game more interactive and playful.
		For Sudoku:
		1) More Sudoku puzzles.
		2) Add more buttons.
		3) notifying on win.

        For TicTacToe:
		1) Adding line animation on Windows.
		2) Adding a multiplayer feature using Node.js.
		3) Trying to add a win animation on the whole screen.
		
		As for the whole website:
		We will be adding more grid games...!

	**-Conclusion**
		As a first mini project as a learner, we would say our experience was pretty intense and rushed; however, things at the end turned out pretty good and just matched our expectations.
		The project is more  ofeasya one, 60% of  the code  rests in CSS and HTML.

	**-Reference**
		All the names, website in detail as a stand-alone reference, are very important for any project, as the people who one got help from have done considerable hard work.
		https://github.com/ImKennyYip/
		https://stackoverflow.com/
		https://github.com/RohanPrasad007 
        https://youtu.be/sSLGP-_2gOI ~CodeWithHarry
        https://github.com/Wahid7852/my_projects
