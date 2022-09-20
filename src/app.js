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

    /**
     * Operador Spread ->>> Espalhamento
     * Expandir valores de um array ou object dentro de outro
     */

    array = [1,2,3];
    new = [];

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

    onSpread(){
      this.new = [4,5,6,this.array];
      console.log(this.new);
      this.new = [4,5,6, ...this.array];
      console.log(this.new);
    }
}
