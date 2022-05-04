import { useReducer } from "react";
import { types } from "../types/types";

const useAttackReducer = (userPokemon, iaPokemon) => {
    const initialStateBattle = {
        battle: {
            userPokemon: userPokemon,
            iaPokemon: iaPokemon
        }
    }

    const attackReducer = (state, action) => {
        switch (action.type) {
            case types.ATTACK:
                if (action.payload.attacker === "user") {
                    return {
                        ...state,
                        battle: {
                            ...state.battle,
                            iaPokemon: {
                                ...state.battle.iaPokemon,
                                "name": action.payload.attacked.name,
                                "hp": action.payload.attacked.hp - action.payload.damage
                            }
                        }
                    }
                }
                if (action.payload.attacker === "ia") {
                    return {
                        ...state,
                        battle: {
                            ...state.battle,
                            userPokemon: {
                                ...state.battle.iaPokemon,
                                "name": action.payload.attacked.name,
                                "hp": action.payload.attacked.hp - action.payload.damage
                            }
                        }
                    }
                }
                break;
            default:
                return state;
        }
    }

    return useReducer(attackReducer, initialStateBattle);

}

export default useAttackReducer