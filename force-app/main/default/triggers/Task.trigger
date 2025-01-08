/**
 * @description       : 
 * @author            : sr.Oh
 * @group             : 
 * @last modified on  : 01-11-2022
 * @last modified by  : sr.Oh
**/
trigger Task on Task (before insert) {
    
    List<Task> listNew = (List<Task>)Trigger.new;
    Id taskowner = listNew.get(0).OwnerId;
    UserServicePresence presenceStatus;

    System.debug('listNew size :: ' + listNew.size());

    Map<Id, ServicePresenceStatus> mapAllStatus = new Map<Id, ServicePresenceStatus>([
        SELECT
            Id, IsDeleted, DeveloperName, Language, MasterLabel, CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, SystemModstamp
        FROM ServicePresenceStatus
    ]);

    List<UserServicePresence> listPresenceStatus = [
        SELECT
            Id, OwnerId, IsDeleted, Name, CurrencyIsoCode, CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, SystemModstamp, UserId, ServicePresenceStatusId, ServicePresenceStatus.DeveloperName, format(StatusStartDate), ConfiguredCapacity, format(StatusEndDate), IsAway, IdleDuration, AtCapacityDuration, AverageCapacity, IsCurrentState, StatusDuration
        FROM UserServicePresence
        WHERE IsCurrentState = true
        AND UserId = :taskowner
        ORDER BY CreatedDate DESC
    ];

    if(!listPresenceStatus.isEmpty()){
        presenceStatus = listPresenceStatus.get(0);

        if(presenceStatus.ServicePresenceStatus.DeveloperName != 'Busy'){
            presenceStatus.ServicePresenceStatusId = mapAllStatus.get(presenceStatus.ServicePresenceStatusId).Id;
        }
    }

    if(presenceStatus != null){
        update presenceStatus;
    }
}