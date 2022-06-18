export default class KanbanAPI {
    static getItems(columnId) {
        const column = read().find(column => column.id == columnId);
    }
}

function read() {
    const json = localStorage.getItem("kanban-data");

    if (!json) {
        return [
            {
                id: 1, 
                items: []
            },
            {
                id: 2, 
                items: []
            },
            {
                id: 3, 
                items: []
            },
        ];
    }

    return JSON.parse(json);
}

function save(data) {
    localStorage.setItem("kanban-data", JSON.stringify(data));
}