sap.ui.define(
    ['./Base.controller', '../model/models', '../lib/L'],
    function (Base, models, L) {
        'use strict'

        return Base.extend(
            'example.ui5.functionalFunctional-UI5-Example.controller.Todo',
            {
                id: 1,

                onInit: function () {
                    const handler = models.getHandler()

                    const setTodosToModels = () =>
                        (models.Todos = handler.for('Todos'))

                    handler
                        .getModelPromise('Todos')
                        .then(console.log.bind(null, 'getModelPromise'))
                        .finally(setTodosToModels)

                    models.getTodosFromAPI().then(handler.setModel('Todos'))
                },

                onAddTodo: function () {
                    const description = models.Todo.prop('description')

                    if (models.validate.isEmptyString(description)) {
                        return
                    }

                    models.Todos.pushTo({
                        description,
                        id: this.id++,
                        checked: false,
                    })

                    models.Todos.applyTo(models.sendTodosToDB).then(console.log)

                    models.Todo.assignTo({ description: '' })
                },

                onRemoveTodo: function (e) {
                    const id = e.getSource().getCustomData()[0].getValue()

                    const equalId = L.propEq('id', id)

                    const notRemovedId = L.not(equalId)

                    const filteredTodos = models.Todos.filter(notRemovedId)

                    models.Todos.setData(filteredTodos)
                },
            },
        )
    },
)
