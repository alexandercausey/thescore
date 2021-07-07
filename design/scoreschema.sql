CREATE SCHEMA thescore;

CREATE TABLE thescore.commanders (
	id                   SERIAL  NOT NULL    PRIMARY KEY,
	name                 varchar(50)
 );

CREATE TABLE thescore.players (
	id                   SERIAL  NOT NULL    PRIMARY KEY,
	name                 varchar(100)      ,
	portrait_url         text
 );

CREATE TABLE thescore.playgroups (
	id                   SERIAL  NOT NULL    PRIMARY KEY,
	name                 varchar(100)      ,
	logo_url             text
 );

CREATE TABLE thescore.games (
	id                   SERIAL  NOT NULL    PRIMARY KEY,
	player_1             int      ,
	commander_1          int      ,
	place_1              int      ,
	tags_1               text      ,
	player_2             int      ,
	commander_2          int      ,
	place_2              int      ,
	tags_2               text      ,
	player_3             int      ,
	commander_3          int      ,
	place_3              int      ,
	tags_3               text      ,
	player_4             int      ,
	commander_4          int      ,
	place_4              int      ,
	tags_4               text      ,
	player_5             int      ,
	commander_5          int      ,
	place_5              int      ,
	tags_5               text      ,
	player_6             int      ,
	commander_6          int      ,
	place_6              int      ,
	tags_6               text
 );

CREATE TABLE thescore.playgroup_player (
	id                   SERIAL  NOT NULL    PRIMARY KEY,
	player_id            int      ,
	playgroup_id         int
 );

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_players FOREIGN KEY ( player_1 ) REFERENCES thescore.players( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_commanders FOREIGN KEY ( commander_1 ) REFERENCES thescore.commanders( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_players_0 FOREIGN KEY ( player_2 ) REFERENCES thescore.players( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_commanders_0 FOREIGN KEY ( commander_2 ) REFERENCES thescore.commanders( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_players_1 FOREIGN KEY ( player_3 ) REFERENCES thescore.players( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_commanders_1 FOREIGN KEY ( commander_3 ) REFERENCES thescore.commanders( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_players_2 FOREIGN KEY ( player_4 ) REFERENCES thescore.players( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_commanders_2 FOREIGN KEY ( commander_4 ) REFERENCES thescore.commanders( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_players_3 FOREIGN KEY ( player_5 ) REFERENCES thescore.players( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_commanders_3 FOREIGN KEY ( commander_5 ) REFERENCES thescore.commanders( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_players_4 FOREIGN KEY ( player_6 ) REFERENCES thescore.players( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.games ADD CONSTRAINT fk_games_commanders_4 FOREIGN KEY ( commander_6 ) REFERENCES thescore.commanders( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.playgroup_player ADD CONSTRAINT fk_playgroup_player_players FOREIGN KEY ( player_id ) REFERENCES thescore.players( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE thescore.playgroup_player ADD CONSTRAINT fk_playgroup_player_playgroups FOREIGN KEY ( playgroup_id ) REFERENCES thescore.playgroups( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;
