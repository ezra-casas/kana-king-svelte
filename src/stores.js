import { writable } from "svelte/store";

export const selectedKanaGroup = writable([])
export const kanaQuiz = writable([])
export const answered = writable({
    "correctly": 0,
    "incorrectly": 0
}) 