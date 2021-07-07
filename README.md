# The Score

The Score is an interactive scoreboard database to track game statistics for Magic The Gathering playgroups. Users are able to select the names of players for a given game, select a commander for each player, select what place each player finished in, and add notes about the game. These statistics will be saved to a database. Users are able to see visualizations and statistics for individual players and commanders, filtered by game size (i.e. number of players).


## User Stories



* As a player, I should be able to login and arrive at a home screen that shows my playgroups and allows me to select one.
* As a player, I should have drop down options to navigate to the Add a Game, Add a Player, Select Playgroup, and View Statistics pages.
* As a player on the Add a Player page, I should be able to add myself and my friends to a playgroup. If someone new joins the group, I should be able to add them at any time.
* As a player, I should be able to enter information about a game quickly and easily from a single screen, regardless of how many players there are. This means:
    * add/remove player buttons
    * selector drop downs for players
    * auto-complete search fields for commanders, including partner commanders
    * easy selection of finish place, including ties (but no ties for first)
    * upon save player is navigated to stats viewer
* As a player I should be able to view different reports that collate the stats.


## Functionality Descriptions


### Select Playgroup


#### Playgroup Tile

So long as there is a logo url for the playgroup the logo displays. Player portraits appear below the logo, which spans the full tile length, until more than four players are added, at which point they begin to also display up the right side.

If no logo is present the player portraits are displayed. For two players they are side by side, for three there are two side by side on top and one of a matching dimension centered below them. Four players each have equal sized squares. Five has three on top and two on bottom. So on.

If a player does not have a portrait url their name is displayed instead.


#### Add Playgroup

Clicking this tile opens a modal that allows a user to add the name and logo url for a new playgroup.


### Add Player


#### Player Tile

Each tile will show the portrait of the player, the name, and an edit button that opens the edit player modal.


#### Add Player Tile

This is a button to open the create modal to add a new player.


#### Create/Edit Modal

This modal is dual purpose.

If opened with the edit button, the name and portrait url are already populated in their respective fields. They can be changed and the changes can be saved.

If opened with the Add Player Tile the name and portrait url fields are empty and a user can fill them in and click save to add a new player.


### Add Game


#### Player Tile

 The player selector drop down only shows players from the playgroup that have not yet been selected for this game.

The commander text search makes auto-complete recommendations as you type. If the user tries to save with an invalid commander, they are prompted to pick a valid commander.

The placement selector will dynamically display the finish placement using the following rules:



* When no placement has been selected, numbers 1 through the total number of players are available.
* If 1 is selected, it disappears from the drop down options for other players.
* If a number >1 is selected, it does not immediately disappear from the drop down.
* If a number >1 is selected more than once, numbers following that place finish disappear from the drop down up to the number of times the repeat has been selected.
    * E.g. if there are five players, and two are selected for 2nd, then 3rd will disappear from the selector, but 4th and 5th will not. If a third player is selected for 2nd, then 4th would disappear, but 5th would not.


#### Add Player Tile

A new, empty player tile appears and this tile moves below it.


#### Save Button

Updates the database with the new game.


### View Stats


#### Report Viewer

On the left side there will be a table of list of numerical data.

On the right will be a data visualizer.


#### Report Selector

There will be a list of reports that can be clicked to display in the report viewer.


### Menu

There is a menu icon in the upper right of the app that, when clicked, displays a drop down. This allows users to navigate to the Select Playgroup, Add Player, Add Game, and View Stats pages.
