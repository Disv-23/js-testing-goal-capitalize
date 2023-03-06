## Зачем и как писать тесы?
Какую главную задачу должны решать тесты? Этот вопрос невероятно важен. Ответ на него даёт понимание того, как правильно писать тесты и как писать их не нужно.

Представьте, что вы написали функцию capitalize(text), которая делает заглавной первую букву переданной строки:

    capitalize('hello'); // 'Hello'

Вот один из вариантов её реализации:

    const capitalize = (text) => {
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(1);
    return `${firstChar}${restSubstring}`;
    };