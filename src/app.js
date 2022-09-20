import { LightningElement } from "lwc";

export default class App extends LightningElement {
    /**
     * Object com os campos do form (key)
     */
    inputs = {
      firstName: '',
      lastName: '',
      phone: ''
    };

    result;

    handleInputChange(event){
      // console.log("valor do campo: " + event.detail.value);
      // console.log("valor do atributo name do campo: " + event.target.name);

      let nameInput = event.target.name;
      let value = event.detail.value;

      //montando  o object com valores
      this.inputs = {
        ...this.inputs, [nameInput]:value
      };

      console.log(this.inputs);
    }

    handleOnClick(){
      this.result = `Nome: ${this.inputs.firstName} ${this.inputs.lastName}, Telefone: ${this.inputs.phone}`;
    }

    
}
