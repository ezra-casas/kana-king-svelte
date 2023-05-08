import { goto } from "$app/navigation";
import { selectedKanaGroup } from "../../stores";
export function handleCheckboxChange(event, selectedKanaGroup) {
    const inputElement = event.target;
    const isChecked = inputElement.checked;
    const group = inputElement.value;
    if (isChecked) {
        selectedKanaGroup.update((array) => [...array, group]);
    }
    else {
        selectedKanaGroup.update((groupArray) => groupArray.filter((x) => x !== group));
    }
}
export function clearAll(e) {
    e.preventDefault();
    const checkboxes = document.querySelectorAll('.kana-selection:checked');
    Array.from(checkboxes).map((checkbox) => {
        checkbox.checked = false;
        return checkbox.value;
    });
    selectedKanaGroup.set([]);
}
export function selectAll(e, selectedKanaGroup) {
    e.preventDefault();
    const checkboxes = document.querySelectorAll('.kana-selection:not(:checked)');
    const selectedValues = Array.from(checkboxes)
        .filter((checkbox) => checkbox.type === 'checkbox')
        .map((checkbox) => {
        checkbox.checked = true;
        return checkbox.value;
    });
    selectedKanaGroup.update((array) => [...array, ...selectedValues]);
}
export function toggleClassOnElements(selector, className, childSelector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.classList.toggle(className);
        if (childSelector) {
            const children = element.querySelectorAll(childSelector);
            children.forEach(child => {
                child.classList.toggle(className);
            });
        }
    });
}
export function handleBack() {
    selectedKanaGroup.set([]);
    goto("/");
}
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
export function print(str) {
    console.log(str);
}
export function addRandomKana(kanaKeys, kanaValues, selectedKana, selectedValues) {
    const randomIndex = getRandomIndex(kanaKeys.length);
    const selectedKey = kanaKeys[randomIndex];
    const selectedValue = kanaValues[randomIndex];
    selectedValues.push(selectedValue);
    selectedKana.push(selectedKey);
}
export function randomizeKana(kanaGroupsToSelectFrom, selectedValues, hiraganaArray, katakanaArray) {
    let kanaGroup = [];
    try {
        while (kanaGroup.length < 10) {
            let groupFound = false;
            for (let i = 0; i < kanaGroupsToSelectFrom.length; i++) {
                const kanaGroupToSelectFrom = kanaGroupsToSelectFrom[i];
                const groupFirstLetter = kanaGroupToSelectFrom[0];
                const isLessThanKanaGroup = kanaGroup.length < 10;
                if (groupFirstLetter === "h" && isLessThanKanaGroup) {
                    const currentKanaKeys = Object.keys(hiraganaArray[kanaGroupsToSelectFrom[i]]);
                    const currentKanaValues = Object.values(hiraganaArray[kanaGroupsToSelectFrom[i]]);
                    addRandomKana(currentKanaKeys, currentKanaValues, kanaGroup, selectedValues);
                    groupFound = true;
                }
                if (groupFirstLetter === "k" && isLessThanKanaGroup) {
                    const currentKanaKeys = Object.keys(katakanaArray[kanaGroupsToSelectFrom[i]]);
                    const currentKanaValues = Object.values(katakanaArray[kanaGroupsToSelectFrom[i]]);
                    addRandomKana(currentKanaKeys, currentKanaValues, kanaGroup, selectedValues);
                    groupFound = true;
                }
            }
            if (!groupFound) {
                throw new Error('Could not find suitable kana groups to select from');
            }
        }
    }
    catch (error) {
        console.error('An error occurred while randomizing kana:', error);
        return [];
    }
    return kanaGroup;
}
export function quizMe(kanaGroup) {
    if (kanaGroup.length > 0) {
        goto('/quiz');
    }
    else {
        const isVisible = document.getElementById('no_groups');
        if (isVisible) {
            isVisible.style.visibility = 'visible';
        }
    }
}
//# sourceMappingURL=helpersFunctions.js.map