/**
 * @description       : 
 * @author            : sr.Oh
 * @group             : 
 * @last modified on  : 01-24-2025
 * @last modified by  : sr.Oh
**/
import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {

    @api label;
    @api icon;
    handleButton(event) {
      this.dispatchEvent(new CustomEvent('buttonclick',{
        bubbles: true
      }));
    }
}