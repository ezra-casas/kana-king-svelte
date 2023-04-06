import { goto } from "$app/navigation"
import { selectedKanaGroup } from "../../stores"

export function clearAll(e:Event){
    e.preventDefault()

    const checkboxes = document.querySelectorAll("input")
    checkboxes.forEach(box => {
        box.checked = false
    })
    selectedKanaGroup.set([])
}

export function selectAll(e:Event){
    e.preventDefault()

    const checkboxes = document.querySelectorAll("input")
    checkboxes.forEach(box => {
        if(box.checked === false){
            box.checked = true
            selectedKanaGroup.update(array => [...array, box.value])
        }
    })
} 

export function handleBack(){
    selectedKanaGroup.set([])
    goto("/")
}

function getRandomIndex(max: number): number {
    return Math.floor(Math.random() * max)
}

export function print(str:Object){
    console.group(str)
}

export function addRandomKana(kanaKeys: string[], kanaValues: string[][], selectedKana: string[], selectedValues:string[][]): void {
    const randomIndex = getRandomIndex(kanaKeys.length)
    const selectedKey = kanaKeys[randomIndex]
    const selectedValue = kanaValues[randomIndex]

    selectedValues.push(selectedValue)
    selectedKana.push(selectedKey)
}


export function randomizeKana(kanaGroupsToSelectFrom, selectedValues:string[][], hiraganaArray, katakanaArray ): string[] {
    let kanaGroup: string[] = [];

    while (kanaGroup.length < 10) {
        for (let i: number = 0; i < kanaGroupsToSelectFrom.length; i++) {
            const group: string = kanaGroupsToSelectFrom[i];
            const groupFirstLetter: string = group[0];
            const isLessThanKanaGroup: boolean = kanaGroup.length < 10;

            if (groupFirstLetter === "h" && isLessThanKanaGroup) {
                const currentKeys: string[] = Object.keys(hiraganaArray[kanaGroupsToSelectFrom[i]]);
                const currentValues: string[][] = Object.values(hiraganaArray[kanaGroupsToSelectFrom[i]]);
                addRandomKana(currentKeys, currentValues, kanaGroup, selectedValues)
            }

            if (groupFirstLetter === "k" && isLessThanKanaGroup) {
                const currentKeys: string[] = Object.keys(katakanaArray[kanaGroupsToSelectFrom[i]]);
                const currentValues: string[][] = Object.values(katakanaArray[kanaGroupsToSelectFrom[i]]);
                addRandomKana(currentKeys, currentValues, kanaGroup, selectedValues)
            }
        }
    }
    return kanaGroup;
}

export function quizMe(kanaGroup: string[]): void {
    if (kanaGroup.length > 0) {
        goto('/quiz');
    } else {
        const isVisible = document.getElementById('no_groups');
        if (isVisible) {
        (isVisible as HTMLElement).style.visibility = 'visible';
        }
    }
}