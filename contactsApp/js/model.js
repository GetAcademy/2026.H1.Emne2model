const model = {
    app: { // del 1 
        currentPage: 'registration', // eller: 'graph'
    },
    viewState: { // del 2
        list: { 
            search: '',
        },
        add: { 
            name: '',
            phone: '',
            email: '',
        },
        edit: { 
            name: '',
            phone: '',
            email: '',
        },
    },
    // del 3 - data
    contacts: [
        { id: 1, name: 'Terje', phone: '123', email: 'terje@ghjgh' },
        { id: 2, name: 'Per', phone: '123', email: 'per@ghjgh' },
        { id: 3, name: 'Pål', phone: '123', email: 'pål@ghjgh' },
    ],
}

function addContact() { // controller-funksjon på add-siden
    const newContact = {
        id: 4,
        name: model.viewState.add.name,
        phone: model.viewState.add.phone,
        email: model.viewState.add.email,
    };    
    model.viewState.add.name = '';
    model.viewState.add.phone = '';
    model.viewState.add.email = '';
    model.contacts.push(newContact);
    model.app.currentPage = 'list';
    updateView();
}

function updateView(){
    if(model.app.currentPage=='add'){
        updateViewAdd(); 
    } else if(model.app.currentPage=='edit'){
        updateViewEdit(); 
    } else {
        updateViewList();
    }
}


function updateViewAdd(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <h3>Add Contact</h3>

        <label>Name</label><br/>
        <input 
            oninput="model.viewState.add.name=this.value"
            value="${model.viewState.add.name}"
        />
    
    `;
}