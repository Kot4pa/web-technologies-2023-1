if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const data = {
        name: 'Каталог товаров',
        hasChildren: true,
        items: [
            {
                name: 'Мойки',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran1',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT1',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT2',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    },
                    {
                        name: 'Ulgran2',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT3',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT4',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            },{
                name: 'Фильтры',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran3',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT5',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT6',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            }
        ]
    }

    const items = new ListItems(document.getElementById('list-items'), data)


    items.render()
    items.init()

    function ListItems(el, data) {
        this.el = el;
        this.data = data;

        this.init = function () {
            const parents = this.el.querySelectorAll('[data-parent]')

            parents.forEach(parent => {
                const open = parent.querySelector('[data-open]')

                open.addEventListener('click', () => this.toggleItems(parent) )
            })
        }

        this.render = function () {
            this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data))
        }

        this.renderParent = function (data) {
            //проверка всех элементов на hasChildren
            //если hasChildren, то запускаем renderParent
            //если !hasChildren, то запускаем renderChildren
            //возвращает рендер родительского элемента
            let span = '<span>' + data.name + '</span>';
            let elParent = '<div class="list-item list-item_open" data-parent><div class="list-item__inner">';
            elParent += '<img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>' +
                '<img class="list-item__folder" src="img/folder.png" alt="folder">' + span + '</div>' +
            '<div class="list-item__items">';
            
            data.items.forEach(item => {
                if (item.hasChildren) 
                    elParent+= this.renderParent(item);
                else
                    elParent+= this.renderChildren(item.name);
            });
        }

        this.renderChildren = function (data) {
            //вовзращает рендер элемента без вложенности
            let span = '<span>' + data.name + '</span>';
            let elChild ='<div class="list-item__inner">' +
            '<img class="list-item__folder" src="img/folder.png" alt="folder">'+ span + '</div>';
            return elChild;
        }

        this.toggleItems = function (parent) {
            parent.classList.toggle('list-item_open')
        }

/*        this.renderTest = function (data) {
            return `
            <div class="test">${data.name}</div>
            `
        }*/
    }

}
