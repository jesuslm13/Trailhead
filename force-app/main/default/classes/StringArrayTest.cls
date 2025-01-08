/**
 * Created by 1184087 on 2021-11-08.
 */

public with sharing class StringArrayTest {

    public static final String prefix = 'Test ';

    public static List<String> generateStringArray(Integer n){

        List<String> strList = new List<String>();

        for(Integer i=0; i<n; i++){
            String str = prefix + String.valueOf(i);
            strList.add(str);
        }

        return strList;
    }
}