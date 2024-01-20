# CS099 Game of Life

We are going to use our two-dimensional array knowledge we have learned to implement [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced "players", by creating patterns with particular properties.

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated". Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

Watch the following to learn more:

[Coding Challenge #85: The Game of Life](https://youtu.be/FWSR_7kZuYg)

:information_source:
    Read ["Examples of patterns"](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns) section of the Wikipedia article.


# Submission

You will be submitting a zip file of your work.

The name of the ZIP file must follow this naming convention: `[class_name]_[login]_life.zip`

For example, if a student had the login name fun.frank then the appropriate filename would be `cs099_fun.frank_life.zip`. Note: The .zip file names are case-sensitive and must be in all lowercase, exactly as described above.

The zip file will be used as a way to archive your work. This Git Repo will be used for grading.

# Grading Rubric

- [x] Zip file has all the required files.
- [x] The zip file submitted can be extracted and the sketch runs in Chrome with a local web server.
- [x] Source Code has a proper header comment: Name, Assignment Name, Course Number, Term & Year.
- [x] [**core**] Utilize 2D arrays to represent the world of cells
- [x] [**core**] Updates the world of cells following the rules for Conway's Game of Life
- [x] Any classes created are made with the newer ES6 syntax
- [x] The sketch should start with random cells
- [x] Pressing the `R` keyboard button should reset the world with random cells
- [x] Pressing the `C` keyboard button should clear the world to all dead cells
- [x] Pressing the `Space` keyboard button should spawn a random Still Life: Block, Beehive, Loaf, Boat, or Tub at a random position in the world
- [x] Left clicking the mouse should spawn a random Oscillator: Blinker, Toad, Beacon, Pulsar, or Penta-decathlon at the clicked mouse position
- [x] Middle clicking the mouse should spawn a random Spaceship: Glider, Light-weight spaceship, Middle-weight spaceship, or Heavy-weight spaceship at the clicked mouse position.
- [ ] All requirements that are completed are checked off here by replacing the `[ ]` with `[x]`

Scores for Assignments will be given as the following:

Score        | Assessment
------------ | ----------
Zero         | Nothing turned in at all
Failing      | Close to meeting core requirements
Rudimentary  | Meets all of the core requirements
Satisfactory | Close to meeting all requirements
Good         | Clearly meets all requirements 
Excellent    | High quality, well beyond the requirements
