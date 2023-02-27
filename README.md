
##Documentation

	**-Abstract & Introduction**
	  
	  The topic we worked on is named as The Grid Games,that is, it contains games which are played inside a grid.
	  
	  Following are the games included in our website;
		Sudoku:
		 The puzzle was introduced in Japan by Maki Kaji (Kaji Maki), president of the Nikoli puzzle company,
		 in the paper Monthly Nikolist in April 1984.
	    TicTacToe:
		 Games played on three-in-a-row boards can be traced back to ancient Egypt, where such game boards have been found on roofing tiles dating from around 1300 BC.

	**-Design**
      First we made the 2 index webpages containing the game data for TictacToe and Sudoku,then added a navigation bar to switch between games.
	  Then we used 2 files of css for each game containing the game skeleton, designing, themes, etc.
	  Finally, we used individual js files for both games to start functioning. 
    TICTACTOE:
	    1) The game is made by using division tag in HTML file, where, the whole game is included inside the Game container class.
		2) Inside game container, we used another division as class gameInfo and playerTurn for the live details of game.we used a button tag for reset button to reset the game.
		3) Finally, inside gamecontainer we used class box as another division for all 9 boxes of the game. 

	**-Application**
	  Basically, you can use this website with your friend to survive any boring lecture or avoid getting bored while travelling, and still you cant use it because you dont have friends, we got you there we have sudoku which can be played alone.
		 
		 As a puzzle game Sudoku holds a lot of potential which can assist us in real life situations such as:
		 1. Sudoku solving algorithms can be used in artificial intelligence.
		 2. Sudoku puzzles are used in data hiding techniques like Steganography. The Sudoku is used like a key to hide data behind images.
		 3. Sudoku grids are sometimes translated to coloring grids and this links them to solve crucial mathematical complications.

         TicTacToe application/uses:
		 1. Because of the simplicity of tic-tac-toe, it is often used as a pedagogical tool for teaching the concepts of good sportsmanship and the branch of artificial intelligence that deals with the searching of game trees.
		 2. Since it is a well known game to escape boredom, but requires some writing materials, by making it playable in our website we help saving those writing materials.
         
	**-Working** 
	SUDOKU:
		It's a basic structured sudoku game. which have 2 puzzle of sudoku.
		1)The number row below the main game board contains numbers from 1 to 9. 
		If selected any it will trigger the "function slectNumber(){}" in JS then the grey baground colour appers.
		2) For putting the selected number in the board I used the "function selectTile" in JS it will put the selected number into the selected tile in the sudoku board.
		3)By using if else statements in the same function selecTile I linked it with the error counter.
		If the number is placed in the wrong tile the error count will increase.
    TICTACTOE:
	    1) We used constant changeTurn, so players can alternately mark X's and 0's on their turn.
	    2) Then using a constant as checkWin, we can trigger win animation so the players are notified one of the players won. Inside checkwin we made sure all possible combinations are registered for a player to win.
		3) Then moving on to game logic, We used an array for boxes and used forEach so we can use click EventListener on all boxes.
		4) Initially we keep the boxes empty, but using on click EventListener we use X's and 0's to be filled by the players.Then by using the previously defined constant checkWin, we decide the winner of the game.
		5) At last for reset button to function, we use Eventlistner 'click', and give instructions to empty all boxes, reset player turn to X, hide the win animation and gameover to false other wise the checkwin function will not work properly.

	**-Future vision/Scope**
	Game will be updated with tiny changes and addons which will make the game more interactive and playful.
		For Sudoku:
		1) add more sudoku puzzles.
		2) add more buttons.
		3) notifying on win.

        For TicTacToe:
		1) Adding line animation on win.
		2) Adding multiplayer feature using node js.
		3) Trying to add win animation on whole screen.
		
		As for whole website:
		We will be adding more grid games...!

	**-Conclusion**
		As a first mini project as still a learner we would say our experience was pretty intense and rushful however things at the end turned out pretty good and just matched our expectations.
		The project is more of JS nearly 60% and rest are CSS and HTML.

	**-Reference**
		All the names, website in detail as it stands reference are very important for any project as the people who one got help form have done considerable hard work.
		https://github.com/ImKennyYip/
		https://stackoverflow.com/
		https://github.com/RohanPrasad007 
        https://youtu.be/sSLGP-_2gOI ~CodeWithHarry
        https://github.com/Wahid7852/my_projects