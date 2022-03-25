/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const currentTag = document.createElement(tag);
        currentTag.innerHTML = content;
        document.body.append(currentTag);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    function generateDivTree(nodesCount, itterationLevel) {
        let div = document.createElement('div');
        div.className = `item_${itterationLevel}`;
        if (itterationLevel === level) return div;

        for (let i = 0; i < childrenCount; i++) {
            div.append(generateDivTree(childrenCount, itterationLevel + 1));
        }

        return div;
    }

    return generateDivTree(childrenCount, 1);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const tree = generateTree(2, 3);
    const elements = tree.getElementsByClassName('item_2');
    for (let e of elements) {
        let section = document.createElement('section');
        section.className = 'item_2';
        section.innerHTML = e.innerHTML;
        e.replaceWith(section);
    }

    return tree;
}
