import recoil from "recoil" ;

export const countAtom = recoil.atom<number>({
    key: "countAtom",
    default: 0,
})