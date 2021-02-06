sap.ui.define(['./validator', '../lib/L'], function (validator, L) {
    'use strict'

    let component

    return {
        Todo: undefined,

        validate: validator,

        init: function (comp) {
            this.Todo = L.model(comp).for('Todo')

            this.Todo.setData({ description: '' })

            component = comp
        },

        getHandler: function () {
            return L.model(component)
        },

        getTodosFromAPI: () =>
            new Promise(res => {
                setTimeout(() => {
                    res([
                        {
                            id: 0,
                            description: 'Do something with this data',
                            checked: false,
                        },
                        {
                            id: 1,
                            description: 'Another todo from the database',
                            checked: true,
                        },
                    ])
                }, 2000)
            }),

        sendTodosToDB: todos =>
            new Promise(res => {
                setTimeout(() => {
                    res({
                        status: 201,
                        package: JSON.stringify(todos),
                    })
                }, 2000)
            }),
    }
})
