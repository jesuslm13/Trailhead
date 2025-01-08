/**
 * @description       : 
 * @author            : sr.Oh
 * @group             : 
 * @last modified on  : 01-11-2022
 * @last modified by  : sr.Oh
**/
({
    setBusy : function(cmp, evt, hlp) {
        console.log("### init setBusy ###");
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.setServicePresenceStatus({"statusId" : "0N55g00000007sgCAA"}).then(function(result) {
            console.log('Current statusId is: ' + result.statusId);
            console.log('Channel list attached to this status is: ' + result.channels); 
        }).catch(function(error) {
            console.log(error);
        });
    },

    setAvailable : function(cmp, evt, hlp) {
        console.log("### init setAvailable ###");
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.setServicePresenceStatus({"statusId" : "0N55g00000007sfCAA"}).then(function(result) {
            console.log('Current statusId is: ' + result.statusId);
            console.log('Channel list attached to this status is: ' + result.channels); 
        }).catch(function(error) {
            console.log(error);
        });
    },

})