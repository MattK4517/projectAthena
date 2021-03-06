export const godsDict = {
    Achilles: "Solo",
    Agni: "Mid",
    "Ah Muzen Cab": "Carry",
    "Ah Puch": "Mid",
    Amaterasu: "Solo",
    Anhur: "Carry",
    Anubis: "Mid",
    "Ao Kuang": "Jungle",
    Aphrodite: "Mid",
    Apollo: "Carry",
    Arachne: "Jungle",
    Ares: "Support",
    Artemis: "Carry",
    Artio: "Support",
    Athena: "Support",
    Atlas: "Support",
    Awilix: "Jungle",
    "Baba Yaga": "Mid",
    Bacchus: "Supprt",
    Bakasura: "Jungle",
    "Baron Samedi": "Mid",
    Bastet: "Jungle",
    Bellona: "Solo",
    Cabrakan: "Support",
    Camazotz: "Jungle",
    Cerberus: "Support",
    Cernunnos: "Carry",
    Chaac: "Solo",
    "Chang'e": "Mid",
    Charybdis: "Carry",
    Chernobog: "Carry",
    Chiron: "Carry",
    Chronos: "Carry",
    Cliodhna: "Jungle",
    Cthulhu: "Support",
    "Cu Chulainn": "Solo",
    Cupid: "Carry",
    "Da Ji": "Jungle",
    Danzaburou: "Carry",
    Discordia: "Mid",
    "Erlang Shen": "Jungle",
    Eset: "Mid",
    Fafnir: "Support",
    Fenrir: "Jungle",
    Freya: "Carry",
    Ganesha: "Support",
    Geb: "Support",
    Gilgamesh: "Solo",
    "Guan Yu": "Solo",
    Hachiman: "Carry",
    Hades: "Mid",
    "He Bo": "Mid",
    Heimdallr: "Carry",
    Hel: "Mid",
    Hera: "Mid",
    Hercules: "Solo",
    Horus: "Support",
    "Hou Yi": "Carry",
    "Hun Batz": "Jungle",
    Izanami: "Carry",
    Janus: "Mid",
    "Jing Wei": "Carry",
    Jormungandr: "Solo",
    Kali: "Jungle",
    Khepri: "Support",
    "King Arthur": "Solo",
    Kukulkan: "Mid",
    Kumbhakarna: "Support",
    Kuzenbo: "Support",
    Loki: "Jungle",
    Medusa: "Carry",
    Mercury: "Jungle",
    Merlin: "Mid",
    "Morgan Le Fay": "Mid",
    Mulan: "Solo",
    "Ne Zha": "Jungle",
    Neith: "Carry",
    Nemesis: "Jungle",
    Nike: "Solo",
    Nox: "Mid",
    "Nu Wa": "Mid",
    Odin: "Solo",
    Olorun: "Carry",
    Osiris: "Solo",
    Pele: "Jungle",
    Persephone: "Mid",
    Poseidon: "Mid",
    Ra: "Mid",
    Raijin: "Mid",
    Rama: "Carry",
    Ratatoskr: "Jungle",
    Ravana: "Jungle",
    Scylla: "Mid",
    Serqet: "Jungle",
    Set: "Jungle",
    Shiva: "Solo",
    Skadi: "Carry",
    Sobek: "Support",
    Sol: "Carry",
    "Sun Wukong": "Solo",
    Susano: "Jungle",
    Sylvanus: "Support",
    Terra: "Support",
    Thanatos: "Jungle",
    "The Morrigan": "Mid",
    Thor: "Jungle",
    Thoth: "Mid",
    Tiamat: "Mid",
    Tsukuyomi: "Jungle",
    Tyr: "Solo",
    Ullr: "Carry",
    Vamana: "Solo",
    Vulcan: "Mid",
    Xbalanque: "Carry",
    "Xing Tian": "Support",
    "Yemoja": "Support",
    "Ymir": "Support",
    "Yu Huang": "Mid",
    "Zeus": "Mid",
    "Zhong Kui": "Solo",
    Warriors: "Solo",
    Mages: "Mid",
    Guardians: "Support",
    Hunters: "Carry",
    Assassin: "Jungle",
  };


export const singleStats ={
  kills:  0,
  deaths: 0,
  assists: 0,
  damagePlayer: 0,
  damageTaken:  0,
  damageMitigated: 0,
  healing: 0,
  healingSelf: 0,
  gold: 0,
  damageBot: 0,
  killsBot: 0,
  campsCleared: 0,
  towerKills: 0,
  phoenixKills: 0, 
  towerDamage: 0,
  objectiveAssists: 0,
  wardsPlaced: 0,
}

export interface Values {
  fields: string;
  items: string;
  enemy: string;
  role: string;
  patch: string;
  mode: string;
  queueType: string;
  rank: string;
}

