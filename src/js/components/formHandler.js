
import _ from 'lodash/core';
export default function formHandler(options, callback) {
    let Privates = {};

    this.getData = () => {
        let formValues = {};

        _.each(Privates.call.fields, field => {
            formValues[field.name] = field.value
        })

        return formValues
    };

    this.sendData = event => {
        event.preventDefault();

        const data = this.getData();

        let response = fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((data) => {
            if (data.ok) callback();
            else console.log('heh kek error');
        })
    }
        
    Privates = options;
    Privates.call = {
        form: document.querySelector(Privates.form),
        fields: document.querySelectorAll(Privates.fields),
        url: Privates.url
    }
    
    Privates.call.form.addEventListener('submit', this.sendData)
}