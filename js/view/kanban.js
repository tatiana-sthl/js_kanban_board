import Column from "./column.js";

export default class Kanban {
    constructor(root) {
        this.root = root;

        Kanban.columns().forEach(column => {
            const columnView = new Column(column.id, column.title);

            this.root.appendChild(columnView.elements.root);
        });
    }

    static columns() {
        return [
            {
                id: 1,
                title: "At the beginning..."
            },
            {
                id: 2,
                title: "I'm doing it !"
            },
            {
                id: 3,
                title: "It's finally done."
            },
        ];
    }
}