/* 
    Created on : 31/01/2019, 06:28:00 PM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
Vue.component('bootstrap-date-input', {
    props: [ 'value' ],
    template: `
    <input 
     id="datepicker" 
     v-bind:value="value"
     v-on:input="$emit('input', $event.target.value)"
    >
  `
});

var vue = new Vue({
    el: '#app',
    data: {
        fecha: '00/00/0000'
    },
});
