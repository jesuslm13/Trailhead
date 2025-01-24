/**
 * @description       : 
 * @author            : sr.Oh
 * @group             : 
 * @last modified on  : 01-24-2025
 * @last modified by  : sr.Oh
**/
import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {

    factors = [0,2,3,4,5,6];

    handleAdd() {
        this.dispatchEvent(new CustomEvent('add'));
    }
    
    handleSubtract() {
        this.dispatchEvent(new CustomEvent('subtract'));
    }

    handleMultiply(event) {
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('multiply', {
          detail: factor
        }));
      }
}