// Import necessary Redux components
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Dynamic  from './components/Dynamic';

// Define initial state
const initialState = {
    fields: [],
    selectedFieldType: 'Select Field Type',
    fieldGenerated: false,
    dataType: 'Select',
    newField: {
        displayName: '',
        dataType: 'text',
        maxLength: '',
        mandatory: 'yes',
        fieldData: '',
        minDate: '',
        maxDate: '',
    },
    selectedProfile: 'Select',
};

// Define reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FIELD':
            return {
                ...state,
                fields: [...state.fields, action.payload],
            };
        case 'SET_FIELD_GENERATED':
            return {
                ...state,
                fieldGenerated: action.payload,
            };
        // Add more cases as needed
        default:
            return state;
    }
};

// Create Redux store
const store = createStore(reducer);

// Wrap your main component with Provider to make Redux store available to all components
export const App = () => (
    <Provider store={store}>
        <Dynamic />
    </Provider>
);
export default App;