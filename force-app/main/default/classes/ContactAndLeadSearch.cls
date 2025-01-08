/**
 * Created by E184087 on 2022-04-20-0020.
 */

public with sharing class ContactAndLeadSearch {
    public static List<List<sObject>> searchContactsAndLeads(String searchStr){
        List<List<sObject>> listRes = [
                FIND :searchStr
                IN Name FIELDS
                RETURNING Contact(firstName, LastName), Lead(firstName, LastName)
        ];

        return listRes;
    }
}