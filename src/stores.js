import { writable } from "svelte/store";
export const selectedKanaGroup = writable([]);
export const kanaQuiz = writable([]);
export const romajiAnswers = writable([]);
export const scores = writable({
    correctly: 0,
    incorrectly: 0
});
export const answered = writable({
    good: [],
    bad: []
});
export const number_of_questions = writable(10);
//# sourceMappingURL=stores.js.map