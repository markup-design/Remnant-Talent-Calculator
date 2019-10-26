import Icons from './Icons';

export const TalentList = {
	arcaneStrike: {
		increase: 2.5,
		effect: 'Increases Mod Power gained on Melee hits by {}.',
		name: 'Arcane Strike',
		obtained: 'Defeat the Ravager',
		points: 0,
		symbol: '%',
		icon: Icons.melee
	},
	endurance: {
		effect: 'Increases Max Stamina by {}.',
		name: 'Endurance',
		obtained: 'Default Trait',
		points: 0,
		increase: 2.5,
		icon: Icons.run
	},
	vigorMax: {
		effect: 'Increase Max Health by {}.',
		name: 'Vigor Max',
		obtained: 'Default Trait',
		points: 0,
		increase: 2.5,
		icon: Icons.plus
	},
	barkSkin: {
		points: 0,
		name: 'Bark Skin',
		effect: 'Increases Armor Effectiveness by {}',
		obtained: 'Obtain the Twisted Mask from the Mad Merchant in Junk Town. Equip it and speak to the Living Tree on Earth. Only one player can obtain this per playthrough.',
		increase: 1.25,
		symbol: '%',
		icon: Icons.shield
	},
	catalyst: {
		points: 0,
		name: 'Catalyst',
		effect: 'Increase Weapon effect Proc Chance by {}',
		obtained: 'Defeat The Thrall in Corsus - Musk Forge.',
		increase: 1,
		symbol: '%',
		icon: Icons.brightness7
	},
	coldAsIce: {
		points: 0,
		name: 'Cold as Ice',
		effect: 'Increases Backstab Damage by {}',
		obtained: 'Defeat your friends during the Brabus encounter.',
		increase: 1,
		symbol: '%',
		icon: Icons.dagger
	},
	elderKnowledge: {
		points: 0,
		name: 'Elder Knowledge',
		effect: 'Increases Experience Point Bonus by {}.',
		obtained: 'Play the tape recorder in the basement of Ward 13.',
		increase: 1.75,
		symbol: '%',
		icon: Icons.book
	},
	executioner: {
		points: 0,
		name: 'Executioner',
		effect: 'Increases Critical Hit Chance by {}.',
		obtained: 'Defeat Ixillis in Crosus.',
		increase: 1,
		symbol: '%',
		icon: Icons.critical
	},
	exploiter: {
		points: 0,
		name: 'Exploiter',
		effect: 'Increases Weak Spot Damage by {}.',
		obtained: 'Kill 150 enemies with Weak Spot Damage.',
		increase: 1.25,
		symbol: '%',
		icon: Icons.bullseye
	},
	glutton: {
		points: 0,
		name: 'Glutton',
		effect: 'Increase Consumable Use Speed by {}.',
		obtained: 'Defeat The Unclean One.',
		increase: 2.5,
		symbol: '%',
		icon: Icons.bread
	},
	gaurdiansBlessing: {
		points: 0,
		name: 'Guardian\'s Blessing',
		effect: 'Increase Melee Damage Reduction by {}.',
		obtained: 'Look in the "detailed descriptions" section for an explanation.',
		increase: 1,
		symbol: '%',
		icon: Icons.shieldPerson
	},
	handling: {
		points: 0,
		name: 'Handling',
		effect: 'Decreases Gun Spread and Recoil by {}.',
		obtained: 'Collect 10 Weapons.',
		increase: -1,
		symbol: '%',
		icon: Icons.target
	},
	keepersBlessing: {
		points: 0,
		name: 'Keeper\'s Blessing',
		effect: 'Increase Elemental Resistance by {}.',
		obtained: 'Find The Labyrinth or Help the Rebels on Yaesha.',
		increase: 1,
		symbol: '%',
		icon: Icons.shieldElement
	},
	kingslayer: {
		points: 0,
		name: 'Kingslayer',
		effect: 'Increase Critical Hit Damage by {}.',
		obtained: 'Defeat The Undying King in Rhom - Hall of The Undying.',
		increase: 2.5,
		symbol: '%',
		icon: Icons.targetPerson
	},
	mindsEye: {
		points: 0,
		name: 'Minds Eye',
		effect: 'Increases Ranged Damage by {}.',
		obtained: 'Defeat The Dreamer/Nightmare.',
		increase: 1.25,
		symbol: '%',
		icon: Icons.pistol
	},
	mothersBlessing: {
		points: 0,
		name: 'Mother\'s Blessing',
		effect: 'Ranged Damage Reduction by {}.',
		obtained: 'Defend the Root Mother.',
		increase: 1,
		symbol: '%',
		icon: Icons.shieldPlus
	},
	quickHands: {
		points: 0,
		name: 'Quick Hands',
		effect: 'Increases Weapon Reload Speed by {}.',
		obtained: 'Defeat the second Dungeon Boss.',
		increase: 1.5,
		symbol: '%',
		icon: Icons.hand
	},
	rapidStrike: {
		points: 0,
		name: 'Rapid Strike',
		effect: 'Increases Melee Attack Speed by {}.',
		obtained: 'Level a non-boss Melee weapon to 20.',
		increase: .75,
		symbol: '%',
		icon: Icons.speedometer
	},
	recovery: {
		points: 0,
		name: 'Recovery',
		effect: 'Increases the value of Stamina Regeneration and decreases its delay by {}.',
		obtained: 'Defeat Claviger in Rhom - The Spindle.',
		increase: 1.25,
		symbol: '%',
		icon: Icons.personRegen
	},
	revivalist: {
		points: 0,
		name: 'Revivalist',
		effect: 'Decrease Revive Speed by {}.',
		obtained: 'Revive your teammates.',
		increase: 5,
		symbol: '%',
		icon: Icons.personHeart
	},
	scavenger: {
		points: 0,
		name: 'Scavenger',
		effect: 'Increases Scrap Boost by {}.',
		obtained: 'Talk to Reggie until you run down all of his dialogue. Give him the Tarnished Ring which is obtained randomly on Earth.',
		increase: 2.5,
		symbol: '%',
		icon: Icons.collect
	},
	shadowWalker: {
		points: 0,
		name: 'Shadow Walker',
		effect: 'Reduces Enemy Awareness by {}.',
		obtained: 'Hunter Starting Trait or obtained by completing the Hunters Hideout event that can randomly spawn in the Hidden Grotto dungeon on Earth.',
		increase: 1.5,
		symbol: '%',
		icon: Icons.personShadow
	},
	sleightOfHand: {
		points: 0,
		name: 'Sleight of Hand',
		effect: 'Increase Weapon Swap Speed {}.',
		obtained: 'Get a 100 kills with 10 different guns (1,000 total kills, 100 on each gun).',
		increase: 2.5,
		symbol: '%',
		icon: Icons.hand
	},
	spirit: {
		points: 0,
		name: 'Spirit',
		effect: 'Increases Mod Power Generation by {}.',
		obtained: 'Ex-Cultist Starting Trait or obtained by completing the Supply Run event that can randomly spawn in Sorrows Field dungeon on Earth.',
		increase: 2.5,
		symbol: '%',
		icon: Icons.personRegen
	},
	swiftness: {
		points: 0,
		name: 'Swiftness',
		effect: 'Movement Speed Increased by {}',
		obtained: 'Go to the bell puzzle in Yaesha, and ring the bells with the following combination: 1-1-3-4-1-1-3-2 (left-most bell: 1, right-most bell: 5).',
		increase: 1,
		symbol: '%',
		icon: Icons.runFast
	},
	suspicion: {
		points: 0,
		name: 'Suspicion',
		effect: 'Reduced Friendly Fire Damage Taken by {}.',
		obtained: 'Be downed by your teammates 10 times.',
		increase: 1,
		symbol: '%',
		icon: Icons.shieldHome
	},
	teamwork: {
		points: 0,
		name: 'Teamwork',
		effect: 'Increases Teamwork Range by {}',
		obtained: 'Play in Multiplayer.',
		increase: 1,
		symbol: 'm',
		icon: Icons.team
	},
	triage: {
		points: 0,
		name: 'Triage',
		effect: 'Increase Health Regeneration Effectiveness by {}.',
		obtained: 'Obtained after speaking to Navun at Yaesha - Shrine of The Immortals.',
		increase: 5,
		symbol: '%',
		icon: Icons.potion
	},
	triggerHappy: {
		points: 0,
		name: 'Trigger Happy',
		effect: 'Increase Weapon Fire Rate {}.',
		obtained: 'Level a non-boss ranged weapon to 20.',
		increase: 1,
		symbol: '%',
		icon: Icons.handPointRight
	},
	warrior: {
		points: 0,
		name: 'Warrior',
		effect: 'Increases Melee Damage by {}.',
		obtained: 'Scrapper Starting Trait or obtained by completing the Tale of Two Lizs event that can randomly spawn in The Warren dungeon on Earth.',
		increase: 1.25,
		symbol: '%',
		icon: Icons.armFlex
	},
	willToLive: {
		points: 0,
		name: 'Will to Live',
		effect: 'Increases Health while wounded by {}.',
		obtained: 'Be Revived in Multiplayer.',
		increase: 5,
		symbol: '%',
		icon: Icons.will
	},
	worldWalker: {
		points: 0,
		name: 'World Walker',
		effect: 'Reduces Stamina Cost by {}.',
		obtained: 'Obtained when you first enter Rhom.',
		increase: -1,
		symbol: '%',
		icon: Icons.earth
	}
};

export default TalentList;
