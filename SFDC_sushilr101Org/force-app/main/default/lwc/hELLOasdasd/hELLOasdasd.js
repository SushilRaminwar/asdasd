import { LightningElement, track } from 'lwc';
    export default class hELLOasdasd extends LightningElement {
        @track greeting = 'World';
        changeHandler(event) {
            this.greeting = event.target.value;
        }
        contacts = [
            {
                Id: '0032v00003JGjKIAA1',
                Name: 'asd qwe asdasd',
                Title: 'qwe',
                RecordTypeId: '0122v000002Gr7wAAC'
            }
        ];
    }