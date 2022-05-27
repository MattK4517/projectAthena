import React, { useState, createContext, useEffect } from "react";

export const MainContext = createContext<any[]>([]);

export const MainProvider = (props: any) => {
  const [god, setGod] = useState<string[]>([]);
  const [attribute, setAttribute] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const [role, setRole] = useState<string[]>([]);
  const [rank, setRank] = useState("All Ranks");
  const [patch, setPatch] = useState<string[]>([]);
  const [queueType, setQueueType] = useState("Ranked");
  const [mode, setMode] = useState<string[]>([]);
  const [matchup, setMatchup] = useState<string[]>([]);
  const [skin, setSkin] = useState("None");
  const patches = ["9.5", "9.4", "9.3", "9.2", "9.1"];
  const queueTypes = ["Casual", "Ranked"];
  const modes = ["Joust", "Conquest", "Duel", "Assault", "Slash", "Arena"];
  const ranks = [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Platinum+",
    "Diamond",
    "Diamond+",
    "Masters",
    "Grandmaster",
    "All Ranks",
  ];
  const roles = ["Solo", "Jungle", "Mid", "Support", "Carry"];

  return (
    <MainContext.Provider
      value={[
        god,
        setGod,
        role,
        setRole,
        rank,
        setRank,
        patch,
        setPatch,
        queueType,
        setQueueType,
        mode,
        setMode,
        matchup,
        setMatchup,
        patches,
        queueTypes,
        modes,
        ranks,
        roles,
        skin,
        setSkin,
        attribute,
        setAttribute,
        items,
        setItems,
      ]}
    >
      {props.children}
    </MainContext.Provider>
  );
};
