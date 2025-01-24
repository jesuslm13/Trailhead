/**
 * @description       : 
 * @author            : sr.Oh
 * @group             : 
 * @last modified on  : 01-24-2025
 * @last modified by  : sr.Oh
**/
import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {

    startCounter = 0;
    
    handleStartChange(event) {
      this.startCounter = parseInt(event.target.value);
    }

    handleMaximizeCounter() {
        this.template.querySelector('c-numerator').maximizeCounter();
    }
}