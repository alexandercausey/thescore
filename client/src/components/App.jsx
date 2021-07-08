import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu.jsx';
import Game from './Game.jsx';
import Player from './Player.jsx';
import Playgroup from './Playgroup.jsx';
import Stats from './Stats.jsx';
import styles from './stylesApp.css';

<iframe src="https://drive.google.com/file/d/1ptnjelCZqKcQwuBFRRr7jji5F2w7Yu_m/preview" width="640" height="480" allow="autoplay"></iframe>

const data = {
  playgroups: [
    {
      id: 1,
      name: 'Buddies',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg',
      players:
      [
        {id: 1,
        name: 'Alex',
        portraitUrl: 'https://drive.google.com/file/d/1W0wHx0ToH0gAupigUxeZuxj-whSUfJdt/view?usp=sharing',
        },
        {id: 2,
          name: 'Ahmad',
          portraitUrl: 'https://drive.google.com/file/d/1Q0_8UR2ueC32A_2VneJd3oTtPgu6qb8M/view?usp=sharing'
        },
        {id: 3,
          name: 'David',
          portraitUrl: 'https://drive.google.com/file/d/109DAVwdfAGO50r8uCUIjTcsowf9VXzUU/view?usp=sharing'
        },
        {id: 4,
          name: 'Jimmy',
          portraitUrl: 'https://drive.google.com/file/d/1BxS6vO8k0bwIADmaKu98XQuMVrL2uYi8/view?usp=sharing'
        },
        {id: 5,
          name: 'Kevin',
          portraitUrl: 'https://drive.google.com/file/d/1ptnjelCZqKcQwuBFRRr7jji5F2w7Yu_m/view?usp=sharing'
        },
      ],
    }
  ],
  commanders: [
    "Aboshan, Cephalid Emperor (ODY)",
    "Adamaro, First to Desire (SOK)",
    "Adeliz, the Cinder Wind (DAR)",
    "Admiral Beckett Brass (XLN)",
    "Adriana, Captain of the Guard (C20)",
    "Adun Oakenshield (LEG)",
    "Agrus Kos, Wojek Veteran (GK1)",
    "Akiri, Line-Slinger (CMR)",
    "Akroma, Angel of Fury (TSR)",
    "Akroma, Angel of Wrath (C20)",
    "Alesha, Who Smiles at Death (TSR)",
    "Alexi, Zephyr Mage (PCY)",
    "Ambassador Laquatus (10E)",
    "Aminatou, the Fateshifter (C18)",
    "Anafenza, Kin-Tree Spirit (DTK)",
    "Anafenza, the Foremost (KTK)",
    "Anax and Cymede (THS)",
    "Angus Mackenzie (LEG)",
    "Animar, Soul of Elements (CMD)",
    "Anowon, the Ruin Sage (C17)",
    "Anya, Merciless Angel (C15)",
    "Arahbo, Roar of the World (C17)",
    "Arcades Sabboth (CHR)",
    "Arcanis the Omnipotent (C17)",
    "Archangel Avacyn (SOI)",
    "Arcum Dagsson (2XM)",
    "Arixmethes, Slumbering Isle (2XM)",
    "Arjun, the Shifting Flame (C15)",
    "Arvad the Cursed (DAR)",
    "Aryel, Knight of Windgrace (DAR)",
    "Ascendant Evincar (HOP)",
    "Ashling the Pilgrim (LRW)",
    "Ashling, the Extinguisher (EVE)",
    "Asmira, Holy Avenger (MIR)",
    "Atarka, World Render (C17)",
    "Atemsis, All-Seeing (M20)",
    "Athreos, God of Passage (JOU)",
    "Atogatog (ODY)",
    "Atraxa, Praetors' Voice (2XM)",
    "Aurelia, Exemplar of Justice (GRN)",
    "Aurelia, the Warleader (GK1)",
    "Avacyn, Angel of Hope (2XM)",
    "Avacyn, Guardian Angel (M15)",
    "Axelrod Gunnarson (CHR)",
    "Ayli, Eternal Pilgrim (OGW)",
    "Ayula, Queen Among Bears (MH1)",
    "Ayumi, the Last Visitor (SOK)",
    "Azami, Lady of Scrolls (C17)",
    "Azor, the Lawbringer (RIX)",
    "Azusa, Lost but Seeking (CHK)",
    "Baird, Steward of Argive (DAR)",
    "Balan, Wandering Knight (C17)",
    "Balthor the Defiled (JUD)",
    "Baral, Chief of Compliance (TSR)",
    "Baron Sengir (HML)",
    "Barrin, Master Wizard (USG)",
    "Baru, Fist of Krosa (FUT)",
    "Basandra, Battle Seraph (CNS) 184",
    "Ben-Ben, Akki Hermit (CHK)",
    "Bladewing the Risen (IMA)",
    "Bontu the Glorified (AKH)",
    "Borborygmos (GPT)",
    "Borborygmos Enraged (GTC)",
    "Boris Devilboon (LEG)",
    "Bosh, Iron Golem (C21)",
    "Brago, King Eternal (KHC)",
    "Braids, Conjurer Adept (2XM)",
    "Breya, Etherium Shaper (2XM)",
    "Brigid, Hero of Kinsbaile (LRW)",
    "Brimaz, King of Oreskos (BNG)",
    "Brion Stoutarm (LRW)",
    "Brudiclad, Telchor Engineer (2XM)",
    "Bruna, Light of Alabaster (C18)",
    "Bruna, the Fading Light (EMN)",
    "Bruse Tarl, Boorish Herder (CMR)",
    "Cao Cao, Lord of Wei (PTK)",
    "Captain Lannery Storm (XLN)",
    "Captain Sisay (INV)",
    "Celestial Kirin (SOK)",
    "Chainer, Dementia Master (TOR)",
    "Chandra, Fire of Kaladesh (ORI)",
    "Child of Alara (CON)",
    "Cho-Manno, Revolutionary (10E)",
    "Chorus of the Conclave (CMD)",
    "Chromium (CHR)",
    "Commander Eesha (JUD)",
    "Commander Greven il-Vec (TMP)",
    "Cromat (APC)",
    "Crosis, the Purger (C17)",
    "Crovax, Ascendant Hero (TSR)",
    "Daghatar the Adamant (FRF)",
    "Dakkon Blackblade (CHR)",
    "Damia, Sage of Stone (CMD)",
    "Danitha Capashen, Paragon (CMR)",
    "Daretti, Scrap Savant (C21)",
    "Darien, King of Kjeldor (CSP)",
    "Darigaaz Reincarnated (DAR)",
    "Darigaaz, the Igniter (DDE)",
    "Daxos of Meletis (C18)",
    "Daxos the Returned (C15)",
    "Demonlord Belzenlok (DAR)",
    "Depala, Pilot Exemplar (KLD)",
    "Derevi, Empyrial Tactician (CMR)",
    "Diaochan, Artful Beauty (PTK)",
    "Djeru, With Eyes Open (HOU)",
    "Doran, the Siege Tower (LRW)",
    "Dosan the Falling Leaf (CHK)",
    "Dragonlord Atarka (DTK)",
    "Dragonlord Dromoka (DTK)",
    "Dragonlord Kolaghan (DTK)",
    "Dragonlord Ojutai (DTK)",
    "Dragonlord Silumgar (DTK)",
    "Drakuseth, Maw of Flames (M20)",
    "Dralnu, Lich Lord (TSR)",
    "Drana, Kalastria Bloodchief (C17)",
    "Drana, Liberator of Malakir (JMP)",
    "Dromar, the Banisher (INV)",
    "Dromoka, the Eternal (C17)",
    "Dwynen, Gilt-Leaf Daen (KHC)",
    "Edgar Markov (C17)",
    "Edric, Spymaster of Trest (C16)",
    "Eight-and-a-Half-Tails (EMA)",
    "Eladamri, Lord of Leaves (TMP)",
    "Elenda, the Dusk Rose (RIX)",
    "Elesh Norn, Grand Cenobite (IMA)",
    "Emmara Tandris (C19)",
    "Emmara, Soul of the Accord (GRN)",
    "Empress Galina (INV)",
    "Emrakul, the Promised End (EMN)",
    "Endrek Sahr, Master Breeder (MM2)",
    "Ephara, God of the Polis (BNG)",
    "Erebos, God of the Dead (THS)",
    "Ertai, the Corrupted (PLS)",
    "Ertai, Wizard Adept (EXO)",
    "Estrid, the Masked (C18)",
    "Etali, Primal Storm (C21)",
    "Etrata, the Silencer (GK1)",
    "Evra, Halcyon Witness (MYS1)",
    "Exava, Rakdos Blood Witch (DGM)",
    "Experiment Kraj (DIS)",
    "Ezuri, Claw of Progress (C15)",
    "Ezuri, Renegade Leader (DDU)",
    "Fblthp, the Lost (TSR)",
    "Feather, the Redeemed (TSR)",
    "Feldon of the Third Path (C21)",
    "Firesong and Sunspeaker (DAR)",
    "Freyalise, Llanowar's Fury (C14)",
    "Fumiko the Lowblood (C20)",
    "Gaddock Teeg (LRW)",
    "Gahiji, Honored One (C13)",
    "Garna, the Bloodflame (C20)",
    "Garza Zol, Plague Queen (CSP)",
    "Geist of Saint Traft (2XM)",
    "General Jarkeld (ICE)",
    "General Tazri (OGW)",
    "Gerrard Capashen (DDE)",
    "Geth, Lord of the Vault (2XM)",
    "Ghalta, Primal Hunger (JMP)",
    "Ghave, Guru of Spores (C16)",
    "Ghost Council of Orzhova (MM2)",
    "Ghoulcaller Gisa (JMP)",
    "Gisa and Geralf (EMN)",
    "Gisela, Blade of Goldnight (C15)",
    "Gisela, the Broken Blade (EMN)",
    "Gishath, Sun's Avatar (XLN)",
    "Glissa Sunseeker (MRD)",
    "Glissa, the Traitor (MBS)",
    "God-Eternal Bontu (WAR)",
    "God-Eternal Kefnet (WAR)",
    "God-Eternal Oketra (WAR)",
    "God-Eternal Rhonas (WAR)",
    "Godo, Bandit Warlord (CHK)",
    "Golos, Tireless Pilgrim (M20)",
    "Gonti, Lord of Luxury (ZNC)",
    "Gorm the Great (BBD)",
    "Grand Arbiter Augustin IV (MMA)",
    "Grand Warlord Radha (DAR)",
    "Greel, Mind Raker (PCY)",
    "Grenzo, Dungeon Warden (CNS) 47",
    "Grenzo, Havoc Raiser (CN2)",
    "Grimgrin, Corpse-Born (ISD)",
    "Grothama, All-Devouring (BBD)",
    "Grunn, the Lonely King (DAR)",
    "Gwafa Hazid, Profiteer (BBD)",
    "Gwendlyn Di Corci (LEG)",
    "Gyrus, Waker of Corpses (C18)",
    "Halfdane (ME3)",
    "Hallar, the Firefletcher (DAR)",
    "Hanna, Ship's Navigator (2XM)",
    "Hapatra, Vizier of Poisons (AKH)",
    "Hazezon Tamar (LEG)",
    "Hazoret the Fervent (AKH)",
    "Heartless Hidetsugu (CNS)",
    "Heliod, God of the Sun (THS)",
    "Hisoka, Minamo Sensei (CHK)",
    "Hixus, Prison Warden (ORI)",
    "Hogaak, Arisen Necropolis (MH1)",
    "Hokori, Dust Drinker (BOK)",
    "Homura, Human Ascendant (SOK)",
    "Hope of Ghirapur (AER)",
    "Horde of Notions (MM2)",
    "Horobi, Death's Wail (CHK)",
    "Hua Tuo, Honored Physician (C13)",
    "Hythonia the Cruel (THS)",
    "Ib Halfheart, Goblin Tactician (EVG)",
    "Ikra Shidiqi, the Usurper (CMR)",
    "Ilharg, the Raze-Boar (WAR)",
    "Inalla, Archmage Ritualist (C17)",
    "Iname, Death Aspect (CHK)",
    "Infernal Kirin (SOK)",
    "Ink-Eyes, Servant of Oni (PC2)",
    "Intet, the Dreamer (C17)",
    "Iona, Shield of Emeria (MM2)",
    "Iroas, God of Victory (C16)",
    "Isamaru, Hound of Konda (JMP)",
    "Ishai, Ojutai Dragonspeaker (CMR)",
    "Ishkanah, Grafwidow (EMN)",
    "Isperia the Inscrutable (DIS)",
    "Isperia, Supreme Judge (C20)",
    "Ith, High Arcanist (TSR)",
    "Izoni, Thousand-Eyed (GK1)",
    "Jace, Vryn's Prodigy (ORI)",
    "Jalira, Master Polymorphist (M15)",
    "Jarad, Golgari Lich Lord (GK1)",
    "Jareth, Leonine Titan (C17)",
    "Jaya Ballard, Task Mage (TSR)",
    "Jazal Goldmane (C17)",
    "Jedit Ojanen of Efrava (C17)",
    "Jeleva, Nephalia's Scourge (C13)",
    "Jenara, Asura of War (ARB)",
    "Jeska, Warrior Adept (JUD)",
    "Jhoira of the Ghitu (TSR)",
    "Jhoira, Weatherlight Captain (2XM)",
    "Jin-Gitaxias, Core Augur (IMA)",
    "Jiwari, the Earth Aflame (SOK)",
    "Jodah, Archmage Eternal (DAR)",
    "Johan (CHR)",
    "Jolrael, Empress of Beasts (TSB)",
    "Jor Kadeen, the Prevailer (C21)",
    "Jori En, Ruin Diver (DDS)",
    "Josu Vess, Lich Knight (DAR)",
    "Judith, the Scourge Diva (RNA)",
    "Jugan, the Rising Star (IMA)",
    "Kaalia of the Vast (CMD)",
    "Kaalia, Zenith Seeker (M20)",
    "Kaervek the Merciless (TSR)",
    "Kagemaro, First to Suffer (SOK)",
    "Kaho, Minamo Historian (SOK)",
    "Kalemne, Disciple of Iroas (C15)",
    "Kalitas, Bloodchief of Ghet (ZEN)",
    "Kalitas, Traitor of Ghet (OGW)",
    "Kamahl, Fist of Krosa (ARC)",
    "Kamahl, Pit Fighter (DDS)",
    "Kambal, Consul of Allocation (KLD)",
    "Kami of the Crescent Moon (CN2)",
    "Kangee, Aerie Keeper (INV)",
    "Karador, Ghost Chieftain (CMR)",
    "Karametra, God of Harvests (CMR)",
    "Kari Zev, Skyship Raider (AER)",
    "Karlov of the Ghost Council (C15)",
    "Karn, Silver Golem (USG)",
    "Karona, False God (SCG)",
    "Karrthus, Tyrant of Jund (2XM)",
    "Kaseto, Orochi Archmage (C21)",
    "Kaysa (ALL)",
    "Kazarov, Sengir Pureblood (DAR)",
    "Kefnet the Mindful (AKH)",
    "Kemba, Kha Regent (2XM)",
    "Keranos, God of Storms (JOU)",
    "Kess, Dissident Mage (MH1)",
    "Kestia, the Cultivator (C18)",
    "Kethis, the Hidden Hand (M20)",
    "Khorvath Brightflame (BBD)",
    "Kiki-Jiki, Mirror Breaker (TSR)",
    "Kiku, Night's Flower (CHK)",
    "King Macar, the Gold-Cursed (JOU)",
    "Kira, Great Glass-Spinner (JMP)",
    "Kiyomaro, First to Stand (SOK)",
    "Kodama of the North Tree (CHK)",
    "Kodama of the South Tree (CHK)",
    "Kokusho, the Evening Star (IMA)",
    "Kolaghan, the Storm's Fury (C17)",
    "Konda, Lord of Eiganjo (CHK)",
    "Kongming, Sleeping Dragon (C13)",
    "Kopala, Warden of Waves (XLN)",
    "Kothophed, Soul Hoarder (ORI)",
    "Kozilek, Butcher of Truth (MM2)",
    "Kozilek, the Great Distortion (OGW)",
    "Kraum, Ludevic's Opus (CMR)",
    "Krav, the Unredeemed (BBD)",
    "Krenko, Mob Boss (JMP)",
    "Krenko, Tin Street Kingpin (WAR)",
    "Kresh the Bloodbraided (ALA)",
    "Krond the Dawn-Clad (PC2)",
    "Kruphix, God of Horizons (JOU)",
    "Kumano, Master Yamabushi (CHK)",
    "Kumena, Tyrant of Orazca (RIX)",
    "Kurkesh, Onakke Ancient (M15)",
    "Kwende, Pride of Femeref (DAR)",
    "Kydele, Chosen of Kruphix (CMR)",
    "Kykar, Wind's Fury (M20)",
    "Kynaios and Tiro of Meletis (C16)",
    "Kytheon, Hero of Akros (ORI)",
    "Lady Caleria (ME3)",
    "Lady Evangela (LEG)",
    "Lavinia of the Tenth (DGM)",
    "Lavinia, Azorius Renegade (TSR)",
    "Lazav, Dimir Mastermind (ZNC)",
    "Lazav, the Multifarious (GRN)",
    "Leovold, Emissary of Trest (CN2)",
    "Licia, Sanguine Tribune (C17)",
    "Liliana, Heretical Healer (ORI)",
    "Lim-Dul the Necromancer (TSP)",
    "Linvala, Keeper of Silence (JMP)",
    "Linvala, the Preserver (OGW)",
    "Livonya Silone (LEG)",
    "Lord of Tresserhorn (ALL)",
    "Lord Windgrace (C18)",
    "Lorthos, the Tidemaker (C14)",
    "Lovisa Coldeyes (DDS)",
    "Lu Xun, Scholar General (C13)",
    "Ludevic, Necro-Alchemist (CMR)",
    "Lyra Dawnbringer (DAR)",
    "Lyzolda, the Blood Witch (DIS)",
    "Maelstrom Wanderer (CMR)",
    "Maga, Traitor to Mortals (SOK)",
    "Mageta the Lion (PCY)",
    "Mairsil, the Pretender (C17)",
    "Malfegor (IMA)",
    "Mangara of Corondor (TSR)",
    "Mannichi, the Fevered Dream (BOK)",
    "Marath, Will of the Wild (CMR)",
    "Marchesa, the Black Rose (CNS) 49",
    "Marrow-Gnawer (CHK)",
    "Marton Stromgald (ICE)",
    "Marwyn, the Nurturer (KHC)",
    "Masako the Humorless (CHK)",
    "Massacre Girl (WAR)",
    "Masumaro, First to Live (SOK)",
    "Mathas, Fiend Seeker (C17)",
    "Mavren Fein, Dusk Apostle (XLN)",
    "Mayael the Anima (C13)",
    "Mazirek, Kraul Death Priest (2XM)",
    "Medomai the Ageless (THS)",
    "Melek, Izzet Paragon (C20)",
    "Melira, Sylvok Outcast (NPH)",
    "Memnarch (ARC)",
    "Meren of Clan Nel Toth (C15)",
    "Merieke Ri Berit (TSB)",
    "Michiko Konda, Truth Seeker (SOK)",
    "Mikaeus, the Lunarch (JMP)",
    "Mikaeus, the Unhallowed (DKA)",
    "Mina and Denn, Wildborn (ZNC)",
    "Mirko Vosk, Mind Drinker (GK1)",
    "Mirri the Cursed (TSR)",
    "Mirri, Cat Warrior (10E)",
    "Mirri, Weatherlight Duelist (C17)",
    "Mistform Ultimus (TSB)",
    "Mizzix of the Izmagnus (C15)",
    "Mogis, God of Slaughter (BNG)",
    "Molimo, Maro-Sorcerer (CMR)",
    "Momir Vig, Simic Visionary (DIS)",
    "Morophon, the Boundless (MH1)",
    "Mowu, Loyal Companion (WAR)",
    "Muldrotha, the Gravetide (CMR)",
    "Multani, Maro-Sorcerer (ULG)",
    "Multani, Yavimaya's Avatar (ZNC)",
    "Munda, Ambush Leader (BFZ)",
    "Muzzio, Visionary Architect (CNS) 23",
    "Naban, Dean of Iteration (DAR)",
    "Nahiri, the Lithomancer (C14)",
    "Najeela, the Blade-Blossom (CMR)",
    "Narset, Enlightened Master (KTK)",
    "Naru Meha, Master Wizard (C21)",
    "Nath of the Gilt-Leaf (C16)",
    "Nazahn, Revered Bladesmith (C17)",
    "Nebuchadnezzar (CHR)",
    "Nefarox, Overlord of Grixis (M13)",
    "Neheb, Dreadhorde Champion (WAR)",
    "Neheb, the Eternal (HOU)",
    "Neheb, the Worthy (AKH)",
    "Nekusar, the Mindrazer (CMR)",
    "Nemata, Grove Guardian (PLS)",
    "Niambi, Faithful Healer (DAR)",
    "Nicol Bolas (TSB)",
    "Nikya of the Old Ways (RNA)",
    "Nin, the Pain Artist (C17)",
    "Nissa, Vastwood Seer (ORI)",
    "Niv-Mizzet Reborn (WAR)",
    "Niv-Mizzet, Dracogenius (C17)",
    "Niv-Mizzet, Parun (GRN)",
    "Niv-Mizzet, the Firemind (C20)",
    "Norin the Wary (TSP)",
    "Noyan Dar, Roil Shaper (BFZ)",
    "Numot, the Devastator (CMD)",
    "Nylea, God of the Hunt (THS)",
    "O-Kagachi, Vengeful Kami (C17)",
    "Ob Nixilis of the Black Oath (C14)",
    "Ob Nixilis, the Fallen (IMA)",
    "Ob Nixilis, Unshackled (M15)",
    "Obzedat, Ghost Council (MM3)",
    "Odric, Lunarch Marshal (CMR)",
    "Odric, Master Tactician (C20)",
    "Ojutai, Soul of Winter (C17)",
    "Okaun, Eye of Chaos (BBD)",
    "Oketra the True (AKH)",
    "Olivia Voldaren (MM3)",
    "Olivia, Mobilized for War (SOI)",
    "Oloro, Ageless Ascetic (C13)",
    "Omnath, Locus of Mana (WWK)",
    "Omnath, Locus of Rage (ZNC)",
    "Omnath, Locus of the Roil (M20)",
    "Oona, Queen of the Fae (ZNC)",
    "Oros, the Avenger (CMD)",
    "Oviya Pashiri, Sage Lifecrafter (KLD)",
    "Oyobi, Who Split the Heavens (BOK)",
    "Padeem, Consul of Innovation (KLD)",
    "Palladia-Mors (CHR)",
    "Pashalik Mons (MH1)",
    "Patron of the Akki (BOK)",
    "Patron of the Kitsune (BOK)",
    "Patron of the Nezumi (CMD)",
    "Patron of the Orochi (BOK)",
    "Phage the Untouchable (CNS)",
    "Pharika, God of Affliction (JOU)",
    "Phelddagrif (ALL)",
    "Phenax, God of Deception (BNG)",
    "Pia and Kiran Nalaar (DDU)",
    "Pia Nalaar (C21)",
    "Pir, Imaginative Rascal (BBD)",
    "Polukranos, World Eater (THS)",
    "Prime Speaker Vannifar (RNA)",
    "Prime Speaker Zegana (C15)",
    "Progenitus (MMA)",
    "Prossh, Skyraider of Kher (CMR)",
    "Purphoros, God of the Forge (THS)",
    "Queen Marchesa (CMR)",
    "Radha, Heir to Keld (TSR)",
    "Radiant, Archangel (ULG)",
    "Raff Capashen, Ship's Mage (DAR)",
    "Rafiq of the Many (ALA)",
    "Ragnar (LEG)",
    "Rakdos the Defiler (DIS)",
    "Rakdos, Lord of Riots (CMR)",
    "Rakdos, the Showstopper (RNA)",
    "Rakka Mar (CON)",
    "Raksha Golden Cub (C17)",
    "Ramos, Dragon Engine (CMR)",
    "Ramses Overdark (ME3)",
    "Rashmi, Eternities Crafter (C20)",
    "Rasputin Dreamweaver (LEG)",
    "Ravos, Soultender (CMR)",
    "Rayne, Academy Chancellor (UDS)",
    "Razaketh, the Foulblooded (HOU)",
    "Razia, Boros Archangel (GK1)",
    "Reaper King (SHM)",
    "Regna, the Redeemer (BBD)",
    "Reya Dawnbringer (CNS)",
    "Reyhan, Last of the Abzan (CMR)",
    "Rhonas the Indomitable (AKH)",
    "Rhys the Exiled (KHC)",
    "Rhys the Redeemed (2XM)",
    "Rienne, Angel of Rebirth (M20)",
    "Riku of Two Reflections (2XM)",
    "Rishkar, Peema Renegade (JMP)",
    "Rith, the Awakener (DDE)",
    "Roalesk, Apex Hybrid (WAR)",
    "Rona, Disciple of Gix (DAR)",
    "Roon of the Hidden Realm (C13)",
    "Rorix Bladewing (EMA)",
    "Rosheen Meanderer (IMA)",
    "Rowan Kenrith (BBD)",
    "Rubinia Soulsinger (C13)",
    "Ruhan of the Fomori (CMD)",
    "Rune-Tail, Kitsune Ascendant (SOK)",
    "Ruric Thar, the Unbowed (DGM)",
    "Ryusei, the Falling Star (IMA)",
    "Sachi, Daughter of Seshiro (CHK)",
    "Saffi Eriksdotter (TSR)",
    "Saheeli, the Gifted (C18)",
    "Sakashima the Impostor (SOK)",
    "Sakiko, Mother of Summer (BOK)",
    "Samut, Voice of Dissent (AKH)",
    "Sapling of Colfenor (C21)",
    "Saskia the Unyielding (C16)",
    "Savra, Queen of the Golgari (GK1)",
    "Scion of the Ur-Dragon (C17)",
    "Sedris, the Traitor King (ALA)",
    "Sek'Kuar, Deathkeeper (C13)",
    "Sekki, Seasons' Guide (SOK)",
    "Selenia, Dark Angel (TMP)",
    "Selvala, Explorer Returned (CNS) 51",
    "Selvala, Heart of the Wilds (JMP)",
    "Sen Triplets (2XM)",
    "Sephara, Sky's Blade (M20)",
    "Seshiro the Anointed (CHK)",
    "Seton, Krosan Protector (ODY)",
    "Shalai, Voice of Plenty (DAR)",
    "Shanna, Sisay's Legacy (DAR)",
    "Sharuum the Hegemon (2XM)",
    "Shattergang Brothers (C13)",
    "Sheoldred, Whispering One (JMP)",
    "Shirei, Shizo's Caretaker (BOK)",
    "Shizuko, Caller of Autumn (BOK)",
    "Shu Yun, the Silent Tempest (FRF)",
    "Sidar Kondo of Jamuraa (CMR)",
    "Sidisi, Brood Tyrant (KTK)",
    "Sidisi, Undead Vizier (DTK)",
    "Sigarda, Heron's Grace (SOI)",
    "Sigarda, Host of Herons (AVR)",
    "Silas Renn, Seeker Adept (CMR)",
    "Silumgar, the Drifting Death (C17)",
    "Silvos, Rogue Elemental (EMA)",
    "Sisay, Weatherlight Captain (MH1)",
    "Sisters of Stone Death (GK1)",
    "Skeleton Ship (ICE)",
    "Skithiryx, the Blight Dragon (2XM)",
    "Skullbriar, the Walking Grave (CMD)",
    "Skyfire Kirin (SOK)",
    "Slimefoot, the Stowaway (TSR)",
    "Slinn Voda, the Rising Deep (CMR)",
    "Sliver Hivelord (M15)",
    "Sliver Legion (TSR)",
    "Sliver Overlord (SCG)",
    "Sliver Queen (STH)",
    "Slobad, Goblin Tinkerer (C16)",
    "Sol'kanar the Swamp King (TSB)",
    "Soramaro, First to Dream (SOK)",
    "Sosuke, Son of Seshiro (CHK)",
    "Spirit of the Night (MIR)",
    "Squee, the Immortal (DAR)",
    "Sram, Senior Edificer (TSR)",
    "Stangg (CHR)",
    "Starke of Rath (TMP)",
    "Stitcher Geralf (C14)",
    "Stonebrow, Krosan Hero (TSP)",
    "Storrev, Devkarin Lich (WAR)",
    "Sun Quan, Lord of Wu (PTK)",
    "Surrak Dragonclaw (KTK)",
    "Surrak, the Hunt Caller (DTK)",
    "Sydri, Galvanic Genius (C16)",
    "Sygg, River Cutthroat (ZNC)",
    "Sygg, River Guide (LRW)",
    "Sylvia Brightspear (BBD)",
    "Szadek, Lord of Secrets (GK1)",
    "Tahngarth, Talruum Hero (PLS)",
    "Taigam, Ojutai Master (C17)",
    "Taigam, Sidisi's Hand (C17)",
    "Tajic, Blade of the Legion (DGM)",
    "Tajic, Legion's Edge (GRN)",
    "Talrand, Sky Summoner (C21)",
    "Tana, the Bloodsower (CMR)",
    "Tariel, Reckoner of Souls (CMD)",
    "Tasigur, the Golden Fang (TSR)",
    "Tatyova, Benthic Druid (DAR)",
    "Tawnos, Urza's Apprentice (C18)",
    "Teferi, Mage of Zhalfir (TSR)",
    "Teferi, Temporal Archmage (C14)",
    "Temmet, Vizier of Naktamun (AKH)",
    "Teneb, the Harvester (C17)",
    "Teshar, Ancestor's Apostle (DAR)",
    "Tetsuko Umezawa, Fugitive (DAR)",
    "Tetsuo Umezawa (ME3)",
    "Tetzimoc, Primal Death (RIX)",
    "Teysa Karlov (RNA)",
    "Teysa, Envoy of Ghosts (C21)",
    "Teysa, Orzhov Scion (GPT)",
    "Thada Adel, Acquisitor (WWK)",
    "Thalia, Guardian of Thraben (DKA)",
    "Thalia, Heretic Cathar (EMN) 46",
    "Thantis, the Warweaver (C18)",
    "Thassa, God of the Sea (THS)",
    "The First Sliver (H1R)",
    "The Gitrog Monster (SOI)",
    "The Haunt of Hightower (RNA)",
    "The Locust God (C20)",
    "The Mimeoplasm (CMD)",
    "The Scarab God (2XM)",
    "The Scorpion God (HOU)",
    "The Ur-Dragon (C17)",
    "Thelon of Havenwood (TSR)",
    "Thrasios, Triton Hero (CMR)",
    "Thraximundar (C13)",
    "Thriss, Nantuko Primus (JUD)",
    "Thromok the Insatiable (PC2)",
    "Thrun, the Last Troll (MBS)",
    "Tiana, Ship's Caretaker (CMR)",
    "Tibor and Lumia (GK1)",
    "Tishana, Voice of Thunder (XLN)",
    "Titania, Protector of Argoth (C14)",
    "Tolsimir Wolfblood (GK1)",
    "Tolsimir, Friend to Wolves (WAR)",
    "Tomik, Distinguished Advokist (WAR)",
    "Tomorrow, Azami's Familiar (BOK)",
    "Toothy, Imaginary Friend (BBD)",
    "Tor Wauki (CHR)",
    "Torgaar, Famine Incarnate (GN2)",
    "Toshiro Umezawa (BOK)",
    "Traxos, Scourge of Kroog (DAR)",
    "Treva, the Renewer (DDE)",
    "Triad of Fates (THS)",
    "Tromokratis (CMR)",
    "Trostani Discordant (GRN)",
    "Trostani, Selesnya's Voice (C19)",
    "Tsabo Tavoc (INV)",
    "Tuknir Deathlock (ME3)",
    "Tuvasa the Sunlit (C18)",
    "Tymaret, the Murder King (THS)",
    "Tymna the Weaver (CMR)",
    "Ulamog, the Ceaseless Hunger (BFZ)",
    "Ulamog, the Infinite Gyre (MM2)",
    "Ulasht, the Hate Seed (GPT)",
    "Ulrich of the Krallenhorde (EMN)",
    "Unesh, Criosphinx Sovereign (HOU)",
    "Urabrask the Hidden (IMA)",
    "Urgoros, the Empty One (DAR)",
    "Uril, the Miststalker (ARB)",
    "Urza, Lord High Artificer (H1R)",
    "Uyo, Silent Prophet (C13)",
    "Vaevictis Asmadi (CHR)",
    "Valduk, Keeper of the Flame (DAR)",
    "Varchild, Betrayer of Kjeldor (C18)",
    "Varina, Lich Queen (C18)",
    "Varolz, the Scar-Striped (DGM)",
    "Vela the Night-Clad (PC2)",
    "Vendilion Clique (MM2)",
    "Venser, Shaper Savant (TSR)",
    "Verdeloth the Ancient (MMA)",
    "Verix Bladewing (DAR)",
    "Vhati il-Dal (TSB)",
    "Vial Smasher the Fierce (CMR)",
    "Vilis, Broker of Blood (M20)",
    "Virtus the Veiled (BBD)",
    "Visara the Dreadful (EMA)",
    "Vish Kal, Blood Arbiter (2XM)",
    "Volrath the Fallen (NMS)",
    "Vona, Butcher of Magan (XLN)",
    "Vorel of the Hull Clade (C16)",
    "Vorinclex, Voice of Hunger (IMA)",
    "Vorosh, the Hunter (CMD)",
    "Wasitora, Nekoru Queen (C17)",
    "Whisper, Blood Liturgist (DAR)",
    "Will Kenrith (BBD)",
    "Wort, Boggart Auntie (LRW)",
    "Wort, the Raidmother (C20)",
    "Wrexial, the Risen Deep (CMD)",
    "Wydwen, the Biting Gale (C20)",
    "Xantcha, Sleeper Agent (C18)",
    "Xenagos, God of Revels (CMR)",
    "Xiahou Dun, the One-Eyed (ME3)",
    "Xira Arien (CHR)",
    "Yahenni, Undying Partisan (AER)",
    "Yargle, Glutton of Urborg (DAR)",
    "Yarok, the Desecrated (M20)",
    "Yasova Dragonclaw (FRF)",
    "Yawgmoth, Thran Physician (TSR)",
    "Yennett, Cryptic Sovereign (C18)",
    "Yeva, Nature's Herald (DDU)",
    "Yidris, Maelstrom Wielder (C16)",
    "Yisan, the Wanderer Bard (M15)",
    "Yosei, the Morning Star (IMA)",
    "Yuan Shao, the Indecisive (PTK)",
    "Yuriko, the Tiger's Shadow (CMR)",
    "Zacama, Primal Calamity (RIX)",
    "Zada, Hedron Grinder (BFZ)",
    "Zedruu the Greathearted (CMR)",
    "Zegana, Utopian Speaker (GK2)",
    "Zetalpa, Primal Dawn (C21)",
    "Zhuge Jin, Wu Strategist (PTK)",
    "Zirilan of the Claw (MIR)",
    "Zndrsplt, Eye of Wisdom (BBD)",
    "Zo-Zu the Punisher (DDS)",
    "Zuberi, Golden Feather (MIR)",
    "Zur the Enchanter (CSP)",
    "Zurgo Helmsmasher (KTK)"
  ]
}

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      playgroups: data.playgroups,
      currentPlaygroup: 0,
      players: data.playgroups[0].players,
      page: 'playgroup',
      menuSelected: false,
      commanders: data.commanders
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePlaygroupSelect = this.handlePlaygroupSelect.bind(this);
  }
  handlePageChange(e) {
    e.preventDefault();
    const newState = this.state;
    newState.page = e.target.value;
    newState.menuSelected = false;
    this.setState(newState);
  }
  handlePlayersChange(name, portraitUrl, index) {
    const newState = this.state;

  }
  handlePlaygroupSelect(index) {
    const newState = this.state;
    newState.currentPlaygroup = index;
    newState.players = this.state.playgroups[this.state.currentPlaygroup].players;
    this.setState(newState);
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.banner}>
          <h1 className={styles.header}>The Score</h1>
          <button className="menubutton"></button>
        </div>
        {this.state.menuSelected === true &&
        <Menu changePage={this.handlePageChange} />
        }
        {this.state.page === 'playgroup' &&
        <Playgroup playgroups={this.state.playgroups} handlePlaygroupSelect={this.handlePlaygroupSelect} />
        }
        {this.state.page === 'player' &&
        <Player players={this.state.players} />
        }
        {this.state.page === 'game' &&
        <Game players={this.state.players} commanders={this.state.commanders} />
        }
        {this.state.page === 'stats' &&
        <Stats />
        }
      </div>
    )
  }
}


export default App;