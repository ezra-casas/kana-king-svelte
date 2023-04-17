import { goto } from "$app/navigation"
import { selectedKanaGroup } from "../../stores"
import type { Writable } from "svelte/store";

export function handleCheckboxChange(event: MouseEvent, selectedKanaGroup: Writable<Array<string>>): void {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked;
    const group = inputElement.value;
  
    if (isChecked) {
      selectedKanaGroup.update((array: Array<string>) => [...array, group]);
    } else {
      selectedKanaGroup.update((groupArray: Array<string>) => groupArray.filter((x) => x !== group));
    }
  }
  
export function clearAll(e:Event){
    e.preventDefault()
    const checkboxes = document.querySelectorAll<HTMLInputElement>('.kana-selection:checked');
    Array.from(checkboxes).map((checkbox) => {
        checkbox.checked = false;
        return checkbox.value;
    });
    selectedKanaGroup.set([])
}
export function selectAll(e: Event) {
    e.preventDefault();
    const checkboxes = document.querySelectorAll<HTMLInputElement>('.kana-selection:not(:checked)');
    const selectedValues = Array.from(checkboxes).map((checkbox) => {
        checkbox.checked = true;
        return checkbox.value;
    });
    selectedKanaGroup.update((array) => [...array, ...selectedValues]);
}

export function toggleClassOnElements(selector: string, className: string, childSelector?: string){
    const elements = document.querySelectorAll(selector)
    elements.forEach(element => {
        element.classList.toggle(className);
        if(childSelector){
            const children = element.querySelectorAll(childSelector)
            children.forEach(child => {
                child.classList.toggle(className)
            })
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


export function randomizeKana(kanaGroupsToSelectFrom: string[], selectedValues:string[][], hiraganaArray: [key:string], katakanaArray: [key:string] ): string[] {
    let kanaGroup: string[] = [];

    while (kanaGroup.length < 10) {
        for (let i = 0; i < kanaGroupsToSelectFrom.length; i++) {
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