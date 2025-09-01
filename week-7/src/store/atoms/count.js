import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
});

export const oddSelector = selector({
    key : "oddSelector",
    get : ({get,  set }) => {
        const count = get(countAtom) ;
        
        return count  ;
    }
})
// Todo creation application with filtering logic
// todos, filter