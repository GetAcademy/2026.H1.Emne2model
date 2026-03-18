const model = {
    app: { // del 1 
        currentPage: 'registration', // eller: 'graph'
    },
    viewState: { // del 2
        registration: { // side for å registrere temperatur + dato
            temperature: '3',
            date: '',
        },
        graph: { // side for graf med filtrering
            fromDate: '',
            toDate: '',
        },
    },
    // del 3 - data
    temperatureRegistrations: [
        { id: 1, date: '2026-03-18', value: 1 },
        { id: 2, date: '2026-03-17', value: 0 },
        { id: 3, date: '2026-03-16', value: -1 },
    ],
}

function register() { // controller-funksjon på registreringssiden
    const newRegistration = {
        id: 4,
        date: model.viewState.registration.date,
        value: model.viewState.registration.temperature
    };    
    model.viewState.registration.date = '';
    model.viewState.registration.temperature = '';
    model.temperatureRegistrations.push(newRegistration);
    model.app.currentPage = 'graph';
    updateView();
}


function updateView(){
    if(model.app.currentPage=='registration'){
        updateViewRegistration(); // ligger i /js/registrationView.js - og importeres i en <script src="js/registrationView.js"></script>
    } else if(model.app.currentPage=='graph'){
        updateViewGraph(); // ligger i /js/graphView.js - og importeres i en <script src="js/graphView.js"></script>
    }
}

